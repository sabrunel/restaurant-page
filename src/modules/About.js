import Element from "./Element.js";

const main = document.querySelector("main");

export default function renderAbout() {
    const container = new Element("div", {class: "container about-container grid-wrapper"}, [
        new Element("div", {class: "img-block"}),    
        new Element("div", {class: "text-block"}, [
            new Element("h2").setTextContent("WHO ARE WE?"),
            new Element("p").setTextContent("At our noodle restaurant located in the sunny city of Montpellier, we take pride in offering a unique dining experience that combines the best of traditional Japanese noodles with a modern twist."),
            new Element("p").setTextContent("Our passion for creating fresh and authentic dishes inspired by the rich culture and flavors of Japan drives everything we do. From our handcrafted noodles made daily to our carefully curated ingredients, we strive to bring you a truly exceptional culinary journey."),               
            new Element("p").setTextContent("Join us at our cozy and welcoming restaurant and discover the art of noodle making like never before."),                    
        ]),
    ])
    main.appendChild(container.render());
}
