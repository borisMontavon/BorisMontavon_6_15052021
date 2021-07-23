import ElementsFactory from "./components/factory";

// Photographers' data fetch from json
const getData = async (url) => {
    const response = await fetch(url);

    return response.json();
};

// Home page initialization with json's data
const initializeHomepage = async () => {
    const data = await getData("assets/data.json");
    const factory = new ElementsFactory(data);
    
    factory.createComponent("PhotographerContainer").render();
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