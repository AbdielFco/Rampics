const imageElement = document.getElementById("image");
const nextButton = document.getElementById("nextButton");
const rankButton = document.getElementById("rankButton");
const homeButton = document.getElementById("homeButton");
const galleryButton = document.getElementById("galleryButton");
const categorySelect = document.getElementById("categorySelect");

// Array de imágenes con categorías
const images = [
    { url: "imagen1.jpg", category: "paisajes" },
    { url: "imagen2.jpg", category: "anime" },
    { url: "imagen3.jpg", category: "series" },
    // ... agregar más imágenes y categorías ...
];

let currentIndex = 0;
let likedImages = [];

function getRandomImageURL(category) {
    const filteredImages = category === "all" ? images : images.filter(img => img.category === category);
    const randomIndex = Math.floor(Math.random() * filteredImages.length);
    return filteredImages[randomIndex].url;
}

function updateImage() {
    const selectedCategory = categorySelect.value;
    const randomImageURL = getRandomImageURL(selectedCategory);
    imageElement.src = randomImageURL;
}

function showNextImage() {
    updateImage();
}

nextButton.addEventListener("click", showNextImage);

categorySelect.addEventListener("change", () => {
    currentIndex = 0; // Resetear el índice al cambiar de categoría
    updateImage();
});

// Carga inicial de imagen
updateImage();

// Cambiar imagen automáticamente cada 30 segundos
setInterval(showNextImage, 30000);
