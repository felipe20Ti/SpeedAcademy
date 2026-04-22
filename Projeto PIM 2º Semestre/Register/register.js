// CHAMANDO O FORMULARIO

const form = document.getElementById('formCadastro');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // CHAMANDO AS FUNÇÕES
  const nome = document.getElementById('nomeCadastro').value;
  const dataNascimento = document.getElementById('nascimentoCadastro').value;
  const email = document.getElementById('emailCadastro').value;
  const emailConfirmacao = document.getElementById('emailConfirmacao').value;
  const senha = document.getElementById('senhaCadastro').value;
  const senhaConfirmacao = document.getElementById('senhaConfirmacao').value;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //CHAMANDO OS CAMPOS DE ERRO

  const erroNome = document.getElementById('erroNome');
  const erroNascimento = document.getElementById('erroNascimento');
  const erroEmail = document.getElementById('erroEmail');
  const erroConfirmarEmail = document.getElementById('erroConfirmarEmail');
  const erroSenha = document.getElementById('erroSenha');
  const erroConfirmarSenha = document.getElementById('erroConfirmarSenha');

  // RETIRANDO ERROS ANTERIORES

  erroNome.textContent = '';
  erroNascimento.textContent = '';
  erroEmail.textContent = '';
  erroConfirmarEmail.textContent = '';
  erroSenha.textContent = '';
  erroConfirmarSenha.textContent = '';

  //controle de tudo

  let valido = 'true';

  //NOME VAZIO
  if (nome === '') {
    erroNome.textContent = 'Digite seu nome completo.';
    valido = false;
  }
  // DATA INVALIDA
  if (dataNascimento.length !== 10) {
    erroNascimento.textContent = 'Digite uma data valida (dd/mm/aaaa).';
    valido = false;
  }

  if (!regexEmail.test(email)) {
    erroEmail.textContent = 'Digite um email valido.';
    valido = false;
  }

  if (email !== emailConfirmacao) {
    erroConfirmarEmail.textContent = 'Os emails não coincidem.';
    valido = false;
  }

  if (senha.length <= 6) {
    erroSenha.textContent = 'A senha deve conter no minino 6 digitos.';
    valido = false;
  }

  if (senha !== senhaConfirmacao) {
    erroConfirmarSenha.textContent = 'As senhas não coincidem.';
    valido = false;
  }

  if (valido) {
    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);

    alert('Cadastro realizado com sucesso!.');

    window.location.href = '../Login/index.html';
  }
});
