const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const titleHeader = document.querySelector("#title-header");

const FINAL_TEXT = "BARROSDEV";
let interval = null;

// Force final value
titleHeader.dataset.value = FINAL_TEXT;

titleHeader.addEventListener("mouseover", (event) => {
    let iterations = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.textContent = FINAL_TEXT
            .split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return FINAL_TEXT[index];
                }
                return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("");

        iterations += 0.5;

        if (iterations >= FINAL_TEXT.length) {
            clearInterval(interval);
            event.target.textContent = FINAL_TEXT;
        }
    }, 50);
});

// Optional auto-trigger
titleHeader.dispatchEvent(new Event("mouseover"));

const translations = {
    "pt-br": {
        /* ===== HEADER / NAV ===== */
        title: "GABRIEL DEV",
        home: "INÍCIO",
        projects: "PROJETOS",
        about: "SOBRE",
        contact: "CONTATO",

        /* ===== HOME ===== */
        home_subtitle: "Ajudo pequenas empresas a se organizarem com tecnologia simples.",

        /* ===== FOOTER ===== */
        created_by: "Criado por: Gabriel Barros",
        rights: `© ${new Date().getFullYear()} Gabriel Dev. Todos os direitos reservados.`,

        /* ===== ABOUT ===== */
        about_title: "Sobre mim:",
        about_text: `
            Gabriel Barros é um profissional com uma trajetória diversa e grande paixão por tecnologia.
            A educação sempre teve um papel fundamental em sua jornada, culminando em sua formação em
            ciência da computação. Com anos de experiência em TI, tanto como desenvolvedor quanto como suporte,
            está pronto para ajudar no que for necessário. <br><br>

            <span>
                Atuou como desenvolvedor .NET com foco em backend e também como desenvolvedor Angular no frontend,
                exercendo ambas as funções e desenvolvendo novas habilidades. Além disso, lecionou programação
                na maior escola técnica da América Latina.
            </span>
        `,

        /* ===== CONTACT ===== */
        contact_name: "Seu nome:",
        contact_email: "Seu e-mail:",
        contact_message: "Sua mensagem:",
        contact_submit: "ENVIAR",

        /* ===== PROJECTS ===== */
        project_drone: "Biblioteca desenvolvida para auxiliar programadores na criação de projetos para missões com VANTs.",
        project_rpg: "Bot desenvolvido com DSharpPlus e Lavalink para rolar dados e tocar músicas em campanhas de RPG.",
        project_portfolio: "Portfólio criado com HTML, CSS e JavaScript puro para apresentação de projetos.",
        details: "DETALHES"
    },

    "en": {
        /* ===== HEADER / NAV ===== */
        title: "GABRIEL DEV",
        home: "HOME",
        projects: "PROJECTS",
        about: "ABOUT",
        contact: "CONTACT",

        /* ===== HOME ===== */
        home_subtitle: "I help small businesses organize themselves using simple technology.",

        /* ===== FOOTER ===== */
        created_by: "Created by: Gabriel Barros",
        rights: `© ${new Date().getFullYear()} Gabriel Dev. All rights reserved.`,

        /* ===== ABOUT ===== */
        about_title: "About me:",
        about_text: `
            Gabriel Barros is a professional with a diverse background and a passion for technology.
            Education has played a significant role in his journey, culminating in a degree in computer science.
            With years of experience in IT as both a developer and support professional, he is ready to help
            with whatever you need. <br><br>

            <span>
                He worked as a .NET backend developer and also as an Angular frontend developer, performing
                both roles and developing new skills. He has also taught programming at the largest technical
                school in Latin America.
            </span>
        `,

        /* ===== CONTACT ===== */
        contact_name: "Your name:",
        contact_email: "Your email:",
        contact_message: "Your message:",
        contact_submit: "SUBMIT",

        /* ===== PROJECTS ===== */
        project_drone: "A library developed to help programmers create projects for UAV missions.",
        project_rpg: "A DSharpPlus bot with Lavalink to roll dice and play music for tabletop RPG campaigns.",
        project_portfolio: "A portfolio built with pure HTML, CSS, and JavaScript to showcase projects.",
        details: "DETAILS"
    }
};


let currentLang = localStorage.getItem("lang") || "pt-br";
const toggleBtn = document.getElementById("lang-toggle");


function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(el => {
        const key = el.dataset.i18nHtml;
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    currentLang = lang;
    localStorage.setItem("lang", lang);

    // 🔥 AQUI o botão troca o texto
    toggleBtn.textContent = lang === "pt-br" ? "EN" : "PT";
}



toggleBtn.addEventListener("click", () => {
    setLanguage(currentLang === "pt-br" ? "en" : "pt-br");
});

setLanguage(currentLang);