const button = document.getElementById("calender");
const img = document.getElementById("open-close-icon");
const showHide_container = document.querySelector(".showHide-container");
let open = false;
button.onclick = () => {
    open = !open;
    if (open) {
        img.src = "./images/arrowup.svg";
        showHide_container.style.display = "block";
    }
    else {
        img.src = "./images/arrow.svg";
        showHide_container.style.display = "none";
    }
}