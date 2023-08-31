const imageElement = document.getElementById("image");
const heartElement = document.getElementById("heart");
const nextButton = document.getElementById("nextButton");
const rankButton = document.getElementById("rankButton");
const homeButton = document.getElementById("homeButton");
const galleryButton = document.getElementById("galleryButton");

const images = [
    // Array de URLs de imágenes
];

let currentIndex = 0;
let likedImages = [];

function getRandomImageURL() {
    // Función para obtener URL aleatoria de imagen
}

function updateImage() {
    const randomImageURL = getRandomImageURL();
    imageElement.src = randomImageURL;
}

function showNextImage() {
    heartElement.style.display = "none"; // Ocultar el corazón si aparece
    updateImage();
}

function showHeartAnimation() {
    heartElement.style.display = "block";
    setTimeout(() => {
        heartElement.style.display = "none";
    }, 1000);
}

function addLikedImage() {
    if (!likedImages.includes(currentIndex)) {
        likedImages.push(currentIndex);
        showHeartAnimation();
    }
}

nextButton.addEventListener("click", showNextImage);
circle.addEventListener("dblclick", addLikedImage);

rankButton.addEventListener("click", () => {
    alert("Este es el ranking");
});

homeButton.addEventListener("click", () => {
    // Puedes añadir aquí la lógica para la página Home
});

galleryButton.addEventListener("click", () => {
    // Puedes añadir aquí la lógica para la página Gallery
});

// Carga inicial de imagen
updateImage();

// Cambiar imagen automáticamente cada 30 segundos
setInterval(showNextImage, 30000);
