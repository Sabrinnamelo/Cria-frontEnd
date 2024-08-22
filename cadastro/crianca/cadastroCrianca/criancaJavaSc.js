
var formT = document.querySelector("#form-crianca");


formT.addEventListener("submit", enviarDados);

function enviarDados(event) {
  event.preventDefault();

  const dados = new FormData(event.target);

  let jsonTurma = {};
  dados.forEach((valor, chave) => {
    jsonTurma[chave] = valor;
  });

   fetch(event.target.action, {
    method: 'POST', 
    body: JSON.stringify(jsonTurma), 
    headers: {'Content-Type': 'application/json'}
    })

   .then(resposta => resposta.json())
   .then(turma => {console.log(turma)
   document.location.reload(true);
   })
   .catch(erro => console.log(erro))
}
