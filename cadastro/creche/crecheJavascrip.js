
var form = document.querySelector("#cadastro-form");

form.addEventListener("submit", enviarDados);

function enviarDados(event) {
  event.preventDefault();

  const dados = new FormData(event.target);

  let jsonC = {};
  dados.forEach((valor, chave) => {
    jsonC[chave] = valor;
  });

   fetch(event.target.action, {
    method: 'POST', 
    body: JSON.stringify(jsonC), 
    headers: {'Content-Type': 'application/json'}
    })

   .then(resposta => resposta.json())
   .then(turma => {console.log(turma)
   document.location.reload(true);
   })
   .catch(erro => console.log(erro))
}





