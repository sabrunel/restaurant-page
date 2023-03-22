import Element from "./Element.js";

const content = document.getElementById("content");

export default function renderAbout() {
    const container = new Element("div", {class: "container"}, [
        new Element("h1").setTextContent("About Page")
    ])

    content.appendChild(container.render());
}
