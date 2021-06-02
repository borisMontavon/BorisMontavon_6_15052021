import ElementsFactory from "./components/factory";
import Tags from "./components/tags";

window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const photographerId = urlParams.get('id');

    console.log(photographerId);
});