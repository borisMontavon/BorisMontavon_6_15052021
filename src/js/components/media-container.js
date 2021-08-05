import PhotographerInfo from "./photographer-info";
import Lightbox from "./lightbox";

export default class MediaContainer {
    constructor(medias, photographerData) {
        this.medias = medias;

        this.tagsSelected = [];

        this.photographerInfo = new PhotographerInfo(photographerData, this);
        this.lightbox = new Lightbox(this);

        this.photographerInfo.render();
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
    }

    getElementsToFilter() {
        return this.medias;
    }
}