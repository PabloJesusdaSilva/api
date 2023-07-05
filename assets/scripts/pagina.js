const h1 = document.createElement('h1');
h1.innerHTML = "Minha página dinâmica";
h1.classList.add('title');

const h2 = document.createElement('h2');
h1.innerHTML = "Esta página está sendo gerada dinamicamente";

const p1 = document.createElement('p');
p1.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae adipisci aliquam harum minima eius perspiciatis ex ipsam quae cupiditate atque, ad fuga accusamus, quos vero, laborum deserunt ipsa dicta voluptatem.";

document.body.appendChild(h1);
document.body.appendChild(h2);
document.body.appendChild(p1);