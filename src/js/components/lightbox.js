export default class Lightbox {
    constructor(mediaContainer) {
        this.mediaContainer = mediaContainer;
        this.lightboxBackground = document.getElementById("lightbox-background");
        this.lightboxImage = document.getElementById("lightbox-img");
        this.lightboxVideo = document.getElementById("lightbox-video");
        this.videoSource = document.getElementById("lightbox-video-source");
        this.lightboxTitle = document.getElementById("lightbox-title");

        this.leftChevron = document.getElementById("left-chevron");
        this.rightChevron = document.getElementById("right-chevron");
        this.closeLightboxButton = document.getElementById("button-lightbox-close");

        this.currentId = 0;

        this.mediasDisplayed = [];

        this.previousImageClickEvent();
        this.nextImageClickEvent();
        this.closeLightbox();
    }

    render() {
        this.addClickEvent();
    }

    getIndex() {
        return this.mediaContainer.medias.findIndex((element) => element.state.id === this.currentId);
    }

    addClickEvent() {
        this.mediaContainer.medias.forEach((media) => {
            if (media.state.display) {
                const isVideoElement = media.isVideo();

                if (!isVideoElement) {
                    const mediaDOM = document.getElementById(media.state.id);

                    mediaDOM.addEventListener("click", () => {
                        this.lightboxBackground.classList.toggle("d-block");
                        this.lightboxImage.classList.add("d-inline-block");
                        this.lightboxImage.setAttribute("src", media.imageSrc);
                        this.lightboxImage.setAttribute("alt", media.state.title);
                        this.lightboxTitle.innerHTML = media.state.title;

                        // Prevent scrollable body behind the lightbox
                        document.body.classList.toggle("overflow");

                        this.currentId = media.state.id;
                    });
                }
            }
        });
    }

    previousImageClickEvent() {
        this.leftChevron.addEventListener("click", () => {
            this.lightboxVideo.innerHTML = "";

            let currentIndex = this.getIndex();

            while (currentIndex >= 0) {
                currentIndex--;

                if (currentIndex === -1) {
                    currentIndex = this.mediaContainer.medias.length - 1;
                }

                if (this.mediaContainer.medias[currentIndex].state.display) {
                    break;
                }
            }

            this.elementDisplay(currentIndex);
        });
    }

    nextImageClickEvent() {
        this.rightChevron.addEventListener("click", () => {
            this.lightboxVideo.innerHTML = "";

            let currentIndex = this.getIndex();

            while (currentIndex < this.mediaContainer.medias.length) {
                currentIndex++;

                if (currentIndex === this.mediaContainer.medias.length) {
                    currentIndex = 0;
                }

                if (this.mediaContainer.medias[currentIndex].state.display) {
                    break;
                }
            }
            
            this.elementDisplay(currentIndex);
        });
    }

    elementDisplay(currentIndex) {
        const media = this.mediaContainer.medias[currentIndex];
        const isVideoElement = media.isVideo();

        if (!isVideoElement) {
            this.lightboxVideo.classList.remove("d-inline-block");
            this.lightboxImage.classList.add("d-inline-block");
            this.lightboxImage.setAttribute("src", media.imageSrc);
            this.lightboxImage.setAttribute("alt", media.state.title);
        } else {
            this.lightboxImage.classList.remove("d-inline-block");
            this.lightboxImage.classList.add("d-none");
            this.lightboxVideo.classList.add("d-inline-block");
            this.lightboxVideo.setAttribute("aria-label", media.state.title);

            const source = document.createElement("source");

            source.setAttribute("src", media.videoSrc);
            source.setAttribute("type", "video/mp4");

            this.lightboxVideo.appendChild(source);
        }
        
        this.lightboxTitle.innerHTML = media.state.title;

        this.currentId = media.state.id;
    }

    closeLightbox() {
        this.closeLightboxButton.addEventListener("click", () => {
            this.lightboxBackground.classList.toggle("d-block");
            document.body.classList.toggle("overflow");
        })
    }
}