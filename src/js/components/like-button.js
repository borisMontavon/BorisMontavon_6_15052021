// Like button

export default class LikeButton {
    constructor(mediaId, likes, parentId) {
        this.mediaId = mediaId;
        this.likes = likes;
        this.parentId = parentId;

        this.divClass = "like-button";
        this.likeAccessibility = "likes";
        this.iconClassEmpty = "far fa-heart";
        this.iconClassFull = "fas fa-heart";
        this.iconId = `heart-icon-${this.mediaId}`;
        this.likeButtonId = `like-${this.mediaId}`;
        this.likeCounterId = `like-counter-${this.mediaId}`;
        this.liked = false;
    }

    render() {
        const parentElement = document.getElementById(this.parentId);

        const div = document.createElement("div");

        div.setAttribute("class", this.divClass);
        div.setAttribute("aria-label", this.likeAccessibility);

        const button = document.createElement("button");

        button.setAttribute("id", this.likeButtonId);
        button.appendChild(this.createIconElement());

        div.appendChild(this.createNumberOfLikesElement());
        div.appendChild(button);

        parentElement.appendChild(div);

        this.toggleLikeButton();
    }

    createNumberOfLikesElement() {
        const p = document.createElement("p");

        p.setAttribute("id", this.likeCounterId);

        p.innerHTML = this.likes;

        return p;
    }

    createIconElement() {
        const icon = document.createElement("i");

        icon.setAttribute("class", this.iconClassEmpty);
        icon.setAttribute("id", this.iconId);

        return icon;
    }

    toggleLikeButton() {
        const button = document.getElementById(this.likeButtonId);
        const heart = document.getElementById(this.iconId);
        const likeCounter = document.getElementById(this.likeCounterId);

        button.addEventListener("click", () => {
            button.setAttribute("disabled", "true");
            
            if (this.liked === false) {
                this.likes++;
                heart.removeAttribute("class", this.iconClassEmpty);
                heart.setAttribute("class", this.iconClassFull);
            } else {
                this.likes--;
                heart.removeAttribute("class", this.iconClassFull);
                heart.setAttribute("class", this.iconClassEmpty);
            }
            
            this.liked = !this.liked;

            likeCounter.innerHTML = this.likes;

            button.removeAttribute("disabled");
        });
    }
}