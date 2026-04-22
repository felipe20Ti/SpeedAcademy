// PUXANDO O FORM

const form = document.getElementById('formLogin');

//RETIRANDO O RELOAD DO FORM

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // PUXANDO AS FUNÇÕES
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  const erroEmail = document.getElementById('erroEmail');
  const erroSenha = document.getElementById('erroSenha');

  let valido = 'true';

  if (email === '') {
    erroEmail.textContent = 'Preencha seu email.';
    valido = false;
  }

  if (senha === '') {
    erroSenha.textContent = 'Preencha sua senha.';
    valido = false;
  }

  if (valido) {
    localStorage.getItem('email', email);
    localStorage.getItem('senha', senha);

    alert('Logado com sucesso!');
    //ENVIAR PARA HOMEPAGE

    window.location.href = '../homepage/index.html';
  }
});
