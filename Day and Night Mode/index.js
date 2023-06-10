const inputEl = document.querySelector('.input');
const bodyEl = document.querySelector('body');

inputEl.checked = JSON.parse(localStorage.getItem('checked'));

changeColor();

function changeColor() {
  updateLocalStorage();

  if(inputEl.checked) {
    bodyEl.style.backgroundColor = 'black';
  } else {
    bodyEl.style.backgroundColor = 'white';
  }
    
}

function updateLocalStorage() {
  localStorage.setItem('checked', JSON.stringify(inputEl.checked));
}

inputEl.addEventListener('input', () => {
    changeColor();
    updateLocalStorage();
});