const body = document.querySelector('body');
const navTemplate = `
    <nav>
        <ul class="nav-items">
            <li class="nav-item logo">Nicholas Klaene</li>
            <li class="nav-item"><a href="index.html">Work</a></li>
            <li class="nav-item"><a href="about.html">About</a></li>
            <li class="nav-item"><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
`
const footerTemplate = `
    <footer>
        
        <p class="icons">
            <a href="https://github.com/Nklaene" class="fab fa-github"></a>
            <a href="https://www.linkedin.com/in/nicholas-klaene/" class="fab fa-linkedin-in"></a>
            <a href="mailto:nicholasklaene@gmail.com" class="fas fa-envelope"></a>
        </p>
        <p class="copy">Nicholas Klaene &copy; 2020</p>

    </footer>
`


htmlToElement = html => {
    let template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
};

const navHTML = htmlToElement(navTemplate);
const footerHTML = htmlToElement(footerTemplate);
body.prepend(navHTML);
body.append(footerHTML);