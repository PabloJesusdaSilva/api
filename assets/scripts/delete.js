import { getProdutos } from "./script.js";

document.addEventListener('click', e => {            
    if(e.target.classList.contains('btnDelete')) {

        fetch(`https://json-server-vercel-wine-eta.vercel.app/produtos/${e.target.value}`, {
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

getProdutos(true)
    