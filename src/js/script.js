// Like button
var likeCounter = 0;

const incrementValue = () => {
    document.getElementById("like").setAttribute("disabled", "true");

    likeCounter++;
    document.getElementById('number').innerHTML = likeCounter;
    document.getElementById("like").removeAttribute("disabled");
}