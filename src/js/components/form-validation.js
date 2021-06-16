export default class FormValidation {
    // Validate first/last name inputs
    isFirstNameValid() {
        const firstNameValue = document.getElementById("fname").value;
        const firstNameSpan = document.getElementById("fnameSpan");
        const hasNumber = /\d/.test(firstNameValue);

        if (hasNumber || firstNameValue.length < 2) {
            firstNameSpan.style.display = "block";

            return false;
        }
        
        firstNameSpan.style.display = "none";

        return true;
    };

    isLastNameValid() {
        const lastNameValue = document.getElementById("lname").value;
        const lastNameSpan = document.getElementById("lnameSpan");
        const hasNumber = /\d/.test(lastNameValue);

        if (hasNumber || lastNameValue.length < 2) {
            lastNameSpan.style.display = "block";

            return false;

        }
        
        lastNameSpan.style.display = "none";

        return true;
    };

    // Validate email using regex
    isEmailValid() {
        const emailValue = document.getElementById("mail").value;
        const emailSpan = document.getElementById("mailSpan");
        const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailAdressTest = regEx.test(emailValue);

        if (!emailAdressTest) {
            emailSpan.style.display = "block";

            return false;

        }
        
        emailSpan.style.display = "none";

        return true;
    };

    // Validate textarea
    isMessageValid() {
        const messageValue = document.getElementById("message").value;
        const messageSpan = document.getElementById("messageSpan");

        if (messageValue < 80 || messageValue > 500) {
            messageSpan.style.display = "block";

            return false;
        }

        messageSpan.style.display = "none";

        return true;
    }

    validateForm() {
        var isFormValid = true;

        if (!this.isFirstNameValid()) {
            isFormValid = false;
        }
        if (!this.isLastNameValid())	{
            isFormValid = false;
        }
        if (!this.isEmailValid()) {
            isFormValid = false;
        }
        if (!this.isMessageValid()) {
            isFormValid = false;
        }

        if (isFormValid) {
            document.getElementById("contact-form").reset();
            document.getElementById("form-background").style.display = "none";
            document.body.classList.toggle("overflow");
        }
    }

    // Submit and check if inputs are valids
    isFormFieldsValid() {
        const btnSubmit = document.getElementById("btnSubmit");

        btnSubmit.addEventListener("click", () => { this.validateForm() });
    }
}