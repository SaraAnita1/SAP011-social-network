import { sair,verificarStatusUsuario } from '../../Firebase/FirebaseAuth.js';

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
  <div id="publicacaoCriada">
    <div id="ConteudoPublicacao">Conteudo publicado pelo usuário</div>
    <div id="iconesPublicacao">
      <img src="Imagens/iconeComentario.png" alt="Ícone Comentário">
      <img src="Imagens/iconeCurtir.png" alt="Ícone Curtida">
      <img src="Imagens/iconeLapis.png" alt="Ícone Lápis">
      <img src="Imagens/iconeSalvar.png" alt="Ícone Salvar">
      <img src="Imagens/Lixeira.png" alt="Ícone Lixeira">
    </div>
  </div>
</section>
  `;

  linhaDoTempo.innerHTML = conteudo;

//Função para manter usuário logado e deslogado
if(verificarStatusUsuario()){
  window.location.hash = "#linhaDoTempo";
} else {
  window.location.hash = "#telaInicial";
}

  // funcao sair
  const botaoSair = linhaDoTempo.querySelector('#botaoSair');
  botaoSair.addEventListener('click', (event)=>{
  event.preventDefault();
  sair().then((responde) => {
    window.location.hash = '#telaInicial';
  }).catch((error) => {
      alert('Erro ao fazer logout');
    });
  })

  const conteudoPublicacao = linhaDoTempo.querySelector("#caixaDeTextoPost");
  const botaoPublicar = linhaDoTempo.querySelector("#botaoPublicar");

  
  return linhaDoTempo;
};
