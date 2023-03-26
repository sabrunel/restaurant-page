import Element from "./Element.js";

const main = document.querySelector("main");

export default function renderHome() {
    const container = new Element("div", {class: "container hero-container grid-wrapper"}, [
        new Element("div", {class: "img-block"}, [
            new Element("img", {class:"photo"}),
        ]),
        new Element("div", {class: "text-block"}, [
            new Element("h1").setTextContent("DISCOVER THE ART OF NOODLE MAKING"),
            new Element("p", {class:"tagline"}).setTextContent("Freshly Handcrafted Noodles Every Day"),
            new Element("button", {class:"cta-btn"}).setTextContent("EXPLORE OUR MENU"),
        ]),
    ])
main.appendChild(container.render());
}


