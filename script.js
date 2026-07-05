const header = document.querySelector("[data-header]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card");
const dialog = document.querySelector("[data-dialog]");
const dialogOpen = document.querySelector("[data-project-open]");
const dialogClose = document.querySelector("[data-dialog-close]");
const timelineButtons = document.querySelectorAll("[data-focus]");
const languageButtons = document.querySelectorAll("[data-lang]");
const primaryCvLinks = document.querySelectorAll("[data-primary-cv]");

const cvFiles = {
  en: "Amanda_Argotti_CV_EN.pdf",
  es: "Amanda_Argotti_CV_ES.pdf",
  ru: "Amanda_Argotti_CV_RU.pdf",
};

const translations = {
  en: {
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "hero.eyebrow": "Software Engineer · AI Developer · Multilingual Builder",
    "hero.lede":
      "I build practical AI-powered educational systems with LLMs, RAG, NLP, and Python backend architecture, with a focus on language learning and human-centered AI.",
    "hero.projects": "View Projects",
    "hero.resume": "Download CV",
    "hero.languages": "Spanish · English · Russian",
    "hero.open": "Open to Software Engineer, AI Developer, and Python Backend roles",
    "profile.kicker": "Profile",
    "profile.title": "Engineering skills backed by working projects.",
    "profile.copy":
      "I am a Software Engineer and Kazan Federal University graduate working at the intersection of AI, software systems, and education. My strongest application angle is multilingual AI: building systems that can explain, adapt, speak, remember, and support learning across languages.",
    "metric.degree": "B.Sc. Software Engineering",
    "metric.ai": "AI system development",
    "metric.languages": "Spanish, English, Russian",
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
    "github.title": "Public work across AI, mobile, backend, and software foundations.",
    "github.repos": "16 public repositories",
    "github.recent": "Portfolio and public work updated in 2026",
    "github.open": "Open GitHub",
    "skills.kicker": "Technical Skills",
    "skills.title": "Modern AI work, grounded in software engineering.",
    "skills.copy":
      "I turn product requirements into working software across AI workflows, backend services, local data, and mobile interfaces.",
    "skills.programming": "Programming",
    "skills.ai": "AI / ML",
    "skills.backend": "Backend",
    "skills.tools": "Tools",
    "education.kicker": "Education",
    "education.degree": "B.S. in Software Engineering · 2022-2026 · Kazan, Russia",
    "education.thesisKicker": "Diploma / Thesis Project",
    "education.thesisTitle": "Development of an AI Assistant for Learning Spanish Using Large Language Models",
    "education.thesisCopy":
      "A full-stack educational AI system combining LLM interaction, personalized retrieval, speech technologies, conversational tutoring, and learning analytics.",
    "interests.kicker": "Role Focus",
    "interests.title": "Where I can contribute now.",
    "contact.kicker": "Contact",
    "contact.title": "Let's build the next chapter.",
    "contact.copy":
      "I am available for Software Engineer, AI Developer, and Python Backend opportunities where I can build useful products, learn quickly, and contribute across the development lifecycle.",
    "cv.title": "Download CV",
    "cv.en": "English",
    "cv.es": "Spanish",
    "cv.ru": "Russian",
    "contact.openCv": "Download English CV",
    "dialog.kicker": "Juanito Architecture",
    "dialog.title": "AI learning assistant pipeline",
    "dialog.step1": "Learner input",
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
    "hero.eyebrow": "Ingeniera de Software · Desarrolladora de IA · Perfil Multilingüe",
    "hero.lede":
      "Construyo sistemas educativos con IA usando LLMs, RAG, NLP y arquitectura backend en Python, con enfoque en aprendizaje de idiomas e IA centrada en las personas.",
    "hero.projects": "Ver Proyectos",
    "hero.resume": "Descargar CV",
    "hero.languages": "Español · Inglés · Ruso",
    "hero.open": "Disponible para roles de Ingeniería de Software, IA y Backend Python",
    "profile.kicker": "Perfil",
    "profile.title": "Habilidades de ingeniería respaldadas por proyectos funcionales.",
    "profile.copy":
      "Soy Ingeniera de Software graduada de la Universidad Federal de Kazán y trabajo en la intersección de IA, sistemas de software y educación. Mi ángulo más fuerte es la IA multilingüe: sistemas que explican, se adaptan, hablan, recuerdan y apoyan el aprendizaje entre idiomas.",
    "metric.degree": "Licenciatura en Ingeniería de Software",
    "metric.ai": "Desarrollo de sistemas de IA",
    "metric.languages": "Español, inglés y ruso",
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
    "github.title": "Trabajo público en IA, móvil, backend y fundamentos de software.",
    "github.repos": "16 repositorios públicos",
    "github.recent": "Portafolio y trabajo público actualizados en 2026",
    "github.open": "Abrir GitHub",
    "skills.kicker": "Habilidades Técnicas",
    "skills.title": "Trabajo moderno en IA, con base en ingeniería de software.",
    "skills.copy":
      "Convierto requisitos de producto en software funcional: flujos de IA, servicios backend, datos locales e interfaces móviles.",
    "skills.programming": "Programación",
    "skills.ai": "IA / ML",
    "skills.backend": "Backend",
    "skills.tools": "Herramientas",
    "education.kicker": "Educación",
    "education.degree": "Licenciatura en Ingeniería de Software · 2022-2026 · Kazán, Rusia",
    "education.thesisKicker": "Proyecto de Diploma / Tesis",
    "education.thesisTitle": "Desarrollo de un Asistente de IA para Aprender Español usando Modelos de Lenguaje Grandes",
    "education.thesisCopy":
      "Sistema educativo full-stack con interacción LLM, recuperación personalizada, tecnologías de voz, tutor conversacional y analítica de aprendizaje.",
    "interests.kicker": "Enfoque Profesional",
    "interests.title": "Dónde puedo contribuir ahora.",
    "contact.kicker": "Contacto",
    "contact.title": "Construyamos el siguiente capítulo.",
    "contact.copy":
      "Estoy disponible para oportunidades como Ingeniera de Software, Desarrolladora de IA y Backend Python, donde pueda crear productos útiles y contribuir en todo el ciclo de desarrollo.",
    "cv.title": "Descargar CV",
    "cv.en": "Inglés",
    "cv.es": "Español",
    "cv.ru": "Ruso",
    "contact.openCv": "Descargar CV en español",
    "dialog.kicker": "Arquitectura de Juanito",
    "dialog.title": "Pipeline del asistente de aprendizaje con IA",
    "dialog.step1": "Entrada del usuario",
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
    "hero.eyebrow": "Software Engineer · AI Developer · Многоязычный профиль",
    "hero.lede":
      "Я создаю практические образовательные AI-системы с LLM, RAG, NLP и backend-архитектурой на Python, с фокусом на изучение языков и human-centered AI.",
    "hero.projects": "Смотреть проекты",
    "hero.resume": "Скачать резюме",
    "hero.languages": "Испанский · Английский · Русский",
    "hero.open": "Рассматриваю позиции Software Engineer, AI Developer и Python Backend Developer",
    "profile.kicker": "Профиль",
    "profile.title": "Инженерные навыки, подтвержденные работающими проектами.",
    "profile.copy":
      "Я Software Engineer и выпускница Казанского федерального университета, работаю на пересечении AI, программных систем и образования. Моя сильная сторона — многоязычный AI: системы, которые объясняют, адаптируются, говорят, запоминают и помогают учиться на разных языках.",
    "metric.degree": "Бакалавр программной инженерии",
    "metric.ai": "Разработка AI-систем",
    "metric.languages": "Испанский, английский, русский",
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
    "github.title": "Публичные проекты в AI, mobile, backend и основах разработки.",
    "github.repos": "16 публичных репозиториев",
    "github.recent": "Портфолио и публичные проекты обновлены в 2026 году",
    "github.open": "Открыть GitHub",
    "skills.kicker": "Технические навыки",
    "skills.title": "Современная AI-разработка на базе software engineering.",
    "skills.copy":
      "Превращаю требования к продукту в работающий софт: AI-сценарии, backend-сервисы, локальные данные и мобильные интерфейсы.",
    "skills.programming": "Программирование",
    "skills.ai": "AI / ML",
    "skills.backend": "Backend",
    "skills.tools": "Инструменты",
    "education.kicker": "Образование",
    "education.degree": "Бакалавриат Software Engineering · 2022-2026 · Казань, Россия",
    "education.thesisKicker": "Дипломный проект",
    "education.thesisTitle": "Разработка AI-ассистента для изучения испанского языка с использованием LLM",
    "education.thesisCopy":
      "Full-stack образовательная AI-система с LLM-взаимодействием, персонализированным retrieval, речевыми технологиями, разговорным tutor и аналитикой обучения.",
    "interests.kicker": "Профессиональный фокус",
    "interests.title": "Где я могу приносить пользу уже сейчас.",
    "contact.kicker": "Контакты",
    "contact.title": "Давайте построим следующий этап.",
    "contact.copy":
      "Рассматриваю позиции Software Engineer, AI Developer и Python Backend Developer, где смогу создавать полезные продукты и участвовать во всем цикле разработки.",
    "cv.title": "Скачать резюме",
    "cv.en": "Английский",
    "cv.es": "Испанский",
    "cv.ru": "Русский",
    "contact.openCv": "Скачать резюме на русском",
    "dialog.kicker": "Архитектура Juanito",
    "dialog.title": "Pipeline AI-ассистента для обучения",
    "dialog.step1": "Ввод пользователя",
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
  const cvFile = cvFiles[lang] || cvFiles.en;

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

  primaryCvLinks.forEach((link) => {
    link.href = `assets/documents/${cvFile}`;
    link.download = cvFile;
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
