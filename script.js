const imageElement = document.getElementById("image");
const nextButton = document.getElementById("nextButton");

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

// Carga inicial de imagen
updateImage();

// Cambiar imagen automáticamente cada 30 segundos
setInterval(showNextImage, 30000);
