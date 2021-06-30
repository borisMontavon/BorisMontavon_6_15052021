export default class DropdownFilter {
    constructor(mediaFilter) {
        this.mediaFilter = mediaFilter;
    }

    render() {
        this.toggleDropdownFilter();
        this.onPopularityClick();
        this.onDateClick();
        this.onTitleClick();
        this.onPriceClick();
    }
    
    render() {
        this.toggleDropdownFilter();
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
                        label.style.display = "none";
                    });
                } else {
                    labels.forEach((label) => {
                        label.style.display = "inline-block";
                    });
                }

                dropdown.classList.toggle("active");
                icon.classList.toggle("active");
            });
        });

        icon.addEventListener("click", () => {

            if (dropdown.classList.contains("active")) {
                labels.forEach((label) => {
                    label.style.display = "none";
                });
            } else {
                labels.forEach((label) => {
                    label.style.display = "inline-block";
                });
            }

            dropdown.classList.toggle("active");
            icon.classList.toggle("active");
        })
    }

    onPopularityClick() {
        const dropdown = document.getElementById("filter");
        const isDropdownActive = dropdown.classList.contains("active");
        const popularity = document.getElementById("popularity-label");

        popularity.addEventListener("click", () => {
            if (isDropdownActive) {
                this.mediaFilter.comparePopularity();
            }
        });
    }

    onDateClick() {
        const dropdown = document.getElementById("filter");
        const isDropdownActive = dropdown.classList.contains("active");
        const date = document.getElementById("date-label");

        date.addEventListener("click", () => {
            if (isDropdownActive) {
                this.mediaFilter.compareDate();
            }
        });
    }

    onTitleClick() {
        const dropdown = document.getElementById("filter");
        const isDropdownActive = dropdown.classList.contains("active");
        const title = document.getElementById("title-label");

        title.addEventListener("click", () => {
            if (isDropdownActive) {
                this.mediaFilter.compareTitle();
            }
        });
    }

    onPriceClick() {
        const dropdown = document.getElementById("filter");
        const isDropdownActive = dropdown.classList.contains("active");
        const price = document.getElementById("price-label");

        price.addEventListener("click", () => {
            if (isDropdownActive) {
                this.mediaFilter.comparePrice();
            }
        });
    }
}