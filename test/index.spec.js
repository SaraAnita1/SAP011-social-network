import { iniciarPagina } from '../src/main.js';
import cadastro from '../src/lib/Cadastro/cadastro.js';
import linhaDoTempo from '../src/lib/LinhaDoTempo/linhaDoTempo.js';
import telaInicial from '../src/lib/TelaInicial/telaInicial.js';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  } from "firebase/auth";

import { login } from '../src/Firebase/FirebaseAuth.js';

// // jest.mock('../src/lib/TelaInicial/telaInicial.js');
// document.body.innerHTML = '<main id="conteudo"></main>';

// describe('iniciarPagina', () => {
//   fit('deve chamar telaInicial quando a hash for vazia', () => {
//     iniciarPagina();
//     const event = new Event('hashchange');
//     window.dispatchEvent(event);
//     const titulo = document.querySelector('#tituloPagina');
//     expect(titulo.textContent).toEqual('BUG DOSMILLENNIALS');
//   });

//   it('deve chamar cadastro quando a hash for "#cadastro"', () => {
//     window.location.hash = '#cadastro';
//     iniciarPagina();
//     expect(cadastro).toHaveBeenCalled();
//   });

//   it('deve chamar linhaDoTempo quando a hash for "#linhaDoTempo"', () => {
//     window.location.hash = '#linhaDoTempo';
//     iniciarPagina();
//     expect(linhaDoTempo).toHaveBeenCalled();
//   });

//   it('deve chamar telaInicial como padrão quando a hash for desconhecida', () => {
//     window.location.hash = '#outraCoisa';
//     iniciarPagina();
//     expect(telaInicial).toHaveBeenCalled();
//   });
// });


// firebaseAuth

jest.mock('firebase/auth');

describe('Testando funções assíncronas', () => {
  it('Deve logar com email e senha', async () => {
    // Configuração do Firebase mock
    const mockAuth = {
      currentUser: null,
    };
    getAuth.mockReturnValueOnce(mockAuth);
    // Simular a função signInWithEmailAndPassword
    const mockSignInWithEmailAndPassword = jest.fn();
    mockSignInWithEmailAndPassword.mockResolvedValueOnce({ user: { email: 'test@example.com' } });

    // Substitua a implementação real de signInWithEmailAndPassword pela função mock criada
    signInWithEmailAndPassword.mockImplementation(mockSignInWithEmailAndPassword);


    const email = 'test@example.com';
    const senha = 'password';
    await login(email, senha);

    expect(mockSignInWithEmailAndPassword).toHaveBeenCalledWith(mockAuth, email, senha);

    // Verifique se a função foi chamada apenas uma vez
    expect(mockSignInWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});