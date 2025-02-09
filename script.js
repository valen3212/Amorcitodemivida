document.getElementById("btnYes").addEventListener("click", function() {
    const animation = document.getElementById("animation");
    animation.classList.remove("hidden");
});

document.getElementById("btnNo").addEventListener("click", function() {
    alert("Tal vez en otro momento :)");
});