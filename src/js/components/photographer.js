export default class Photographer {
    constructor(photograph) {
        this.state = {
            city: photograph.city,
            country: photograph.country,
            id: photograph.id,
            name: photograph.name,
            portrait: photograph.portrait,
            price: photograph.price,
            tagline: photograph.tagline,
            tags: photograph.tags,
            display: true
        };
    }

    render() {
        const parentElement = document.getElementById("photographers");

        let template = `<div id="photographer-${this.state.id}">
                            <a href="photographer.html?id=${this.state.id}" class="photographer-link" aria-label="Lien vers la page du photographe ${this.state.name}" tabindex="0">
                                <img src="assets/photographer-ids/${this.state.portrait}" alt="${this.state.name}" class="photographer-portrait">
                                <h2 class="photographer-name">${this.state.name}</h2>
                            </a>
                            <p class="photographer-city-country">${this.state.city}, ${this.state.country}</p>
                            <p class="photographer-tagline">${this.state.tagline}</p>
                            <p class="photographer-price">${this.state.price}€/jour</p>
                            <div class="tag-container" id="tag-container-${this.state.id}"></div>
                        </div>`;

        parentElement.insertAdjacentHTML("beforeend", template);
    }
}