import MediaFilter from "./functions/media-filter";
import DropdownFilter from "./dropdown-filter";

export default class MediaContainer {
    constructor(medias, likes) {
        this.medias = medias;
        this.likes = likes;
        this.dropdownFilter = new DropdownFilter(this, new MediaFilter());

        this.dropdownFilter.toggleDropdownFilter();
    }

    render() {
        const mediasParentElement = document.getElementById("gallery-section");

        mediasParentElement.innerHTML = "";

        this.medias.forEach((media) => {
            media.render();
        });

        this.likes.render();
    }
}