export default class MediaFilter {
    constructor(medias) {
        this.medias = medias;
    }

    render() {
        this.comparePopularity();
        this.compareDate();
        this.compareTitle();
        this.comparePrice();
    }

    comparePopularity() {
        this.medias.sort((a, b) => b.likes - a.likes);
    }

    compareDate() {
        this.medias.forEach((media) => {
            media.date = media.date.replace(/-/g,'/');
        });
    }

    compareTitle() {
        this.medias.sort((a, b) => a.title.localeCompare(b.title));
    }

    comparePrice() {
        this.medias.sort((a, b) => b.price - a.price);
    }
}