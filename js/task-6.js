function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
    const boxesContainer = document.querySelector('#boxes');
    boxesContainer.innerHTML = '';
    const boxesFragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        const size = 30 + i * 10;
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.classList.add('box');
        boxesFragment.appendChild(box);
    }

    boxesContainer.appendChild(boxesFragment);
}

function destroyBoxes() {
    const boxesContainer = document.querySelector('#boxes');
    boxesContainer.innerHTML = '';
}

function onCreateButtonClick() {
    const input = document.querySelector('input[type="number"]');
    const amount = parseInt(input.value, 10);

    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = '';
    } else {
        alert('Please enter a number between 1 and 100.');
    }
}

function onDestroyButtonClick() {
    destroyBoxes();
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', onCreateButtonClick);
destroyButton.addEventListener('click', onDestroyButtonClick);