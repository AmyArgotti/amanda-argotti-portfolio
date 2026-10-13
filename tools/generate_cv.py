"""Generate the website content bundle and both CV editions from content.json."""
import json
from html import escape
from pathlib import Path
from shutil import copyfile

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import HRFlowable, KeepTogether, PageBreak, Paragraph, SimpleDocTemplate

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "documents"
INK = colors.HexColor("#202825")
ROSE = colors.HexColor("#85464c")
MUTED = colors.HexColor("#526259")


def plain(text):
    return escape(text.replace("–", "-").replace("—", "-"))


def build(lang, data, links, academic=False):
    styles = {
        "name": ParagraphStyle("name", fontName="CVBold", fontSize=23, leading=26, textColor=INK, spaceAfter=4),
        "role": ParagraphStyle("role", fontName="CVBold", fontSize=10, leading=13, textColor=ROSE, spaceAfter=5),
        "body": ParagraphStyle("body", fontName="CV", fontSize=9, leading=11.6, textColor=INK, spaceAfter=3),
        "meta": ParagraphStyle("meta", fontName="CV", fontSize=8, leading=10, textColor=MUTED, spaceAfter=3),
        "title": ParagraphStyle("title", fontName="CVBold", fontSize=9.5, leading=12, textColor=INK, spaceAfter=2),
        "section": ParagraphStyle("section", fontName="CVBold", fontSize=10, leading=13, textColor=ROSE, spaceBefore=8, spaceAfter=4, keepWithNext=True),
    }
    def p(text, kind="body"):
        return Paragraph(plain(text), styles[kind])

    def section(key):
        story.append(p(data["ui"][key], "section"))

    name = f"Amanda_Argotti_{'Academic_CV' if academic else 'CV'}_{lang.upper()}.pdf"
    doc = SimpleDocTemplate(str(OUT / name), pagesize=A4, leftMargin=15*mm, rightMargin=15*mm,
                            topMargin=12*mm, bottomMargin=12*mm,
                            title=f"Amanda Argotti - {data['ui']['academic' if academic else 'job']} - {lang.upper()}",
                            author="Amanda Argotti")
    story = [p("Amanda Argotti", "name"), p(data["role"], "role"), p(data["location"], "meta"),
             Paragraph('amandaargotti@gmail.com · +593 95 903 3244<br/>'
                       '<link href="https://amyargotti.github.io/amanda-argotti-portfolio/" color="#85464c">Portfolio</link> · '
                       '<link href="https://github.com/AmyArgotti" color="#85464c">github.com/AmyArgotti</link> · '
                       '<link href="https://www.linkedin.com/in/amanda-argotti" color="#85464c">linkedin.com/in/amanda-argotti</link>',
                       styles["meta"]),
             HRFlowable(width="100%", thickness=0.8, color=ROSE, spaceAfter=6)]
    section("profile")
    story.append(p(data["summary"]))
    section("experience")
    for item in data["experience"]:
        story.append(KeepTogether([p(item["title"], "title"), p(item["meta"], "meta"),
                                   *[p("• " + point) for point in item["points"][:1]]]))
    section("skills")
    for title, values in data["skills"]:
        story.append(Paragraph(f"<b>{plain(title)}:</b> {plain(values)}", styles["body"]))
    section("projects")
    for project in data["projects"][:3]:
        url = links[project["id"]]["repository"]
        story.append(KeepTogether([p(project["title"], "title"),
            Paragraph(f'{plain(project["meta"])} · <link href="{url}" color="#85464c">{url.removeprefix("https://")}</link>', styles["meta"]),
            p(project["cv"])]))
    section("education")
    for item in data["qualifications"]:
        story.append(KeepTogether([p(item["title"], "title"), p(item["meta"], "meta")]))
    story.append(p(data["ui"]["native"], "meta"))
    if academic:
        story.append(PageBreak())
        story.append(p("Amanda Argotti", "name"))
        section("academic")
        story.extend([p(data["thesis"], "title"), p(data["projects"][0]["copy"]),
                      p(data["projects"][0]["contribution"]), p(data["projects"][0]["decisions"])])
        section("education")
        for item in data["qualifications"]:
            story.append(KeepTogether([p(item["title"], "title"), p(item["meta"], "meta"), p(item["copy"])]))
        section("research")
        story.append(p(data["research"]))
        section("conference")
        story.append(p(data["conference"]))
        section("projects")
        story.extend([p(data["projects"][3]["title"], "title"), p(data["projects"][3]["cv"])])
    doc.build(story)
    return OUT / name


def main():
    pdfmetrics.registerFont(TTFont("CV", "/System/Library/Fonts/Supplemental/Arial.ttf"))
    pdfmetrics.registerFont(TTFont("CVBold", "/System/Library/Fonts/Supplemental/Arial Bold.ttf"))
    pdfmetrics.registerFontFamily("CV", normal="CV", bold="CVBold")
    data = json.loads((ROOT / "content.json").read_text())
    OUT.mkdir(parents=True, exist_ok=True)
    # A script bundle also works when the static website is opened via file://.
    (ROOT / "content-data.js").write_text("window.portfolioContent = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n")
    for lang in ("en", "es", "ru"):
        for academic in (False, True):
            print(build(lang, data[lang], data["projectLinks"], academic))
    copyfile(OUT / "Amanda_Argotti_CV_EN.pdf", OUT / "Amanda_Argotti_CV.pdf")


if __name__ == "__main__":
    main()
