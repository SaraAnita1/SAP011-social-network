import cadastro from './lib/Cadastro/cadastro.js';
import linhaDoTempo from './lib/LinhaDoTempo/linhaDoTempo.js';
import telaInicial from './lib/TelaInicial/telaInicial.js';

export const iniciarPagina = () => {
  window.addEventListener('hashchange', () => {
    const conteudo = document.querySelector('#conteudo');
    conteudo.innerHTML = '';
    switch (window.location.hash) {
      case '':
        conteudo.appendChild(telaInicial());
        break;
      case '#cadastro':
        conteudo.appendChild(cadastro());
        break;
      case '#linhaDoTempo':
        conteudo.appendChild(linhaDoTempo());
        break;
      default:
        conteudo.appendChild(telaInicial());
    }
  });
};

window.addEventListener('load', () => {
  iniciarPagina();
});

// iniciarPagina();

// const botaoEntrar = document.querySelector('#botaoEntrar');
// document.addEventListener('DOMContentLoaded', function() {
// });

// function login() {
//   window.location.hash = '#linhaDoTempo';
// }

// botaoEntrar.addEventListener('click', login);

// Console.log(login());
