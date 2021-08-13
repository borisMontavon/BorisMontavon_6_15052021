export default class Tag {
    constructor(tag, parentId) {
        this.tag = tag;
        this.parentId = parentId;
    }

    render() {
        // Get parent element in which we insert new HTML elements with values extracted from json
        const parentElement = document.getElementById(this.parentId);

        // If parent container is not displayed, the tags are not displayed
        if (parentElement === null) {
            return;
        }

        // Add it to the DOM
        const template = `<span class="tag" aria-label="Tag ${this.tag}" data-tag="${this.tag}" tabindex="0"># ${this.tag}</span>`;

        parentElement.insertAdjacentHTML("beforeend", template);
    }
}
