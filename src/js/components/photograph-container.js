import Photographer from "./photographer";

export default class PhotographContainer {
    constructor(photographers) {
        this.tagsSelected = [];
        this.photographers = [];
        
        photographers.forEach((photographer) => {
            this.photographers.push(new Photographer(photographer));
        });
    }

    render() {
        const photographersParentElement = document.getElementById("photographers");

        photographersParentElement.innerHTML = "";

        this.photographers.forEach((photograph) => {
            if (photograph.state.display) {
                photograph.render();
            } 
        });
    }

    getElementsToFilter() {
        return this.photographers;
    }
}
