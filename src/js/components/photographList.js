import Tags from "./tags";

// Classe permettant d'afficher les informations d'un photographe sur la page d'acceuil depuis les données définies dans le paramètre "photograph"
export default class PhotographList {
    constructor(photograph) {
        this.state = {
            name: photograph.name,
            id: photograph.id,
            city: photograph.city,
            country: photograph.country,
            tags: photograph.tags,
            tagline: photograph.tagline,
            price: photograph.price,
            portrait: photograph.portrait
        };
    
        // Toutes les classes attribuées aux éléments définis ci-dessous, permets de modifier une classe au beosin à un seul endroit
        this.linkClass = "photographer-link";
        this.portraitClass = "photographer-portrait";
        this.titleClass = "photographer-name";
        this.locationClass = "photographer-city-country";
        this.taglineClass = "photographer-tagline";
        this.priceClass = "photographer-price";
        this.tagContainerClass = "tag-container";
    }

    render() {
        const parentElement = document.getElementById("photographers");
        const containerElement = document.createElement("div");

        containerElement.setAttribute("id", `photographer-${this.state.id}`);
        
        parentElement.appendChild(containerElement);

        const linkElement = document.createElement("a");

        linkElement.setAttribute("href", `photographer.html?id=${this.state.id}`);
        linkElement.setAttribute("class", this.linkClass);

        linkElement.appendChild(this.createPortraitElement());
        linkElement.appendChild(this.createTitleElement());

        containerElement.appendChild(linkElement);
        containerElement.appendChild(this.createLocationElement());
        containerElement.appendChild(this.createTaglineElement());
        containerElement.appendChild(this.createPriceElement());
        containerElement.appendChild(this.createTagContainerElement());

        new Tags(this.state.tags, `tag-container-${this.state.id}`).render();
    }
    
    createPortraitElement() {
        const portraitElement = document.createElement("img");

        portraitElement.setAttribute("src", `./assets/photographer-ids/${this.state.portrait}`);
        portraitElement.setAttribute("alt", this.state.name);
        portraitElement.setAttribute("class", this.portraitClass);

        return portraitElement;
    }

    createTitleElement() {
        const titleElement = document.createElement("h2");

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

    createPriceElement() {
        const priceElement = document.createElement("p");

        priceElement.setAttribute("class", this.priceClass);
        priceElement.innerHTML = `${this.state.price}€/jour`;
        
        return priceElement;
    }

    createTagContainerElement() {
        const tagContainerElement = document.createElement("div");

        tagContainerElement.setAttribute("class", this.tagContainerClass);
        tagContainerElement.setAttribute("id", `tag-container-${this.state.id}`);

        return tagContainerElement;
    }

    refresh() {
        const parent = document.getElementById("photographers");

        parent.innerHTML = "";

        this.render();
    }
}