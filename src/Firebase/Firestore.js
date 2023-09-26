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
export async function atualizarLinhaDoTempo(){
const ordenar = query(collection(db, "publicacoes"), orderBy("data", "desc"))

let querySnapshot = await getDocs(ordenar);
const conteudoLinhaDoTempo = document.querySelector("#conteudoLinhaDoTempo");
conteudoLinhaDoTempo.innerHTML = "";

querySnapshot.forEach((doc) => {
 const autor = doc.data().autor;
 const conteudo = doc.data().publicacao;
 const data = doc.data().data;
 const curtidas = doc.data().qntCurtidas;
 //const que guarda o valor do id de cada documento
 const idPublicacao = doc.id;

 //Criação dos elementos de post e icones de forma dinamica
 const iconeEditar = document.createElement("img")
 iconeEditar.src = "Imagens/editar.png";
 const iconeSalvar = document.createElement("img")
 iconeSalvar.src = "Imagens/IconeSalvar.png"
 const iconeLixeira = document.createElement("img")
 iconeLixeira.src = "Imagens/Lixeira.png"
 //o valor do documento é guardado em cada icone de lixeira
 // para quando houver o clique saber qual o id do documento clicacdo
 iconeLixeira.setAttribute ("data-postId", idPublicacao)
 const iconeCurtir = document.createElement("img")
 iconeCurtir.src = "Imagens/iconeCurtir.png"
 const iconeCurtida = document.createElement("img")
 iconeCurtida.src = "Imagens/iconeCurtida.png"
 
//inserindo os elementos criados no conteúdo da div de post criada no HTML
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

//Função de exclusão do post ao clicar no icone de lixeira
const excluir = document.querySelector(".excluir");
excluir.addEventListener("click", (event) => {
//constante que pega o valor do id do documento que está
// armszenado no icone da lixeira, no evento de clique.
  const idPost = event.target.dataset.postid;
  excluirPublicacao(idPost);
  atualizarLinhaDoTempo();
})
}

//Função do firestore para exclusão do post
export async function excluirPublicacao(idPublicacao){
  console.log("deletando post");
  await deleteDoc(doc(db, "publicacoes", idPublicacao));
};

