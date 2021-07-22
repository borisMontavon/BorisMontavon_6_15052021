export default class LikeButton {
    constructor(media) {
        this.mediaId = media.id;
        this.likes = media.likes;
        this.parentId = `image-infos-${media.id}`;

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

        if (parentElement === null) {
            return;
        }

        const div = document.createElement("div");

        div.setAttribute("class", this.divClass);
        div.setAttribute("aria-label", this.likeAccessibility);

        const button = document.createElement("button");

        button.setAttribute("id", this.likeButtonId);
        button.setAttribute("aria-label", "Bouton like");
        button.appendChild(this.createIconElement());

        div.appendChild(this.createNumberOfLikesElement());
        div.appendChild(button);

        parentElement.appendChild(div);
    }

    createNumberOfLikesElement() {
        const p = document.createElement("p");

        p.setAttribute("id", this.likeCounterId);

        p.innerHTML = this.likes;

        return p;
    }

    createIconElement() {
        const icon = document.createElement("span");

        if (this.liked) {
            icon.setAttribute("class", this.iconClassFull);
        } else {
            icon.setAttribute("class", this.iconClassEmpty);
        }
        
        icon.setAttribute("id", this.iconId);

        return icon;
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