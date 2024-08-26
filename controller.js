// Validar o acesso do login
function acessar() {
    let loginSenha = document.getElementById("loginSenha").value;
    if (!loginEmail || !loginSenha) {
      alert("Favor preencher todos os campos");
    } else {
      // alert("Campos preenchidos com sucesso");
      window.location.href = "cadastro.html";
    }
  }
   
  // Função que armazena nomes guardados no array
  var dadosLista = [];
  function salvarUser() {
    let nomeUser = document.getElementById("nomeUser").value;
    if (nomeUser) {
      dadosLista.push(nomeUser);
      //console.log(dadosListas);
      criaLista();
      document.getElementById('nomeUser').value = "";
    } else {
      alert("Favor informe um nome para cadastro");
    }
  }


  var dadosLista = [];
  function salvarUser() {
    let emailUser = document.getElementById("emailUser").value;
    if (emailUser) {
      dadosLista.push(emailUser);
      console.log(dadosLista);
      criaLista();
      document.getElementById('emailUser').value = "";
    } else {
      alert("Favor informe um email para o cadastro");
    }
  }
  

  function checarEmail() {
    if (
      document.forms[0].email.value == "" ||
      document.forms[0].email.value.indexOf("@") == -1 ||
      document.forms[0].email.value.indexOf(".") == -1
    ) {
      document.getElementById("email").innerHTML = document.forms[0].email.value;
    }
  }
   
// Pegar o nome do array para tranferir nos usuários
function criaLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    for(let i=0;i <= (dadosLista.length - 1);i++){
      tabela += "<tr><td>" + dadosLista[i] + "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(parentNode.parentNode.rowIndex)'>excluir</button></td></tr>";
      document.getElementById('tabela'). innerHTML = tabela;
    }
}

// EDITAR O NOMES DE LISTA
function editar(i){
    document.getElementById('nomeUser').value = dadosLista [(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)],1);
}

// EXCLUIR NOME DE LISTA
function excluir(i){
    dadosLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);

}