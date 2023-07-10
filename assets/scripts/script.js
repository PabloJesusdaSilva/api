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
                        btn.classList.add('btn-delete');
                        btn.value = res[i].id;

                        ul.appendChild(liBtn).appendChild(btn);
                    }

                    ul.appendChild(document.createElement('li')).innerHTML = res[i].id;
                    ul.appendChild(document.createElement('li')).innerHTML = res[i].descricao;
                    ul.appendChild(document.createElement('li')).innerHTML = res[i].preco;
                    ul.appendChild(document.createElement('img')).appendChild(img).setAttribute('src', res[i].imagem);

                    document.querySelector('#listaProdutos').appendChild(ul);
                }
            });

}

    
