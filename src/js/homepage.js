import ElementsFactory from "./components/factory";
import PhotographContainer from "./components/photograph-container";

const factory = new ElementsFactory();

const sortTags = (photographers) => {
    let tagsArrays = [];

    photographers.map((photographer) => {
        tagsArrays.push(photographer.tags);
    });

    const tagsArray = Array.prototype.concat.apply([], tagsArrays);

    return [...new Set(tagsArray)];
};

// Photographers' data fetch from json
const getData = async (url) => {
    const response = await fetch(url);

    return response.json();
};

// Home page initialization with json's data
const initializeHomepage = async () => {
    const data = await getData("assets/data.json");
    const photographContainer = new PhotographContainer(data.photographers, sortTags(data.photographers));

    factory.addElement(photographContainer);

    factory.renderElements();
};

window.addEventListener("load", () => {
    initializeHomepage();
});

// Top button
$(window).scroll(function() {
	const height = $(window).scrollTop();
	
	if (height > 150) {
		$("#toTopButton").fadeIn();
	} else {
		$("#toTopButton").fadeOut();
	}
});
	
$(document).ready(function() {
	$("#toTopButton").click(function(event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: 0}, "slow");
		return false;
	});
});