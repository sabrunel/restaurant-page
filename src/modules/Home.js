import Element from "./Element.js";

const content = document.getElementById("content");

export default function renderHome() {
    const container = new Element("div", {class: "container"}, [
        new Element("h1").setTextContent("Home Page")
    ])
    
    content.appendChild(container.render());
}


