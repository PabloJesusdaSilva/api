import { getProdutos } from "./script";

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
    