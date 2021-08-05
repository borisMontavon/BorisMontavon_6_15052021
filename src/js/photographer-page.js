// Import factory method
import { createComponent } from "./factory";
import { addTagEventListener } from "./services/tag-service";
import { closeFormButton } from "./functions/close-form-button";
import { toggleDropdownFilter } from "./services/dropdown-service";
// Import data methods
import { getPhotographerData } from "./services/data-service";
import { toggleLikeButtons } from "./services/like-button-service";

// Photographers' data fetch from json
const getData = async (url) => {
    const response = await fetch(url);

    return response.json();
};

// Photographer page initialization with Json's data
const initializePhotographerPage = async () => {
    const data = await getData("assets/data.json");
    
    const mediaContainer = createComponent("MediaContainer", data);
    const photographerInfo = createComponent("PhotographerInfo", data);
    const pagePhotographerTags = createComponent("PagePhotographerTags", data);
    const likeButtons = createComponent("LikeButtons", data);
    const photographerLikesPrice = createComponent("PhotographerLikesPrice", data);

    mediaContainer.render();

    photographerInfo.render();

    pagePhotographerTags.forEach((tag) => {
        tag.render();
    });

    likeButtons.forEach((likeButton) => {
        likeButton.render();
    });

    photographerLikesPrice.render();

    const likeButtonToggleFunction = () => {
        toggleLikeButtons(likeButtons, function(likeButton) {
            if (!likeButton.liked) {
                likeButton.increaseLikeCounter();
                photographerLikesPrice.increaseLikeCounter();
            } else {
                likeButton.decreaseLikeCounter();
                photographerLikesPrice.decreaseLikeCounter();
            }
        });
    }

    addTagEventListener(mediaContainer, function() {
        const photographerData = getPhotographerData(data.photographers);
        const parentElement = document.getElementById(`tag-container-${photographerData.id}`);

        parentElement.innerHTML = "";

		mediaContainer.render();

        pagePhotographerTags.forEach((tag) => {
            tag.render();
        });

        likeButtons.forEach((likeButton) => {
            likeButton.render();
        });

        likeButtonToggleFunction();
	});

    toggleDropdownFilter(mediaContainer.getElementsToFilter(), function() {
        mediaContainer.render();

        likeButtons.forEach((likeButton) => {
            likeButton.render();
        });

        likeButtonToggleFunction();
    });

    likeButtonToggleFunction();
};

window.addEventListener("load", () => {
    initializePhotographerPage();
});

closeFormButton();
