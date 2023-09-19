import { login, entrarComGoogle } from '../../Firebase/FirebaseAuth';

export default () => {
  const container = document.createElement('div');

  const conteudo = `
        <div id="conteudoPaginaDesktop"> <div id="container-imagem-texto">
        <p id="texto1-desktop">Conectados pela <br> nostalgia</p>
        <img id="imagem-desktop" src="imagens/imagemTelaInicial.png"></img>
        <p id="texto2-desktop">Se você também é jovem pra ser velho
        e velho pra ser jovem, junte se a nós!</p>
        </div>
        <div>
          <h1 id= "tituloPagina"class="tituloPagina">BUG DOS <br> MILLENNIALS</h1>
        <section id="fundoTelaInicial">
          <form >
          <div id="usuarioNaoEncontrado"></div>
          <label> <p id="emailDaTela">Email</p> <input id= "emailTelaInicial" type="email name="email"></input></label>
          <div id="emailIncorreto"></div>
          <label> <p id="senhaDaTela">Senha</p> <input id= "senhaTelaInicial" type="password" name="senha"></input></label>
          <div id="senhaIncorreta"></div>
          <button id="botaoEntrar">Entrar</button>
        </form>
        <nav>
          <p id="entrarGoogle">Entre com sua conta Google</p>
          <img id="logoGoogle" src="imagens/logo google.png"></img>
          <div id="novaConta"
            <p class="criarConta"> Não tem conta? </p>
              <a id="botaoCadastro" href="#cadastro">Crie agora</a>
              </div>
          </div>
        </nav>
        </section>
        </div>
        `;

  const usuarioNaoEncontrado = document.querySelector('#usuarioNaoEncontrado');
  const senhaIncorreta = document.querySelector('#senhaIncorreta');
  const emailIncorreto = document.querySelector('#emailIncorreto');

  function capturarErro(error) {
    usuarioNaoEncontrado.textContent = '';
    senhaIncorreta.textContent = '';
    emailIncorreto.textContent = '';

    switch (error.code) {
      case 'auth/user-not-found':
        usuarioNaoEncontrado.textContent = 'Usuário não encontrado';
        break;
      case 'auth/invalid-email':
        emailIncorreto.textContent = 'Email Inválido';
        break;
      case 'auth/wrong-password':
        senhaIncorreta.textContent = 'Senha incorreta';
        break;
      default:
        console.error(error);
        break;
    }
  }

  container.innerHTML = conteudo;
  const email = container.querySelector('#emailTelaInicial');
  const senha = container.querySelector('#senhaTelaInicial');
  const botaoEntrar = container.querySelector('#botaoEntrar');
  const botaoGoogle = container.querySelector('#logoGoogle');

  botaoGoogle.addEventListener('click', () => {
    entrarComGoogle().then(() => {
      window.location.hash = '#linhaDoTempo';
    });
  });

  botaoEntrar.addEventListener('click', (event) => {
    event.preventDefault();
    login(email.value, senha.value).then((response) => {
      window.location.hash = '#linhaDoTempo';
      console.log('success', response);
    }).catch((error) => {
      capturarErro(error);
    });
  });

  return container;
};
