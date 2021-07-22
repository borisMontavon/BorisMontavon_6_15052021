import Tags from "./tags";

export default class PhotographList {
    constructor(photograph, photographContainer) {
        this.state = {
            id: photograph.id,
            tags: photograph.tags,
            display: true
        };

        this.template = `<div id="photographer-${photograph.id}">
                            <a href="photographer.html?id=${photograph.id}" class="photographer-link" aria-label="Lien vers la page du photographe ${photograph.name}" tabindex="0">
                                <img src="assets/photographer-ids/${photograph.portrait}" alt="${photograph.name}" class="photographer-portrait">
                                <h2 class="photographer-name">${photograph.name}</h2>
                            </a>
                            <p class="photographer-city-country">${photograph.city}, ${photograph.country}</p>
                            <p class="photographer-tagline">${photograph.tagline}</p>
                            <p class="photographer-price">${photograph.price}€/jour</p>
                            <div class="tag-container" id="tag-container-${photograph.id}"></div>
                        </div>`;

        this.photographContainer = photographContainer;
    }

    render() {
        const parentElement = document.getElementById("photographers");

        parentElement.insertAdjacentHTML("beforeend", this.template);

        new Tags(this.state.tags, `tag-container-${this.state.id}`, this.photographContainer).render();
    }
}