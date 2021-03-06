import LikeButton from "../components/like-button";
import Media from "../components/media";

export const sortTags = (photographers) => {
	const tagsArrays = [];

	photographers.map((photographer) => tagsArrays.push(photographer.tags));

	const tagsArray = Array.prototype.concat.apply([], tagsArrays);

	return [...new Set(tagsArray)];
};

export const getCurrentPhotographerId = () => new URLSearchParams(window.location.search).get('id');

export const getPhotographerData = (photographers) => {
    const currentId = getCurrentPhotographerId();

    return photographers.find((photographer) => `${photographer.id}` === currentId);
};

export const getPhotographerImages = (medias) => {
    const currentId = getCurrentPhotographerId();
    const photographerImages = medias.filter((image) => `${image.photographerId}` === currentId);

    photographerImages.sort((a, b) => b.likes - a.likes);
    photographerImages.forEach((media) => {
        media.date = new Date(media.date);
    });

    return photographerImages;
};

export const getTotalLikes = (medias) => {
    const photographerImages = getPhotographerImages(medias);

    return photographerImages.map((media) => media.likes).reduce((a, b) => a + b, 0);
};

export const getMedias = (medias) => {
    const photographerImages = getPhotographerImages(medias);
    const mediasList = [];

    photographerImages.forEach((image) => {
        mediasList.push(new Media(image));
    });

    return mediasList;
};

export const getLikeButtons = (medias) => {
    const photographerImages = getPhotographerImages(medias);
    const likeButtons = [];

    photographerImages.forEach((image) => {
        likeButtons.push(new LikeButton(image));
    });

    return likeButtons;
};
