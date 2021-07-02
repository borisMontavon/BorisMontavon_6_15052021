import ElementsFactory from "./components/factory";
import PhotographerSection from "./components/photographer-section";
import Media from "./components/media";
import Likes from "./components/likes";
import PhotographerInfo from "./components/photographer-info";
import LikeButton from "./components/like-button";
import Lightbox from "./components/lightbox";
import MediaContainer from "./components/media-container";

// Get ID of the current photographer to get associate data
const urlParams = new URLSearchParams(window.location.search);
const currrentId = urlParams.get('id');
const factory = new ElementsFactory();

// Photographers' data fetch from json
const getData = async (url) => {
    const response = await fetch(url);

    return response.json();
};

// Photographer page initialization with Json's data
const initializePhotographerPage = async () => {
    const data = await getData("assets/data.json");

    const photographerData = data.photographers.find((photographer) => {
        return photographer.id == currrentId;
    });

    let photographerImages = data.media.filter((image) => {
        return image.photographerId == currrentId;
    });

    photographerImages.sort((a, b) => b.likes - a.likes);
    photographerImages.forEach((media) => {
        media.date = new Date(media.date);
    });

    const totalLikes = photographerImages
        .map((media) => media.likes)
        .reduce((a, b) => a + b, 0);

    factory.addElement(new PhotographerSection(photographerData));

    let medias = [];
    let likeButtons = [];

    photographerImages.forEach((image) => {
        medias.push(new Media(image));
        likeButtons.push(new LikeButton(image));
    });

    const likes = new Likes(new PhotographerInfo(totalLikes, photographerData), likeButtons);

    const mediaContainer = new MediaContainer(medias, likes);

    factory.addElement(mediaContainer);

    factory.addElement(new Lightbox(photographerImages));

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