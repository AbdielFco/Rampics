const imageElement = document.getElementById("image");
const nextButton = document.getElementById("nextButton");

// ... (código JavaScript existente) ...

const categorySelect = document.getElementById("categorySelect");

function filterImages(category) {
    if (category === "all") {
        return images;
    } else {
        return images.filter(image => image.category === category);
    }
}

categorySelect.addEventListener("change", () => {
    const selectedCategory = categorySelect.value;
    const filteredImages = filterImages(selectedCategory);
    currentIndex = 0; // Resetear el índice al cambiar de categoría
    images = filteredImages;
    updateImage();
});

// ... (resto del código JavaScript existente) ...


function getRandomImageURL() {
    const width = 300 + Math.floor(Math.random() * 300);
    const height = 300 + Math.floor(Math.random() * 300);
    return `https://picsum.photos/${width}/${height}`;
}

function updateImage() {
    const randomImageURL = getRandomImageURL();
    imageElement.src = randomImageURL;
}

function showNextImage() {
    updateImage();
}

nextButton.addEventListener("click", showNextImage);

// Initial image load
updateImage();

// Auto-change image every 30 seconds
setInterval(showNextImage, 30000);
