import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile

} from 'firebase/auth';

import { auth } from './FirebaseConfig.js';

export function login(email, senha) {
  console.log('shajhsajkh',auth.currentUser);
  return signInWithEmailAndPassword(auth, email, senha);
}

export function entrarComGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

export function cadastrarUsuario(email, senha, nome) {  
  return createUserWithEmailAndPassword(auth, email, senha, nome).then((usuarioCriado) => {
    updateProfile(usuarioCriado.user, {
      displayName: nome
    })
  })
};


export function sair() {
  return signOut(auth);
}

export function verificarStatusUsuario() {
  return auth.currentUser;
}

export function verificarUsuario() {
  return auth.currentUser.displayName;
}
