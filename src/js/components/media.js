import LikeButton from "./like-button";

export default class Media {
    constructor(media) {
        this.state = {
            id: media.id,
            photographerId: media.photographerId,
            title: media.title,
            image: media.image,
            tags: media.tags,
            likes: media.likes,
            date: media.date,
            price: media.price
        }

        this.imageContainerClass = "image-container";
        this.imageClass = "image";
        this.infosContainerClass = "image-infos-container";
        this.infosContainerId = `image-infos-${this.state.id}`;
    }

    render() {
        const parentElement = document.getElementById("gallery-section");
        const imageContainer = document.createElement("div");

        imageContainer.setAttribute("class", this.imageContainerClass);

        const infosContainer = document.createElement("div");

        infosContainer.setAttribute("class", this.infosContainerClass);
        infosContainer.setAttribute("id", this.infosContainerId);

        infosContainer.appendChild(this.createTitleElement());

        imageContainer.appendChild(this.createImageElement());
        imageContainer.appendChild(infosContainer);

        parentElement.appendChild(imageContainer);
        
        new LikeButton(this.state.id, this.state.likes, this.infosContainerId).render();
    }

    createImageElement() {
        const imageElement = document.createElement("img");

        imageElement.setAttribute("src", `../../assets/photographer/${this.state.photographerId}/${this.state.image}`);
        imageElement.setAttribute("class", this.imageClass);
        imageElement.setAttribute("alt", this.state.title);

        return imageElement;
    }

    createTitleElement() {
        const titleElement = document.createElement("h3");

        titleElement.innerHTML = this.state.title;

        return titleElement;
    }
}