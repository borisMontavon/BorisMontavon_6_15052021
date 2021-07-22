export default class Likes {
    constructor(photographerInfo, likeButtons) {
        this.photographerInfo = photographerInfo;
        this.likeButtons = likeButtons;

        this.photographerInfo.render();
    }

    render() {
        this.likeButtons.forEach((likeButton) => {
            likeButton.render();
            this.toggleLikeButton(likeButton);
        });
    }

    toggleLikeButton(likeButton) {
        const button = document.getElementById(likeButton.likeButtonId);

        if (button === null) {
            return;
        }

        button.addEventListener("click", () => {
            button.setAttribute("disabled", "true");
            
            if (!likeButton.liked) {
                likeButton.increaseLikeCounter();
                this.photographerInfo.increaseLikeCounter();
            } else {
                likeButton.decreaseLikeCounter();
                this.photographerInfo.decreaseLikeCounter();
            }

            button.removeAttribute("disabled");
        });
    }
}