document.querySelector(".theme-button").addEventListener("click", () => {
    document.body.classList.toggle("bright-theme");
    if(document.body.classList.contains("bright-theme")){
        localStorage.setItem("theme", "bright");
    }
    else{
        localStorage.removeItem("theme");
    }
});

window.onload = () => {
    if(localStorage.getItem("theme")){
        document.body.classList.add("bright-theme");
    }
}