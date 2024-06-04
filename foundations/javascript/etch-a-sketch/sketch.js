const WIDTH = 800;
const grid = document.querySelector('#grid');

grid.style = `display: flex; flex-wrap: wrap; width: ${WIDTH}px; height: ${WIDTH}px;`;


function deleteGrid() {
    while (grid.lastChild) {
        grid.removeChild(grid.lastChild);
    }
}

function createGrid(size) {
    deleteGrid();
    for (let i = 0; i < size ** 2; i++) {
        let div = document.createElement('div');
        div.style = `width: ${WIDTH / size}px; height: ${WIDTH / size}px; background-color: white; border: 1px solid black;`;
        grid.appendChild(div);
    }
}

document.querySelector('#resize').addEventListener('click', () => {
    const size = document.querySelector('#input').value;
    if (size < 1 || size > 100) {
        alert('Please enter a number between 1 and 100');
        return;
    } else {
        createGrid(size);
    }
});

document.querySelector('#clear').addEventListener('click', () => {
    grid.childNodes.forEach((div) => {
        div.style.backgroundColor = 'white';
    });
});

grid.addEventListener('mouseover', (e) => {
    if (e.target.style.backgroundColor === 'white') {
        e.target.style.backgroundColor = 'black';
    }
});

window.onload = () => {
    createGrid(16);
}