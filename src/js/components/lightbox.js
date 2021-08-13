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

        this.previousMediaClickEvent();
        this.nextMediaClickEvent();
        this.closeLightbox();
        this.handleKeysNavigation();
    }

    render() {
        this.addClickEvent();
    }

    getIndex() {
        return this.mediaContainer.medias
            .findIndex((element) => element.state.id === this.currentId);
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

                    mediaDOM.addEventListener("keyup", (event) => {
                        if (!this.lightboxBackground.classList.contains("d-block")) {
                            if (event.key === "Enter") {
                                this.lightboxBackground.classList.toggle("d-block");
                                this.lightboxImage.classList.add("d-inline-block");
                                this.lightboxImage.setAttribute("src", media.imageSrc);
                                this.lightboxImage.setAttribute("alt", media.state.title);
                                this.lightboxTitle.innerHTML = media.state.title;

                                // Prevent scrollable body behind the lightbox
                                document.body.classList.toggle("overflow");

                                this.currentId = media.state.id;
                            }
                        }
                    });
                }
            }
        });
    }

    previousMediaClickEvent() {
        this.leftChevron.addEventListener("click", () => {
            this.previous();
        });
    }

    nextMediaClickEvent() {
        this.rightChevron.addEventListener("click", () => {
            this.next();
        });
    }

    closeLightbox() {
        this.closeLightboxButton.addEventListener("click", () => {
            this.lightboxBackground.classList.toggle("d-block");
            document.body.classList.toggle("overflow");
        });
    }

    handleKeysNavigation() {
        window.addEventListener("keyup", (event) => {
            const { body } = document;

            if (this.lightboxBackground.classList.contains("d-block")) {
                if (event.defaultPrevented) {
                    return;
                }

                switch (event.key) {
                    case "Esc":
                    case "Escape":
                        $("#lightbox-background").toggleClass("d-block");
                        body.classList.toggle("overflow");
                        break;
                    case "Left":
                    case "ArrowLeft":
                        this.previous();
                        break;
                    case "Right":
                    case "ArrowRight":
                        this.next();
                        break;
                    default:
                        return;
                }

                event.preventDefault();
            }
        }, true);
    }

    previous() {
        this.lightboxVideo.innerHTML = "";

        let currentIndex = this.getIndex();

        while (currentIndex >= 0) {
            currentIndex -= 1;

            if (currentIndex === -1) {
                currentIndex = this.mediaContainer.medias.length - 1;
            }

            if (this.mediaContainer.medias[currentIndex].state.display) {
                break;
            }
        }

        this.elementDisplay(currentIndex);
    }

    next() {
        this.lightboxVideo.innerHTML = "";

        let currentIndex = this.getIndex();

        while (currentIndex < this.mediaContainer.medias.length) {
            currentIndex += 1;

            if (currentIndex === this.mediaContainer.medias.length) {
                currentIndex = 0;
            }

            if (this.mediaContainer.medias[currentIndex].state.display) {
                break;
            }
        }
        
        this.elementDisplay(currentIndex);
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
}
