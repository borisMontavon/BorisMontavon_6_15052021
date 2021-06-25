export default class Lightbox {
    constructor(photographerImages) {
        this.photographerImages = photographerImages;
        this.lightboxBackground = document.getElementById("lightbox-background");
        this.lightboxImage = document.getElementById("lightbox-img");
        this.lightboxVideo = document.getElementById("lightbox-video");
        this.videoSource = document.getElementById("lightbox-video-source");
        this.lightboxTitle = document.getElementById("lightbox-title");

        this.leftChevron = document.getElementById("left-chevron");
        this.rightChevron = document.getElementById("right-chevron");
        this.closeLightboxButton = document.getElementById("button-lightbox-close");

        this.currentId = 0;
    }

    render() {
        this.addClickEvent();
        this.previousImageClickEvent();
        this.nextImageClickEvent();
        this.closeLightbox();
    }

    getIndex() {
        return this.photographerImages.findIndex((element) => element.id === this.currentId);
    }

    addClickEvent() {
        this.photographerImages.forEach((image) => {
            const isVideoElement = image.hasOwnProperty("video");

            if (!isVideoElement) {
                const imageDOM = document.getElementById(image.id);

                imageDOM.addEventListener("click", () => {
                    this.lightboxBackground.style.display = "block";
                    this.lightboxVideo.style.display = "none";
                    this.lightboxImage.style.display = "inline-block";
                    this.lightboxImage.setAttribute("src", `../../assets/photographer/${image.photographerId}/${image.image}`);
                    this.lightboxImage.setAttribute("alt", image.title);
                    this.lightboxTitle.innerHTML = image.title;

                    // Prevent scrollable body behind the lightbox
                    document.body.classList.toggle("overflow");

                    this.currentId = image.id;
                });
            }
        });
    }

    previousImageClickEvent() {
        this.leftChevron.addEventListener("click", () => {
            this.lightboxVideo.innerHTML = "";

            const length = this.photographerImages.length;
            let currentIndex = this.getIndex();

            if (currentIndex === 0) {
                currentIndex = length - 1;
            } else {
                currentIndex--;
            }

            this.elementDisplay(currentIndex);
        });
    }

    nextImageClickEvent() {
        this.rightChevron.addEventListener("click", () => {
            this.lightboxVideo.innerHTML = "";

            const length = this.photographerImages.length;
            let currentIndex = this.getIndex();

            if (currentIndex === length - 1) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            
            this.elementDisplay(currentIndex);
        });
    }

    elementDisplay(currentIndex) {
        const media = this.photographerImages[currentIndex];
        const isVideoElement = media.hasOwnProperty("video");

        if (!isVideoElement) {
            this.lightboxVideo.style.display = "none";
            this.lightboxImage.style.display = "inline-block";
            this.lightboxImage.setAttribute("src", `../../assets/photographer/${media.photographerId}/${media.image}`);
            this.lightboxImage.setAttribute("alt", media.title);
        } else {
            this.lightboxImage.style.display = "none";
            this.lightboxVideo.style.display = "inline-block";
            this.lightboxVideo.setAttribute("aria-label", media.title);

            const source = document.createElement("source");

            source.setAttribute("src", `../../assets/photographer/${media.photographerId}/${media.video}`);
            source.setAttribute("type", "video/mp4");

            this.lightboxVideo.appendChild(source);
        }
        
        this.lightboxTitle.innerHTML = media.title;

        this.currentId = media.id;
    }

    closeLightbox() {
        this.closeLightboxButton.addEventListener("click", () => {
            this.lightboxBackground.style.display = "none";
            document.body.classList.toggle("overflow");
        })
    }
}