export default class PhotographerInfo {
    constructor(likes, photographer) {
        this.likes = likes;
        this.template = `<div class='infos-container'>
                            <div class='likes-container'>
                                <p id='photograph-like-counter-${photographer.id}'>${likes}</p>
                                <span class='fas fa-heart' aria-hidden='true'></span>
                            </div>
                            <p>${photographer.price}€ / jour</p>
                        </div>`;

        this.likeCounterId = `photograph-like-counter-${photographer.id}`;
    }

    render() {
        const parentElement = document.getElementById("main-section");

        parentElement.insertAdjacentHTML("beforeend", this.template);
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