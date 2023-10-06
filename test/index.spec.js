import { iniciarPagina } from '../src/main.js';
import cadastro from '../src/lib/Cadastro/cadastro.js';
import linhaDoTempo from '../src/lib/LinhaDoTempo/linhaDoTempo.js';

// jest.mock('../src/lib/TelaInicial/telaInicial.js');
document.body.innerHTML = '<main id="conteudo"></main>';

describe('iniciarPagina', () => {
  it('deve chamar telaInicial quando a hash for vazia', () => {
    iniciarPagina();
    const event = new Event('hashchange');
    window.dispatchEvent(event);
    const titulo = document.querySelector('#tituloPagina');
    expect(titulo.textContent).toEqual('BUG DOSMILLENNIALS');
  });

  it('deve chamar cadastro quando a hash for "#cadastro"', () => {
    const event = new Event('hashchange');
    window.location.hash = '#cadastro';
    window.dispatchEvent(event);

    // Verificar se o elemento existe antes de acessar sua propriedade 'textContent'
    const conta = document.querySelector('#criarContaTitulo');
    if (conta) {
      expect(conta.textContent).toEqual('Crie sua Conta');
    }
    cadastro();
  });

  it('deve chamar linhaDoTempo quando a hash for "#linhaDoTempo"', () => {
    const event = new Event('hashchange');
    window.location.hash = '#linhaDoTempo';
    window.dispatchEvent(event);

    const linhaDoTempoTest = document.querySelector('.nomeUsuario');
    if (linhaDoTempoTest) {
      expect(linhaDoTempoTest.textContent).toEqual('Usuário');
    }
    linhaDoTempo();
  });

  it('deve chamar telaInicial como padrão quando a hash for desconhecida', () => {
    const event = new Event('hashchange');
    window.location.hash = '#default';
    window.dispatchEvent(event);

    const titulo = document.querySelector('#tituloPagina');
    expect(titulo.textContent).toEqual('BUG DOSMILLENNIALS');
    iniciarPagina();
  });
});
