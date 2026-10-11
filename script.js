
// STEP 5 - Mobile Navigation

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    // Close menu when a navigation link is selected
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });
}

// Automatically update the copyright year
const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* =====================================
   STEP 18 - CHATBOT OPEN / CLOSE
===================================== */

const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbotWindow = document.getElementById("chatbot-window");
const chatbotClose = document.getElementById("chatbot-close");
const chatbotInput = document.getElementById("chatbot-input");

if (chatbotToggle && chatbotWindow && chatbotClose) {

    function setChatbotOpen(isOpen) {
        chatbotWindow.hidden = !isOpen;

        chatbotToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        chatbotToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close portfolio assistant"
                : "Open portfolio assistant"
        );

        if (isOpen) {
            chatbotInput.focus();
        } else {
            chatbotToggle.focus();
        }
    }

    chatbotToggle.addEventListener("click", () => {
        setChatbotOpen(chatbotWindow.hidden);
    });

    chatbotClose.addEventListener("click", () => {
        setChatbotOpen(false);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !chatbotWindow.hidden) {
            setChatbotOpen(false);
        }
    });

}

/* =====================================
   STEP 18.5 - CHATBOT KNOWLEDGE BASE
===================================== */

const chatbotForm = document.getElementById("chatbot-form");
const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotSuggestions = document.querySelectorAll(
    ".chatbot-suggestion"
);

/* Portfolio Information */

const portfolioKnowledge = [
    {
        keywords: [
            "contact", "email", "reach", "hire",
            "get in touch", "message"
        ],
        answer:
            "You can contact Maximous at " +
            "maximousmatibag@gmail.com. " +
            "He's interested in opportunities involving " +
            "data analytics, IT support, networking, " +
            "and web development."
    },

    {
        keywords: [
            "insure-track", "insure track",
            "capstone", "insurance system"
        ],
        answer:
            "INSURE-TRACK is Maximous's capstone project. " +
            "It's an integrated insurance management " +
            "and data visualization system developed " +
            "using Python Flask, MySQL, and Chart.js. " +
            "It features insurance records, claims and " +
            "policy monitoring, reports, dashboards, " +
            "and role-based access."
    },

    {
        keywords: [
            "profriends", "volunteer data analyst"
        ],
        answer:
            "At Profriends, Maximous gained volunteer " +
            "data analytics experience involving " +
            "transaction monitoring, data verification, " +
            "and operational reporting. His portfolio " +
            "doesn't display confidential company datasets."
    },

    {
        keywords: [
            "nustar", "internship", "intern"
        ],
        answer:
            "Maximous is completing an IT internship " +
            "at NUSTAR. His experience includes network " +
            "monitoring, switch installation assistance, " +
            "port mapping, VLAN and trunking checks, " +
            "and Excel data cleansing and validation."
    },

    {
        keywords: [
            "networking", "network", "cisco",
            "alcatel", "vlan", "zabbix",
            "putty", "ccna", "lldp", "cdp"
        ],
        answer:
            "Maximous has practical networking exposure " +
            "through his NUSTAR internship, including " +
            "Cisco and Alcatel environments, Zabbix, " +
            "PuTTY, port mapping, VLAN concepts, " +
            "interface checks, and CDP/LLDP. " +
            "He has also completed CCNA-related " +
            "networking coursework, not the full " +
            "Cisco CCNA certification exam."
    },

    {
        keywords: [
            "excel", "spreadsheet", "data cleaning",
            "data cleansing", "data quality", "uom"
        ],
        answer:
            "Maximous has experience using Microsoft " +
            "Excel for data cleansing, verification, " +
            "reporting, and quality checks. At NUSTAR, " +
            "he reviewed product codes, descriptions, " +
            "and units of measurement, then organized " +
            "cleaned and flagged records."
    },

    {
        keywords: [
            "sql", "mysql", "database"
        ],
        answer:
            "Maximous has experience with SQL and " +
            "MySQL for database-related tasks. " +
            "He used SQL and Excel in previous " +
            "technical support and reporting work, " +
            "and MySQL as the database for INSURE-TRACK."
    },

    {
        keywords: [
            "python", "flask", "javascript",
            "programming", "developer", "coding"
        ],
        answer:
            "Maximous has worked with Python, Flask, " +
            "HTML, CSS, JavaScript, and MySQL. " +
            "His INSURE-TRACK capstone demonstrates " +
            "full-stack development and interactive " +
            "data visualization using Chart.js."
    },

    {
        keywords: [
            "1life", "onelife", "desktop support",
            "technical support"
        ],
        answer:
            "At 1Life, Maximous worked in technical " +
            "support and healthcare data operations. " +
            "His responsibilities included helping " +
            "medical staff, troubleshooting systems, " +
            "maintaining database records, and " +
            "preparing SQL and Excel reports."
    },

    {
        keywords: [
            "alorica", "customer service", "bpo"
        ],
        answer:
            "At Alorica, Maximous worked as a customer " +
            "service representative, assisting " +
            "international customers with account " +
            "concerns, transaction-related questions, " +
            "application troubleshooting, and escalations."
    },

    {
        keywords: [
            "ai", "automation", "chatgpt",
            "zapier", "make", "vibe coding"
        ],
        answer:
            "Maximous uses AI-assisted development " +
            "as part of his learning and coding workflow. " +
            "He is also exploring workflow automation " +
            "with beginner-level Zapier and Make skills."
    },

    {
        keywords: [
            "skills", "technologies",
            "tech stack", "tools"
        ],
        answer:
            "Maximous's technical skills include " +
            "Excel, SQL, MySQL, Python, Flask, " +
            "HTML, CSS, JavaScript, Chart.js, " +
            "data cleansing, reporting, " +
            "networking fundamentals, Cisco, " +
            "Alcatel, Zabbix, and PuTTY."
    },

    {
        keywords: [
            "projects", "portfolio", "work samples"
        ],
        answer:
            "Maximous's featured work includes " +
            "INSURE-TRACK, Profriends operational " +
            "data analytics, NUSTAR data cleansing, " +
            "and his Networking Journey. " +
            "You can explore each project through " +
            "its dedicated case study on this website."
    },

    {
        keywords: [
            "education", "college", "degree",
            "university", "student"
        ],
        answer:
            "Maximous is pursuing a Bachelor of " +
            "Science in Information Technology " +
            "at ABE International Business College " +
            "in Urdaneta. His interests include " +
            "data analytics, networking, and software " +
            "development."
    },

    {
        keywords: [
            "who is maximous", "about maximous",
            "tell me about him", "who are you"
        ],
        answer:
            "Maximous Ladjabangsa is an Information " +
            "Technology student with professional " +
            "experience in desktop support, " +
            "customer service, healthcare data, " +
            "and hands-on IT internship work. " +
            "He builds skills across analytics, " +
            "networking, and web development."
    }
];

/* Match questions against the knowledge base */

/* =====================================
   STEP 18.6 - PROJECT LINKS
===================================== */

const portfolioProjectLinks = {
    "insure-track": {
        label: "Explore INSURE-TRACK",
        url: "projects/insure-track.html"
    },

    "profriends": {
        label: "Explore Profriends Case Study",
        url: "projects/profriends.html"
    },

    "nustar": {
        label: "Explore NUSTAR Data Cleansing",
        url: "projects/nustar-data.html"
    },

    "networking": {
        label: "Explore Networking Journey",
        url: "projects/networking.html"
    }
};

/* Associate topics with case studies */

const portfolioTopicProjects = {
    "insure-track": "insure-track",
    "insure track": "insure-track",
    "capstone": "insure-track",
    "insurance system": "insure-track",

    "profriends": "profriends",
    "volunteer data analyst": "profriends",

    "nustar": "nustar",
    "data cleansing": "nustar",
    "data cleaning": "nustar",
    "uom": "nustar",

    "networking": "networking",
    "cisco": "networking",
    "alcatel": "networking",
    "vlan": "networking",
    "zabbix": "networking",
    "lldp": "networking",
    "cdp": "networking"
};


/* =====================================
   SMARTER QUESTION MATCHING
===================================== */

function normalizePortfolioText(text) {
    return text
        .toLowerCase()
        .replace(/[’']/g, "")
        .replace(/[^a-z0-9]+/g, " ")
        .trim();
}

function findPortfolioTopic(question) {

    const normalizedQuestion =
        " " + normalizePortfolioText(question) + " ";

    let bestTopic = null;
    let highestScore = 0;

    for (const topic of portfolioKnowledge) {

        let topicScore = 0;

        for (const keyword of topic.keywords) {

            const normalizedKeyword =
                normalizePortfolioText(keyword);

            if (
                normalizedKeyword &&
                normalizedQuestion.includes(
                    " " + normalizedKeyword + " "
                )
            ) {
                // Longer phrases are more specific.
                const wordCount =
                    normalizedKeyword.split(" ").length;

                topicScore += wordCount * 3;
            }
        }

        if (topicScore > highestScore) {
            highestScore = topicScore;
            bestTopic = topic;
        }
    }

    return bestTopic;
}

function getPortfolioAnswer(question) {

    const matchedTopic = findPortfolioTopic(question);

    if (matchedTopic) {
        return matchedTopic.answer;
    }

    return (
        "I can help you learn about Maximous's " +
        "technical skills, work experience, projects, " +
        "education, and contact details. " +
        "Try asking about INSURE-TRACK, NUSTAR, " +
        "networking, Excel, or SQL."
    );
}

/* Display a new chat message */

function addPortfolioMessage(message, sender) {

    if (!chatbotMessages) return;

    const messageElement = document.createElement("div");

    messageElement.classList.add(
        "chatbot-message",
        sender === "user"
            ? "user-message"
            : "bot-message"
    );

    // Use textContent to prevent HTML injection.
    messageElement.textContent = message;

    chatbotMessages.appendChild(messageElement);

    chatbotMessages.scrollTop =
        chatbotMessages.scrollHeight;
}

/* =====================================
   CHATBOT PROJECT LINK RENDERING
===================================== */

function findPortfolioProject(question) {

    const normalizedQuestion =
        " " + normalizePortfolioText(question) + " ";

    const entries = Object.entries(
        portfolioTopicProjects
    );

    // Prefer the longest matching keyword.
    entries.sort((a, b) => b[0].length - a[0].length);

    for (const [keyword, projectId] of entries) {

        const normalizedKeyword =
            normalizePortfolioText(keyword);

        if (
            normalizedQuestion.includes(
                " " + normalizedKeyword + " "
            )
        ) {
            return portfolioProjectLinks[projectId];
        }
    }

    return null;
}

function addPortfolioProjectLink(question) {

    if (!chatbotMessages) return;

    const project = findPortfolioProject(question);

    if (!project) return;

    const link = document.createElement("a");

    link.href = project.url;
    link.textContent = project.label + " →";
    link.className = "chatbot-project-link";
    link.setAttribute(
        "aria-label",
        "Open " + project.label
    );

    chatbotMessages.appendChild(link);

    chatbotMessages.scrollTop =
        chatbotMessages.scrollHeight;
}



/* =====================================
   CHATBOT QUESTION HANDLER
===================================== */

function askPortfolioAssistant(question) {

    const cleanQuestion = question.trim();

    if (!cleanQuestion) return;

    // Display the visitor's question.
    addPortfolioMessage(cleanQuestion, "user");

    // Find the best available answer.
    const answer = getPortfolioAnswer(cleanQuestion);

    // Display the assistant's response.
    addPortfolioMessage(answer, "bot");

    // Provide a related project link when relevant.
    addPortfolioProjectLink(cleanQuestion);
}

/* Handle typed messages */

if (chatbotForm && chatbotInput && chatbotMessages) {

    chatbotForm.addEventListener("submit", event => {

        event.preventDefault();

        const question = chatbotInput.value;

        if (!question.trim()) return;

        askPortfolioAssistant(question);

        chatbotInput.value = "";
        chatbotInput.focus();
    });
}

/* Handle suggested questions */

chatbotSuggestions.forEach(button => {

    button.addEventListener("click", () => {

        const question = button.textContent.trim();

        askPortfolioAssistant(question);
    });
});
