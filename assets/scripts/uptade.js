import { getProdutos } from "./script.js";

const linkStyles = document.createElement('link');
linkStyles.setAttribute('rel', 'stylesheet');
linkStyles.setAttribute('href', './assets/css/style.css');

document.head.appendChild(linkStyles);

document.querySelector('#btnAtualizar').addEventListener('click', () => {
    const id = document.querySelector('input#id').value;

    const dados = {
        'id': null,
        'descricao': document.querySelector('#descricao').value,
        'preco': document.querySelector('#preco').value,
        'imagem': document.querySelector('#imagem').value
    }

    fetch(`https://json-server-vercel-wine-eta.vercel.app/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(res => {
            if (res.ok) {
                document.querySelector('#resposta').innerHTML = 'Produto Atualizado!';
            }
        });

        getProdutos();

        const toggleAtualizar = document.querySelector('#resposta');
        toggleAtualizar.classList.add('toggle-active');
        
        setTimeout(() => {
            toggleAtualizar.classList.remove('toggle-active');
        }, 2500)

});
getProdutos();

/*
    document.addEventListener('click', e => {            
        if(e.target.classList.contains('btnDelete')) {

            fetch(`http://localhost:3000/produtos/${e.target.value}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            
                .then(res => {
                    if(res.ok) {
                        alert('Produto Atualizado');
                    }
                });

            getProdutos(true);
        }
    });
*/
    

document.addEventListener('click', e => {
        if(e.target.closest('ul').classList.contains('produto')) {
            const elementoBase = e.target.closest('ul')

            document.querySelector('input#id').value = elementoBase.querySelector('[data-produto="id"]').innerHTML;
            document.querySelector('input#descricao').value = elementoBase.querySelector('[data-produto="descricao"]').innerHTML;
            document.querySelector('input#preco').value = elementoBase.querySelector('[data-produto="preco"]').innerHTML;
            document.querySelector('input#imagem').value = elementoBase.querySelector('[data-produto="imagem"]').innerHTML;

            limparFormulario();

        } 
});


function limparFormulario() {
    const idPreenchido = document.querySelector('input#id').value !== "";
    const descricaoPreenchida = document.querySelector('input#descricao').value !== "";
    const precoPreenchido = document.querySelector('input#preco').value !== "";
    const imagemPreenchido = document.querySelector('input#imagem').value !== "";
    
    if(idPreenchido || descricaoPreenchida || precoPreenchido || imagemPreenchido) {
        document.querySelector('button#reset').removeAttribute('disabled', '');
        document.querySelector('button#btnAtualizar').removeAttribute('disabled', '');

        if(idPreenchido) {
            document.querySelector('button#btnAtualizar').removeAttribute('disabled');
        } else {
            document.querySelector('button#btnAtualizar').setAttribute('disabled', '');
        }

    } else {
        document.querySelector('button#reset').setAttribute('disabled', '');
        document.querySelector('button#btnAtualizar').setAttribute('disabled', '');
    }
}


document.addEventListener('keyup', () => {
    limparFormulario();
});


document.querySelector('.form').addEventListener('reset', () => {
    document.querySelector('button#reset').setAttribute('disabled', '');
    document.querySelector('button#btnAtualizar').setAttribute('disabled', '');
});


const btnThemeBase = document.querySelector('.nigth-mode')
const btnTheme = document.querySelector('.btn-theme');
btnThemeBase.addEventListener('click', () => {
    btnThemeBase.classList.toggle('btn-active');
    btnTheme.classList.toggle('btn-active');

    const header = document.querySelector('#header');
    const main = document.querySelector('#main');
    const form = document.querySelector('.form');
    const listaProdutos = document.querySelector('#listaProdutos');

    header.classList.toggle('night-mode');
    main.classList.toggle('night-mode');
    form.classList.toggle('night-mode');
    listaProdutos.classList.toggle('night-mode');
});

btnTheme.addEventListener('click', () => {
            if (btnTheme.classList.contains('btn-active')) {
                btnThemeBase.classList.add('btn-active');
                btnTheme.classList.add('btn-active');

                const header = document.querySelector('#header');
                const main = document.querySelector('#main');
                const form = document.querySelector('.form');
                
                header.classList.add('night-mode');
                main.classList.add('night-mode');
                form.classList.add('night-mode');
                
            } else if (!btnTheme.classList.contains('btn-active')){
                btnThemeBase.classList.remove('btn-active');
                btnTheme.classList.remove('btn-active');

                const header = document.querySelector('#header');
                const main = document.querySelector('#main');
                const form = document.querySelector('.form');

                header.classList.remove('night-mode');
                main.classList.remove('night-mode');
                form.classList.remove('night-mode');
            }
});