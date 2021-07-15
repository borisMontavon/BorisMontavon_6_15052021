export default class DropdownFilter {
    constructor(mediaContainer) {
        this.mediaContainer = mediaContainer;
    }

    toggleDropdownFilter() {
        const dropdown = document.getElementById("filter");
        const labels = document.querySelectorAll("#filter label");
        const icon = document.querySelector("#filter i");

        labels.forEach((label) => {
           
            label.addEventListener("click", () => {
                const isDropdownActive = dropdown.classList.contains("active");

                if (isDropdownActive) {
                    labels.forEach((label) => {
                        label.classList.remove("d-inline-block");
                    });
                    
                    const labelId = label.getAttribute("id");

                    switch (labelId) {
                        case "popularity-label":
                            this.comparePopularity(this.mediaContainer.medias);
                            break;
                        case "date-label":
                            this.compareDate(this.mediaContainer.medias);
                            break;
                        case "title-label":
                            this.compareTitle(this.mediaContainer.medias);
                            break;
                        case "price-label":
                            this.comparePrice(this.mediaContainer.medias);
                            break;
                        default: break;
                    }

                    this.mediaContainer.render();
                } else {
                    labels.forEach((label) => {
                        label.classList.add("d-inline-block");
                    });
                }

                dropdown.classList.toggle("active");
                icon.classList.toggle("active");
            });
        });

        icon.addEventListener("click", () => {

            if (dropdown.classList.contains("active")) {
                labels.forEach((label) => {
                    label.classList.remove("d-inline-block");
                });
            } else {
                labels.forEach((label) => {
                    label.classList.add("d-inline-block");
                });
            }

            dropdown.classList.toggle("active");
            icon.classList.toggle("active");
        })
    }

    comparePopularity(medias) {
        medias.sort((a, b) => b.state.likes - a.state.likes);
    }

    compareDate(medias) {
        medias.sort((a, b) => b.state.date - a.state.date);
    }

    compareTitle(medias) {
        medias.sort((a, b) => a.state.title.localeCompare(b.state.title));
    }

    comparePrice(medias) {
        medias.sort((a, b) => b.state.price - a.state.price);
    }
}