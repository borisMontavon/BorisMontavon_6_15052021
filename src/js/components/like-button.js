export default class LikeButton {
    constructor(media) {
        this.state = {
            id: media.id,
            likes: media.likes
        }

        this.parentId = `image-infos-${this.state.id}`;

        this.iconClassEmpty = "far fa-heart";
        this.iconClassFull = "fas fa-heart";
        this.iconId = `heart-icon-${this.state.id}`;
        this.likeButtonId = `like-${this.state.id}`;
        this.likeCounterId = `like-counter-${this.state.id}`;
        this.liked = false;
    }

    render() {
        const parentElement = document.getElementById(this.parentId);

        // If media is not displayed, the like button is not displayed
        if (parentElement === null) {
            return;
        }

        let iconClass = this.liked ? this.iconClassFull : this.iconClassEmpty;
        let template = `<div class="like-button" aria-label="likes">
                            <p id="like-counter-${this.state.id}">${this.state.likes}</p>
                            <button id="like-${this.state.id}" aria-label="Bouton like">
                                <span class="${iconClass}" id="heart-icon-${this.state.id}" aria-hidden="true"></span>
                            </button>
                        </div>`;

        parentElement.insertAdjacentHTML("beforeend", template);
    }

    increaseLikeCounter() {
        const heart = document.getElementById(this.iconId);
        const likeCounter = document.getElementById(this.likeCounterId);

        heart.removeAttribute("class", this.iconClassEmpty);
        heart.setAttribute("class", this.iconClassFull);

        this.state.likes++;

        likeCounter.innerHTML = this.state.likes;
        this.liked = true;
    }

    decreaseLikeCounter() {
        const heart = document.getElementById(this.iconId);
        const likeCounter = document.getElementById(this.likeCounterId);

        heart.removeAttribute("class", this.iconClassFull);
        heart.setAttribute("class", this.iconClassEmpty);

        this.state.likes--;

        likeCounter.innerHTML = this.state.likes;
        this.liked = false;
    }
}