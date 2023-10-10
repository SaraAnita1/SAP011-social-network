import {
  criarPublicacao,
  atualizarLinhaDoTempo,
  excluirPublicacao,
  contadorCurtidas,
  removerCurtidas,
  editarPublicacao,
} from '../../Firebase/Firestore.js';

import { sair, verificarStatusUsuario, verificarUsuario, } from '../../Firebase/FirebaseAuth.js';

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
    window.location.hash = '#linhaDoTempo';
  } else {
    window.location.hash = '#telaInicial';
  }
  


  const botaoSair = linhaDoTempo.querySelector('#botaoSair');
  botaoSair.addEventListener('click', (event) => {
    event.preventDefault();
    if (window.confirm('Deseja encerrar sua sessão?')) {
      sair().then(() => {
        window.location.hash = '#telaInicial';
      }).catch(() => {
        alert('Erro ao fazer logout');
      });
    }
  });


  
  const conteudoLinhaDoTempo = linhaDoTempo.querySelector('#conteudoLinhaDoTempo');

  const botaoPublicar = linhaDoTempo.querySelector('#botaoPublicar');
  botaoPublicar.addEventListener('click', (evento) => {
    const conteudoPublicacao = linhaDoTempo.querySelector('#caixaDeTextoPost').value;
    evento.preventDefault();
    if (conteudoPublicacao === '') {
      alert('Olá, Millennial! Insira algum texto antes de compartilhar sua publicação!');
    }
    criarPublicacao(conteudoPublicacao);
    atualizarLinhaDoTempo(criarEstruturaDoPost, limparTela);
    abrirCaixaDeTextoPostagem();
  });

  const iconeCaixaDePostagem = linhaDoTempo.querySelector('#iconeCriarPostagem');
  iconeCaixaDePostagem.addEventListener('click', abrirCaixaDeTextoPostagem);
  function abrirCaixaDeTextoPostagem() {
    const caixaDeTextoPostagem = linhaDoTempo.querySelector('#criarPostContainer');
    
    if (caixaDeTextoPostagem.style.display === 'block') {
      caixaDeTextoPostagem.style.display = 'none';
    } else {
      caixaDeTextoPostagem.style.display = 'block';
    }
  }

  function limparTela() {
    const linhaDoTempoConteudo = linhaDoTempo.querySelector('#conteudoLinhaDoTempo');
    linhaDoTempoConteudo.innerHTML = '';

  }

  function criarEstruturaDoPost(
    autor,
    conteudo,
    data,
    curtidas,
    idPublicacao,
    diferencaEmSegundos,
    dia,
    mes,
    ano,
    id,) {
    const iconeEditar = document.createElement('img');
    iconeEditar.src = 'Imagens/editar.png';
    const iconeLixeira = document.createElement('img');
    iconeLixeira.src = 'Imagens/Lixeira.png';
    iconeLixeira.setAttribute('data-postId', idPublicacao);
    const iconeCurtir = document.createElement('img');
    iconeCurtir.src = 'Imagens/iconeCurtir.png';
    iconeCurtir.setAttribute('data-postId', idPublicacao);
    const contadorCurtidasTela = document.createElement('div');
    contadorCurtidasTela.textContent = curtidas.length;
    const usuario = document.createElement('p');
    usuario.innerHTML = autor;
    const postagens = document.createElement('div');
    postagens.innerHTML = conteudo;
    const dataPostagem = document.createElement('div');
    dataPostagem.innerHTML = data;
    const iconesUsuario = document.createElement('div');
    const icones = document.createElement('div');
    const postIconesContainer = document.createElement('div');


    if (curtidas.includes(id)) {
      iconeCurtir.src = 'Imagens/iconeCurtida.png';
    } else {
      iconeCurtir.src = 'Imagens/iconeCurtir.png';
    }

    conteudoLinhaDoTempo.appendChild(usuario);
    postIconesContainer.appendChild(postagens);
    conteudoLinhaDoTempo.appendChild(postIconesContainer);
    postIconesContainer.appendChild(icones);
    conteudoLinhaDoTempo.appendChild(dataPostagem);
    icones.appendChild(iconesUsuario);
    icones.appendChild(iconeCurtir);
    iconesUsuario.appendChild(iconeEditar);
    iconesUsuario.appendChild(iconeLixeira);
    icones.appendChild(contadorCurtidasTela);

    postagens.className = 'postagens';
    iconeEditar.className = 'editar';
    iconeLixeira.className = 'excluir';
    iconeCurtir.className = 'curtir';
    usuario.className = 'nomeUsuarioPost';
    dataPostagem.className = 'dataPostagem';
    iconesUsuario.className = 'iconesUsuario';
    icones.className = 'icones';
    postIconesContainer.className = 'postIconesContainer';
    contadorCurtidasTela.className = 'contadorCurtidasTela';


    if (diferencaEmSegundos < 60) {
      const segundos = Math.floor(diferencaEmSegundos);
      if (segundos > 1) {
        dataPostagem.innerHTML = `Há ${segundos} segundos`;
      } else {
        dataPostagem.innerHTML = `Há ${segundos} segundo`;
      }
    } else if (diferencaEmSegundos < 3600) {
      const minutos = Math.floor(diferencaEmSegundos / 60);
      if (minutos > 1) {
        dataPostagem.innerHTML = `Há ${minutos} minutos`;
      } else {
        dataPostagem.innerHTML = `Há ${minutos} minuto`;
      }
    } else if (diferencaEmSegundos < 86400) {
      const horas = Math.floor(diferencaEmSegundos / 3600);
      if (horas > 1) {
        dataPostagem.innerHTML = `Há ${horas} horas`;
      } else {
        dataPostagem.innerHTML = `Há ${horas} hora`;
      }
    } else if (diferencaEmSegundos > 86400) {
      dataPostagem.innerHTML = `${dia}. ${mes}. ${ano}`;
    }

    iconeLixeira.addEventListener('click', (event) => {
      // constante que pega o valor do id do documento que está
      // armazenado no icone da lixeira, no evento de clique.
      const idPost = event.target.dataset.postid;
      if (window.confirm('Realmente deseja deletar esta publicação?')) excluirPublicacao(idPost);
      atualizarLinhaDoTempo(criarEstruturaDoPost, limparTela);
    });

          
    iconeEditar.addEventListener('click', (event) => {
      const dialog = document.createElement('dialog');
      dialog.className = 'dialog';
      dialog.innerHTML = `
      <textarea class="caixaDeEdicao">${postagens.innerText}</textarea>
      <button class="salvarEdicao">Salvar</button>
      <button id="fecharModal">Fechar</button>
      `;
      conteudoLinhaDoTempo.appendChild(dialog);
      dialog.showModal();

      const salvarEdicaoBtn = dialog.querySelector('.salvarEdicao');
      salvarEdicaoBtn.className = 'botaoDialog';

      const fecharModalBtn = dialog.querySelector('#fecharModal');

      fecharModalBtn.addEventListener('click', () => {
        dialog.close();
      });

      salvarEdicaoBtn.addEventListener('click', () => {
        const editarPost = dialog.querySelector('.caixaDeEdicao').value;
        const idPost = event.target.dataset.postid;
        const publicacaoEditada = editarPost;
        editarPublicacao(idPost, publicacaoEditada);
        dialog.close();
        atualizarLinhaDoTempo(criarEstruturaDoPost, limparTela);
      });
    });

     let curtiu = false;

    iconeCurtir.addEventListener('click', async () => {
       if (!curtiu) {
         curtiu = true;
         if (curtidas.includes(id)) {
           await removerCurtidas(idPublicacao, id);

           const index = curtidas.indexOf(id);
           if (index !== -1) {
             curtidas.splice(index, 1);
           }
           iconeCurtir.src = '../../Imagens/IconeCurtir.png';

           contadorCurtidasTela.innerHTML = curtidas.length;
           curtiu = false;
         } else {
           await contadorCurtidas(idPublicacao, id);
           iconeCurtir.src = '../../Imagens/IconeCurtida.png';
           curtidas.push(id);
           contadorCurtidasTela.innerHTML = curtidas.length;
           curtiu = false;

   
         }
      }
    });

    const usuarioAtual = verificarUsuario();

    if (usuarioAtual === autor) {
      iconesUsuario.style.display = 'block';
    }else{iconesUsuario.style.display = 'none';
  }
  }
  
  atualizarLinhaDoTempo(criarEstruturaDoPost, limparTela);
  
  return linhaDoTempo;
};
