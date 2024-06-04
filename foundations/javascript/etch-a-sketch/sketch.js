const WIDTH = 800;
const container = document.querySelector('#container');
container.style = `display: flex; flex-wrap: wrap; width: ${WIDTH}px; height: ${WIDTH}px;`;

window.onload = () => {
    createGrid(16);
}

function createGrid(size) {
    console.log(size);
    for (let i = 0; i < size ** 2; i++) {
        let div = document.createElement('div');
        div.style = `width: ${WIDTH / size}px; height: ${WIDTH / size}px; background-color: white; border: 1px solid black;`;
        container.appendChild(div);
    }
}

document.querySelector('#resize').addEventListener('click', () => {
    input = document.querySelector('#input').value;
    createGrid(input);
});