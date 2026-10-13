import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); }
catch { ({ chromium } = require('/Users/amyargotti/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright')); }
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const browser = await chromium.launch({ headless: true, channel: 'chrome' });
try {
  if (process.argv.includes('--capture-projects')) {
    await mkdir(path.join(root, 'assets/projects'), { recursive: true });
    for (const [name, url] of [['moonlit', 'https://amyargotti.github.io/Moonlit-Shelf/'], ['chefsito', 'https://amyargotti.github.io/chefsito-portfolio/']]) {
      const page = await browser.newPage({ viewport: { width: 1200, height: 750 }, deviceScaleFactor: 1 });
      await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
      await page.screenshot({ path: path.join(root, 'assets/projects', name + '.png') });
      await page.close();
      console.log('Captured actual project:', name);
    }
  } else {
    const out = '/tmp/amanda-portfolio-check';
    await mkdir(out, { recursive: true });
    for (const viewport of [{width:1440,height:1000},{width:390,height:844}]) {
      const page = await browser.newPage({ viewport });
      const errors = [];
      page.on('pageerror', (error) => errors.push(error.message));
      await page.goto(pathToFileURL(path.join(root, 'index.html')).href);
      for (const lang of ['en','es','ru']) {
        await page.locator('[data-lang="' + lang + '"]').click();
        assert.equal(await page.locator('html').getAttribute('lang'), lang);
        assert.equal(await page.locator('[data-lang="' + lang + '"]').getAttribute('aria-pressed'), 'true');
        assert.equal(await page.locator('.project-card').count(), 4);
        for (const theme of ['light','dark']) {
          await page.evaluate((value) => { document.documentElement.dataset.theme = value; }, theme);
          await page.locator('#projects').scrollIntoViewIfNeeded();
          await page.waitForFunction(() => document.querySelector('[data-header]').classList.contains('scrolled'));
          assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, lang + ' overflow');
          await page.screenshot({path:path.join(out, viewport.width + '-' + lang + '-' + theme + '-projects.png'), animations:'disabled'});
          const contrast = await page.evaluate(() => {
            const rgba = (value) => { const values = value.match(/[\d.]+/g).map(Number); if (value.startsWith('color(srgb')) values.splice(0,3,...values.slice(0,3).map((v)=>v*255)); return values; };
            const blend = (fg, bg) => fg.slice(0,3).map((v,i) => v * (fg[3] ?? 1) + bg[i] * (1 - (fg[3] ?? 1)));
            const luminance = (rgb) => rgb.map((v) => { const s = v / 255; return s <= .04045 ? s / 12.92 : ((s + .055) / 1.055) ** 2.4; }).reduce((sum,v,i) => sum + v * [.2126,.7152,.0722][i],0);
            return [...document.querySelectorAll('.project-card p, .project-card .text-button, .qualification-meta, .contact-panel .button, .site-header a')].filter((node) => node.getBoundingClientRect().width).map((node) => {
              const layers = []; let ancestor = node;
              while (ancestor) { layers.push(rgba(getComputedStyle(ancestor).backgroundColor)); ancestor = ancestor.parentElement; }
              let bg = [255,255,255]; layers.reverse().forEach((layer) => { bg = blend(layer,bg); });
              const fg = blend(rgba(getComputedStyle(node).color), bg);
              const [a,b] = [luminance(fg),luminance(bg)].sort((x,y)=>y-x);
              return {text:node.textContent.slice(0,40),ratio:(a+.05)/(b+.05)};
            });
          });
          assert.ok(contrast.every((item) => item.ratio >= 4.5), JSON.stringify(contrast.filter((item)=>item.ratio<4.5)));
          await page.evaluate(() => window.scrollTo({top:0,behavior:'instant'}));
          await page.waitForFunction(() => !document.querySelector('[data-header]').classList.contains('scrolled'));
          await page.screenshot({path:path.join(out, viewport.width + '-' + lang + '-' + theme + '.png'),fullPage:true,animations:'disabled'});
        }
        await page.locator('[data-filter="web"]').click();
        assert.equal(await page.locator('.project-card:visible').count(), 2);
        await page.locator('[data-filter="ai"]').click();
        assert.equal(await page.locator('.project-card:visible').count(), 1);
        await page.locator('[data-project-open="juanito"]').click();
        assert.equal(await page.locator('dialog').evaluate((node) => node.open), true);
        await page.keyboard.press('Escape');
        assert.equal(await page.locator('dialog').evaluate((node) => node.open), false);
        await page.locator('[data-filter="all"]').click();
        for (const mode of ['academic','job']) {
          await page.locator('[name="cv-mode"][value="' + mode + '"]').check();
          const href = await page.locator('[data-primary-cv]').first().getAttribute('href');
          assert.ok(href.includes((mode === 'academic' ? 'Academic_CV_' : 'CV_') + lang.toUpperCase()));
          for (const link of await page.locator('[data-cv-downloads] a').all()) {
            const file = (await link.getAttribute('href')).split('?')[0];
            assert.ok((await readFile(path.join(root,file))).subarray(0,5).toString() === '%PDF-');
          }
        }
      }
      await page.reload();
      assert.equal(await page.locator('html').getAttribute('lang'), 'ru');
      assert.ok(['light', 'dark'].includes(await page.locator('html').getAttribute('data-theme')));
      await page.evaluate(() => { document.documentElement.dataset.theme = 'light'; });
      await page.locator('[data-theme-toggle]').click();
      await page.reload();
      assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
      const images = await page.locator('img').evaluateAll((nodes) => nodes.filter((n) => n.complete && n.naturalWidth === 0).map((n) => n.src));
      assert.deepEqual(images, [], 'broken images');
      assert.deepEqual(errors, []);
      console.log('Passed desktop/mobile interactions:', viewport.width);
      await page.close();
    }
  }
} finally { await browser.close(); }
