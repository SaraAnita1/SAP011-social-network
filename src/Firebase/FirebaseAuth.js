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
  return signInWithEmailAndPassword(auth, email, senha);
}

export function entrarComGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .catch((error) => {
      console.error(error);
    });
}

export function cadastrarUsuario(email, senha) {
  return firebase.auth().createUserWithEmailAndPassword(email, senha);
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
