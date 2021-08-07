export default class Media {
    constructor(media) {
        this.state = {
            id: media.id,
            photographerId: media.photographerId,
            title: media.title,
            image: media.image,
            video: media.video,
            tags: media.tags,
            likes: media.likes,
            date: media.date,
            price: media.price,
            display: true
        }

        this.mediaContainerClass = "media-container";
        this.imageSrc = `assets/photographer/${this.state.photographerId}/${this.state.image}`;
        this.imageClass = "image";
        this.infosContainerClass = "image-infos-container";
        this.infosContainerId = `image-infos-${this.state.id}`;
        this.videoClass = "video";
        this.videoSrc = `assets/photographer/${this.state.photographerId}/${this.state.video}`;
    }

    render() {
        const parentElement = document.getElementById("gallery-section");

         let template = "";

        if (this.state.video !== undefined) {
            // Video template
            template = `<div class="media-container">
                                <video controls="" class="video" aria-label="${this.state.title}" tabindex="0">
                                    <source src="assets/photographer/${this.state.photographerId}/${this.state.video}" type="video/mp4">
                                </video>
                                <div class="image-infos-container" id="image-infos-${this.state.id}">
                                    <h3>${this.state.title}</h3>
                                </div>
                            </div>`;
        } else {
            // Image template
            template = `<div class="media-container">
                                <img src="assets/photographer/${this.state.photographerId}/${this.state.image}" class="image" alt="${this.state.title}" id="${this.state.id}" tabindex="0">
                                <div class="image-infos-container" id="image-infos-${this.state.id}">
                                    <h3>${this.state.title}</h3>
                                </div>
                            </div>`;
        }

        parentElement.insertAdjacentHTML("beforeend", template);
    }

    isVideo() {
        return this.state.video !== undefined;
    }
}