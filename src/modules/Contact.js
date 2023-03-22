import Element from "./Element.js";

const content = document.getElementById("content");

export default function renderContact() {
    const container = new Element("div", {class: "container"}, [
        new Element("h1").setTextContent("Contact Page")
    ])

    content.appendChild(container.render());
}
