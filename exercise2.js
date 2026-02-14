const swatches = document.querySelectorAll('.swatch');

// Define a function that reads this.dataset.color
// and applies it as this.style.backgroundColor
// Then attach it to every swatch

function changeBackgroundColor() {
    this.style.backgroundColor = this.dataset.color;
}

swatches.forEach(s => {
    s.addEventListener("click", changeBackgroundColor)
});