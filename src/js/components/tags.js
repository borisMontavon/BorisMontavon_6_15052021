export default class Tags {
    constructor(tags, parentId, container) {
        this.tags = tags;
        this.parentId = parentId;
        this.container = container;
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
        span.setAttribute("tabindex", "0");
        
        if (this.container.tagsSelected.includes(tag)) {
            span.classList.add("tag-selected");
        }

        // innerHtml value update
        span.innerHTML = `# ${tag}`;

        span.addEventListener("click", () => {
            span.classList.toggle("tag-selected");

            if (span.classList.contains("tag-selected")) {
                this.container.tagsSelected.push(tag);
            } else {
                const tagClicked = this.container.tagsSelected.indexOf(tag);

                if (tagClicked > -1) {
                    this.container.tagsSelected.splice(tagClicked, 1);
                }
            }

            this.elementHasSelectedTag(this.container.getElementsToFilter(), this.container.tagsSelected);

            this.container.render();
        });

        span.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();

                span.classList.toggle("tag-selected");

                if (span.classList.contains("tag-selected")) {
                    this.container.tagsSelected.push(tag);
                } else {
                    const tagClicked = this.container.tagsSelected.indexOf(tag);

                    if (tagClicked > -1) {
                        this.container.tagsSelected.splice(tagClicked, 1);
                    }
                }

                this.elementHasSelectedTag(this.container.getElementsToFilter(), this.container.tagsSelected);

                this.container.render();
            }
        });

        return span;
    }

    elementHasSelectedTag(elements, tags) {
        if (tags.length === 0) {
            elements.forEach((element) => {
                element.state.display = true;
            });
        } else {
            elements.forEach((element) => {
                const found = element.state.tags.some(tag => tags.includes(tag));

                if (found) {
                    element.state.display = true;
                } else {
                    element.state.display = false;
                }
            });
        }
    }
}