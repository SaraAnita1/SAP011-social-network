import {
  addDoc, collection,query, getDocs, orderBy, deleteDoc,
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

export async function atualizarLinhaDoTempo(){
const ordenar = query(collection(db, "publicacoes"), orderBy("data", "desc"))

let querySnapshot = await getDocs(ordenar);
console.log('querySnapshot',querySnapshot);
const conteudoLinhaDoTempo = document.querySelector("#conteudoLinhaDoTempo");

querySnapshot.forEach((doc) => {
 const autor = doc.data().autor;
 const conteudo = doc.data().publicacao;
 const data = doc.data().data;
 const curtidas = doc.data().qntCurtidas;
 const iconeEditar = document.createElement("img")
 iconeEditar.src = "Imagens/editar.png";
 const iconeSalvar = document.createElement("img")
 iconeSalvar.src = "Imagens/IconeSalvar.png"
 const iconeLixeira = document.createElement("img")
 iconeLixeira.src = "Imagens/Lixeira.png"
 const iconeCurtir = document.createElement("img")
 iconeCurtir.src = "Imagens/iconeCurtir.png"
 const iconeCurtida = document.createElement("img")
 iconeCurtida.src = "Imagens/iconeCurtida.png"
 

 const postagens = document.createElement("div");
 postagens.textContent = `${autor}: ${conteudo} ${data} ${curtidas}`;
 conteudoLinhaDoTempo.appendChild(postagens);
 conteudoLinhaDoTempo.appendChild(iconeEditar);
 conteudoLinhaDoTempo.appendChild(iconeSalvar);
 conteudoLinhaDoTempo.appendChild(iconeLixeira);
 conteudoLinhaDoTempo.appendChild(iconeCurtir);
 conteudoLinhaDoTempo.appendChild(iconeCurtida);
 
 postagens.className = "postagens"
 iconeEditar.className = "editar"
 iconeSalvar.className = "salvar"
 iconeLixeira.className = "excluir"
 iconeCurtir.className = "curtir"
 iconeCurtida.className = "curtida"

});
}

const excluir = document.querySelector(".excluir");
async function excluirPublicacao(publicacaoId){
  await deleteDoc(doc(db, "publicacoes", "doc.id"));
};

excluir.addEventListener("click", () => {
  excluirPublicacao(doc.id);
});



