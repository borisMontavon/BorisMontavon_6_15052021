export default class PhotographerLikesPrice {
    constructor(likes, photographer) {
        this.photographerId = photographer.id,
        this.price = photographer.price,

        this.likes = likes;

        this.likeCounterId = `photograph-like-counter-${photographer.id}`;
    }

    render() {
        const parentElement = document.getElementById("main-section");

        let template = `<div class='infos-container'>
                            <div class='likes-container'>
                                <p id='photograph-like-counter-${this.photographerId}'>${this.likes}</p>
                                <span class='fas fa-heart' aria-hidden='true'></span>
                            </div>
                            <p>${this.price}€ / jour</p>
                        </div>`;

        parentElement.insertAdjacentHTML("beforeend", template);
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