// Validate first/last name inputs
const isFirstNameValid = () => {
    const firstNameValue = document.getElementById("fname").value;
    const firstNameSpan = document.getElementById("fnameSpan");
    const hasNumber = /\d/.test(firstNameValue);

    if (hasNumber || firstNameValue.length < 2) {
        firstNameSpan.classList.add("d-block");

        return false;
    }
    
    firstNameSpan.classList.remove("d-block");

    return true;
};

const isLastNameValid = () => {
    const lastNameValue = document.getElementById("lname").value;
    const lastNameSpan = document.getElementById("lnameSpan");
    const hasNumber = /\d/.test(lastNameValue);

    if (hasNumber || lastNameValue.length < 2) {
        lastNameSpan.classList.add("d-block");

        return false;
    }
    
    lastNameSpan.classList.remove("d-block");

    return true;
};

// Validate email using regex
const isEmailValid = () => {
    const emailValue = document.getElementById("mail").value;
    const emailSpan = document.getElementById("mailSpan");
    // eslint-disable-next-line no-useless-escape
    const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailAdressTest = regEx.test(emailValue);

    if (!emailAdressTest) {
        emailSpan.classList.add("d-block");

        return false;
    }
    
    emailSpan.classList.remove("d-block");

    return true;
};

// Validate textarea
const isMessageValid = () => {
    const messageValue = document.getElementById("message").value;
    const messageSpan = document.getElementById("messageSpan");

    if (messageValue.length < 80 || messageValue.length > 500) {
        messageSpan.classList.add("d-block");

        return false;
    }

    messageSpan.classList.remove("d-block");

    return true;
};

const validateForm = () => {
    let isFormValid = true;

    if (!isFirstNameValid()) {
        isFormValid = false;
    }
    if (!isLastNameValid())	{
        isFormValid = false;
    }
    if (!isEmailValid()) {
        isFormValid = false;
    }
    if (!isMessageValid()) {
        isFormValid = false;
    }

    if (isFormValid) {
        document.getElementById("contact-form").reset();
        document.getElementById("form-background").classList.remove("d-block");
        document.body.classList.toggle("overflow");
    }
};

// Submit and check if inputs are valids
export default function isFormFieldsValid() {
    const btnSubmit = document.getElementById("btnSubmit");

    btnSubmit.addEventListener("click", () => { validateForm(); });
}
