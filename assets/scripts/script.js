const linkStyles = document.createElement('link');
linkStyles.setAttribute('rel', 'stylesheet');
linkStyles.setAttribute('href', './assets/css/style.css');

document.head.appendChild(linkStyles);

function getProdutos(botoes = false) {    

fetch('http://localhost:3000/produtos', {
    method:'GET',
    headers: {
        'Content-type': 'application/json'
        }   
    })

        .then(res => res.json())
        .then(res => {
            document.querySelector('#listaProdutos').innerHTML = "";
            
            for (let i = 0; i < res.length; i++) {

                const ul = document.createElement('ul');
                ul.classList.add('produto');
                const img = document.createElement('img');

                ul.appendChild(document.createElement('li')).innerHTML = res[i].id;
                ul.appendChild(document.createElement('li')).innerHTML = res[i].descricao;
                ul.appendChild(document.createElement('li')).innerHTML = res[i].preco;
                ul.appendChild(document.createElement('li')).appendChild(img).setAttribute('src', res[i].imagem);

                if (botoes) {
                    const btnDelete = document.createElement('button');
                    
                    btnDelete.setAttribute('type', 'button');
                    btnDelete.classList.add('btnDelete');
                    btnDelete.value = res[i].id;
                    btnDelete.innerHTML = 'X';

                    ul.appendChild(document.createElement('li')).appendChild(btnDelete);
                }

                document.querySelector('#listaProdutos').appendChild(ul);
            }
        });
}
