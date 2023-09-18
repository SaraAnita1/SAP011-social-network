import { getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  googleProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { email, senha } from '../lib/TelaInicial/telaInicial.js';

const auth = getAuth();

function login(event) {
    event.preventDefault();

    firebase.auth().signInWithEmailAndPassword(email, senha).then((response) => {
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
  

  function entrarComGoogle () {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider)
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
  function capturarErro(error) {
    mensagemErro.textContent = '';
    mensagemErroSenha.textContent = '';
    if (error.code === 'auth/email-already-in-use') {
      mensagemErro.textContent = 'Email já cadastrado';
    } else if (error.code === 'auth/weak-password') {
      mensagemErroSenha.textContent = 'A senha deve conter no mínimo 6 dígitos';
    }
  }
  