export const closeFormButton = () => {
    $(document).ready(function() {
        const body = document.body;
    
        $("#close-form").click(function() {
            $("#form-background").toggleClass("d-block");
            body.classList.toggle("overflow");
        });
    
        $(document).keyup(function(event) {
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
};