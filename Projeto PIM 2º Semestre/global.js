// pega tamanho salvo ou padrão
let tamanho = localStorage.getItem('tamanhoFonte') || 16;

// aplica em TODAS as páginas automaticamente
document.documentElement.style.fontSize = tamanho + 'px';
