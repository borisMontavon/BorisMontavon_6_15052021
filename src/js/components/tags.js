// Class that will allow to render a tags list. Tags are defined with the "tags" param and the container by the "parentId" param (we have to pass it an Id)
export default class Tags {
    constructor(tags, parentId) {
        this.tags = tags;
        this.parentId = parentId;
    }

    render() {
        // Get parent element in which we will insert new HTML elements with values extracted from json's data
        const parentElement = document.getElementById(this.parentId);

        // Get elements from json
        this.tags.forEach((tag) => {
            // Add it to the DOM
            parentElement.appendChild(this.createTag(tag));
        });
    }

    createTag(tag) {
        // Creation of a new HTML element
        const span = document.createElement("span");

        // Attributes update (class, aria-*, ...)
        span.setAttribute("class", "tag");
        span.setAttribute("aria-label", `Tag ${tag}`);

        // innerHtml value update
        span.innerHTML = `# ${tag}`;

        return span;
    }
}