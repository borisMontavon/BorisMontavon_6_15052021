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
        const imageContainer = document.createElement("div");

        imageContainer.setAttribute("class", this.mediaContainerClass);

        const infosContainer = document.createElement("div");

        infosContainer.setAttribute("class", this.infosContainerClass);
        infosContainer.setAttribute("id", this.infosContainerId);

        infosContainer.appendChild(this.createTitleElement());

        if (this.isVideo()) {
            imageContainer.appendChild(this.createVideoElement());
        } else {
            imageContainer.appendChild(this.createImageElement());
        }
        
        imageContainer.appendChild(infosContainer);

        parentElement.appendChild(imageContainer);
    }

    createImageElement() {
        const imageElement = document.createElement("img");

        imageElement.setAttribute("src", this.imageSrc);
        imageElement.setAttribute("class", this.imageClass);
        imageElement.setAttribute("alt", this.state.title);
        imageElement.setAttribute("id", this.state.id);

        return imageElement;
    }

    isVideo() {
        return this.state.video !== undefined;
    }

    createVideoElement() {
        const videoElement = document.createElement("video");

        videoElement.setAttribute("controls", "");
        videoElement.setAttribute("class", this.videoClass);
        videoElement.setAttribute("aria-label", this.state.title);

        const sourceElement = document.createElement("source");

        sourceElement.setAttribute("src", this.videoSrc);
        sourceElement.setAttribute("type", "video/mp4");

        videoElement.appendChild(sourceElement);

        return videoElement;
    }

    createTitleElement() {
        const titleElement = document.createElement("h3");

        titleElement.innerHTML = this.state.title;

        return titleElement;
    }
}