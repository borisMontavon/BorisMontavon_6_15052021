import ElementsFactory from "./components/factory";
import PhotographerSection from "./components/photographerSection";
import Media from "./components/media";

// Get ID of the current photographer to get associate data
const urlParams = new URLSearchParams(window.location.search);
const currrentId = urlParams.get('id');
const factory = new ElementsFactory();

// Photographers' data fetch
const getData = async (url) => {
    const response = await fetch(url);

    return response.json();
};

// Photographer page initialization with Json's data
const initializePhotographerPage = async () => {
    const data = await getData("../../assets/data.json");

    const photographerData = data.photographers.find((photographer) => {
        return photographer.id == currrentId;
    });

    const photographerImages = data.media.filter((image) => {
        return image.photographerId == currrentId;
    });

    factory.addElement(new PhotographerSection(photographerData));
    
    photographerImages.forEach((image) => {
        factory.addElement(new Media(image));
    });

    factory.renderElements();
};

window.addEventListener("load", () => {
    initializePhotographerPage();
});

// Close form button
$(document).ready(function() {
	$("#close-form").click(function() {
        const form = document.getElementById("form-background");
        const body = document.body;

        form.style.display = "none";
        body.classList.toggle("overflow");
    });
});