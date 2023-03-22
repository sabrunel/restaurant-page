import renderHome from "./modules/Home.js"
import renderMenu from "./modules/Menu.js"
import renderAbout from "./modules/About.js"
import renderContact from "./modules/Contact.js"
import renderNavigation from "./modules/Navigation.js"

renderNavigation();
renderHome();

const content = document.getElementById("content");
const logo = document.querySelector(".logo");
const menuLink = document.getElementById("menu-link");
const aboutLink = document.getElementById("about-link");
const contactLink = document.getElementById("contact-link");

function clearPageContent() {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

logo.addEventListener("click", () => {
    clearPageContent()
    renderHome()
});

menuLink.addEventListener("click", () => {
    clearPageContent()
    renderMenu()
});

aboutLink.addEventListener("click", () => {
    clearPageContent()
    renderAbout()
});

contactLink.addEventListener("click", () => {
    clearPageContent()
    renderContact()
});

