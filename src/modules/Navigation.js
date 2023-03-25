import Element from "./Element.js";
import noodleLogo from '../assets/images/noodle_logo.png';

const body = document.querySelector("body");

export default function renderNavigation() {
    const header = new Element("header", {}, [
        new Element("div", {class:"logo"}, [
            new Element("img", {src: `${noodleLogo}`, class:"logo-img"}),
            new Element("a", {class: "logo-txt"}).setTextContent("Noodlicious"),
        ]),
        new Element("nav", {}, [
            new Element("ul", {class: "navbar"}, [
                new Element("li", {}, [
                    new Element("a", {class: "navlink", id: "menu-link"}).setTextContent("Menu"),
                ]),
                new Element("li", {}, [
                    new Element("a", {class: "navlink", id: "about-link"}).setTextContent("About"),
                ]),
                new Element("li", {}, [
                    new Element("a", {class: "navlink", id: "contact-link"}).setTextContent("Contact"),
                ]),
            ])
        ]),
    ])

    // Insert the header as the body Element's first child
    body.insertAdjacentElement('afterbegin', header.render());
}

