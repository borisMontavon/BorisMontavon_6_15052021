export default class PhotographerLikesPrice {
    constructor(likes, photographer) {
        this.state = {
            id: photographer.id,
            price: photographer.price,
        };

        this.likes = likes;

        this.likeCounterId = `photograph-like-counter-${this.state.id}`;
    }

    render() {
        const parentElement = document.getElementById("main-section");

        const template = `<div class='infos-container'>
                            <div class='likes-container'>
                                <p id='photograph-like-counter-${this.state.id}'>${this.likes}</p>
                                <span class='fas fa-heart' aria-hidden='true'></span>
                            </div>
                            <p>${this.state.price}€ / jour</p>
                        </div>`;

        parentElement.insertAdjacentHTML("beforeend", template);
    }

    increaseLikeCounter() {
        const likeCounter = document.getElementById(this.likeCounterId);

        this.likes += 1;

        likeCounter.innerHTML = this.likes;
    }

    decreaseLikeCounter() {
        const likeCounter = document.getElementById(this.likeCounterId);

        this.likes -= 1;

        likeCounter.innerHTML = this.likes;
    }
}
