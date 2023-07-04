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
        
         for(let i = 0; i < res.length; i++) {

             const product = `
             <li>ID: ${res[i].id}</li>
             <li>DESCRIÇÃO: ${res[i].descricao}</li>
             <li>PREÇO: ${res[i].preco}</li>
             `;
             
            productDiv.appendChild(ul).innerHTML = product;
        }
        
    });
});

console.log('teste')