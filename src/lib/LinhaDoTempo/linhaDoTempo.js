import { criarPublicacao,atualizarLinhaDoTempo, excluirPublicacao, editarPublicacao} from '../../Firebase/Firestore.js';
import { sair, verificarStatusUsuario, verificarUsuario } from '../../Firebase/FirebaseAuth.js';

export default () => {
  const linhaDoTempo = document.createElement('div');

  const conteudo = `
  <div id="headerContainer">
  <div id="usuarioPostagem">
    <p class="nomeUsuario">Olá, Millennial!</p>
    <img id="iconeCriarPostagem" src="Imagens/criarPostagem.png" alt="Ícone Criar Postagem">
  </div>
  <button id="botaoSair">Sair</button>
</div>
<section id="feed">
  <div id="criarPostContainer">
    <textarea id="caixaDeTextoPost" placeholder="Escreva seu Post aqui..."></textarea>
    <button id="botaoPublicar" class="botaoPublicar">Publicar</button>
  </div>
    <div id="conteudoLinhaDoTempo"></div>
  </div>
</section>
  `;

  linhaDoTempo.innerHTML = conteudo;

  // Função para manter usuário logado e deslogado
  if (verificarStatusUsuario()) {
    console.log("Linha do tempo");
    window.location.hash = '#linhaDoTempo';
  } else {
    window.location.hash = '#telaInicial';
    ("tela inicial")
  }


  // funcao sair
  const botaoSair = linhaDoTempo.querySelector('#botaoSair');
  botaoSair.addEventListener('click', (event) => {
    event.preventDefault();
    if(window.confirm("Deseja encerrar sua sessão?"))
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
      return alert("Olá, Millennial! Insira algum texto antes de compartilhar sua publicação!")
    } else{
      criarPublicacao(conteudoPublicacao);
      atualizarLinhaDoTempo(criarEstrturaDoPost, limparTela);
      abrirCaixaDeTextoPostagem();
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

function criarEstrturaDoPost(autor, conteudo, data, curtidas, fotoUsuario, idPublicacao, diferencaEmSegundos){
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
const usuario = document.createElement("p")
usuario.innerHTML = autor;
const postagens = document.createElement("div");
postagens.innerHTML = conteudo + curtidas;
const dataPostagem = document.createElement("div");
dataPostagem.innerHTML = data;
const iconesUsuario = document.createElement("div");

conteudoLinhaDoTempo.appendChild(usuario);
conteudoLinhaDoTempo.appendChild(postagens);
conteudoLinhaDoTempo.appendChild(dataPostagem);
usuario.appendChild(iconesUsuario);
iconesUsuario.appendChild(iconeEditar);
iconesUsuario.appendChild(iconeLixeira);
conteudoLinhaDoTempo.appendChild(iconeCurtir);
conteudoLinhaDoTempo.appendChild(iconeCurtida);


postagens.className = "postagens"
iconeEditar.className = "editar"
iconeLixeira.className = "excluir"
iconeCurtir.className = "curtir"
iconeCurtida.className = "curtida"
usuario.className = "nomeUsuarioPost"
dataPostagem.className = "dataPostagem"
iconesUsuario.className = "iconesUsuario"

if (diferencaEmSegundos < 60) {
  const segundos = Math.floor(diferencaEmSegundos);
 if(segundos>1){dataPostagem.innerHTML = `Há ${segundos} segundos atrás`
 }else{dataPostagem.innerHTML = `Há ${segundos} segundo atrás`
 }
} else if (diferencaEmSegundos < 3600) {
  const minutos = Math.floor(diferencaEmSegundos / 60);
  if(minutos>1){ dataPostagem.innerHTML = `Há ${minutos} minutos atrás`;
}else{dataPostagem.innerHTML = `Há ${minutos} minuto atrás`
}
} else if (diferencaEmSegundos < 86400) {
  const horas = Math.floor(diferencaEmSegundos / 3600);
  if(horas>1){dataPostagem.innerHTML = `Há ${horas} horas atrás`
}else{dataPostagem.innerHTML = `Há ${horas} hora atrás`
}
} else if(diferencaEmSegundos > 86400){
  return dataPostagem.innerHTML = `Em:${dia}.${mes}.${ano}`
}


iconeLixeira.addEventListener("click", (event) => {
  //constante que pega o valor do id do documento que está
  // armazenado no icone da lixeira, no evento de clique.
    const idPost = event.target.dataset.postid;
    if(window.confirm("Realmente deseja deletar esta publicação?"))
    excluirPublicacao(idPost);
    atualizarLinhaDoTempo(criarEstrturaDoPost, limparTela);
  })


  iconeEditar.addEventListener("click", (event) => {
  const dialog = document.createElement('dialog');
  dialog.className = "dialog";
  dialog.innerHTML = `
    <textarea class="caixaDeEdicao">${postagens.innerText}</textarea>
    <button class="salvarEdicao">Salvar</button>
    <button id="fecharModal">Fechar</button>
  `;
  conteudoLinhaDoTempo.appendChild(dialog);
  dialog.showModal();
  
  const salvarEdicaoBtn = dialog.querySelector('.salvarEdicao');
  salvarEdicaoBtn.className = "botaoDialog";

  const fecharModalBtn = dialog.querySelector('#fecharModal');

  fecharModalBtn.addEventListener('click', ()=>{
    dialog.close();
  })
  
  salvarEdicaoBtn.addEventListener('click', () => {
    const editarPost = dialog.querySelector(".caixaDeEdicao").value;
    const idPost = event.target.dataset.postid;
    const publicacaoEditada = editarPost;
    editarPublicacao(idPost, publicacaoEditada);
    dialog.close();
    atualizarLinhaDoTempo(criarEstrturaDoPost, limparTela);
  });
});


const usuarioAtual = verificarUsuario()
if(usuarioAtual === autor){
  return iconesUsuario.style.display = "block"
}else {return iconesUsuario.style.display = "none"

}

}

return linhaDoTempo;
 
};


