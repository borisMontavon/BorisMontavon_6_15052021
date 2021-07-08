import PhotographList from "./photograph-list";
import Tags from "./tags";

export default class PhotographContainer {
    constructor(photographers, tagsList) {
        this.tagsSelected = [];

        this.tags = new Tags(tagsList, "tags", this);

        this.photographers = [];
        
        photographers.forEach((photographer) => {
            this.photographers.push(new PhotographList(photographer, this));
        });
    }

    render() {
        const tagsParentElement = document.getElementById("tags");

        tagsParentElement.innerHTML = "";

        this.tags.render();
        
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