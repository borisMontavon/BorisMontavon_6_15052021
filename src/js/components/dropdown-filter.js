export default class DropdownFilter {
    constructor(mediaContainer, mediaFilter) {
        this.mediaContainer = mediaContainer;
        this.mediaFilter = mediaFilter;
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
                            this.mediaFilter.comparePopularity(this.mediaContainer.medias);
                            break;
                        case "date-label":
                            this.mediaFilter.compareDate(this.mediaContainer.medias);
                            break;
                        case "title-label":
                            this.mediaFilter.compareTitle(this.mediaContainer.medias);
                            break;
                        case "price-label":
                            this.mediaFilter.comparePrice(this.mediaContainer.medias);
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
}