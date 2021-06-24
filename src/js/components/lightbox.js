export default class Lightbox {
    constructor(photographerImages) {
        this.photographerImages = photographerImages;
        this.lightboxBackground = document.getElementById("lightbox-background");
        this.lightboxImage = document.getElementById("lightbox-img");
        this.lightboxTitle = document.getElementById("lightbox-title");

        this.leftChevron = document.getElementById("left-chevron");
        this.rightChevron = document.getElementById("right-chevron");
        this.closeLightboxButton = document.getElementById("button-lightbox-close");
    }

    render() {
        this.addClickEvent();
        this.closeLightbox();
        console.log(this.photographerImages);
    }

    addClickEvent() {
        this.photographerImages.forEach((image) => {
            const imageDOM = document.getElementById(image.id);
            const isVideoElement = image.hasOwnProperty("video");

            if (!isVideoElement) {
                imageDOM.addEventListener("click", () => {
                    this.lightboxBackground.style.display = "block";
                    this.lightboxImage.setAttribute("src", `../../assets/photographer/${image.photographerId}/${image.image}`);
                    this.lightboxImage.setAttribute("alt", image.title);
                    this.lightboxTitle.innerHTML = image.title;
                });
            }
        });
    }

    previousImageClickEvent() {
        this.rightChevron.addEventListener("click", () => {
            this.lightboxImage.setAttribute("src", `../../assets/photographer/${image.photographerId}/${image.image}`);
            this.lightboxImage.setAttribute("alt", image.title);
            this.lightboxTitle.innerHTML = image.title;
        });
    }

    nextImageClickEvent() {
        this.leftChevron.addEventListener("click", () => {
            this.lightboxImage.setAttribute("src", `../../assets/photographer/${image.photographerId}/${image.image}`);
            this.lightboxImage.setAttribute("alt", image.title);
            this.lightboxTitle.innerHTML = image.title;
        });
    }

    closeLightbox() {
        this.closeLightboxButton.addEventListener("click", () => {
            this.lightboxBackground.style.display = "none";
        })
    }
}