document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const lateralMenu = document.getElementById("lateralMenu");

    menuToggle.addEventListener("click", () => {
        lateralMenu.classList.toggle("active");
    });
});

function openModal() {
    document.getElementById("videoModal").style.display = "flex";
    document.getElementById("youtubeVideo").src = "https://www.youtube.com/embed/cADPJu1DwbI?autoplay=1"; // El enlace de YouTube con autoplay
}

function closeModal() {
    document.getElementById("videoModal").style.display = "none";
    document.getElementById("youtubeVideo").src = ""; // Detiene el video cuando se cierra el modal
}
