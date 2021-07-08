import Tags from "./tags";
import ContactButton from "./contact-button";

export default class PhotographerSection {
    constructor(photograph, mediaContainer) {
        this.state = {
            name: photograph.name,
            id: photograph.id,
            city: photograph.city,
            country: photograph.country,
            tags: photograph.tags,
            tagline: photograph.tagline,
            portrait: photograph.portrait
        };

        this.containerClass = "photographer-container";
        this.photographerInfoClass = "photographer-info";
        this.titleClass = "photographer-name";
        this.locationClass = "photographer-city-country";
        this.taglineClass = "photographer-tagline";
        this.tagContainerClass = "tag-container";
        this.portraitClass = "photographer-portrait";

        this.mediaContainer = mediaContainer;
    }

    render() {
        const parentElement = document.getElementById("photographer-section");
        const photographerInfo = document.createElement("div");

        photographerInfo.setAttribute("class", this.photographerInfoClass);

        photographerInfo.appendChild(this.createTitleElement());
        photographerInfo.appendChild(this.createLocationElement());
        photographerInfo.appendChild(this.createTaglineElement());
        photographerInfo.appendChild(this.createTagContainerElement());

        parentElement.appendChild(photographerInfo);
        parentElement.appendChild(this.createPortraitElement());

        new Tags(this.state.tags, `tag-container-${this.state.id}`, this.mediaContainer).render();

        new ContactButton().render();
        const formTitle = document.getElementById("form-title");

        formTitle.innerHTML = this.state.name;
    }

    createTitleElement() {
        const titleElement = document.createElement("h1");

        titleElement.setAttribute("class", this.titleClass);
        titleElement.innerHTML = this.state.name;

        return titleElement;
    }

    createLocationElement() {
        const locationElement = document.createElement("p");

        locationElement.setAttribute("class", this.locationClass);
        locationElement.innerHTML = `${this.state.city}, ${this.state.country}`;

        return locationElement;
    }

    createTaglineElement() {
        const taglineElement = document.createElement("p");

        taglineElement.setAttribute("class", this.taglineClass);
        taglineElement.innerHTML = this.state.tagline;

        return taglineElement;
    }

    createTagContainerElement() {
        const tagContainerElement = document.createElement("div");

        tagContainerElement.setAttribute("class", this.tagContainerClass);
        tagContainerElement.setAttribute("id", `tag-container-${this.state.id}`);

        return tagContainerElement;
    }

    createPortraitElement() {
        const portraitElement = document.createElement("img");

        portraitElement.setAttribute("src", `assets/photographer-ids/${this.state.portrait}`);
        portraitElement.setAttribute("alt", this.state.name);
        portraitElement.setAttribute("class", this.portraitClass);

        return portraitElement;
    }
}