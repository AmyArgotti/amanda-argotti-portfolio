const header = document.querySelector("[data-header]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card");
const dialog = document.querySelector("[data-dialog]");
const dialogOpen = document.querySelector("[data-project-open]");
const dialogClose = document.querySelector("[data-dialog-close]");
const printButton = document.querySelector("[data-print]");
const timelineButtons = document.querySelectorAll("[data-focus]");

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
};

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) {
  applyTheme(savedTheme);
}

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 24);
});

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    projectCards.forEach((card) => {
      const isVisible = filter === "all" || card.dataset.tags.includes(filter);
      card.classList.toggle("is-hidden", !isVisible);
    });
  });
});

timelineButtons.forEach((button) => {
  button.addEventListener("click", () => {
    timelineButtons.forEach((item) => item.classList.toggle("active", item === button));
  });
});

dialogOpen.addEventListener("click", () => {
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  }
});

dialogClose.addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

printButton.addEventListener("click", () => {
  window.print();
});
