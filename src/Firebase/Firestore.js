import {
  addDoc, collection,
} from 'firebase/firestore';
import { db, auth } from './FirebaseConfig.js';

export async function criarPublicacao(conteudoPublicacao) {
  await addDoc(collection(db, 'publicacoes'), {

    publicacao: conteudoPublicacao,
    data: new Date(),
    qntCurtidas: 0,
    autor: auth.currentUser.displayName,
  });

  // db.collection('Publicacoes').add({
  //     texto: conteudoPublicacao, timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  // }).then((response) => {
  //     conteudoPublicacao.value = '';
  // }).catch((error) => {
  //     alert('Erro ao criar publicação');
  // });
}
