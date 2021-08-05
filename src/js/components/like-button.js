export default class LikeButton {
    constructor(media) {
        this.mediaId = media.id;
        this.likes = media.likes;
        this.parentId = `image-infos-${media.id}`;

        this.iconClassEmpty = "far fa-heart";
        this.iconClassFull = "fas fa-heart";
        this.iconId = `heart-icon-${this.mediaId}`;
        this.likeButtonId = `like-${this.mediaId}`;
        this.likeCounterId = `like-counter-${this.mediaId}`;
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
                            <p id="like-counter-${this.mediaId}">${this.likes}</p>
                            <button id="like-${this.mediaId}" aria-label="Bouton like">
                                <span class="${iconClass}" id="heart-icon-${this.mediaId}" aria-hidden="true"></span>
                            </button>
                        </div>`;

        parentElement.insertAdjacentHTML("beforeend", template);
    }

    increaseLikeCounter() {
        const heart = document.getElementById(this.iconId);
        const likeCounter = document.getElementById(this.likeCounterId);

        heart.removeAttribute("class", this.iconClassEmpty);
        heart.setAttribute("class", this.iconClassFull);

        this.likes++;

        likeCounter.innerHTML = this.likes;
        this.liked = true;
    }

    decreaseLikeCounter() {
        const heart = document.getElementById(this.iconId);
        const likeCounter = document.getElementById(this.likeCounterId);

        heart.removeAttribute("class", this.iconClassFull);
        heart.setAttribute("class", this.iconClassEmpty);

        this.likes--;

        likeCounter.innerHTML = this.likes;
        this.liked = false;
    }
}