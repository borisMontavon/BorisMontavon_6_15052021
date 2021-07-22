import FormValidation from "./form-validation";

export default class ContactButton {
    constructor() {
        this.template = "<button id='{{id}}' class='contact-button' aria-label='Contactez-moi' tabindex='0'>Contactez-moi</button>";
    }

    render() {
        const desktopParentElement = document.getElementById("photographer-section");
        const mobileParentElement = document.getElementsByTagName("main")[0];
        const desktopButton = this.template.replace("{{id}}", "desktop-contact-button");
        const mobileButton = this.template.replace("{{id}}", "mobile-contact-button");

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
                
                new FormValidation().isFormFieldsValid();
            });
        });
    }
}