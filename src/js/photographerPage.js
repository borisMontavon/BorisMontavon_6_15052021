import ElementsFactory from "./components/factory";
import PhotographerSection from "./components/photographerSection";

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

    console.log({photographerData});

    const photographerImages = data.media.filter((image) => {
        return image.photographerId == currrentId;
    });

    factory.addElement(new PhotographerSection(photographerData));

    factory.renderElements();
};

window.addEventListener("load", () => {
    initializePhotographerPage();
})