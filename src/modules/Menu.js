import Element from "./Element.js";

const main = document.querySelector("main");

export default function renderMenu() {
    const container = new Element("div", {class: "container"}, [
        new Element("h2").setTextContent("TRY OUR NOODLES"),
    ])
    
    main.appendChild(container.render());
}

