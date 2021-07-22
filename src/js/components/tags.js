export default class Tags {
    constructor(tags, parentId, container) {
        this.tags = tags;
        this.parentId = parentId;
        this.container = container;

        this.template = `<span class="tag" aria-label="Tag {{tag}}" data-tag="{{tag}}" tabindex="0"># {{tag}}</span>`;
    }

    render() {
        // Get parent element in which we will insert new HTML elements with values extracted from json's data
        const parentElement = document.getElementById(this.parentId);

        // Get elements from json
        this.tags.forEach((tag) => {
            // Add it to the DOM
            parentElement.insertAdjacentHTML("beforeend", this.template.replaceAll("{{tag}}", tag));
        });

        Array.prototype.forEach.call(parentElement.getElementsByTagName("span"), (element) => {
            const tag = element.dataset.tag;

            if (this.container.tagsSelected.includes(tag)) {
                element.classList.add("tag-selected");
            }

            element.addEventListener("click", (event) => {
                this.tagEventListener(event, element, tag);
            });

            element.addEventListener("keydown", (event) => {
                this.tagEventListener(event, element, tag);
            });
        });
    }
    
    tagEventListener(event, span, tag) {
        if (event.type === "click" || (event.type === "keyup" && event.key === "Enter")) {
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