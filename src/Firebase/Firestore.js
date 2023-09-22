import {
  addDoc, collection,query, getDocs,
} from 'firebase/firestore';
import { db, auth } from './FirebaseConfig.js';


export async function criarPublicacao(conteudoPublicacao) {
  await addDoc(collection(db, 'publicacoes'), {

    publicacao: conteudoPublicacao,
    data: new Date(),
    qntCurtidas: 0,
    autor: auth.currentUser.displayName,

  });

}

export async function adicionarPublicacao(Publicacoes){
const conteudoPublicacao = document.querySelector("#conteudoPublicacao");
const querySnapshot = await getDocs(collection(db, "publicacoes"));
querySnapshot.forEach((doc) => {
 const autor = doc.data().autor;
 const conteudo = doc.data().publicacao;
 const data = doc.data().data;
 const curtidas = doc.data().qntCurtidas;
 conteudoPublicacao.textContent = `${autor} ${conteudo} ${data} ${curtidas}`;
});
}


export async function atualizarLinhaDoTempo(){
const querySnapshot = await getDocs(collection(db, "publicacoes"));
const conteudoLinhaDoTempo = document.querySelector("#conteudoLinhaDoTempo");
querySnapshot.forEach((doc) => {
 const autor = doc.data().autor;
 const conteudo = doc.data().publicacao;
 const data = doc.data().data;
 const curtidas = doc.data().qntCurtidas;
 const postagens = document.createElement("div");
 postagens.textContent = `${autor} ${conteudo} ${data} ${curtidas}`;
 conteudoLinhaDoTempo.appendChild(postagens);
});
}

