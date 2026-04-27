// estado da acessibilidade
let acessibilidadeAtiva = false;

// tamanho
let tamanho = parseInt(localStorage.getItem('tamanhoFonte')) || 16;

// limites
const MIN = 14;
const MAX = 32;

// aplica tamanho ao carregar
document.body.style.fontSize = tamanho + 'px';

// botão principal
function toggleAcessibilidade() {
  acessibilidadeAtiva = !acessibilidadeAtiva;

  const controles = document.getElementById('controlesTexto');

  if (acessibilidadeAtiva) {
    controles.style.display = 'block';
  } else {
    controles.style.display = 'none';
  }
}

// aumentar
function aumentarTexto() {
  if (!acessibilidadeAtiva) return;

  if (tamanho < MAX) {
    tamanho += 2;
    document.body.style.fontSize = tamanho + 'px';
    localStorage.setItem('tamanhoFonte', tamanho);
  }
}

// diminuir
function diminuirTexto() {
  if (!acessibilidadeAtiva) return;

  if (tamanho > MIN) {
    tamanho -= 2;
    document.body.style.fontSize = tamanho + 'px';
    localStorage.setItem('tamanhoFonte', tamanho);
  }
}

// reset
function resetarTexto() {
  if (!acessibilidadeAtiva) return;

  tamanho = 16;
  document.body.style.fontSize = tamanho + 'px';
  localStorage.setItem('tamanhoFonte', tamanho);
}
function toggleAcessibilidade() {
  acessibilidadeAtiva = !acessibilidadeAtiva;

  const controles = document.getElementById('controlesTexto');
  const botao = document.querySelector('.acessibilidade-box button');

  if (acessibilidadeAtiva) {
    controles.style.display = 'block';
    botao.classList.add('ativo');
  } else {
    controles.style.display = 'none';
    botao.classList.remove('ativo');
  }
}
