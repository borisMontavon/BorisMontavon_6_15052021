const comparePopularity = (medias) => {
    medias.sort((a, b) => b.state.likes - a.state.likes);
};

const compareDate = (medias) => {
    medias.sort((a, b) => b.state.date - a.state.date);
};

const compareTitle = (medias) => {
    medias.sort((a, b) => a.state.title.localeCompare(b.state.title));
};

const comparePrice = (medias) => {
    medias.sort((a, b) => b.state.price - a.state.price);
};

const optionEventListener = (option, event, select, medias, callback) => {
    if (event.type === "click" || (event.type === "keyup" && event.key === "Enter")) {
        if (!option.classList.contains("selected")) {
            option.parentNode.querySelector(".custom-option.selected").classList.remove("selected");

            const optionDataValue = option.getAttribute("data-value");

            switch (optionDataValue) {
                case "popularity":
                    comparePopularity(medias);
                    break;
                case "date":
                    compareDate(medias);
                    break;
                case "title":
                    compareTitle(medias);
                    break;
                case "price":
                    comparePrice(medias);
                    break;
                default: break;
            }

            option.classList.add("selected");
            option.closest(".custom-select").querySelector(".custom-select__trigger span").innerHTML = option.innerHTML;
            select.focus();

            callback();
        }     
    }
};

export default function toggleDropdownFilter(medias, callback) {
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
    });

    Array.prototype.forEach.call(options, (option) => {
        option.addEventListener("click", (event) => {
            optionEventListener(option, event, select, medias, callback);
        });

        option.addEventListener("keyup", (event) => {
            optionEventListener(option, event, select, medias, callback);
        });
    });

    window.addEventListener("click", (e) => {
        if (!customSelect.contains(e.target)) {
            customSelect.classList.remove("open");
        }
    });
}
