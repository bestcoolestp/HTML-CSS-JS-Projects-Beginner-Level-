const containerEl = document.querySelector('.container');

for (let i = 0; i < 30; i++) {
    const colorContainerEl = document.createElement('div');
    colorContainerEl.classList.add('color-container');
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll('.color-container');

function generateColors() {
    colorContainerEls.forEach((colorContainerEl) => {
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = '#' + newColorCode;
        colorContainerEl.innerText = '#' + newColorCode;
    });
}

generateColors();

function randomColor() {
    const chars = '0123456789ABCDEF';
    const colorCodeLength = 6;
    let colorCode = '';
    for (let i = 0; i < colorCodeLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars[randomNum];
    }
    return colorCode;
}

// const containerEl = document.querySelector('.container');
// const colorContainerEls = [];

// for (let i = 0; i < 30; i++) {
//   const colorContainerEl = createColorContainer();
//   containerEl.appendChild(colorContainerEl);
//   colorContainerEls.push(colorContainerEl);
// }

// generateColors();

// function createColorContainer() {
//   const colorContainerEl = document.createElement('div');
//   colorContainerEl.classList.add('color-container');
//   return colorContainerEl;
// }

// function generateColors() {
//   colorContainerEls.forEach(colorContainerEl => {
//     const newColorCode = randomColor();
//     colorContainerEl.style.backgroundColor = `#${newColorCode}`;
//     colorContainerEl.innerText = `#${newColorCode}`;
//   });
// }

// function randomColor() {
//   const chars = '0123456789ABCDEF';
//   const colorCodeLength = 6;
//   let colorCode = '';

//   for (let i = 0; i < colorCodeLength; i++) {
//     const randomIndex = Math.floor(Math.random() * chars.length);
//     colorCode += chars[randomIndex];
//   }

//   return colorCode;
// }
