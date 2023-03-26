/* eslint-disable no-useless-escape */
import Element from "./Element.js";

const main = document.querySelector("main");

export default function renderContact() {
    const container = new Element("div", {class: "container contact-container"}, [
        new Element("h2").setTextContent("CONTACT US"),
        new Element("div", {class: "grid-wrapper"}, [
            new Element("div", {class:"form-block"}, [
                new Element("form", {action:"#", method:"POST", name:"contact-form"}, [
                    new Element("div", {class:"form-group"}, [
                        new Element("label", {for:"first-name"}).setTextContent("First name"),
                        new Element("input", {
                            type:"text",
                            name:"first-name",
                            pattern:"^[A-Za-z]{1,70}$"
                        }),
                    ]),
                    new Element("div", {class:"form-group"}, [
                        new Element("label", {for:"last-name"}).setTextContent("Last name"),
                        new Element("input", {
                            type:"text",
                            name:"last-name",
                            pattern:"^[A-Za-z]{1,70}$"
                        }),
                    ]),
                    new Element("div", {class:"form-group"}, [
                        new Element("label", {for:"email"}).setTextContent("Email address"),
                        new Element("input", {
                            type:"email",
                            name:"email",
                            pattern:"^[-\w\.]+@([-\w]+\.)+[-\w]{2,}$"
                        }),
                    ]),
                    new Element("div", {class:"form-group"}, [
                        new Element("label", {for:"phone-nb"}).setTextContent("Phone number"),
                        new Element("input", {
                            type:"text",
                            name:"phone-nb",
                            pattern:"^[0-9]{10}$"
                        }),
                    ]),
                    new Element("div", {class:"form-group wide"}, [
                        new Element("label", {for:"message-content"}).setTextContent("Message"),
                        new Element("textarea", {
                            name:"message-content",
                            rows:6
                        }),
                    ]),
                    new Element("div", {class:"form-group wide"}, [
                        new Element("input", {
                            type:"submit",
                            value:"SEND"
                        }),
                    ]),
                ]),
            ]),    
            new Element("div", {class: "map-block"}, [
                new Element("iframe", {
                    src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46221.33399458303!2d3.8391500388676385!3d43.610010855326266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af0725dd9db1%3A0xad8756742894e802!2sMontpellier!5e0!3m2!1sfr!2sfr!4v1679740103050!5m2!1sfr!2sfr", 
                    loading:"lazy",
                    referrerpolicy:"no-referrer-when-downgrade"
                    })
                ]),
            ]),
        ])
    main.appendChild(container.render());
}
