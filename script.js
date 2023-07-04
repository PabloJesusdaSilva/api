/*const productDiv = document.querySelector('#product');
const btn = document.querySelector('#btn');
const req = new Request('http://localhost:3000/produtos', {
    method:'GET',
    headers: {
        'Content-type': 'application/json'
    }
});


btn.addEventListener('click', () => {
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
    
    */
const btnATualizar = document.querySelector('#btnAtuazlizar');

btnATualizar.addEventListener('click', () => {
    const inputId = document.querySelector('#id').value;
    const inputDescricao = document.querySelector('#descricao').value;
    const inputPreco = document.querySelector('#preco').value;
    const inputImagem = document.querySelector('#imagem').value;

    const dados = {
        id: null,
        descricao: inputDescricao,
        preco: inputPreco,
        imagem: inputImagem
    }

    fetch(`http://localhost:3000/produtos/${inputId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(res => {
            console.log(res.status)
        })

        getProdutos()
});

function getProdutos() {
    const productDiv = document.querySelector('#product');
    
    fetch('http://localhost:3000/produtos', {
        method:'GET',
        headers: {
            'Content-type': 'application/json'
            }   
        })
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
}