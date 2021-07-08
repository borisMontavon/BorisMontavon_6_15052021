export default class TagFilter {
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