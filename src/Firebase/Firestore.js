import {
  addDoc,
  collection,
  query,
  getDocs,
  orderBy,
  deleteDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';

import { db, auth } from './FirebaseConfig.js';

// const auth = () => getAuth(app);

// Função para ciração de coleção no firebase
export async function criarPublicacao(conteudoPublicacao) {
  await addDoc(collection(db, 'publicacoes'), {

    publicacao: conteudoPublicacao,
    data: new Date(),
    qntCurtidas: [],
    autor: auth.currentUser.displayName,

  });
}

// Função que insere que busca o post no firebase e insere na tela
export async function atualizarLinhaDoTempo(criarEstrturaDoPost, limparTela) {
  const ordenar = query(collection(db, 'publicacoes'), orderBy('data', 'desc'));
  limparTela();
  const querySnapshot = await getDocs(ordenar);
  querySnapshot.forEach((snapshot) => {
    const autor = snapshot.data().autor;
    const id = auth.currentUser.uid;
    const conteudo = snapshot.data().publicacao;
    const data = snapshot.data().data;
    const curtidas = snapshot.data().qntCurtidas;
    // const que guarda o valor do id de cada documento
    const idPublicacao = snapshot.id;

    criarEstrturaDoPost(autor, conteudo, data, curtidas, idPublicacao, id);
  });
}

// Função de exclusão do post ao clicar no icone de lixeira

// Função do firestore para exclusão do post
export async function excluirPublicacao(idPublicacao) {
  console.log('deletando post');
  await deleteDoc(doc(db, 'publicacoes', idPublicacao));
}

export const contadorCurtidas = async function curtir(idPublicacao, id) {
  await updateDoc(doc(db, 'qntCurtidas', idPublicacao), {
    qntCurtidas: arrayUnion(id),
  });
};

export const removerCurtidas = async function descurtir(idPublicacao, id) {
  await updateDoc(doc(db, 'qntCurtidas', idPublicacao), {
    qntCurtidas: arrayRemove(id),
  });
};
