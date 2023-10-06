import {
  signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signOut, updateProfile,
} from 'firebase/auth';
import { auth } from './FirebaseConfig.js';


export function login(email, senha) {
  return signInWithEmailAndPassword(auth, email, senha);
}

export function entrarComGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

export function cadastrarUsuario(email, senha, nomeUsuario) {
  return createUserWithEmailAndPassword(auth, email, senha, nomeUsuario)
    .then((userCredential) => {
      const user = userCredential.user;
      return updateProfile(user, {
        displayName: nomeUsuario
      }).then(() => {
        return nomeUsuario;
      });
    })
    .catch((error) => {  
      throw error;
    });
}


export function sair() {
  return signOut(auth);
}

export function verificarStatusUsuario() {
return auth.currentUser
} 

export function verificarUsuario(){
 return auth.currentUser.displayName
}

