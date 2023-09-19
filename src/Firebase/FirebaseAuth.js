// import { getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   GoogleProvider,
//   onAuthStateChanged,
//   signOut,
//  from 'firebase/auth';

import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './FirebaseConfig.js';

export function login(email, senha) {
  return signInWithEmailAndPassword(auth(), email, senha);
}

export function entrarComGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth(), provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    return credential;
  }).catch((error) => {
    console.error(error);
  });
}

export function cadastrarUsuario(email, senha) {
  return createUserWithEmailAndPassword(auth(), email, senha);
}

export function sair() {
  return signOut();
}

export function manterLogado(user) {
  return onAuthStateChanged(auth(), user);
}

export function manterDeslogado(user) {
  return onAuthStateChanged(auth(), user);
}
