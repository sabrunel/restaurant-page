import Element from "./Element.js";

const body = document.querySelector("body");

export default function renderNavigation() {
    const header = new Element("header", {}, [
        new Element("a", {class: "logo"}).setTextContent("Logo"),
        new Element("nav", {}, [
            new Element("ul", {class: "navbar"}, [
                new Element("li", {}, [
                    new Element("a", {class: "navlink", id: "menu-link"}).setTextContent("Menu")
                ]),
                new Element("li", {}, [
                    new Element("a", {class: "navlink", id: "about-link"}).setTextContent("About")
                ]),
                new Element("li", {}, [
                    new Element("a", {class: "navlink", id: "contact-link"}).setTextContent("Contact")
                ]),
            ])
        ]),
    ])

    // Insert the header as the body Element's first child
    body.insertAdjacentElement('afterbegin', header.render());
}


