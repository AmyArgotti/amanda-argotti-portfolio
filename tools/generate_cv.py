from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "documents" / "Amanda_Argotti_CV.pdf"


INK = colors.HexColor("#1f2523")
MUTED = colors.HexColor("#5f6963")
ROSE = colors.HexColor("#a75f64")
SAGE = colors.HexColor("#64796d")
LINE = colors.HexColor("#ddd6cc")


def styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=23,
            leading=26,
            textColor=INK,
            spaceAfter=3,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=10.5,
            leading=14,
            textColor=ROSE,
            spaceAfter=6,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.6,
            leading=11.2,
            textColor=MUTED,
            alignment=TA_RIGHT,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.2,
            leading=12,
            textColor=ROSE,
            uppercase=True,
            spaceBefore=8,
            spaceAfter=5,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.2,
            leading=12.5,
            textColor=INK,
            spaceAfter=4,
        ),
        "small": ParagraphStyle(
            "Small",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=11.3,
            textColor=MUTED,
            spaceAfter=3,
        ),
        "item_title": ParagraphStyle(
            "ItemTitle",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.2,
            leading=13,
            textColor=INK,
            spaceBefore=2,
            spaceAfter=1,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.6,
            leading=11,
            textColor=SAGE,
            spaceAfter=4,
        ),
        "tag": ParagraphStyle(
            "Tag",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8,
            leading=10,
            textColor=colors.white,
        ),
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


def main():
    s = styles()
    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=A4,
        rightMargin=16 * mm,
        leftMargin=16 * mm,
        topMargin=15 * mm,
        bottomMargin=14 * mm,
        title="Amanda Argotti CV",
        author="Amanda Argotti",
    )

    story = []

    left = [
        p("Amanda Argotti", s["name"]),
        p("Software Engineering Student | AI & Software Developer", s["role"]),
        p(
            "Multilingual software engineer building practical AI-powered educational systems "
            "with LLMs, NLP, RAG, and Python backend architecture.",
            s["small"],
        ),
    ]
    right = [
        p(
            "amandaargotti@gmail.com<br/>"
            "+7 9178588139<br/>"
            "Kazan, Russia / Ecuador<br/>"
            "Portfolio: amyargotti.github.io/amanda-argotti-portfolio/<br/>"
            "GitHub: github.com/AmyArgotti<br/>"
            "LinkedIn: linkedin.com/in/amanda-argotti",
            s["contact"],
        )
    ]
    header = Table([[left, right]], colWidths=[105 * mm, 68 * mm])
    header.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    story.append(header)
    story.append(HRFlowable(width="100%", thickness=1.1, color=ROSE, spaceAfter=8))

    story += section("Professional Summary", s)
    story.append(
        p(
            "Software Engineering student at Kazan Federal University with hands-on experience "
            "building AI-powered educational systems, mobile applications, and backend services. "
            "Strongest work includes Juanito, a Spanish-learning AI assistant for Russian-speaking "
            "learners using local LLMs, teaching-oriented translation, quizzes, flashcards, reminders, "
            "and personalized learning flows. Interested in AI, NLP, educational technology, backend "
            "systems, human-AI interaction, and multilingual AI applications.",
            s["body"],
        )
    )

    story += section("Education", s)
    story.append(p("Kazan Federal University (KFU)", s["item_title"]))
    story.append(p("Bachelor's Degree in Software Engineering | 2022 - 2026 | Kazan, Russia", s["meta"]))
    story.append(
        p(
            "<b>Diploma / Thesis:</b> Development of an AI Assistant for Learning Spanish Using Large Language Models",
            s["body"],
        )
    )
    story.append(
        p(
            "<b>Relevant areas:</b> Artificial Intelligence, Software Engineering, Database Systems, "
            "Backend Development, NLP & LLM Applications, Human-Computer Interaction, Algorithms & Data Structures.",
            s["small"],
        )
    )

    story += section("Technical Skills", s)
    skills_data = [
        ["Programming", "Python, SQL, Java, Go, Dart, JavaScript"],
        ["AI / NLP", "LLMs, prompt engineering, RAG, Ollama, Whisper STT, TTS, conversational AI"],
        ["Backend", "REST APIs, client-server architecture, SQLite, JSON storage, database design"],
        ["Frontend / Mobile", "Flutter, Gradio, Telegram Bot API, Vue, HTML/CSS"],
        ["Tools", "Git, GitHub, Linux/macOS, VS Code, local AI deployment"],
        ["Languages", "Spanish native, English B2-C1, Russian B1"],
    ]
    table = Table(
        [[p(f"<b>{k}</b>", s["body"]), p(v, s["body"])] for k, v in skills_data],
        colWidths=[36 * mm, 137 * mm],
    )
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
            ]
        )
    )
    story.append(table)

    story += section("Selected Projects", s)
    story.append(p("Juanito - AI Assistant for Learning Spanish", s["item_title"]))
    story.append(
        p(
            "Diploma project | Python, Ollama, SQLite, Gradio, Telegram Bot API, Whisper/TTS | "
            "github.com/AmyArgotti/juanito-spanish-assistant",
            s["meta"],
        )
    )
    story.append(
        bullets(
            [
                "Built an AI-assisted Spanish-learning platform for Russian-speaking users with translation, grammar explanations, vocabulary saving, quizzes, reminders, and conversational tutoring.",
                "Integrated local LLM workflows through Ollama to support teaching-oriented responses rather than simple text generation.",
                "Designed personalized learning flows using saved vocabulary, flashcards, spaced repetition ideas, and learner progress signals.",
                "Added pronunciation support direction through TTS audio and Russian-letter transliteration for beginner-friendly Spanish reading practice.",
            ],
            s["body"],
        )
    )

    story.append(p("Expense Tracker - Flutter Finance Application", s["item_title"]))
    story.append(
        p(
            "Mobile project | Dart, Flutter, SQLite, MVVM, SharedPreferences | "
            "github.com/AmyArgotti/expense-tracker-app",
            s["meta"],
        )
    )
    story.append(
        bullets(
            [
                "Developed a mobile expense tracking app for income, expenses, categories, accounts, and local transaction storage.",
                "Implemented SQLite persistence, MVVM architecture, adaptive navigation, dark mode state saving, and data restore behavior.",
                "Added mobile features including geolocation, receipt photo attachment, reminder notifications, biometric/device credential lock, and service-style sync demo.",
            ],
            s["body"],
        )
    )

    story.append(p("Restaurant Loyalty System", s["item_title"]))
    story.append(p("Freelance project | Python, SQL, APIs", s["meta"]))
    story.append(
        bullets(
            [
                "Developed backend business logic for customer tracking, loyalty points, and restaurant data workflows.",
                "Applied database-oriented thinking to support repeat customer management and operational records.",
            ],
            s["body"],
        )
    )

    story.append(p("Academic Software Engineering Work", s["item_title"]))
    story.append(p("Public GitHub repositories | Java, Vue, JavaScript, HTML/CSS", s["meta"]))
    story.append(
        bullets(
            [
                "Maintained public coursework repositories demonstrating Java programming, calculator implementations, web exercises, Vue practice, and semester project development.",
                "Built a visible record of steady technical growth across programming fundamentals, software design, and web/mobile development.",
            ],
            s["body"],
        )
    )

    story += section("Research Interests", s)
    story.append(
        p(
            "Artificial Intelligence; NLP and conversational AI; educational technology; AI for language learning; "
            "human-AI interaction; personalized learning systems; multilingual AI systems; software engineering.",
            s["body"],
        )
    )

    story += section("Experience With AI Systems", s)
    story.append(
        bullets(
            [
                "Prompt engineering for structured LLM interaction and teaching-oriented response generation.",
                "Context-aware AI workflows with personalization, saved learner data, and retrieval-style adaptation.",
                "Local AI deployment using Ollama and integration planning for speech recognition/pronunciation features.",
            ],
            s["body"],
        )
    )

    story += section("Strengths", s)
    story.append(
        p(
            "Analytical problem solving; fast learner; cross-cultural communication; research-oriented mindset; "
            "independent project development; creative AI builder; international perspective.",
            s["body"],
        )
    )

    story += section("Target Academic / Career Areas", s)
    story.append(
        p(
            "AI developer roles, backend internships, research assistant opportunities, scholarships, and master's "
            "programs in AI, NLP, computer science, HCI, educational technology, and software engineering.",
            s["body"],
        )
    )

    doc.build(story)
    print(OUT)


if __name__ == "__main__":
    main()
