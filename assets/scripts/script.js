const linkStyles = document.createElement('link');
linkStyles.setAttribute('rel', 'stylesheet');
linkStyles.setAttribute('href', './assets/css/style.css');

document.head.appendChild(linkStyles);

function getProdutos(btnDelete = false) {    

    fetch('http://localhost:3000/produtos', {
        method:'GET',
        headers: {
            'Content-type': 'application/json'
            }   
        })

            .then(res => res.json())
            .then(res => {
                let listaProdutos = document.querySelector('#listaProdutos');
                listaProdutos.innerHTML = "";
                
                for (let i = 0; i < res.length; i++) {

                    const ul = document.createElement('ul');
                    ul.classList.add('produto');


                    const img = document.createElement('img');

                    if (btnDelete) {
                        const liBtn = document.createElement('li');

                        const btn = document.createElement('button');
                        btn.type = 'button';
                        btn.innerHTML = 'X';
                        btn.classList.add('btnDelete');
                        btn.value = res[i].id;

                        ul.appendChild(liBtn).appendChild(btn);
                    }

                    let liId = document.createElement('li');
                    liId.setAttribute('data-produto', 'id');
                    ul.appendChild(liId).innerHTML = res[i].id;
                    

                    let liDescricao = document.createElement('li');
                    liDescricao.setAttribute('data-produto', 'descricao');
                    ul.appendChild(liDescricao).innerHTML = res[i].descricao;

                    let liPreco = document.createElement('li');
                    liPreco.setAttribute('data-produto', 'preco');
                    ul.appendChild(liPreco).innerHTML = res[i].preco;

                    let liImagem = document.createElement('li');
                    liImagem.setAttribute('data-produto', 'imagem');
                    ul.appendChild(liImagem).appendChild(img).setAttribute('src', res[i].imagem);

                    document.querySelector('#listaProdutos').appendChild(ul);
                }
            });
}