import Element from "./Element.js";

const main = document.querySelector("main");

export default function renderHome() {
    const container = new Element("div", {class: "hero"}, [
        new Element("div", {class: "left-col"}, [
            new Element("h1").setTextContent("DISCOVER THE ART OF NOODLE MAKING"),
            new Element("p", {class:"tagline"}).setTextContent("Freshly Handcrafted Noodles Every Day"),
            new Element("button", {class:"cta-btn"}).setTextContent("Explore Our Menu"),
        ]),
        new Element("div", {class: "right-col"}, [
            new Element("img", {class:"photo"}),
        ]),
    ])
main.appendChild(container.render());
}


