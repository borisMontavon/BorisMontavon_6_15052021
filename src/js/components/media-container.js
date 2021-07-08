import MediaFilter from "./functions/media-filter";
import DropdownFilter from "./dropdown-filter";
import PhotographerSection from "./photographer-section";
import Lightbox from "./lightbox";

export default class MediaContainer {
    constructor(medias, likes, photographerData) {
        this.medias = medias;
        this.likes = likes;

        this.tagsSelected = [];

        this.dropdownFilter = new DropdownFilter(this, new MediaFilter());
        this.photographerSection = new PhotographerSection(photographerData, this);
        this.lightbox = new Lightbox(this);

        this.dropdownFilter.toggleDropdownFilter();
        this.photographerSection.render();
    }

    render() {
        const mediasParentElement = document.getElementById("gallery-section");

        mediasParentElement.innerHTML = "";

        this.medias.forEach((media) => {

            if (media.state.display) {
                media.render();
            }
        });

        this.lightbox.render();
        this.likes.render();
    }

    getElementsToFilter() {
        return this.medias;
    }
}