function Close() {
    const close = document.getElementById("drop-down");

    if(close.style.display === "") {
        close.style.display = "none";
    } else {
        close.style.display = "";
    }
}
function Toggle() {
    const close = document.getElementById("drop-down");

    if(close.style.display === "none") {
        close.style.display = "";
    } else {
        close.style.display = "none";
    }
}