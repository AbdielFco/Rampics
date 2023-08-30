const imageElement = document.getElementById("image");
const nextButton = document.getElementById("nextButton");

const images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/500",
    // Add more image URLs here
];

let currentIndex = 0;

function updateImage(index) {
    imageElement.src = images[index];
}

function getNextIndex() {
    return (currentIndex + 1) % images.length;
}

function showNextImage() {
    currentIndex = getNextIndex();
    updateImage(currentIndex);
}

nextButton.addEventListener("click", showNextImage);

// Initial image load
updateImage(currentIndex);

// Auto-change image every 30 seconds
setInterval(showNextImage, 30000);
