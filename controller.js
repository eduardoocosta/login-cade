<<<<<<< HEAD
// Função para acessar e redirecionar
function validarEmail(email) {
  // Expressão regular para validar o formato do email
  const padraoEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return padraoEmail.test(email);
}

// Validação de CPF
function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g,''); // Remove caracteres não numéricos

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      return false; // Verifica se tem 11 dígitos e se todos os dígitos são iguais
  }

  let soma = 0;
  let resto;

  // Validação do primeiro dígito verificador
  for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;

  // Validação do segundo dígito verificador
  for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(10))) return false;

  return true;
}

// Acesso a Tela de Login
// Verificação se todos os campos estão corrigidos corretamente
function acessar() {
  let loginEmail = document.getElementById('loginEmail').value;
  let loginSenha = document.getElementById('loginSenha').value;
 

  if (!loginEmail || !loginSenha) {
      alert("Por favor, preencha todos os campos");
  } else if (!validarEmail(loginEmail)) {
      alert("Por favor, insira um e-mail válido");
=======
// FUNÇÃO PARA ACESSAR E REDIRECIONAR
function acessar() {
  let loginEmail = document.getElementById('loginEmail').value;
  let loginSenha = document.getElementById('loginSenha').value;

  // VERIFICAR SE TODOS OS CAMPOS ESTÃO PREENCHIDOS
  if (!loginEmail || !loginSenha) {
      alert('Favor preencher todos os campos');
>>>>>>> 9df20f3da3e280172e36d142637958a7b1bea262
  } else {
      window.location.href = 'cadastro.html';
  }
}

<<<<<<< HEAD
// Função que armazena dados do Array
// O CÓDIGO ADICIONA UM NOME À LISTA E LIMPA OS CAMPOS SE O NOME NÃO ESTIVER VAZIO
var dadosLista = [];
function salvarUser() {
  let nomeUser = document.getElementById('nomeUser').value;
  let emailUser = document.getElementById('emailUser').value;
  let cpfUser = document.getElementById('cpfUser').value;

  if (nomeUser && emailUser && cpfUser) {
      if (!validarEmail(emailUser)) {
          alert('Por favor, insira um e-mail válido.');
      } else if (!validarCPF(cpfUser)) {
          alert('Por favor, insira um CPF válido.');
      } else {
          dadosLista.push({ nome: nomeUser, email: emailUser, cpf: cpfUser });
          criarLista();
          document.getElementById('nomeUser').value = "";
          document.getElementById('emailUser').value = "";
          document.getElementById('cpfUser').value = "";
      }
  } else {
      alert('Por favor, preencha todos os campos.');
  }
}

// Array dos usuários
// O CÓDIGO ATUALIZA O CONTEÚDO DA TABELA HTML PARA EXIBIR OS DADOS DA LISTA, CRIANDO LINHAS PARA CADA ITEM, ADICIONANDO "BOTÕES DE EDITAR E EXCLUIR"
function criarLista() {
  let tabela = "<tr><th>Nome Usuário</th><th>Email</th><th>CPF</th><th>Ações</th></tr>";
  for (let i = 0; i < dadosLista.length; i++) {
      tabela += "<tr><td>" + dadosLista[i].nome + "</td><td>" + dadosLista[i].email + "</td><td>" + dadosLista[i].cpf + "</td>" +
      "<td><button type='button' onclick='editar(" + i + ")'>Editar</button>" +
      "<button type='button' onclick='excluir(" + i + ")'>Excluir</button></td></tr>";
  }
  document.getElementById('tabela').innerHTML = tabela;
}

// Função para editar
// O CÓDIGO ATUALIZA OS CAMPOS `NOMEUSER`, `EMAILUSER` E `CPUSER` COM O VALOR DO ITEM NA POSIÇÃO 'I' DO ARRAY `DADOSLISTA` E REMOVE O ITEM DA LISTA
function editar(i) {
  document.getElementById('nomeUser').value = dadosLista[i].nome;
  document.getElementById('emailUser').value = dadosLista[i].email;
  document.getElementById('cpfUser').value = dadosLista[i].cpf;
  dadosLista.splice(i, 1);
  criarLista();
}

// FUNÇÃO PARA EXCLUIR ITEM DA LISTA
// A FUNÇÃO REMOVE O ITEM DO ARRAY E ATUALIZA A TABELA HTML COM O ID TABELA
function excluir(i) {
  dadosLista.splice(i, 1);
  criarLista();
}
=======
// ARRAY PARA ARMAZENAR USUÁRIOS
var dadosLista = [];
var indexEditar = -1; // Índice global para armazenar qual usuário está sendo editado

// FUNÇÃO PARA SALVAR USUÁRIO NA LISTA
function salvarUser() {
  let nomeUser = document.getElementById('nomeUser').value;
  let emailUser = document.getElementById('emailUser').value;

  if (nomeUser && emailUser) {
      if (indexEditar === -1) {
          // Adiciona novo usuário
          dadosLista.push({ nome: nomeUser, email: emailUser });
      } else {
          // Atualiza usuário existente
          dadosLista[indexEditar] = { nome: nomeUser, email: emailUser };
          indexEditar = -1; // Reseta o índice de edição
      }
      crialista();
      document.getElementById("nomeUser").value = "";
      document.getElementById("emailUser").value = "";
  } else {
      alert("Favor informe um nome e email para cadastro");
  }
}

// FUNÇÃO PARA CRIAR LISTA DE USUÁRIOS
function crialista() {
  let tabela = "<tr><th>Nome Usuário</th><th>Email Usuário</th><th>Ações</th></tr>";
  
  dadosLista.forEach((user, index) => {
      tabela += `<tr>
          <td>${user.nome}</td>
          <td>${user.email}</td>
          <td>
              <button type='button' onclick='editar(${index})'>Editar</button>
              <button type='button' onclick='excluir(${index})'>Excluir</button>
          </td>
      </tr>`;
  });
  
  document.getElementById('tabela').innerHTML = tabela;
}

// FUNÇÃO PARA EDITAR USUÁRIO NA LISTA
function editar(index) {
  let user = dadosLista[index];
  document.getElementById("nomeUser").value = user.nome;
  document.getElementById("emailUser").value = user.email;
  indexEditar = index; // Armazena o índice do usuário que está sendo editado
}

// FUNÇÃO PARA EXCLUIR USUÁRIO DA LISTA
function excluir(index) {
  dadosLista.splice(index, 1); // Remove o usuário da lista
  crialista(); // Atualiza a tabela
}

  
>>>>>>> 9df20f3da3e280172e36d142637958a7b1bea262
