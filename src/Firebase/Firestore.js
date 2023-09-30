import {
  addDoc, collection,query, getDocs, orderBy, deleteDoc, doc, updateDoc,
} from 'firebase/firestore';
import { db, auth } from './FirebaseConfig.js';

//Função para ciração de coleção no firebase
export async function criarPublicacao(conteudoPublicacao) {
  await addDoc(collection(db, 'publicacoes'), {

    publicacao: conteudoPublicacao,
    data: new Date(),
    qntCurtidas: 0,
    autor: auth.currentUser.displayName,
    Foto: auth.currentUser.photoURL,
  });

}

//Função que insere que busca o post no firebase e insere na tela
export async function atualizarLinhaDoTempo(criarEstrturaDoPost, limparTela,){
const ordenar = query(collection(db, "publicacoes"), orderBy("data", "desc"))
limparTela()
let querySnapshot = await getDocs(ordenar);
querySnapshot.forEach((doc) => {
 const autor = doc.data().autor;
 const conteudo = doc.data().publicacao;
 const data = doc.data().data;
 const curtidas = doc.data().qntCurtidas;
 const fotoUsuario = doc.data().Foto;
 //const que guarda o valor do id de cada documento
 const idPublicacao = doc.id;

 criarEstrturaDoPost(autor, conteudo, data, curtidas, fotoUsuario, idPublicacao,);
});
}

//Função do firestore para exclusão do post
export async function excluirPublicacao(idPublicacao){
  await deleteDoc(doc(db, "publicacoes", idPublicacao));
};


export async function editarPublicacao(idPublicacao, publicacaoEditada){
const publicacao = doc(db, "publicacoes", idPublicacao);
await updateDoc(publicacao, {
  publicacao: publicacaoEditada
});
}