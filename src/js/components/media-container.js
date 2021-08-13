import Lightbox from "./lightbox";

export default class MediaContainer {
    constructor(medias) {
        this.medias = medias;

        this.tagsSelected = [];

        this.lightbox = new Lightbox(this);
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
