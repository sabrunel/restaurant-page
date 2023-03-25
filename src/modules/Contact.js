import Element from "./Element.js";

const main = document.querySelector("main");

export default function renderContact() {
    const container = new Element("div", {class: "container"}, [
        new Element("h2").setTextContent("FIND US"),
    ])
    
    main.appendChild(container.render());
}
