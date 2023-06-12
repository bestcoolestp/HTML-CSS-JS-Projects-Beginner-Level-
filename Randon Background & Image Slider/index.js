window.addEventListener('DOMContentLoaded', function () {
    const nextEl = document.querySelector('.next');
    const prevEl = document.querySelector('.prev');
    const imageContainerEl = document.querySelector('.image-container');
  
    let currentImg = 0;
  
    nextEl.addEventListener('click', () => {
      currentImg++;
      updateImage();
    });
  
    prevEl.addEventListener('click', () => {
      currentImg--;
      updateImage();
    });
  
    function updateImage() {
      const imgsEl = document.querySelectorAll('.image-container img');
      if (currentImg >= imgsEl.length) {
        currentImg = 0;
      } else if (currentImg < 0) {
        currentImg = imgsEl.length - 1;
      }
  
      imageContainerEl.style.transform = `translateX(-${currentImg * 500}px)`;
    }
  
    let imageCount = 10; // Number of images to generate
  
    for (let i = 0; i < imageCount; i++) {
      generateImage();
    }
  
    function generateImage() {
      let randomId = Math.floor(Math.random() * 500) + 1; // Generate random ID between 1 and 1000
      let imageUrl = 'https://picsum.photos/id/' + randomId + '/500/300';
  
      let imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      imgElement.alt = 'random images';
  
      let backgroundEl = document.querySelector('body');
      backgroundEl.style.background = 'url(' + imageUrl + ')';
      backgroundEl.style.backgroundSize = 'cover';
      

      imgElement.addEventListener('error', function () {
        // If the image URL returns an error, generate a new random ID and use a fallback image
        randomId = Math.floor(Math.random() * 500) + 1;
        imageUrl = 'https://picsum.photos/id/' + randomId + '/500/300';
        imgElement.src = imageUrl;
      });
  
      imageContainerEl.appendChild(imgElement);

    }
  });
  