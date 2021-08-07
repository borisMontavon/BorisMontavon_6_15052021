import { isFormFieldsValid } from "../services/form-validation-service";

export default class ContactButton {
    render() {
        const desktopParentElement = document.getElementById("photographer-section");
        const mobileParentElement = document.getElementsByTagName("main")[0];

        let template = "<button id='{{id}}' class='contact-button' aria-label='Contactez-moi' tabindex='0'>Contactez-moi</button>";

        const desktopButton = template.replace("{{id}}", "desktop-contact-button");
        const mobileButton = template.replace("{{id}}", "mobile-contact-button");

        desktopParentElement.insertAdjacentHTML("beforeend", desktopButton);
        mobileParentElement.insertAdjacentHTML("beforeend", mobileButton);
        
        this.handleOpenForm();
    }

    handleOpenForm() {
        const contactButtons = document.getElementsByClassName("contact-button");

        Array.prototype.forEach.call(contactButtons, (element) => {
            element.addEventListener("click", () => {
                const form = document.getElementById("form-background");
                const body = document.body;
                const firstInput = document.getElementById("fname");

                form.classList.toggle("d-block");
                body.classList.toggle("overflow");
                firstInput.focus();
                
                isFormFieldsValid();
            });
        });
    }
}