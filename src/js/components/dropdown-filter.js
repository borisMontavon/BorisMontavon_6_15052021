export default class DropdownFilter {
    constructor(mediaContainer) {
        this.mediaContainer = mediaContainer;
    }

    toggleDropdownFilter() {
        const select = document.querySelector(".custom-select-wrapper");
        const customSelect = document.querySelector(".custom-select");
        const options = document.querySelectorAll(".custom-option");

        select.addEventListener("click", () => {
            customSelect.classList.toggle("open");
            Array.prototype.forEach.call(options, (element) => {
                element.setAttribute("tabindex", "0");
            });
        });

        select.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                customSelect.classList.toggle("open");
                Array.prototype.forEach.call(options, (element) => {
                    element.setAttribute("tabindex", "0");
                });
            }
        })

        
        for (const option of options) {
            option.addEventListener("click", (event) => {
                this.optionEventListener(option, event, select);
            });

            option.addEventListener("keyup", (event) => {
                this.optionEventListener(option, event, select);
            });
        }

        window.addEventListener("click", (e) => {
            if (!customSelect.contains(e.target)) {
                customSelect.classList.remove("open");
            }
        });
    }

    optionEventListener(option, event, select) {
        if (event.type === "click" || (event.type === "keyup" && event.key === "Enter")) {
            if (!option.classList.contains("selected")) {
                option.parentNode.querySelector(".custom-option.selected").classList.remove("selected");
    
                let optionDataValue = option.getAttribute("data-value");
    
                switch (optionDataValue) {
                    case "popularity":
                        this.comparePopularity(this.mediaContainer.medias);
                        break;
                    case "date":
                        this.compareDate(this.mediaContainer.medias);
                        break;
                    case "title":
                        this.compareTitle(this.mediaContainer.medias);
                        break;
                    case "price":
                        this.comparePrice(this.mediaContainer.medias);
                        break;
                    default: break;
                }
    
                option.classList.add("selected");
                option.closest(".custom-select").querySelector(".custom-select__trigger span").innerHTML = option.innerHTML;
                select.focus();
    
                this.mediaContainer.render();
            }     
        }
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