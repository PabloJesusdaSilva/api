import { getProdutos } from "./script.js";

document.querySelector('#btnCadastro').addEventListener('click', () => {

    const dados = {
    'id': null,
    'descricao': document.querySelector('#descricao').value,
    'preco': document.querySelector('#preco').value,
    'imagem': document.querySelector('#imagem').value
}

fetch(`https://json-server-vercel-wine-eta.vercel.app/produtos/`, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON. stringify(dados)
})

        .then(res => {
            if (res.ok) {
                document.querySelector('#resposta').innerHTML = 'Produto Atualizado';
            } 
        });
        
    getProdutos();

    const toggleAtualizar = document.querySelector('#resposta');
        toggleAtualizar.classList.add('toggle-active');
        
        setTimeout(() => {
            toggleAtualizar.classList.remove('toggle-active');
        }, 1500);
});

getProdutos()


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