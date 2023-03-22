import Element from "./Element.js";

const content = document.getElementById("content");

export default function renderMenu() {
    const container = new Element("div", {class: "container"}, [
        new Element("h1").setTextContent("Menu Page")
    ])

    content.appendChild(container.render());
}

