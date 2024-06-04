const WIDTH = 800;
const container = document.querySelector('#container');

container.style = `display: flex; flex-wrap: wrap; width: ${WIDTH}px; height: ${WIDTH}px;`;
container.style.backgroundColor = 'black';

for (let i = 0; i < 50 ** 2; i++) {
    let div = document.createElement('div');
    div.style = `width: ${WIDTH / 50}px; height: ${WIDTH / 50}px; background-color: white; border: 1px solid black;`;
    container.appendChild(div);
}