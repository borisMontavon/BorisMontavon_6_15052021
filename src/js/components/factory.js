// Homepage component
import PhotographContainer from "./photograph-container";
// Photographer page components
import Media from "./media";
import Likes from "./likes";
import PhotographerInfo from "./photographer-info";
import LikeButton from "./like-button";
import MediaContainer from "./media-container";

export default class ElementsFactory {
    constructor(data) {
        this.data = data;
    }

    createComponent(type) {
        let component;

        switch (type) {
            case "PhotographerContainer":
                component = new PhotographContainer(this.data.photographers, this.sortTags(this.data.photographers));
                break;
            case "MediaContainer":
                const likes = new Likes(new PhotographerInfo(this.getTotalLikes(), this.getPhotographerData()), this.getLikeButtons());

                component = new MediaContainer(this.getMedias(), likes, this.getPhotographerData());
                break;
            default:
                return null;
        }

        return component;
    }

    sortTags(photographers) {
        let tagsArrays = [];
    
        photographers.map((photographer) => {
            tagsArrays.push(photographer.tags);
        });
    
        const tagsArray = Array.prototype.concat.apply([], tagsArrays);
    
        return [...new Set(tagsArray)];
    }

    getCurrentPhotographerId() {
        return new URLSearchParams(window.location.search).get('id');
    }

    getPhotographerData() {
        const currentId = this.getCurrentPhotographerId();

        return this.data.photographers.find((photographer) => {
            return photographer.id == currentId;
        });
    }

    getPhotographerImages() {
        const currentId = this.getCurrentPhotographerId();
        let photographerImages = this.data.media.filter((image) => {
            return image.photographerId == currentId;
        });

        photographerImages.sort((a, b) => b.likes - a.likes);
        photographerImages.forEach((media) => {
            media.date = new Date(media.date);
        });

        return photographerImages;
    }

    getTotalLikes() {
        const photographerImages = this.getPhotographerImages();

        return photographerImages.map((media) => media.likes).reduce((a, b) => a + b, 0);
    }

    getMedias() {
        const photographerImages = this.getPhotographerImages();
        let medias = [];

        photographerImages.forEach((image) => {
            medias.push(new Media(image));
        });

        return medias;
    }

    getLikeButtons() {
        const photographerImages = this.getPhotographerImages();
        let likeButtons = [];

        photographerImages.forEach((image) => {
            likeButtons.push(new LikeButton(image));
        });

        return likeButtons;
    }
}