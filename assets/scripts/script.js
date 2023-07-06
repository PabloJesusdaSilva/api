const linkStyles = document.createElement('link');
linkStyles.setAttribute('rel', 'stylesheet');
linkStyles.setAttribute('href', './assets/css/style.css');

document.head.appendChild(linkStyles);

// Exibindo produtos

const productDiv = document.querySelector('#product');

document.querySelector('#btn-fetch').addEventListener('click', () => {
    fetch('http://localhost:3000/produtos', {
        method:'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })

    .then(res => res.json())
    .then(res => {
        productDiv.innerHTML = '';
        
        for (let i = 0; i < res.length; i++) {
            const ul = document.createElement("ul");

            const product = `
                <li>ID: ${res[i].id}</li>
                <li>DESCRIÇÃO: ${res[i].descricao}</li>
                <li>PREÇO: ${res[i].preco}</li>
                `;
            
            productDiv.appendChild(ul).innerHTML = product;
        }      
    });
});


// Criação de produtos
