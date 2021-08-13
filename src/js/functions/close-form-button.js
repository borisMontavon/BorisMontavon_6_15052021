export default function closeFormButton() {
    $(document).ready(() => {
        const { body } = document;
    
        $("#close-form").click(() => {
            $("#form-background").toggleClass("d-block");
            body.classList.toggle("overflow");
        });
    
        $(document).keyup((event) => {
            if ($("#form-background").hasClass("d-block")) {
                if (event.defaultPrevented) {
                    return;
                }
    
                switch (event.key) {
                    case "Esc":
                    case "Escape":
                        $("#form-background").toggleClass("d-block");
                        body.classList.toggle("overflow");
                        break;
                    default:
                        break;
                }
    
                event.preventDefault();
            }
        });
    });
}
