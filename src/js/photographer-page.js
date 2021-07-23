import ElementsFactory from "./components/factory";

// Photographers' data fetch from json
const getData = async (url) => {
    const response = await fetch(url);

    return response.json();
};

// Photographer page initialization with Json's data
const initializePhotographerPage = async () => {
    const data = await getData("assets/data.json");
    const factory = new ElementsFactory(data);
    
    factory.createComponent("MediaContainer").render();
};

window.addEventListener("load", () => {
    initializePhotographerPage();
});

// Close form button
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


