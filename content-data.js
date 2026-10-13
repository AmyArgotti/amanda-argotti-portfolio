window.portfolioContent = {
  "en": {
    "role": "Software Engineer | Full-Stack Development & LLM Integration",
    "location": "Quito, Ecuador · Open to relocation",
    "summary": "Software engineer and KFU graduate building web interfaces, backend services, and LLM integrations. Freelance work includes Excel deliverables and HTML/CSS web design for medical students (2023–2024). Combines software development with formal UI/UX training and certified B2 English.",
    "hero": "I build thoughtful web interfaces, practical backend services, and AI features with local language models. From Figma to implementation, I connect design with software engineering.",
    "ui": {
      "projects": "Projects",
      "experience": "Experience",
      "skills": "Skills",
      "education": "Qualifications",
      "contact": "Contact",
      "profile": "Profile",
      "profileTitle": "Design, engineering, and useful AI.",
      "workTitle": "Selected software projects",
      "experienceTitle": "Freelance technical experience",
      "skillsTitle": "From interface to integration",
      "educationTitle": "Education & qualifications",
      "contactTitle": "Let's build something useful.",
      "contactCopy": "Based in Quito, Ecuador, and open to relocation. Available to discuss software engineering, frontend, backend, and AI integration opportunities.",
      "all": "All",
      "web": "Web",
      "ai": "AI",
      "mobile": "Mobile",
      "caseStudy": "Case study",
      "repository": "Source code",
      "demo": "Live preview",
      "roleLabel": "My contribution",
      "decisions": "Technical decisions",
      "statusLabel": "Current status",
      "limitations": "Scope & limitations",
      "jobCv": "Job CV",
      "academicCv": "Academic CV",
      "download": "Download CV",
      "close": "Close case study",
      "theme": "Switch color theme",
      "language": "Language",
      "cvTitle": "Choose your CV",
      "native": "Spanish native · English B2 certified · Russian B1",
      "proof": "Explore the implementation and source code.",
      "proofCopy": "Selected work across AI integration, React/TypeScript web development, and Flutter applications.",
      "designTitle": "UI/UX & Figma",
      "designCopy": "Figma, interface design, and HTML/CSS implementation, supported by 252 hours of KFU professional retraining in UI/UX and web design.",
      "designScope": "The web projects below show implemented interfaces and responsive layouts.",
      "research": "Research interests",
      "conference": "Academic participation",
      "job": "Professional CV",
      "academic": "Academic CV",
      "skip": "Skip to content"
    },
    "experience": [
      {
        "title": "Freelance Software Development",
        "meta": "2026 · Restaurant loyalty project",
        "points": [
          "Developed customer tracking and loyalty-point business logic using Python, SQL, and API workflows."
        ]
      },
      {
        "title": "Freelance Technical Support",
        "meta": "2023–2024 · Medical student clients",
        "points": [
          "Completed Excel-based technical deliverables and HTML/CSS web design work for medical students.",
          "Worked across spreadsheet tasks and web page implementation over two years of freelance activity."
        ]
      }
    ],
    "skills": [
      [
        "Frontend",
        "React, TypeScript, JavaScript, HTML, CSS; Flutter/Dart"
      ],
      [
        "Backend",
        "Python, REST API integration, SQL, SQLite, JSON persistence"
      ],
      [
        "UI/UX",
        "Figma, interface design, responsive layouts"
      ],
      [
        "AI integration",
        "Ollama, local LLMs, prompt engineering, structured responses, TTS integration"
      ],
      [
        "Engineering tools",
        "Git, GitHub, Linux/macOS; Drizzle and Cloudflare project configuration"
      ]
    ],
    "qualifications": [
      {
        "title": "Bachelor's Degree in Software Engineering",
        "meta": "Kazan Federal University · 2022–2026",
        "copy": "Graduate. Thesis: Development of an AI Assistant for Learning Spanish Using Large Language Models."
      },
      {
        "title": "UI/UX & Web Design for Developers",
        "meta": "Kazan Federal University · 252 hours · Diploma issued 2026",
        "copy": "Professional retraining qualification in graphical user interface design. Coursework completed in 2025."
      },
      {
        "title": "English Proficiency — B2 (CEFR)",
        "meta": "CTT de los Andes Language Center / UNIANDES · November 2023",
        "copy": "Certificate of Proficiency. Spanish: native. Russian: B1 (self-assessed)."
      }
    ],
    "projects": [
      {
        "id": "juanito",
        "title": "Juanito · Spanish Learning Assistant",
        "meta": "Thesis project · 2025–2026",
        "copy": "A Spanish-learning interface for Russian-speaking users, with LLM translation and grammar explanations, vocabulary, quizzes, and reminders.",
        "contribution": "Developed the Gradio interface, Ollama request handling, structured responses, and JSON-based learner storage.",
        "decisions": "Local Ollama inference separates the model runtime from the interface. JSON stores vocabulary, progress, and reminders without a database server.",
        "status": "Academic prototype; public source snapshot.",
        "limitations": "The public snapshot is missing imported services modules. Complete setup needs restoration; Whisper, SQLite, and a complete RAG pipeline are not claimed for this published version.",
        "cv": "Built a Gradio learning interface with Ollama translation, structured responses, and JSON vocabulary/progress storage."
      },
      {
        "id": "moonlit",
        "title": "Moonlit Shelf · Reading Journal",
        "meta": "Independent web project · 2026",
        "copy": "An interactive library with book management, reading progress, journal entries, and English, Spanish, and Russian interfaces.",
        "contribution": "Built library and reading workflows with local browser persistence and an account-aware library API in the hosted app.",
        "decisions": "The GitHub Pages preview uses browser storage. The hosted app includes a library API and D1 schema via Drizzle.",
        "status": "Public preview and hosted application; ongoing development.",
        "limitations": "Private file uploads, social features, and an AI reading companion remain future milestones. The preview does not demonstrate the hosted account backend.",
        "cv": "Built a multilingual React/TypeScript library with book CRUD, reading progress, local persistence, and a hosted library API."
      },
      {
        "id": "chefsito",
        "title": "Chefsito · Professional Chef Portfolio",
        "meta": "Portfolio project · 2026",
        "copy": "A responsive portfolio with a culinary gallery, career timeline, and CVs in English, Russian, and French.",
        "contribution": "Implemented multilingual content, responsive layouts, gallery interactions, and a Python workflow for searchable CV PDFs.",
        "decisions": "A static preview makes the portfolio easy to access. Translated content and generated PDFs support the same profile across three languages.",
        "status": "Published portfolio with public source code.",
        "limitations": "A presentation website, not a booking or commerce system. Client hiring outcomes have not been measured.",
        "cv": "Developed a responsive React/TypeScript portfolio with multilingual gallery interactions and searchable CVs in three languages."
      },
      {
        "id": "expense",
        "title": "Expense Tracker · Flutter App",
        "meta": "Mobile project · 2026",
        "copy": "A mobile finance project for income, expenses, categories, and accounts with local transaction storage.",
        "contribution": "Developed mobile finance workflows and SQLite-backed local storage using MVVM architecture.",
        "decisions": "Local persistence supports transaction records without an always-connected backend.",
        "status": "Public mobile application repository.",
        "limitations": "Cloud synchronization and production usage outcomes are not claimed.",
        "cv": "Developed a Flutter expense tracker with SQLite persistence and MVVM architecture."
      }
    ],
    "research": "Conversational AI; educational technology; multilingual language learning; human–AI interaction; personalized learning.",
    "conference": "Participant, KFU international student conference “Discovering the World Together”, Kazan, 2022.",
    "thesis": "Development of an AI Assistant for Learning Spanish Using Large Language Models"
  },
  "es": {
    "role": "Ingeniera de Software | Desarrollo Full-Stack e Integración de LLMs",
    "location": "Quito, Ecuador · Disponibilidad para reubicación",
    "summary": "Ingeniera de software graduada de KFU, con desarrollo de interfaces web, servicios backend e integración de LLMs. Realicé trabajos técnicos freelance con Excel y diseño web HTML/CSS para estudiantes de medicina (2023–2024). Combino desarrollo, formación en UI/UX e inglés B2 certificado.",
    "hero": "Construyo interfaces web, servicios backend y funciones de IA con modelos de lenguaje locales. Conecto el diseño en Figma con la implementación de software.",
    "ui": {
      "projects": "Proyectos",
      "experience": "Experiencia",
      "skills": "Habilidades",
      "education": "Formación",
      "contact": "Contacto",
      "profile": "Perfil",
      "profileTitle": "Diseño, ingeniería e IA práctica.",
      "workTitle": "Proyectos de software seleccionados",
      "experienceTitle": "Experiencia técnica freelance",
      "skillsTitle": "De la interfaz a la integración",
      "educationTitle": "Educación y cualificaciones",
      "contactTitle": "Construyamos algo útil.",
      "contactCopy": "Resido en Quito, Ecuador, con disponibilidad para reubicación. Busco oportunidades en ingeniería de software, frontend, backend e integración de IA.",
      "all": "Todos",
      "web": "Web",
      "ai": "IA",
      "mobile": "Móvil",
      "caseStudy": "Caso de estudio",
      "repository": "Código fuente",
      "demo": "Vista previa",
      "roleLabel": "Mi contribución",
      "decisions": "Decisiones técnicas",
      "statusLabel": "Estado actual",
      "limitations": "Alcance y limitaciones",
      "jobCv": "CV profesional",
      "academicCv": "CV académico",
      "download": "Descargar CV",
      "close": "Cerrar caso de estudio",
      "theme": "Cambiar tema de color",
      "language": "Idioma",
      "cvTitle": "Elige tu CV",
      "native": "Español nativo · Inglés B2 certificado · Ruso B1",
      "proof": "Explora la implementación y el código.",
      "proofCopy": "Proyectos de integración de IA, desarrollo web con React/TypeScript y aplicaciones Flutter.",
      "designTitle": "UI/UX y Figma",
      "designCopy": "Figma, diseño de interfaces e implementación HTML/CSS, con 252 horas de formación profesional en UI/UX y diseño web en KFU.",
      "designScope": "Los proyectos web muestran interfaces implementadas y diseños adaptables.",
      "research": "Intereses de investigación",
      "conference": "Participación académica",
      "job": "CV profesional",
      "academic": "CV académico",
      "skip": "Ir al contenido"
    },
    "experience": [
      {
        "title": "Desarrollo de Software Freelance",
        "meta": "2026 · Proyecto de fidelización para restaurante",
        "points": [
          "Desarrollé lógica de seguimiento de clientes y puntos de fidelidad con Python, SQL y flujos de APIs."
        ]
      },
      {
        "title": "Soporte Técnico Freelance",
        "meta": "2023–2024 · Clientes estudiantes de medicina",
        "points": [
          "Realicé entregables técnicos en Excel y trabajos de diseño web con HTML/CSS para estudiantes de medicina.",
          "Trabajé con hojas de cálculo e implementación de páginas web durante dos años de actividad freelance."
        ]
      }
    ],
    "skills": [
      [
        "Frontend",
        "React, TypeScript, JavaScript, HTML, CSS; Flutter/Dart"
      ],
      [
        "Backend",
        "Python, integración de APIs REST, SQL, SQLite, persistencia JSON"
      ],
      [
        "UI/UX",
        "Figma, diseño de interfaces, diseños adaptables"
      ],
      [
        "Integración de IA",
        "Ollama, LLMs locales, ingeniería de prompts, respuestas estructuradas, integración TTS"
      ],
      [
        "Herramientas",
        "Git, GitHub, Linux/macOS; configuración de proyectos con Drizzle y Cloudflare"
      ]
    ],
    "qualifications": [
      {
        "title": "Título de Grado en Ingeniería de Software",
        "meta": "Universidad Federal de Kazán · 2022–2026",
        "copy": "Graduada. Tesis: Desarrollo de un asistente de IA para aprender español usando modelos de lenguaje grandes."
      },
      {
        "title": "UI/UX y Diseño Web para Desarrolladores",
        "meta": "Universidad Federal de Kazán · 252 horas · Diploma emitido en 2026",
        "copy": "Cualificación de reconversión profesional en diseño de interfaces gráficas de usuario. Formación completada en 2025."
      },
      {
        "title": "Certificado de Inglés — B2 (MCER)",
        "meta": "CTT de los Andes Language Center / UNIANDES · Noviembre de 2023",
        "copy": "Certificate of Proficiency. Español: nativo. Ruso: B1 (autoevaluado)."
      }
    ],
    "projects": [
      {
        "id": "juanito",
        "title": "Juanito · Asistente de Español",
        "meta": "Proyecto de tesis · 2025–2026",
        "copy": "Interfaz de aprendizaje para usuarios rusohablantes, con traducción y explicaciones mediante LLMs, vocabulario, cuestionarios y recordatorios.",
        "contribution": "Desarrollé la interfaz Gradio, solicitudes a Ollama, respuestas estructuradas y almacenamiento JSON del aprendizaje.",
        "decisions": "Ollama ejecuta el modelo localmente, separado de la interfaz. JSON guarda vocabulario, progreso y recordatorios sin servidor de base de datos.",
        "status": "Prototipo académico; versión pública del código.",
        "limitations": "La versión pública no incluye los módulos services importados. Falta restaurar la instalación completa; no se atribuyen Whisper, SQLite ni un pipeline RAG completo a esta versión.",
        "cv": "Desarrollé una interfaz Gradio con traducción Ollama, respuestas estructuradas y persistencia JSON de vocabulario y progreso."
      },
      {
        "id": "moonlit",
        "title": "Moonlit Shelf · Diario de Lectura",
        "meta": "Proyecto web independiente · 2026",
        "copy": "Biblioteca personal con gestión de libros, progreso, diario de lectura e interfaz en español, inglés y ruso.",
        "contribution": "Construí la interfaz y flujos de lectura, con persistencia local y API de biblioteca asociada a cuentas en la aplicación alojada.",
        "decisions": "La vista previa GitHub Pages usa almacenamiento del navegador. La app alojada incluye API y esquema D1 mediante Drizzle.",
        "status": "Vista previa pública y aplicación alojada; desarrollo continuo.",
        "limitations": "Cargas privadas de archivos, funciones sociales y asistente de lectura con IA son próximos hitos. La vista previa no demuestra el backend de cuentas.",
        "cv": "Construí una biblioteca React/TypeScript multilingüe con gestión de libros, progreso, persistencia local y API en la app alojada."
      },
      {
        "id": "chefsito",
        "title": "Chefsito · Portfolio Profesional",
        "meta": "Proyecto de portfolio · 2026",
        "copy": "Portfolio adaptable con galería culinaria, trayectoria profesional y CVs en inglés, ruso y francés.",
        "contribution": "Implementé contenido multilingüe, diseños adaptables, galería interactiva y generación de PDFs con Python.",
        "decisions": "Una vista previa estática facilita el acceso. El contenido traducido y los PDFs mantienen un perfil coherente en tres idiomas.",
        "status": "Portfolio publicado con código público.",
        "limitations": "Sitio de presentación, sin reservas ni comercio electrónico. No se han medido resultados de contratación.",
        "cv": "Desarrollé un portfolio React/TypeScript adaptable y multilingüe con galería interactiva y CVs de texto seleccionable en tres idiomas."
      },
      {
        "id": "expense",
        "title": "Expense Tracker · App Flutter",
        "meta": "Proyecto móvil · 2026",
        "copy": "Proyecto móvil de finanzas para ingresos, gastos, categorías y cuentas con persistencia local.",
        "contribution": "Desarrollé flujos de finanzas y almacenamiento SQLite con arquitectura MVVM.",
        "decisions": "La persistencia local permite registrar transacciones sin un backend permanentemente conectado.",
        "status": "Repositorio público de aplicación móvil.",
        "limitations": "No se atribuyen sincronización en la nube ni resultados de uso en producción.",
        "cv": "Desarrollé una app Flutter de gastos con persistencia SQLite y arquitectura MVVM."
      }
    ],
    "research": "IA conversacional; tecnología educativa; aprendizaje multilingüe; interacción humano–IA; aprendizaje personalizado.",
    "conference": "Participante, conferencia internacional estudiantil de KFU «Descubriendo el mundo juntos», Kazán, 2022.",
    "thesis": "Desarrollo de un asistente de IA para aprender español usando modelos de lenguaje grandes"
  },
  "ru": {
    "role": "Инженер-программист | Full-stack разработка и интеграция LLM",
    "location": "Кито, Эквадор · Готова к переезду",
    "summary": "Инженер-программист, выпускница КФУ. Разрабатываю веб-интерфейсы, серверные сервисы и интеграции LLM. В 2023–2024 годах выполняла технические заказы с Excel и HTML/CSS для студентов-медиков. Сочетаю разработку с подготовкой по UI/UX и подтверждённым английским B2.",
    "hero": "Создаю веб-интерфейсы, серверные сервисы и функции ИИ с локальными языковыми моделями. Связываю дизайн в Figma с реализацией программного обеспечения.",
    "ui": {
      "projects": "Проекты",
      "experience": "Опыт",
      "skills": "Навыки",
      "education": "Образование",
      "contact": "Контакты",
      "profile": "Профиль",
      "profileTitle": "Дизайн, разработка и практический ИИ.",
      "workTitle": "Избранные программные проекты",
      "experienceTitle": "Техническая работа на фрилансе",
      "skillsTitle": "От интерфейса до интеграции",
      "educationTitle": "Образование и квалификации",
      "contactTitle": "Давайте создадим полезный продукт.",
      "contactCopy": "Живу в Кито, Эквадор, и готова к переезду. Рассматриваю работу в разработке ПО, frontend, backend и интеграции ИИ.",
      "all": "Все",
      "web": "Веб",
      "ai": "ИИ",
      "mobile": "Мобильные",
      "caseStudy": "Подробнее",
      "repository": "Исходный код",
      "demo": "Демо",
      "roleLabel": "Мой вклад",
      "decisions": "Технические решения",
      "statusLabel": "Текущий статус",
      "limitations": "Объём и ограничения",
      "jobCv": "Резюме для работы",
      "academicCv": "Академическое резюме",
      "download": "Скачать резюме",
      "close": "Закрыть описание проекта",
      "theme": "Сменить цветовую тему",
      "language": "Язык",
      "cvTitle": "Выберите резюме",
      "native": "Испанский родной · Английский B2 подтверждён · Русский B1",
      "proof": "Изучите реализацию и исходный код.",
      "proofCopy": "Избранные проекты: интеграция ИИ, React/TypeScript и приложения Flutter.",
      "designTitle": "UI/UX и Figma",
      "designCopy": "Figma, дизайн интерфейсов и HTML/CSS; 252 часа профессиональной переподготовки по UI/UX и веб-дизайну в КФУ.",
      "designScope": "Веб-проекты демонстрируют реализованные интерфейсы и адаптивные макеты.",
      "research": "Исследовательские интересы",
      "conference": "Академическое участие",
      "job": "Резюме для работы",
      "academic": "Академическое резюме",
      "skip": "Перейти к содержимому"
    },
    "experience": [
      {
        "title": "Разработка ПО на фрилансе",
        "meta": "2026 · Проект системы лояльности ресторана",
        "points": [
          "Разработала логику учёта клиентов и баллов лояльности с Python, SQL и API."
        ]
      },
      {
        "title": "Технические услуги на фрилансе",
        "meta": "2023–2024 · Заказчики: студенты-медики",
        "points": [
          "Выполняла технические заказы с Excel и веб-дизайн на HTML/CSS для студентов-медиков.",
          "Работала с электронными таблицами и реализацией веб-страниц в течение двух лет фриланса."
        ]
      }
    ],
    "skills": [
      [
        "Frontend",
        "React, TypeScript, JavaScript, HTML, CSS; Flutter/Dart"
      ],
      [
        "Backend",
        "Python, интеграция REST API, SQL, SQLite, хранение JSON"
      ],
      [
        "UI/UX",
        "Figma, дизайн интерфейсов, адаптивные макеты"
      ],
      [
        "Интеграция ИИ",
        "Ollama, локальные LLM, проектирование промптов, структурированные ответы, интеграция TTS"
      ],
      [
        "Инструменты",
        "Git, GitHub, Linux/macOS; конфигурация Drizzle и Cloudflare"
      ]
    ],
    "qualifications": [
      {
        "title": "Бакалавриат: программная инженерия",
        "meta": "Казанский федеральный университет · 2022–2026",
        "copy": "Выпускница. Дипломная работа: разработка ИИ-ассистента для изучения испанского языка с использованием больших языковых моделей."
      },
      {
        "title": "UI/UX и веб-дизайн для разработчиков",
        "meta": "Казанский федеральный университет · 252 часа · Диплом выдан в 2026",
        "copy": "Профессиональная переподготовка; квалификация специалиста по дизайну графических пользовательских интерфейсов. Обучение завершено в 2025 году."
      },
      {
        "title": "Английский язык — B2 (CEFR)",
        "meta": "CTT de los Andes Language Center / UNIANDES · Ноябрь 2023",
        "copy": "Certificate of Proficiency. Испанский: родной. Русский: B1 (самооценка)."
      }
    ],
    "projects": [
      {
        "id": "juanito",
        "title": "Juanito · Ассистент испанского языка",
        "meta": "Дипломный проект · 2025–2026",
        "copy": "Интерфейс для русскоязычных учащихся: перевод и объяснения через LLM, словарь, тесты и напоминания.",
        "contribution": "Разработала интерфейс Gradio, запросы Ollama, структурированные ответы и хранение учебных данных в JSON.",
        "decisions": "Локальный Ollama отделяет модель от интерфейса. JSON хранит словарь, прогресс и напоминания без сервера баз данных.",
        "status": "Академический прототип; публичная версия кода.",
        "limitations": "В публичной версии отсутствуют импортируемые модули services. Требуется восстановить полный запуск; Whisper, SQLite и полноценный RAG для этой версии не заявляются.",
        "cv": "Создала интерфейс Gradio с переводом Ollama, структурированными ответами и хранением словаря и прогресса в JSON."
      },
      {
        "id": "moonlit",
        "title": "Moonlit Shelf · Дневник чтения",
        "meta": "Независимый веб-проект · 2026",
        "copy": "Интерактивная библиотека: управление книгами, прогресс, дневник чтения и интерфейс на испанском, английском и русском.",
        "contribution": "Создала интерфейс и сценарии чтения, локальное хранение и API библиотеки с привязкой к аккаунту в размещённом приложении.",
        "decisions": "Демо GitHub Pages хранит данные в браузере. Размещённое приложение включает API и схему D1 через Drizzle.",
        "status": "Публичное демо и размещённое приложение; развитие продолжается.",
        "limitations": "Приватная загрузка файлов, социальные функции и ИИ-помощник запланированы. Демо не показывает серверную работу с аккаунтами.",
        "cv": "Создала многоязычную библиотеку React/TypeScript с управлением книгами, прогрессом, локальным хранением и API размещённого приложения."
      },
      {
        "id": "chefsito",
        "title": "Chefsito · Профессиональное портфолио",
        "meta": "Проект портфолио · 2026",
        "copy": "Адаптивное портфолио с кулинарной галереей, карьерной хронологией и резюме на английском, русском и французском.",
        "contribution": "Реализовала многоязычный контент, адаптивные макеты, интерактивную галерею и генерацию PDF на Python.",
        "decisions": "Статическое демо упрощает доступ. Переводы и PDF поддерживают единый профиль на трёх языках.",
        "status": "Опубликованное портфолио с открытым кодом.",
        "limitations": "Сайт-презентация без бронирования и электронной торговли. Результаты трудоустройства не измерялись.",
        "cv": "Разработала адаптивное портфолио React/TypeScript с галереей и текстовыми PDF-резюме на трёх языках."
      },
      {
        "id": "expense",
        "title": "Expense Tracker · Приложение Flutter",
        "meta": "Мобильный проект · 2026",
        "copy": "Мобильный финансовый проект для доходов, расходов, категорий и счетов с локальным хранением.",
        "contribution": "Разработала финансовые сценарии и локальное хранение SQLite с архитектурой MVVM.",
        "decisions": "Локальное хранение позволяет учитывать операции без постоянного подключения к серверу.",
        "status": "Публичный репозиторий мобильного приложения.",
        "limitations": "Облачная синхронизация и результаты эксплуатации не заявляются.",
        "cv": "Разработала приложение Flutter для учёта расходов с SQLite и архитектурой MVVM."
      }
    ],
    "research": "Разговорный ИИ; образовательные технологии; многоязычное обучение; взаимодействие человека и ИИ; персонализированное обучение.",
    "conference": "Участница международной студенческой конференции КФУ «Открываем мир вместе», Казань, 2022.",
    "thesis": "Разработка ИИ-ассистента для изучения испанского языка с использованием больших языковых моделей"
  },
  "projectLinks": {
    "juanito": {
      "tags": [
        "ai",
        "backend"
      ],
      "stack": [
        "Python",
        "Gradio",
        "Ollama",
        "JSON",
        "TTS"
      ],
      "repository": "https://github.com/AmyArgotti/juanito-spanish-assistant"
    },
    "moonlit": {
      "tags": [
        "web",
        "backend"
      ],
      "stack": [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Drizzle",
        "Cloudflare D1"
      ],
      "repository": "https://github.com/AmyArgotti/Moonlit-Shelf",
      "demo": "https://amyargotti.github.io/Moonlit-Shelf/",
      "image": "assets/projects/moonlit.png"
    },
    "chefsito": {
      "tags": [
        "web"
      ],
      "stack": [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "ReportLab"
      ],
      "repository": "https://github.com/AmyArgotti/chefsito-portfolio",
      "demo": "https://amyargotti.github.io/chefsito-portfolio/",
      "image": "assets/projects/chefsito.png"
    },
    "expense": {
      "tags": [
        "mobile"
      ],
      "stack": [
        "Flutter",
        "Dart",
        "SQLite",
        "MVVM"
      ],
      "repository": "https://github.com/AmyArgotti/expense-tracker-app"
    }
  }
};
