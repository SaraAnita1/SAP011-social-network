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

export async function criarPublicacao(conteudoPublicacao) {
  await addDoc(collection(db, 'publicacoes'), {

    publicacao: conteudoPublicacao,
    data: new Date(),
    qntCurtidas: [],
    autor: auth.currentUser.displayName,

  });
}

// Função que insere que busca o post no firebase e insere na tela
export async function atualizarLinhaDoTempo(criarEstruturaDoPost, limparTela) {
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

    const dataAtual = new Date();
    // conversão de nano segundos e segundos em milisegundos
    // para tornar compativel com JS.
    const dataEmMiliSegundos = data.seconds * 1000 + data.nanoseconds / 1000000;
    const dataDaPublicacao = new Date(dataEmMiliSegundos);
    const diferencaEmMilissegundos = dataAtual - dataDaPublicacao;
    const diferencaEmSegundos = diferencaEmMilissegundos / 1000;
    const dia = dataDaPublicacao.getDate();
    const mes = dataDaPublicacao.getMonth();
    const ano = dataDaPublicacao.getFullYear();

    criarEstruturaDoPost(
      autor,
      conteudo,
      data,
      curtidas,
      idPublicacao,
      diferencaEmSegundos,
      dia,
      mes,
      ano,
      id,
    );
  });
}

// Função de exclusão do post ao clicar no icone de lixeira

// Função do firestore para exclusão do post
export async function excluirPublicacao(idPublicacao) {
  await deleteDoc(doc(db, 'publicacoes', idPublicacao));
}

export const contadorCurtidas = async function curtir(idPublicacao, id) {
  await updateDoc(doc(db, 'publicacoes', idPublicacao), {
    qntCurtidas: arrayUnion(id),
  });
};

export async function editarPublicacao(idPublicacao, publicacaoEditada) {
  const publicacao = doc(db, 'publicacoes', idPublicacao);
  await updateDoc(publicacao, {
    publicacao: publicacaoEditada,
  });
}

export const removerCurtidas = async function descurtir(idPublicacao, id) {
  await updateDoc(doc(db, 'publicacoes', idPublicacao), {
    qntCurtidas: arrayRemove(id),
  });
};
