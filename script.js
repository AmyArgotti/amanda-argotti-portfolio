const header = document.querySelector("[data-header]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card");
const dialog = document.querySelector("[data-dialog]");
const dialogOpen = document.querySelector("[data-project-open]");
const dialogClose = document.querySelector("[data-dialog-close]");
const timelineButtons = document.querySelectorAll("[data-focus]");
const languageButtons = document.querySelectorAll("[data-lang]");

const translations = {
  en: {
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "hero.eyebrow": "Software Engineering Student · AI Developer · Multilingual Builder",
    "hero.lede":
      "I build practical AI-powered educational systems with LLMs, RAG, NLP, and Python backend architecture, with a focus on language learning and human-centered AI.",
    "hero.projects": "View Projects",
    "hero.resume": "Resume PDF",
    "hero.languages": "Spanish · English · Russian",
    "hero.open": "Open to jobs, internships, and scholarships",
    "profile.kicker": "Profile",
    "profile.title": "A technical CV with an academic signal.",
    "profile.copy":
      "I am a Software Engineering student at Kazan Federal University working at the intersection of AI, software systems, and education. My strongest application angle is multilingual AI: building systems that can explain, adapt, speak, remember, and support learning across languages.",
    "fit.copy":
      "Multilingual software engineer building practical AI-powered educational systems using LLMs, NLP, and personalized learning architectures.",
    "projects.kicker": "Selected Work",
    "projects.title": "Projects built around real learning problems.",
    "filter.all": "All",
    "filter.backend": "Backend",
    "filter.mobile": "Mobile",
    "filter.academic": "Academic",
    "filter.teaching": "Teaching",
    "juanito.title": "Juanito — AI Assistant for Learning Spanish",
    "juanito.copy":
      "An intelligent Spanish-learning assistant for Russian-speaking users, integrating local LLM inference, contextual translation, personalized vocabulary, quizzes, speech practice, reminders, progress tracking, and RAG-based adaptation.",
    "projects.architecture": "Explore architecture",
    "projects.github": "GitHub repository",
    "expense.title": "Expense Tracker — Flutter Finance App",
    "expense.copy":
      "A Flutter mobile application for tracking income and expenses with SQLite persistence, MVVM architecture, adaptive navigation, receipt photos, geolocation, notifications, biometric protection, and a service-style sync demo.",
    "loyalty.title": "Restaurant Loyalty System",
    "loyalty.copy":
      "Digital loyalty management system for customer tracking, point management, data workflows, and backend business logic.",
    "coursework.title": "Java, Vue & Web Engineering Coursework",
    "coursework.copy":
      "Public academic repositories showing steady software engineering practice across Java labs, calculator implementations, semester projects, Vue work, HTML/CSS exercises, and JavaScript project files.",
    "projects.repos": "View repositories",
    "tutoring.title": "Informatics Tutoring & Technical Assistance",
    "tutoring.copy":
      "Technical support and programming assistance for university-level informatics, Python, databases, algorithms, debugging, and software development exercises.",
    "github.kicker": "GitHub Signal",
    "github.title": "Public work shows AI, mobile, backend, and academic growth.",
    "github.repos": "15 public repositories",
    "github.recent": "Most recent public work: March 2026",
    "github.open": "Open GitHub",
    "skills.kicker": "Technical Skills",
    "skills.title": "Modern AI work, grounded in software engineering.",
    "skills.copy":
      "The site highlights both research direction and implementation ability: important for jobs, internships, scholarships, and master's applications.",
    "skills.programming": "Programming",
    "skills.ai": "AI / ML",
    "skills.backend": "Backend",
    "skills.tools": "Tools",
    "education.kicker": "Education & Research",
    "education.degree": "Bachelor's Degree in Software Engineering · 2022-2026 · Kazan, Russia",
    "education.thesisKicker": "Diploma / Thesis Project",
    "education.thesisTitle": "Development of an AI Assistant for Learning Spanish Using Large Language Models",
    "education.thesisCopy":
      "A full-stack educational AI system combining LLM interaction, personalized retrieval, speech technologies, conversational tutoring, and learning analytics.",
    "interests.kicker": "Research Interests",
    "interests.title": "Where I want to grow next.",
    "contact.kicker": "Contact",
    "contact.title": "Let's build the next chapter.",
    "contact.copy":
      "I am interested in AI developer roles, backend internships, research opportunities, scholarships, and graduate programs in AI, NLP, HCI, educational technology, and software engineering.",
    "contact.openCv": "Open CV PDF",
    "dialog.kicker": "Juanito Architecture",
    "dialog.title": "AI learning assistant pipeline",
    "dialog.step1": "Student input",
    "dialog.step2": "Intent routing",
    "dialog.step3": "LLM / RAG response",
    "dialog.step4": "Quiz, translation, or speaking practice",
    "dialog.step5": "Progress and vocabulary storage",
    "dialog.copy":
      "The project connects a Gradio web interface and Telegram bot to Python services, SQLite storage, Ollama local models, Whisper speech recognition, and personalized retrieval logic.",
  },
  es: {
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.education": "Educación",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Estudiante de Ingeniería de Software · Desarrolladora de IA · Perfil Multilingüe",
    "hero.lede":
      "Construyo sistemas educativos con IA usando LLMs, RAG, NLP y arquitectura backend en Python, con enfoque en aprendizaje de idiomas e IA centrada en las personas.",
    "hero.projects": "Ver Proyectos",
    "hero.resume": "CV PDF",
    "hero.languages": "Español · Inglés · Ruso",
    "hero.open": "Abierta a empleos, pasantías y becas",
    "profile.kicker": "Perfil",
    "profile.title": "Un CV técnico con señal académica.",
    "profile.copy":
      "Soy estudiante de Ingeniería de Software en la Universidad Federal de Kazán y trabajo en la intersección de IA, sistemas de software y educación. Mi ángulo más fuerte es la IA multilingüe: sistemas que explican, se adaptan, hablan, recuerdan y apoyan el aprendizaje entre idiomas.",
    "fit.copy":
      "Ingeniera de software multilingüe que construye sistemas educativos prácticos con IA usando LLMs, NLP y arquitecturas de aprendizaje personalizado.",
    "projects.kicker": "Trabajo Seleccionado",
    "projects.title": "Proyectos creados para problemas reales de aprendizaje.",
    "filter.all": "Todo",
    "filter.backend": "Backend",
    "filter.mobile": "Móvil",
    "filter.academic": "Académico",
    "filter.teaching": "Tutorías",
    "juanito.title": "Juanito — Asistente de IA para Aprender Español",
    "juanito.copy":
      "Asistente inteligente para usuarios rusohablantes que aprenden español, integrando LLMs locales, traducción contextual, vocabulario personalizado, quizzes, práctica oral, recordatorios, progreso y adaptación basada en RAG.",
    "projects.architecture": "Ver arquitectura",
    "projects.github": "Repositorio GitHub",
    "expense.title": "Expense Tracker — App Financiera en Flutter",
    "expense.copy":
      "Aplicación móvil en Flutter para registrar ingresos y gastos con persistencia SQLite, arquitectura MVVM, navegación adaptativa, fotos de recibos, geolocalización, notificaciones, protección biométrica y demo de sincronización.",
    "loyalty.title": "Sistema de Fidelización para Restaurante",
    "loyalty.copy":
      "Sistema digital para seguimiento de clientes, puntos de fidelidad, gestión de datos y lógica backend de negocio.",
    "coursework.title": "Trabajo Académico en Java, Vue y Web",
    "coursework.copy":
      "Repositorios académicos públicos que muestran práctica constante en Java, calculadoras, proyectos semestrales, Vue, ejercicios HTML/CSS y archivos JavaScript.",
    "projects.repos": "Ver repositorios",
    "tutoring.title": "Tutorías de Informática y Apoyo Técnico",
    "tutoring.copy":
      "Apoyo técnico y asistencia de programación para tareas universitarias de informática, Python, bases de datos, algoritmos, debugging y ejercicios de desarrollo.",
    "github.kicker": "Señal GitHub",
    "github.title": "Trabajo público en IA, móvil, backend y crecimiento académico.",
    "github.repos": "15 repositorios públicos",
    "github.recent": "Trabajo público más reciente: marzo de 2026",
    "github.open": "Abrir GitHub",
    "skills.kicker": "Habilidades Técnicas",
    "skills.title": "Trabajo moderno en IA, con base en ingeniería de software.",
    "skills.copy":
      "El sitio destaca dirección investigativa y capacidad de implementación: importante para empleos, pasantías, becas y aplicaciones de maestría.",
    "skills.programming": "Programación",
    "skills.ai": "IA / ML",
    "skills.backend": "Backend",
    "skills.tools": "Herramientas",
    "education.kicker": "Educación e Investigación",
    "education.degree": "Licenciatura en Ingeniería de Software · 2022-2026 · Kazán, Rusia",
    "education.thesisKicker": "Proyecto de Diploma / Tesis",
    "education.thesisTitle": "Desarrollo de un Asistente de IA para Aprender Español usando Modelos de Lenguaje Grandes",
    "education.thesisCopy":
      "Sistema educativo full-stack con interacción LLM, recuperación personalizada, tecnologías de voz, tutor conversacional y analítica de aprendizaje.",
    "interests.kicker": "Intereses de Investigación",
    "interests.title": "Dónde quiero crecer ahora.",
    "contact.kicker": "Contacto",
    "contact.title": "Construyamos el siguiente capítulo.",
    "contact.copy":
      "Me interesan roles de desarrolladora de IA, pasantías backend, oportunidades de investigación, becas y programas de maestría en IA, NLP, HCI, tecnología educativa e ingeniería de software.",
    "contact.openCv": "Abrir CV PDF",
    "dialog.kicker": "Arquitectura de Juanito",
    "dialog.title": "Pipeline del asistente de aprendizaje con IA",
    "dialog.step1": "Entrada del estudiante",
    "dialog.step2": "Detección de intención",
    "dialog.step3": "Respuesta LLM / RAG",
    "dialog.step4": "Quiz, traducción o práctica oral",
    "dialog.step5": "Progreso y vocabulario",
    "dialog.copy":
      "El proyecto conecta una interfaz web en Gradio y un bot de Telegram con servicios Python, almacenamiento SQLite, modelos locales en Ollama, reconocimiento de voz con Whisper y lógica de recuperación personalizada.",
  },
  ru: {
    "nav.projects": "Проекты",
    "nav.skills": "Навыки",
    "nav.education": "Образование",
    "nav.contact": "Контакты",
    "hero.eyebrow": "Студентка Software Engineering · AI Developer · Многоязычный профиль",
    "hero.lede":
      "Я создаю практические образовательные AI-системы с LLM, RAG, NLP и backend-архитектурой на Python, с фокусом на изучение языков и human-centered AI.",
    "hero.projects": "Смотреть проекты",
    "hero.resume": "CV PDF",
    "hero.languages": "Испанский · Английский · Русский",
    "hero.open": "Открыта к работе, стажировкам и стипендиям",
    "profile.kicker": "Профиль",
    "profile.title": "Техническое CV с академическим фокусом.",
    "profile.copy":
      "Я студентка Software Engineering в Казанском федеральном университете и работаю на пересечении AI, программных систем и образования. Моя сильная сторона — многоязычный AI: системы, которые объясняют, адаптируются, говорят, запоминают и помогают учиться на разных языках.",
    "fit.copy":
      "Многоязычный software engineer, создающий практические образовательные AI-системы с LLM, NLP и архитектурами персонализированного обучения.",
    "projects.kicker": "Избранные работы",
    "projects.title": "Проекты для реальных задач обучения.",
    "filter.all": "Все",
    "filter.backend": "Backend",
    "filter.mobile": "Mobile",
    "filter.academic": "Учебные",
    "filter.teaching": "Обучение",
    "juanito.title": "Juanito — AI-ассистент для изучения испанского",
    "juanito.copy":
      "Интеллектуальный ассистент для русскоязычных пользователей, изучающих испанский: локальные LLM, контекстный перевод, персональный словарь, тесты, разговорная практика, напоминания, прогресс и RAG-персонализация.",
    "projects.architecture": "Архитектура",
    "projects.github": "GitHub репозиторий",
    "expense.title": "Expense Tracker — Flutter-приложение для финансов",
    "expense.copy":
      "Мобильное приложение на Flutter для учета доходов и расходов с SQLite, MVVM, адаптивной навигацией, фото чеков, геолокацией, уведомлениями, биометрической защитой и demo sync-сервисом.",
    "loyalty.title": "Система лояльности для ресторана",
    "loyalty.copy":
      "Цифровая система для учета клиентов, баллов лояльности, управления данными и backend-логики бизнеса.",
    "coursework.title": "Академические проекты Java, Vue и Web",
    "coursework.copy":
      "Публичные учебные репозитории, показывающие регулярную практику в Java, калькуляторах, семестровых проектах, Vue, HTML/CSS и JavaScript.",
    "projects.repos": "Смотреть репозитории",
    "tutoring.title": "Репетиторство по информатике и техническая помощь",
    "tutoring.copy":
      "Техническая поддержка и помощь с программированием для университетских задач по информатике, Python, базам данных, алгоритмам, debugging и разработке.",
    "github.kicker": "GitHub сигнал",
    "github.title": "Публичные работы показывают рост в AI, mobile, backend и академических проектах.",
    "github.repos": "15 публичных репозиториев",
    "github.recent": "Самая свежая публичная работа: март 2026",
    "github.open": "Открыть GitHub",
    "skills.kicker": "Технические навыки",
    "skills.title": "Современная AI-разработка на базе software engineering.",
    "skills.copy":
      "Сайт показывает и исследовательское направление, и умение реализовывать системы: важно для работы, стажировок, стипендий и магистратуры.",
    "skills.programming": "Программирование",
    "skills.ai": "AI / ML",
    "skills.backend": "Backend",
    "skills.tools": "Инструменты",
    "education.kicker": "Образование и исследования",
    "education.degree": "Бакалавриат Software Engineering · 2022-2026 · Казань, Россия",
    "education.thesisKicker": "Дипломный проект",
    "education.thesisTitle": "Разработка AI-ассистента для изучения испанского языка с использованием LLM",
    "education.thesisCopy":
      "Full-stack образовательная AI-система с LLM-взаимодействием, персонализированным retrieval, речевыми технологиями, разговорным tutor и аналитикой обучения.",
    "interests.kicker": "Научные интересы",
    "interests.title": "Куда я хочу развиваться дальше.",
    "contact.kicker": "Контакты",
    "contact.title": "Давайте построим следующий этап.",
    "contact.copy":
      "Мне интересны роли AI developer, backend-стажировки, research opportunities, стипендии и магистерские программы в AI, NLP, HCI, образовательных технологиях и software engineering.",
    "contact.openCv": "Открыть CV PDF",
    "dialog.kicker": "Архитектура Juanito",
    "dialog.title": "Pipeline AI-ассистента для обучения",
    "dialog.step1": "Ввод студента",
    "dialog.step2": "Определение intent",
    "dialog.step3": "LLM / RAG ответ",
    "dialog.step4": "Тест, перевод или разговорная практика",
    "dialog.step5": "Прогресс и словарь",
    "dialog.copy":
      "Проект соединяет Gradio web interface и Telegram bot с Python-сервисами, SQLite-хранилищем, локальными моделями Ollama, распознаванием речи Whisper и логикой персонализированного retrieval.",
  },
};

const applyLanguage = (lang) => {
  const dictionary = translations[lang] || translations.en;

  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) {
      element.textContent = value;
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });

  localStorage.setItem("portfolio-language", lang);
};

const savedLanguage = localStorage.getItem("portfolio-language") || "en";
applyLanguage(savedLanguage);

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

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
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
