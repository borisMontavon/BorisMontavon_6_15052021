export default class PhotographerInfo {
    constructor(likes, photographer) {
        this.price = photographer.price,
        this.likes = likes

        this.infosContainerClass = "infos-container";
        this.likesContainerClass = "likes-container";
        this.iconClass = "fas fa-heart";
        this.likeCounterId = `photograph-like-counter-${photographer.id}`;
    }

    render() {
        const parentElement = document.getElementById("main-section");
        const infosContainer = document.createElement("div");

        infosContainer.setAttribute("class", this.infosContainerClass);

        infosContainer.appendChild(this.createLikesElement());
        infosContainer.appendChild(this.createPriceElement());

        parentElement.appendChild(infosContainer);
    }

    createLikesElement() {
        const container = document.createElement("div");

        container.setAttribute("class", this.likesContainerClass);

        const likes = document.createElement("p");

        likes.setAttribute("id", this.likeCounterId);

        likes.innerHTML = this.likes;

        container.appendChild(likes);

        const icon = document.createElement("span");

        icon.setAttribute("class", this.iconClass);

        container.appendChild(icon);

        return container;
    }

    createPriceElement() {
        const priceElement = document.createElement("p");

        priceElement.innerHTML = `${this.price}€ / jour`;

        return priceElement;
    }

    increaseLikeCounter() {
        const likeCounter = document.getElementById(this.likeCounterId);

        this.likes++;

        likeCounter.innerHTML = this.likes;
    }

    decreaseLikeCounter() {
        const likeCounter = document.getElementById(this.likeCounterId);

        this.likes--;

        likeCounter.innerHTML = this.likes;
    }
}