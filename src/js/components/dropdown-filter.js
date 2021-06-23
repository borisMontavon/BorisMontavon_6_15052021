export default class DropdownFilter {
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
}