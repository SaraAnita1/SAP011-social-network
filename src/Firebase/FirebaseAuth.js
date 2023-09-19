// import { getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   GoogleProvider,
//   onAuthStateChanged,
//   signOut,
//  from 'firebase/auth';

import { auth } from './FirebaseConfig.js';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup }from 'firebase/auth';



export function login(email, senha) {
  return signInWithEmailAndPassword(auth, email, senha);
}

export function entrarComGoogle() {
  signInWithPopup(auth, provider)
  const provider = new GoogleAuthProvider().then((result) => {
  const credential = GoogleAuthProvider.credentialFromResult(result);
  return credential
}).catch((error) => {
      console.error(error);
});
}

export function cadastrarUsuario(email, senha) {
  return createUserWithEmailAndPassword(auth, email, senha);
}

export function sair() {
  return signOut()
};

export function manterLogado (user){
return onAuthStateChanged (user) 
};


export function manterDeslogado (user){
return onAuthStateChanged (user)
};