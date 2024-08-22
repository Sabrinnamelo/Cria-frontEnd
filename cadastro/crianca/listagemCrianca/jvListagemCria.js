

function obterDados(){
    fetch("crianca")
    .then(resposta => resposta.json())
    .then(retorno => {
        const corpoTB = document.querySelector("#table tbody");
        retorno.forEach( item =>{
            corpoTB.innerHTML += 
            `<tr>
            
                <td>${item.id}</td>
                <td>${item.nome}</td>
                <td>${item.rg}</td>
                <td>${item.saudeCrianca.laudo}</td>
                   <td>
                        <button class="btn-editar">Editar</button>
                        <button class="btn-deletar">Deletar</button>

                    </td>
            </tr>`
        })
    })
    .catch(erro => console.log(erro))
}

obterDados();




