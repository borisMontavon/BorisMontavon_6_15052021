const likeButtonEventListener = (likeButton, button, callback) => {
    button.setAttribute("disabled", "true");

    callback(likeButton);

    button.removeAttribute("disabled");
};

export default function toggleLikeButtons(likeButtons, callback) {
    likeButtons.forEach((likeButton) => {
        const button = document.getElementById(likeButton.likeButtonId);

        if (button === null) {
            return;
        }

        button.addEventListener("click", () => {
            likeButtonEventListener(likeButton, button, callback);
        });
    });
}
