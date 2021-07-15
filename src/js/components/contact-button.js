import FormValidation from "./form-validation";

export default class ContactButton {
    constructor() {
        this.contactButtonClass = "contact-button";
        this.accessibilityButton = "Contactez-moi"
    }

    render() {
        const desktopParentElement = document.getElementById("photographer-section");
        const mobileParentElement = document.getElementsByTagName("main")[0];

        const desktopButton = document.createElement("button");

        desktopButton.setAttribute("class", this.contactButtonClass);
        desktopButton.setAttribute("id", "desktop-contact-button");
        desktopButton.setAttribute("aria-label", this.accessibilityButton);
        desktopButton.setAttribute("tabindex", "0");
        desktopButton.innerHTML = "Contactez-moi";

        desktopParentElement.appendChild(desktopButton);

        const mobileButton = document.createElement("button");

        mobileButton.setAttribute("class", this.contactButtonClass);
        mobileButton.setAttribute("id", "mobile-contact-button");
        mobileButton.setAttribute("aria-label", this.accessibilityButton);
        mobileButton.innerHTML = "Contactez-moi";

        mobileParentElement.appendChild(mobileButton);
        this.handleOpenForm();
        this.handleKeyNavigationInForm();
    }

    handleOpenForm() {
        const contactButtons = document.getElementsByClassName(this.contactButtonClass);

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

    handleKeyNavigationInForm(event) {
        const form = document.getElementById("form-background");
        const body = document.body;

        if (form.classList.contains("d-block")) {
            if (event.key === "Escape") {
                form.classList.toggle("d-block");
                body.classList.toggle("overflow");
            }
        }
    }
}