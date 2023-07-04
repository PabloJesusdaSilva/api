const productDiv = document.querySelector('#product');
const btn = document.querySelector('#btn');
const req = new Request('http://localhost:3000/produtos', {
    method:'GET',
    headers: {
        'Content-type': 'application/json'
    }
});


btn.addEventListener('mousedown', () => {
    fetch(req)
    .then(res => res.json())
    .then(res => {
        productDiv.innerHTML = ''
        
         for(let i = 0; i < 2; i++) {
             const div = document.createElement("div");

             const product = `
             <p>ID: ${res[i].id}</p>
             <p>DESCRIÇÃO: ${res[i].descricao}</p>
             <p>PREÇO: ${res[i].preco}</p>
             `;
             
            productDiv.appendChild(div).innerHTML = product;
        }
        
    });
});

console.log('teste')