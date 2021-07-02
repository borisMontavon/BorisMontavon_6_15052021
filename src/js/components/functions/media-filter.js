export default class MediaFilter {
    comparePopularity(medias) {
        medias.sort((a, b) => b.state.likes - a.state.likes);
    }

    compareDate(medias) {
        medias.sort((a, b) => b.state.date - a.state.date);
    }

    compareTitle(medias) {
        medias.sort((a, b) => a.state.title.localeCompare(b.state.title));
    }

    comparePrice(medias) {
        medias.sort((a, b) => b.state.price - a.state.price);
    }
}