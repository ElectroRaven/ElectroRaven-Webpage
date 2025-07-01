const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const cards = document.querySelectorAll('.card');
const h2Elements = document.querySelectorAll('h2');

const texts = {
    de: {
        title: "Maximilian Grill",
        introduction: "18 Jahre alt | Informatik Schüler an der HTL Donaustadt, Wien",
        aboutMe: "Über mich",
        aboutMeText: "Servus ich bin Max und ich befasse mich leidenschaftlich gerne mit den Themen Software Entwicklung und seit neuestem auch mit Server Administration 💻. Neben meiner technischen Seite, trage ich auch eine große Faszination für die Luftfahrt ✈️ in mir.<br><br>Wenn du mehr über mich wissen möchtest schau dich hier gerne um ;)",
        skills: "Skills",
        certifications: "Zertifizierungen",
        projects: "Projekte/Erfahrungen",
        projectDescription: "Ein innovativer Bahnhofsnavigator, der Nutzern hilft, sich in Bahnhöfen zurechtzufinden. Mit einer benutzerfreundlichen Oberfläche und Echtzeitdaten bietet Bahnly eine nahtlose Erfahrung für Reisende.",
        socials: "Socials",
        footer: "© 2024 Maximilian Grill. Alle Rechte vorbehalten.",
        nav: {
            about: "Über mich",
            skills: "Skills",
            certifications: "Zertifizierungen",
            projects: "Projekte",
            contact: "Socials"
        }
    },
    en: {
        title: "Maximilian Grill",
        introduction: "17 years old | Computer Science student at HTL Donaustadt, Vienna",
        aboutMe: "About Me",
        aboutMeText: "Hi, I'm Max, and I'm passionate about software development and recently also server administration 💻. Besides my technical side, I have a great fascination for aviation ✈️.<br><br>If you want to know more about me, feel free to look around here ;)",
        skills: "Skills",
        certifications: "Certifications",
        projects: "Projects/Experiences",
        projectDescription: "An innovative train station navigator that helps users find their way around train stations. With a user-friendly interface and real-time data, Bahnly provides a seamless experience for travelers.",
        socials: "Socials",
        footer: "© 2024 Maximilian Grill. All rights reserved.",
        nav: {
            about: "About Me",
            skills: "Skills",
            certifications: "Certifications",
            projects: "Projects",
            contact: "Socials"
        }
    }
};

let currentLanguage = 'de';

function updateTexts() {
    document.querySelector('h1').innerText = texts[currentLanguage].title;
    document.querySelector('p').innerText = texts[currentLanguage].introduction;
    document.querySelector('#about h2').innerText = texts[currentLanguage].aboutMe;
    document.querySelector('#about p').innerHTML = texts[currentLanguage].aboutMeText;
    document.querySelector('#skills h2').innerText = texts[currentLanguage].skills;
    document.querySelector('#certifications h2').innerText = texts[currentLanguage].certifications;
    document.querySelector('#projects h2').innerText = texts[currentLanguage].projects;
    document.querySelector('#projects .project p').innerHTML = texts[currentLanguage].projectDescription;
    document.querySelector('#contact h2').innerText = texts[currentLanguage].socials;
    document.querySelector('footer p').innerText = texts[currentLanguage].footer;

    document.querySelector('nav ul li:nth-child(1) a').innerText = texts[currentLanguage].nav.about;
    document.querySelector('nav ul li:nth-child(2) a').innerText = texts[currentLanguage].nav.skills;
    document.querySelector('nav ul li:nth-child(3) a').innerText = texts[currentLanguage].nav.certifications;
    document.querySelector('nav ul li:nth-child(4) a').innerText = texts[currentLanguage].nav.projects;
    document.querySelector('nav ul li:nth-child(5) a').innerText = texts[currentLanguage].nav.contact;
}

modeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    header.classList.toggle('light-mode');
    footer.classList.toggle('light-mode');
    cards.forEach(card => card.classList.toggle('light-mode'));
    h2Elements.forEach(h2 => h2.classList.toggle('light-mode'));

    modeToggle.textContent = body.classList.contains('light-mode') ? '🌙' : '☀️';
});


function toggleLanguage() {
    currentLanguage = currentLanguage === 'de' ? 'en' : 'de';
    updateTexts();
    document.getElementById('language-toggle').innerText = currentLanguage === 'de' ? '🇬🇧' : '🇩🇪';
}

document.getElementById('language-toggle').addEventListener('click', toggleLanguage);

updateTexts();
