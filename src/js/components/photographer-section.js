import Tags from "./tags";
import ContactButton from "./contact-button";

export default class PhotographerSection {
    constructor(photograph, mediaContainer) {
        this.state = {
            name: photograph.name,
            id: photograph.id,
            tags: photograph.tags,
        };

        this.template = `<div class="photographer-info">
                            <h1 class="photographer-name">${photograph.name}</h1>
                            <p class="photographer-city-country">${photograph.city}, ${photograph.country}</p>
                            <p class="photographer-tagline">${photograph.tagline}</p>
                            <div class="tag-container" id="tag-container-${photograph.id}"></div>
                        </div>
                        <img src="assets/photographer-ids/${photograph.portrait}" alt="${photograph.name}" class="photographer-portrait">`;

        this.mediaContainer = mediaContainer;
    }

    render() {
        const parentElement = document.getElementById("photographer-section");

        parentElement.insertAdjacentHTML("beforeend", this.template);

        new Tags(this.state.tags, `tag-container-${this.state.id}`, this.mediaContainer).render();

        new ContactButton().render();
        const formTitle = document.getElementById("form-title");

        formTitle.innerHTML = this.state.name;
    }
}