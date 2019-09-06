
window.addEventListener("load", function () {
    document.getElementById("bot-bar").style.top=Math.max(
        document.getElementById("wrapper").offsetHeight + 20, window.innerHeight
    )+"px";
});