const elementHasSelectedTag = (elements, tags) => {
    if (tags.length === 0) {
        elements.forEach((element) => {
            element.state.display = true;
        });
    } else {
        elements.forEach((element) => {
            const found = element.state.tags.some((tag) => tags.includes(tag));

            if (found) {
                element.state.display = true;
            } else {
                element.state.display = false;
            }
        });
    }
};

const tagEventListener = (event, span, tag, container, callback) => {
    if (event.type === "click" || (event.type === "keydown" && event.key === "Enter")) {
        span.classList.toggle("tag-selected");

        if (span.classList.contains("tag-selected")) {
            container.tagsSelected.push(tag);
        } else {
            const tagClicked = container.tagsSelected.indexOf(tag);

            if (tagClicked > -1) {
                container.tagsSelected.splice(tagClicked, 1);
            }
        }

        elementHasSelectedTag(container.getElementsToFilter(), container.tagsSelected);

        callback();

        // eslint-disable-next-line no-use-before-define
        addTagEventListener(container, callback);
    }
};

export default function addTagEventListener(container, callback) {
    Array.prototype.forEach.call(document.querySelectorAll(".tag"), (element) => {
        const { tag } = element.dataset;

        if (container.tagsSelected.includes(tag)) {
            element.classList.add("tag-selected");
        }

        element.addEventListener("click", (event) => {
            tagEventListener(event, element, tag, container, callback);
        });

        element.addEventListener("keydown", (event) => {
            tagEventListener(event, element, tag, container, callback);
        });
    });
}
