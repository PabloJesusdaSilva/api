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
                    img.setAttribute('src', res[i].imagem);
                    img.setAttribute('data-produto', 'imagem');

                    let liId = document.createElement('li');
                    liId.innerHTML = res[i].id;
                    liId.setAttribute('data-produto', 'id');
                    
                    let liDescricao = document.createElement('li');
                    liDescricao.innerHTML = res[i].descricao;
                    liDescricao.setAttribute('data-produto', 'descricao');

                    let liPreco = document.createElement('li');
                    liPreco.innerHTML = res[i].preco;
                    liPreco.setAttribute('data-produto', 'preco');

                    let liImagem = document.createElement('li');
                    ul.appendChild(liImagem).appendChild(img);

                    ul.append(liId, liDescricao, liPreco);
                    
                    if (btnDelete) {
                        const liBtn = document.createElement('li');

                        const btn = document.createElement('button');
                        btn.type = 'button';
                        btn.innerHTML = 'X';
                        btn.classList.add('btnDelete');
                        btn.value = res[i].id;

                        ul.appendChild(liBtn).appendChild(btn);
                    }

                    document.querySelector('#listaProdutos').appendChild(ul);
                }
            });
}