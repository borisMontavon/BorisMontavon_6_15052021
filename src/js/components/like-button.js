// Like button

export default class LikeButton {
    constructor(mediaId, likes, parentId) {
        this.mediaId = mediaId;
        this.likes = likes;
        this.parentId = parentId;

        this.divClass = "like-button";
        this.iconClass = "fas fa-heart";
        this.likeButtonId = `like-${this.mediaId}`;
        this.likeCounterId = `like-counter-${this.mediaId}`;
        this.liked = false;
    }

    render() {
        const parentElement = document.getElementById(this.parentId);

        const div = document.createElement("div");

        div.setAttribute("class", this.divClass);

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

        icon.setAttribute("class", this.iconClass);

        return icon;
    }

    toggleLikeButton() {
        const button = document.getElementById(this.likeButtonId);
        const likeCounter = document.getElementById(this.likeCounterId);

        button.addEventListener("click", () => {
            button.setAttribute("disabled", "true");
            
            if (this.liked === false) {
                this.likes++;
            } else {
                this.likes--;
            }
            
            this.liked = !this.liked;

            likeCounter.innerHTML = this.likes;

            button.removeAttribute("disabled");
        });
    }
}