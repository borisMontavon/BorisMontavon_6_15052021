// Like button

var likeCounter = 0;

const incrementValue = () => {
    document.getElementById("like").setAttribute("disabled", "true");

    likeCounter++;
    document.getElementById('number').innerHTML = likeCounter;
    document.getElementById("like").removeAttribute("disabled");
};

import ElementsFactory from "./components/factory";
import Tags from "./components/tags";
import PhotographList from "./components/photographList";