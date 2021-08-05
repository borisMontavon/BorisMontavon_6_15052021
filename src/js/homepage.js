// Import factory method
import { createComponent } from "./factory";
// Import functions
import { addTagEventListener } from "./services/tag-service";
import { topButton } from "./functions/top-button";

// Photographers' data fetch from json
const getData = async (url) => {
    const response = await fetch(url);

    return response.json();
};

// Home page initialization with json's data
const initializeHomepage = async () => {
    const data = await getData("assets/data.json");
    const photographerContainer = createComponent("PhotographerContainer", data);
	const globalTags = createComponent("GlobalTags", data);
	const homePhotographerTags = createComponent("HomePhotographerTags", data);

	photographerContainer.render();

	globalTags.forEach((tag) => {
		tag.render();
	});

	homePhotographerTags.forEach((tag) => {
		tag.render();
	});

	addTagEventListener(photographerContainer, function() {
		const globalTagsParentElement = document.getElementById("tags");

        globalTagsParentElement.innerHTML = "";

		photographerContainer.render();

		globalTags.forEach((tag) => {
			tag.render();
		});

		photographerTags.forEach((tag) => {
			tag.render();
		});
	});
};

window.addEventListener("load", () => {
    initializeHomepage();
});

topButton();
