// Like button
var likeCounter = 0;

const incrementValue = () => {
    document.getElementById("like").setAttribute("disabled", "true");

    likeCounter++;
    document.getElementById('number').innerHTML = likeCounter;
    document.getElementById("like").removeAttribute("disabled");
};

import factory from "./factory";
import Tags from "./tags";
import PhotographList from "./photographList";

const factory = new ElementsFactory();

const sortTags = (photographers) => {
    let tagsArrays = [];

    photographers.map((photographer) => {
        tagsArrays.push(photographer.tags);
    });

    const tagsArray = Array.prototype.concat.apply([], tagsArrays);

    return [...new Set(tagsArray)];
};

// Fetch les données Json des photographes
const getData = async (url) => {
    const response = await fetch(url);

    return response.json();
}

// Initialisation de la page d'accueil avec les données du Json
const initializeHomepage = async () => {
    const data = await getData("../../assets/data.json");
    const tags = new Tags(sortTags(data.photographers), "tags");

    factory.addElement(tags);

    data.photographers.forEach((photographer) => {
        factory.addElement(new PhotographList(photographer));
    });

    factory.renderElements();
};

window.addEventListener('load', () => {
    initializeHomepage();
});