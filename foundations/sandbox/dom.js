const p = document.createElement('p');
p.textContent = 'Hey I\'m red!';
p.style.color = 'red';

const h3 = document.createElement('h3');
h3.textContent = 'I\'m a blue h3!';
h3.style.color = 'blue';

const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div';
div.appendChild(h1);

const p2 = document.createElement('p');
p2.textContent = 'ME TOO!';
div.appendChild(p2);


const body = document.querySelector('body');
body.appendChild(p);
body.appendChild(h3);
body.appendChild(div);
