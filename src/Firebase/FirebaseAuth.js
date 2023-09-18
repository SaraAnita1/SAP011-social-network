// import { getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   GoogleProvider,
//   onAuthStateChanged,
//   signOut,
// } from 'firebase/auth';


import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup }
 from 'firebase/auth';

import { auth } from './FirebaseConfig.js';


export function login(email, senha) {
     signInWithEmailAndPassword(auth, email, senha).then((response) => {
      window.location.hash = '#linhaDoTempo';
      console.log('success', response);
    }).catch((error) => {
      capturarErro(error);
    });
  }
  const usuarioNaoEncontrado = document.querySelector('#usuarioNaoEncontrado');
  const senhaIncorreta = document.querySelector("#senhaIncorreta");
  const emailIncorreto = document.querySelector("#emailIncorreto");

function capturarErro(error) {

    usuarioNaoEncontrado.textContent = '';
    senhaIncorreta.textContent = '';
    emailIncorreto.textContent = '';

    switch (error.code) {
      case 'auth/user-not-found':
        usuarioNaoEncontrado.textContent = 'Usuário não encontrado';
        break;
      case 'auth/invalid-email':
        emailIncorreto.textContent = 'Email Inválido';
        break;
      case 'auth/wrong-password':
        senhaIncorreta.textContent = 'Senha incorreta';
        break;
      default:
        console.error(error);
        break;
    }
  }
  

  export function entrarComGoogle () {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(() => {
      window.location.hash = "#linhaDoTempo"
    })
    .catch(error => {
      console.error(error);
    })

    
}


// cadastrar usuario

function cadastrarUsuario(event) {
    event.preventDefault();
    const email = cadastro.querySelector('#email').value;
    const senha = cadastro.querySelector('#senha').value;
    firebase.auth().createUserWithEmailAndPassword(email, senha).then((response) => {
      window.location.hash = '#telaInicial';
      console.log('success', response);
    }).catch((error) => {
    capturarErro(error);
    });
  }
  function capturarErroCadastro(error) {
    mensagemErro.textContent = '';
    mensagemErroSenha.textContent = '';
    if (error.code === 'auth/email-already-in-use') {
      mensagemErro.textContent = 'Email já cadastrado';
    } else if (error.code === 'auth/weak-password') {
      mensagemErroSenha.textContent = 'A senha deve conter no mínimo 6 dígitos';
    }
  }
  