from pathlib import Path
from shutil import copyfile

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import HRFlowable, ListFlowable, ListItem, Paragraph, SimpleDocTemplate, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "assets" / "documents"

INK = colors.HexColor("#1f2523")
MUTED = colors.HexColor("#5f6963")
ROSE = colors.HexColor("#a75f64")
SAGE = colors.HexColor("#64796d")
LINE = colors.HexColor("#ddd6cc")


def register_fonts():
    normal = "/System/Library/Fonts/Supplemental/Arial.ttf"
    bold = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
    pdfmetrics.registerFont(TTFont("ArialCV", normal))
    pdfmetrics.registerFont(TTFont("ArialCV-Bold", bold))
    pdfmetrics.registerFontFamily("ArialCV", normal="ArialCV", bold="ArialCV-Bold")


def styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle("Name", parent=base["Normal"], fontName="ArialCV-Bold", fontSize=23, leading=26, textColor=INK, spaceAfter=3),
        "role": ParagraphStyle("Role", parent=base["Normal"], fontName="ArialCV", fontSize=10.5, leading=14, textColor=ROSE, spaceAfter=6),
        "contact": ParagraphStyle("Contact", parent=base["Normal"], fontName="ArialCV", fontSize=8.4, leading=11.2, textColor=MUTED, alignment=TA_RIGHT),
        "section": ParagraphStyle("Section", parent=base["Normal"], fontName="ArialCV-Bold", fontSize=9.2, leading=12, textColor=ROSE, spaceBefore=8, spaceAfter=5),
        "body": ParagraphStyle("Body", parent=base["Normal"], fontName="ArialCV", fontSize=9.0, leading=12.3, textColor=INK, spaceAfter=4),
        "small": ParagraphStyle("Small", parent=base["Normal"], fontName="ArialCV", fontSize=8.4, leading=11.2, textColor=MUTED, spaceAfter=3),
        "item_title": ParagraphStyle("ItemTitle", parent=base["Normal"], fontName="ArialCV-Bold", fontSize=10.0, leading=12.7, textColor=INK, spaceBefore=2, spaceAfter=1),
        "meta": ParagraphStyle("Meta", parent=base["Normal"], fontName="ArialCV", fontSize=8.5, leading=10.8, textColor=SAGE, spaceAfter=4),
    }


def p(text, style):
    return Paragraph(text, style)


def bullets(items, style):
    return ListFlowable(
        [ListItem(p(item, style), leftIndent=8, bulletColor=ROSE) for item in items],
        bulletType="bullet",
        start="circle",
        leftIndent=12,
        bulletFontSize=5,
        bulletOffsetY=2,
        spaceAfter=4,
    )


def section(title, s):
    return [p(title.upper(), s["section"]), HRFlowable(width="100%", thickness=0.6, color=LINE, spaceAfter=6)]


CVS = {
    "EN": {
        "file": "Amanda_Argotti_CV_EN.pdf",
        "role": "Software Engineer | AI & Python Backend Developer",
        "pitch": "Multilingual engineer building practical AI, backend, and mobile products.",
        "summary_title": "Professional Summary",
        "summary": "Software Engineer and Kazan Federal University graduate with hands-on experience building AI-powered educational systems, mobile applications, and backend services. Built Juanito, a multilingual learning assistant using local LLMs, personalized learning flows, speech tools, and Python services. Strong in translating product requirements into structured, usable software.",
        "education_title": "Education",
        "degree": "Bachelor of Science in Software Engineering | 2022 - 2026 | Kazan, Russia",
        "thesis": "<b>Diploma / Thesis:</b> Development of an AI Assistant for Learning Spanish Using Large Language Models",
        "areas": "<b>Relevant areas:</b> Artificial Intelligence, Software Engineering, Database Systems, Backend Development, NLP & LLM Applications, Human-Computer Interaction, Algorithms & Data Structures.",
        "skills_title": "Technical Skills",
        "skills": [
            ["Programming", "Python, SQL, Java, Go, Dart, JavaScript"],
            ["AI / NLP", "LLMs, prompt engineering, RAG, Ollama, Whisper STT, TTS, conversational AI"],
            ["Backend", "REST APIs, client-server architecture, SQLite, JSON storage, database design"],
            ["Frontend / Mobile", "Flutter, Gradio, Telegram Bot API, Vue, HTML/CSS"],
            ["Tools", "Git, GitHub, Linux/macOS, VS Code, local AI deployment"],
            ["Languages", "Spanish native, English B2-C1, Russian B1"],
        ],
        "projects_title": "Selected Projects",
        "projects": [
            ["Juanito - AI Assistant for Learning Spanish", "Diploma project | Python, Ollama, SQLite, Gradio, Telegram Bot API, Whisper/TTS | github.com/AmyArgotti/juanito-spanish-assistant", [
                "Built an AI-assisted Spanish-learning platform for Russian-speaking users with translation, grammar explanations, vocabulary, quizzes, reminders, and conversational tutoring.",
                "Integrated local LLM workflows through Ollama and designed personalized learning flows using saved vocabulary, flashcards, and learner progress.",
            ]],
            ["Expense Tracker - Flutter Finance Application", "Mobile project | Dart, Flutter, SQLite, MVVM, SharedPreferences | github.com/AmyArgotti/expense-tracker-app", [
                "Developed a mobile expense tracking app for income, expenses, categories, accounts, and local transaction storage.",
                "Implemented SQLite persistence, MVVM architecture, adaptive navigation, state restoration, geolocation, notifications, receipt photos, and biometric protection.",
            ]],
            ["Restaurant Loyalty System", "Freelance project | Python, SQL, APIs", [
                "Developed backend business logic for customer tracking, loyalty points, and restaurant data workflows.",
                "Applied database-oriented thinking to support repeat customer management and operational records.",
            ]],
        ],
        "research_title": "Research Interests",
        "research": "Artificial Intelligence; NLP and conversational AI; educational technology; AI for language learning; human-AI interaction; personalized learning systems; multilingual AI systems; software engineering.",
        "ai_title": "Experience With AI Systems",
        "ai": [
            "Prompt engineering for structured LLM interaction and teaching-oriented response generation.",
            "Context-aware AI workflows with personalization, saved learner data, and retrieval-style adaptation.",
            "Local AI deployment using Ollama and integration planning for speech recognition/pronunciation features.",
        ],
        "target_title": "Target Academic / Career Areas",
        "target": "AI developer roles, backend roles, research assistant opportunities, scholarships, and master's programs in AI, NLP, computer science, HCI, educational technology, and software engineering.",
    },
    "ES": {
        "file": "Amanda_Argotti_CV_ES.pdf",
        "role": "Ingeniera de Software | IA y Backend Python",
        "pitch": "Ingeniera multilingüe que construye productos prácticos de IA, backend y mobile.",
        "summary_title": "Resumen Profesional",
        "summary": "Ingeniera de Software graduada de la Universidad Federal de Kazán, con experiencia práctica en sistemas educativos con IA, aplicaciones móviles y servicios backend. Desarrollé Juanito, un asistente de aprendizaje multilingüe con LLMs locales, flujos personalizados, herramientas de voz y servicios Python. Convierto requisitos de producto en software estructurado y fácil de usar.",
        "education_title": "Educación",
        "degree": "Licenciatura en Ingeniería de Software | 2022 - 2026 | Kazán, Rusia",
        "thesis": "<b>Diploma / Tesis:</b> Desarrollo de un Asistente de IA para Aprender Español usando Modelos de Lenguaje Grandes",
        "areas": "<b>Áreas relevantes:</b> Inteligencia Artificial, Ingeniería de Software, Bases de Datos, Backend, NLP y LLMs, Interacción Humano-Computadora, Algoritmos y Estructuras de Datos.",
        "skills_title": "Habilidades Técnicas",
        "skills": [
            ["Programación", "Python, SQL, Java, Go, Dart, JavaScript"],
            ["IA / NLP", "LLMs, prompt engineering, RAG, Ollama, Whisper STT, TTS, IA conversacional"],
            ["Backend", "REST APIs, arquitectura cliente-servidor, SQLite, JSON, diseño de bases de datos"],
            ["Frontend / Mobile", "Flutter, Gradio, Telegram Bot API, Vue, HTML/CSS"],
            ["Herramientas", "Git, GitHub, Linux/macOS, VS Code, despliegue local de IA"],
            ["Idiomas", "Español nativo, Inglés B2-C1, Ruso B1"],
        ],
        "projects_title": "Proyectos Seleccionados",
        "projects": [
            ["Juanito - Asistente de IA para Aprender Español", "Proyecto de diploma | Python, Ollama, SQLite, Gradio, Telegram Bot API, Whisper/TTS | github.com/AmyArgotti/juanito-spanish-assistant", [
                "Construí una plataforma de español para usuarios rusohablantes con traducción, gramática, vocabulario, cuestionarios, recordatorios y tutor conversacional.",
                "Integré LLMs locales mediante Ollama y diseñé flujos personalizados con vocabulario, tarjetas de estudio y señales de progreso.",
            ]],
            ["Expense Tracker - Aplicación Financiera en Flutter", "Proyecto móvil | Dart, Flutter, SQLite, MVVM, SharedPreferences | github.com/AmyArgotti/expense-tracker-app", [
                "Desarrollé una app móvil para registrar ingresos, gastos, categorías, cuentas y transacciones locales.",
                "Implementé SQLite, MVVM, navegación adaptativa, restauración de estado, geolocalización, fotos de recibos, notificaciones y protección biométrica.",
            ]],
            ["Sistema de Fidelización para Restaurante", "Proyecto freelance | Python, SQL, APIs", [
                "Desarrollé lógica backend para seguimiento de clientes, puntos de fidelidad y flujos de datos.",
                "Apliqué diseño de bases de datos para apoyar operaciones y gestión de clientes recurrentes.",
            ]],
        ],
        "research_title": "Intereses de Investigación",
        "research": "Inteligencia Artificial; NLP e IA conversacional; tecnología educativa; IA para aprendizaje de idiomas; interacción humano-IA; sistemas personalizados; IA multilingüe; ingeniería de software.",
        "ai_title": "Experiencia con Sistemas de IA",
        "ai": [
            "Prompt engineering para interacción estructurada con LLMs y respuestas orientadas a enseñanza.",
            "Flujos de IA context-aware con personalización, datos guardados del usuario y adaptación tipo retrieval.",
            "Despliegue local de IA con Ollama e integración de funciones de voz/pronunciación.",
        ],
        "target_title": "Áreas Académicas / Profesionales",
        "target": "Roles de desarrolladora de IA, backend, oportunidades de investigación, becas y maestrías en IA, NLP, informática, HCI, tecnología educativa e ingeniería de software.",
    },
    "RU": {
        "file": "Amanda_Argotti_CV_RU.pdf",
        "role": "Инженер-программист | AI и Python Backend",
        "pitch": "Многоязычный инженер, создающий практические AI, backend и мобильные продукты.",
        "summary_title": "Профессиональное резюме",
        "summary": "Инженер-программист, выпускница Казанского федерального университета, с практическим опытом разработки образовательных AI-систем, мобильных приложений и backend-сервисов. Создала Juanito - многоязычного учебного ассистента с локальными LLM, персонализированными сценариями, речевыми инструментами и Python-сервисами. Умею превращать требования к продукту в структурированный и удобный софт.",
        "education_title": "Образование",
        "degree": "Бакалавр программной инженерии | 2022 - 2026 | Казань, Россия",
        "thesis": "<b>Диплом:</b> Разработка AI-ассистента для изучения испанского языка с использованием LLM",
        "areas": "<b>Ключевые области:</b> Artificial Intelligence, Software Engineering, базы данных, backend, NLP и LLM, Human-Computer Interaction, алгоритмы и структуры данных.",
        "skills_title": "Технические навыки",
        "skills": [
            ["Программирование", "Python, SQL, Java, Go, Dart, JavaScript"],
            ["AI / NLP", "LLMs, prompt engineering, RAG, Ollama, Whisper STT, TTS, conversational AI"],
            ["Backend", "REST APIs, client-server architecture, SQLite, JSON storage, database design"],
            ["Frontend / Mobile", "Flutter, Gradio, Telegram Bot API, Vue, HTML/CSS"],
            ["Инструменты", "Git, GitHub, Linux/macOS, VS Code, local AI deployment"],
            ["Языки", "Испанский родной, английский B2-C1, русский B1"],
        ],
        "projects_title": "Избранные проекты",
        "projects": [
            ["Juanito - AI-ассистент для изучения испанского", "Дипломный проект | Python, Ollama, SQLite, Gradio, Telegram Bot API, Whisper/TTS | github.com/AmyArgotti/juanito-spanish-assistant", [
                "Создала платформу для русскоязычных пользователей с переводом, грамматикой, словарем, тестами, напоминаниями и разговорным помощником.",
                "Интегрировала локальные LLM через Ollama и спроектировала персональные сценарии на основе словаря, карточек и прогресса.",
            ]],
            ["Expense Tracker - Flutter-приложение для финансов", "Мобильный проект | Dart, Flutter, SQLite, MVVM, SharedPreferences | github.com/AmyArgotti/expense-tracker-app", [
                "Разработала мобильное приложение для учета доходов, расходов, категорий, счетов и локальных транзакций.",
                "Реализовала SQLite, MVVM, адаптивную навигацию, восстановление состояния, геолокацию, фото чеков, уведомления и биометрическую защиту.",
            ]],
            ["Система лояльности для ресторана", "Freelance project | Python, SQL, APIs", [
                "Разработала backend-логику для клиентов, loyalty points и data workflows.",
                "Применила database design для поддержки операций и учета постоянных клиентов.",
            ]],
        ],
        "research_title": "Исследовательские интересы",
        "research": "Artificial Intelligence; NLP и conversational AI; образовательные технологии; AI для изучения языков; human-AI interaction; personalized learning systems; multilingual AI; software engineering.",
        "ai_title": "Опыт с AI-системами",
        "ai": [
            "Prompt engineering для структурированного LLM-взаимодействия и обучающих ответов.",
            "Context-aware AI workflows с персонализацией, данными пользователя и retrieval-style adaptation.",
            "Local AI deployment с Ollama и планирование интеграции speech/pronunciation features.",
        ],
        "target_title": "Академические / карьерные направления",
        "target": "AI developer roles, backend roles, research assistant opportunities, стипендии и магистратуры в AI, NLP, Computer Science, HCI, образовательных технологиях и software engineering.",
    },
}


def build_cv(lang, data):
    s = styles()
    out = OUT_DIR / data["file"]
    doc = SimpleDocTemplate(str(out), pagesize=A4, rightMargin=16 * mm, leftMargin=16 * mm, topMargin=15 * mm, bottomMargin=14 * mm, title=f"Amanda Argotti CV {lang}", author="Amanda Argotti")
    story = []

    left = [p("Amanda Argotti", s["name"]), p(data["role"], s["role"]), p(data["pitch"], s["small"])]
    right = [p(
        '<link href="mailto:amandaargotti@gmail.com">amandaargotti@gmail.com</link><br/>'
        '<link href="tel:+79178588139">+7 917 858-81-39</link><br/>'
        'Kazan, Russia / Ecuador<br/>'
        '<link href="https://amyargotti.github.io/amanda-argotti-portfolio/">Portfolio</link> · '
        '<link href="https://github.com/AmyArgotti">GitHub</link> · '
        '<link href="https://www.linkedin.com/in/amanda-argotti">LinkedIn</link>',
        s["contact"],
    )]
    header = Table([[left, right]], colWidths=[105 * mm, 68 * mm])
    header.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 8)]))
    story += [header, HRFlowable(width="100%", thickness=1.1, color=ROSE, spaceAfter=8)]

    story += section(data["summary_title"], s)
    story.append(p(data["summary"], s["body"]))

    story += section(data["skills_title"], s)
    table = Table([[p(f"<b>{k}</b>", s["body"]), p(v, s["body"])] for k, v in data["skills"]], colWidths=[36 * mm, 137 * mm])
    table.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 3)]))
    story.append(table)

    story += section(data["projects_title"], s)
    for title, meta, points in data["projects"]:
        story.append(p(title, s["item_title"]))
        story.append(p(meta, s["meta"]))
        story.append(bullets(points, s["body"]))

    story += section(data["education_title"], s)
    story.append(p("Kazan Federal University (KFU)", s["item_title"]))
    story.append(p(data["degree"], s["meta"]))
    story.append(p(data["thesis"], s["body"]))
    story.append(p(data["areas"], s["small"]))

    doc.build(story)
    return out


def main():
    register_fonts()
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    generated = [build_cv(lang, data) for lang, data in CVS.items()]
    copyfile(OUT_DIR / "Amanda_Argotti_CV_EN.pdf", OUT_DIR / "Amanda_Argotti_CV.pdf")
    for path in generated:
        print(path)
    print(OUT_DIR / "Amanda_Argotti_CV.pdf")


if __name__ == "__main__":
    main()
