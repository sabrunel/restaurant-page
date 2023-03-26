import Element from "./Element.js";

const main = document.querySelector("main");

export default function renderMenu() {
    const container = new Element("div", {class: "container menu-container"}, [
        new Element("h2").setTextContent("TRY OUR NOODLES"),
        new Element("div", {class: "grid-wrapper"}, [
            new Element("div", {class:"menu-card"}, [
                new Element("h3", {class:"card-title"}).setTextContent("Yakisoba"),
                new Element("p", {class:"card-description"}).setTextContent("Stir-fried noodles with vegetables and your choice of meat, seasoned with our special house sauce. A classic Japanese dish with a twist."),
                new Element("p", {class:"card-price"}).setTextContent("15€"),
            ]),
            new Element("div", {class:"menu-card"}, [
                new Element("h3", {class:"card-title"}).setTextContent("Shoyu Ramen"),
                new Element("p", {class:"card-description"}).setTextContent("Savory pork broth infused with soy sauce, served with noodles, tender pork slices, bamboo shoots, seaweed, and a soft boiled egg. A traditional delight!"),
                new Element("p", {class:"card-price"}).setTextContent("15€"),
            ]),
            new Element("div", {class:"menu-card"}, [
                new Element("h3", {class:"card-title"}).setTextContent("Miso Ramen"),
                new Element("p", {class:"card-description"}).setTextContent("Rich and flavorful miso broth with noodles, topped with tender pork slices, bamboo shoots, seaweed, and a soft boiled egg. A comforting bowl of umami goodness!"),
                new Element("p", {class:"card-price"}).setTextContent("12€"),
            ]),
        ])
    ])
    main.appendChild(container.render());
}

