import {
  addDoc, collection,query, getDocs, orderBy, deleteDoc, doc, updateDoc, Timestamp
} from 'firebase/firestore';
import { db, auth } from './FirebaseConfig.js';
import { async } from 'regenerator-runtime';

//Função para ciração de coleção no firebase
export async function criarPublicacao(conteudoPublicacao, nomeUsuario) {
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

 const dataAtual = new Date();
 //conversão de nano segundos e segundos em milisegundos
 // para tornar compativel com JS.
 const dataEmMiliSegundos = data.seconds * 1000 + data.nanoseconds / 1000000; 
 const dataDaPublicacao = new Date(dataEmMiliSegundos);
 const diferencaEmMilissegundos = dataAtual - dataDaPublicacao;
 const diferencaEmSegundos = diferencaEmMilissegundos / 1000;
 const dia = dataDaPublicacao.getDate(); 
 const mes = dataDaPublicacao.getMonth(); 
 const ano = dataDaPublicacao.getFullYear();

 criarEstrturaDoPost(autor, conteudo, data, curtidas, fotoUsuario, 
  idPublicacao, diferencaEmSegundos, dia, mes, ano);
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