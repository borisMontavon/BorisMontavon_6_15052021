import Tag from "./components/tag";
// Homepage component
import PhotographContainer from "./components/photograph-container";
// Photographer page components
import PhotographerLikesPrice from "./components/photographer-likes-price";
import MediaContainer from "./components/media-container";
// Import data methods
import * as DataService from "./services/data-service";

export const createComponent = (type, data) => {
    let component;

    switch (type) {
        case "PhotographerContainer":
            component = new PhotographContainer(data.photographers);
            break;
        case "MediaContainer":
            component = new MediaContainer(DataService.getMedias(data.media), DataService.getPhotographerData(data.photographers));
            break;
        case "GlobalTags":
            component = [];
            DataService.sortTags(data.photographers).forEach((tag) => {
                component.push(new Tag(tag, "tags"));
            });
            break;
        case "HomePhotographerTags":
            component = [];
            data.photographers.forEach((photographer) => {
                photographer.tags.forEach((tag) => {
                    component.push(new Tag(tag, `tag-container-${photographer.id}`));
                });
            });
            break;
        case "PagePhotographerTags":
            component = [];
            const photographerData = DataService.getPhotographerData(data.photographers);

            photographerData.tags.forEach((tag) => {
                component.push(new Tag(tag, `tag-container-${photographerData.id}`));
            })
            break;
        case "LikeButtons":
            component = DataService.getLikeButtons(data.media);
            break;
        case "PhotographerInfo":
            component = new PhotographerLikesPrice(DataService.getTotalLikes(data.media), DataService.getPhotographerData(data.photographers));
            break;
        default:
            return null;
    }

    return component;
}