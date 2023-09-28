import { criarPublicacao,atualizarLinhaDoTempo, excluirPublicacao} from '../../Firebase/Firestore.js';
import { sair, verificarStatusUsuario } from '../../Firebase/FirebaseAuth.js';
import { updateCurrentUser } from 'firebase/auth';

export default () => {
  const linhaDoTempo = document.createElement('div');

  const conteudo = `
  <div id="headerContainer">
  <div id="usuarioPostagem">
    <p class="nomeUsuario">Usuário</p>
    <img id="iconeCriarPostagem" src="Imagens/criarPostagem.png" alt="Ícone Criar Postagem">
  </div>
  <button id="botaoSair">Sair</button>
</div>
<section id="feed">
  <div id="criarPostContainer">
    <textarea id="caixaDeTextoPost" placeholder="Escreva seu Post aqui..."></textarea>
    <button id="botaoPublicar" class="botaoPublicar">Publicar</button>
  </div>
    <div id="conteudoLinhaDoTempo"</div>
  </div>
</section>
  `;

  linhaDoTempo.innerHTML = conteudo;

  // Função para manter usuário logado e deslogado
  if (verificarStatusUsuario()) {
    window.location.hash = '#linhaDoTempo';
  } else {
    window.location.hash = '#telaInicial';
  }

  // funcao sair
  const botaoSair = linhaDoTempo.querySelector('#botaoSair');
  botaoSair.addEventListener('click', (event) => {
    event.preventDefault();
    sair().then(() => {
      window.location.hash = '#telaInicial';
    }).catch(() => {
      alert('Erro ao fazer logout');
    });
  });

  //função criar publicacao e adicionar a linha do tempo
  const botaoPublicar = linhaDoTempo.querySelector('#botaoPublicar');
  botaoPublicar.addEventListener('click', (evento) => {
    const conteudoPublicacao = linhaDoTempo.querySelector('#caixaDeTextoPost').value;
    evento.preventDefault();
    if(conteudoPublicacao == ""){
      return alert("O campo de postagem não pode ser enviado vazio!")
    } else{
      criarPublicacao(conteudoPublicacao)
      atualizarLinhaDoTempo(criarEstrturaDoPost, limparTela);
    }

  });


// função para mostrar e esconder caixa de texto para inserção de post
const iconeCaixaDePostagem = linhaDoTempo.querySelector("#iconeCriarPostagem");

iconeCaixaDePostagem.addEventListener("click", abrirCaixaDeTextoPostagem);

function abrirCaixaDeTextoPostagem() {
  const caixaDeTextoPostagem = linhaDoTempo.querySelector("#criarPostContainer");

  if (caixaDeTextoPostagem.style.display === "block") {
    caixaDeTextoPostagem.style.display = "none";
  } else {
    caixaDeTextoPostagem.style.display = "block";
  }
}

//chama a função novamente para redenrizar os componentes na tela
atualizarLinhaDoTempo(criarEstrturaDoPost, limparTela);

function limparTela(){
const conteudoLinhaDoTempo = linhaDoTempo.querySelector("#conteudoLinhaDoTempo");
conteudoLinhaDoTempo.innerHTML = "";
}

function criarEstrturaDoPost(autor, conteudo, data, curtidas, idPublicacao){
//Criação dos elementos de post e icones de forma dinamica
const iconeEditar = document.createElement("img")
iconeEditar.src = "Imagens/editar.png";
iconeEditar.setAttribute ("data-postId", idPublicacao);
const iconeSalvar = document.createElement("img")
iconeSalvar.src = "Imagens/IconeSalvar.png"
iconeSalvar.setAttribute ("data-postId", idPublicacao);
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

iconeLixeira.addEventListener("click", (event) => {
  //constante que pega o valor do id do documento que está
  // armszenado no icone da lixeira, no evento de clique.
    const idPost = event.target.dataset.postid;
    excluirPublicacao(idPost);
    atualizarLinhaDoTempo(criarEstrturaDoPost, limparTela);
  })

  iconeEditar.addEventListener("click", (event) =>{
    const idPost = event.target.dataset.posid;
    const editarPost = document.createElement('input');
    editarPost.value = postagens.innerText;
    postagens.parentNode.replaceChild(editarPost, postagens)
    editarPost.className = "caixaDeEdicao";
  })
};




  return linhaDoTempo;
  
};

