import {
  addDoc, collection,query, getDocs, orderBy, deleteDoc, doc,
} from 'firebase/firestore';
import { db, auth } from './FirebaseConfig.js';

//Função para ciração de coleção no firebase
export async function criarPublicacao(conteudoPublicacao) {
  await addDoc(collection(db, 'publicacoes'), {

    publicacao: conteudoPublicacao,
    data: new Date(),
    qntCurtidas: 0,
    autor: auth.currentUser.displayName,

  });

}

//Função que insere que busca o post no firebase e insere na tela
export async function atualizarLinhaDoTempo(criarEstrturaDoPost, limparTela){
const ordenar = query(collection(db, "publicacoes"), orderBy("data", "desc"))
limparTela()
let querySnapshot = await getDocs(ordenar);
querySnapshot.forEach((doc) => {
 const autor = doc.data().autor;
 const conteudo = doc.data().publicacao;
 const data = doc.data().data;
 const curtidas = doc.data().qntCurtidas;
 //const que guarda o valor do id de cada documento
 const idPublicacao = doc.id;

 criarEstrturaDoPost(autor, conteudo, data, curtidas, idPublicacao);

});
}

//Função de exclusão do post ao clicar no icone de lixeira



//Função do firestore para exclusão do post
export async function excluirPublicacao(idPublicacao){
  console.log("deletando post");
  await deleteDoc(doc(db, "publicacoes", idPublicacao));
};
