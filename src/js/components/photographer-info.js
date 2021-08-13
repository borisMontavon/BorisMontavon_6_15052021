import ContactButton from "./contact-button";

export default class PhotographerInfo {
    constructor(photograph) {
        this.state = {
            city: photograph.city,
            country: photograph.country,
            id: photograph.id,
            name: photograph.name,
            portrait: photograph.portrait,
            tagline: photograph.tagline,
            tags: photograph.tags,
        };
    }

    render() {
        const parentElement = document.getElementById("photographer-section");

        const template = `<div class="photographer-info">
                            <h1 class="photographer-name">${this.state.name}</h1>
                            <p class="photographer-city-country">${this.state.city}, ${this.state.country}</p>
                            <p class="photographer-tagline">${this.state.tagline}</p>
                            <div class="tag-container" id="tag-container-${this.state.id}"></div>
                        </div>
                        <img src="assets/photographer-ids/${this.state.portrait}" alt="${this.state.name}" class="photographer-portrait">`;

        parentElement.insertAdjacentHTML("beforeend", template);

        ContactButton.render();
        const formTitle = document.getElementById("form-title");

        formTitle.innerHTML = this.state.name;
    }
}
