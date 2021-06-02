export default class ElementsFactory {
    constructor() {
        this.elements = [];
    }

    addElement(element) {
        this.elements.push(element);
    }

    renderElements() {
        this.elements.forEach((element) => {
            element.render();
        });
    }
}