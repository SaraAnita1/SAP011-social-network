
## Sumário
1. [Apresentação](#apresentacao)
2. [Resumo do projeto](#resumo-do-projeto)
3. [Prototipagem](#prototipagem)
4. [Teste de usabilidade](#teste-de-usabilidade)
5. [Funcionalidades](#funcionalidades)
6. [Melhorias Futuras](#melhorias-futuras)
7. [Testes](#testes)
8. [Ferramentas e Tecnologias Utilizadas](#ferramentas-e-tecnologias-utilizadas)
9. [Checklist Critérios Mínimos de Aceitação](#checklist-criterios-minimos-de-aceitacao)
10. [Desenvolvedoras](#desenvolvedoras)

![Sem título](https://github.com/SaraAnita1/SAP011-social-network/assets/127780316/dbf2155a-49f5-45da-a3fe-20473cd6fa52)


<a name="apresentacao"></a>
## Apresentação

O social Network é o terceiro projeto do  bootcamp Laboratoria turma SAP-011, que tem como principal objetivo
a construção de uma rede social responsiva com foco no usuário e desenvolvimento mobile first, deve possuir múltiplas
telas, ser desenvolvido em Vanilla JavaScript, as validações e banco de dados do
projeto deve ser feita utilizando o Firebase, e permitir que o usuário tenha as seguintes interações com o sistema:

* Criar conta de acesso;
* Realizar login com e-mail e senha;
* Realizar login  com o Google;
* Criar, editar e deletar publicações;
* Curtir e descurtir publicações;
* Visualizar a quantidade de curtidas em cada publicação.

Com foco na usabilidade,  o projeto deve conter mensagens de erro de interações com 
o sistema que facilite a usabilidade, todos os campos de inserção de dados devem ser validados.

<a name="resumo-do-projeto"></a>
## 📗 Resumo do projeto

As redes sociais modernas transformaram nossa forma de interação, mas também geraram uma epidemia de ansiedade digital 
e uma sensação constante de urgência. A ansiedade digital surge da busca incessante por validação social, comparação 
constante e medo de perder algo importante. A sensação de urgência é alimentada pela natureza instantânea das 
notificações e pela necessidade de estar sempre "online". Esses problemas afetam a saúde mental dos usuários.

Com isso surgiu a ideia de criar o Bug dos Millenialls uma rede social nostálgica que oferece uma experiência calma e sem pressões. 
Essa abordagem busca reconectar as pessoas com a simplicidade das primeiras redes sociais, permitindo que os usuários compartilhem 
ideias e façam amigos sem a ansiedade das redes sociais modernas. Essa rede social nostálgica pode ser uma alternativa 
valiosa para aqueles que desejam escapar da ansiedade digital e da sensação de urgência que caracterizam as redes sociais atuais.

O Bug dos Millenialls é uma plataforma de mídia social criada com base nas histórias de usuário das gerações X,
Millennials e Z. Nosso objetivo é oferecer uma experiência nostálgica, amigável e sem pressões, para relembrar a época do 
Orkut e outras redes sociais pioneiras.

### 🧑‍🤝‍🧑 Histórias de Usuário
1º.  história de usuário  (Geração X)
   - Quem é o Usuário da Geração X?
Nascidos antes de 1981
Procuram uma experiência nostálgica
Desejam simplicidade e afinidade de interesses
   - Necessidades do Usuário:
Como pessoa da Geração X, eu quero uma rede social mais simples, com pessoas da mesma faixa etária e com 
os mesmos interesses, para interagir, buscar novos amigos e compartilhar novas ideias.
   - Perfil:
Não se adaptou às redes sociais modernas
Nostalgia por uma interface mais simples
Buscam uma comunidade com interesses similares

2º.  Usuário (Millennials)
   - Quem é o Usuário Millennial?
Nascidos entre 1981 e 1996
Buscam uma experiência nostálgica tranquila
Querem evitar ansiedade e urgência nas redes sociais
   - Necessidades do Usuário:
Como pessoa da Geração Millennial, eu quero viver uma experiência nostálgica, relembrando a época 
das primeiras redes sociais de forma mais calma, tranquila, sem que me gere ansiedade ou sentimentos
de urgência, para compartilhar minhas ideias com novas pessoas e fazer novos amigos.
   - Perfil:
Buscam relembrar as primeiras redes sociais
Preferem uma interface clean e sem excesso de informações
Querem evitar a pressão das redes sociais modernas

3º.  Usuário (Geração Z)
  - Quem é o Usuário da Geração Z?
Nascidos a partir de 1997
Interessados na temática vintage
Procuram conhecer pessoas de diferentes faixas etárias
 - Necessidades do Usuário:
Como pessoa da Geração Z, eu gostaria de viver a experiência de uma rede social vintage, compartilhar 
ideias, conhecer novos amigos e pessoas de faixas etárias diferentes.
 - Perfil: Apaixonados pela temática vintage Sentem-se deslocados entre gerações
Desejam uma experiência de rede social única

4º. Visão Geral do Projeto:
   - Nossa rede social nostálgica será uma plataforma que atenderá às necessidades desses usuários,
proporcionando uma experiência nostálgica, sem a pressão das redes sociais modernas. Teremos 
uma interface simples, recursos para compartilhar ideias e uma comunidade acolhedora.

<a name="prototipagem"></a>
#  🖼️ Prototipagem

Após definição de produto e histórias de usuários, escolhemos a identidade visual do projeto,
escolhemos a paleta de cores, discutimos como gostaríamos do layout, icones e disposição dos 
elementos na tela, e pos fim fizemos os protótipos mobile e desktop de alta fidelidade, também fizemos
um protótio navegável para realização do teste de usabilidade.

## Paleta de cores escolhida:
![PALETA DE CORES 2](https://github.com/SaraAnita1/SAP011-social-network/assets/127780316/0444a238-7533-4597-b6a2-e4eaad2d9048)
![PALETA DE CORES 1](https://github.com/SaraAnita1/SAP011-social-network/assets/127780316/de7a2458-bd2d-4785-9625-8cfa731011d5)

## Protótio mobile:
![PROTOTIPO MOBILE 1 1](https://github.com/SaraAnita1/SAP011-social-network/assets/127780316/4eea16aa-c36e-4abe-b652-67fa16943fd2)
![PROTOTIPO MOBILE 1,2](https://github.com/SaraAnita1/SAP011-social-network/assets/127780316/a9e23f38-0713-41b9-a86d-d012ca6f10f2)

## Protótipo desktop:
![PROTOTIPOD DESKTOP 1](https://github.com/SaraAnita1/SAP011-social-network/assets/127780316/00fceff2-fabe-4ac8-8d16-f6a86904f287)

<a name="teste-de-usabilidade"></a>
# 🧑‍💻 Teste de usabilidade

Após finalizar os protótipos de alta fidelidade, fizemos um protótipo navegavel e realizamos o teste de
usabilidade com o objetivo de verificar se o protótipo seria de navegação intuitiva e atenderia as fincionalidades esperadas 
o teste foi realizado via zoom onde alguns usuários nos deram o feedback verbal, e também realizamos
um teste de enviando o link do protótipo navegável e um forms com algumas perguntas referentes a usabilidade do projeto. 
Durante os teste foi proposto que os usuários navegasse pelo aplicativo e utilizasse os recursos disponíveis afim de verificas se a 
aplicação tinha uma navegação fluida e intuitiva, se algo não fazia sentido para o aplicativo, ou sesentiram falta de alguma ferramenta 
de navegação que agregaria valor ao projeto. A navegação ocorreu de forma tranquila, os feedBacks foram que a página está intuitiva, de fácil navegação, mas recebemos alguns feedbacks e após levantar todas as sugestões foram feitas alterações no protótipo para melhorar ainda mais a experiência do usuário.

## Protótipo navegável:
https://marvelapp.com/prototype/a055bja/screen/92633873

## Forms utilizado no teste: 
https://docs.google.com/forms/d/e/1FAIpQLSfi2ktVn5FS7_IaGLJ3XVj2JcMkQoAHPAL5WtMfqXQvawiLqw/viewform

## feedbacks recebidos via forms: 
![Captura_de_tela_2023-09-05_111943](https://github.com/SaraAnita1/SAP011-social-network/assets/127780316/6be260ba-70b6-441a-a62f-2edb3f2d573f)
![Captura_de_tela_2023-09-05_111955](https://github.com/SaraAnita1/SAP011-social-network/assets/127780316/c603ae98-1668-4b34-8a83-59ac02362830)

## Paleta de cores definida após sugestões: 
![PALETA DE CORES 3](https://github.com/SaraAnita1/SAP011-social-network/assets/127780316/36eec9e4-80cc-43b6-a2e3-4b60408b589f)


## Prototipo mobile alterado após teste de usabilidade: 
![RPROTOTIPO2 REDME](https://github.com/SaraAnita1/SAP011-social-network/assets/127780316/5ff294f6-71f8-4af5-b886-3205b5840768)
![REDME MOBILE 2](https://github.com/SaraAnita1/SAP011-social-network/assets/127780316/365ae9d9-0d20-4a10-aede-125fe7dd1ab9)

## Protótipo desktop alterado após teste de usabilidade:
![PROTTIPO DESKTOP 2](https://github.com/SaraAnita1/SAP011-social-network/assets/127780316/a2c15b69-9b7e-44e0-b3a9-4e932f134694)

<a name="funcionalidades"></a>
# 📚 Funcionalidades
Após o teste usabilidade, foi obervado que a navegação estava boa e intuitiva, as funcionalidades supriam as necessidades do usuários,
foi definido que a implementação começaria pelos critérios minimos de aceitação do projeto e se esse critérios fossema atingidos
gostariamos de implemetar as funcionalidades de comentários e publicação de imagens.
O projeto foi concluido com as seguintes funcionalidades:
*  O usuário consege realizar login utilizando email e senha ou sua conta Google;
*  Ao criar seu cadastro e realizar o login, o usuário é direcionado a sua linha do tempo
  onde pode visualizar as publicações de outros usuários e a data em que foi postada;
*  O usuário pode curtir publicações e visualizar um contador de  curtidas das publicação;
*  O usuário logado consegue editar e excluir apenas suas publicações;
*  O usuário recebe mensagens ao interagir com a aplicação que o auxilia na navegação;
*  O usuário logado permanece logado e consegue navegar entre as páginas e retornar para a linha do tempo;
*  Ao deslogar o usuário é redirecionado para a tela inicial e não tem acesso ao conteúdo da linha do tempo até que
  faça o login novamente.

<a name="melhorias-futuras"></a>
 # 👷 Melhorias futuras
 
Devido ao tempo que tinhamos disponível para a realização do projeto, optamos por não implementar a recuperação de
senha,os comentários, publicações de imagens e criação de um perfil onde o usuário consiga ver apenas suas
publicações e de amigos adicionado a sua rede, as funcionalidade implementadas foram de grande aprendizagem, e futuramente pretendemos
realizar essas melhorias para torar a aplicação mais completa.

<a name="testes"></a>
# ✅ Testes

Foram realizados testes da SPA e das funções de login e do firebase auth, não concluimos os demais
testes de telas, e pretendemos em um futuro próximo implementar testes em todas as funções do
código.

<a name="ferramentas-e-tecnologias-utilizadas"></a>
# 🔨 Ferramentas e tecnologias utilizadas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/en)
* [Jest](https://jestjs.io/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Figma](https://www.figma.com/login)
* [Trello](https://trello.com/pt-BR/login)
* [Firebase](https://firebase.google.com/docs/auth/web/start?hl=pt-br)
* [VITE](https://vitejs.dev/)
* [MarvelApp](https://marvelapp.com/)
* HTML
* CSS
* JAVA SCRIPT

<a name="checklist-criterios-minimos-de-aceitacao"></a>
## 🗹 9. Checklist critérios minímos de aceitação
- [x]  Usar VanillaJS.
- [x]  Ser uma SPA.
- [x]  Ser responsivo.
- [x]  Receber code review de pelo menos uma parceira de outra equipe.
- [x]  Fazer testes unitários
- [x]  Fazer testes manuais buscando erros e imperfeições simples.
- [x]  Fazer testes de usabilidade e incorporar o feedback dos usuários como melhorias.
- [x]  Fazer deploy do aplicativo e marcar a versão (git tag).
- [x]  UI: O usuário deve poder criar uma conta de acesso ou autenticar-se com conta de e-mail e senha e também com uma conta do Google.
- [x]  UI: Não haver usuários repetidos.
- [x]  UI: A conta do usuário deve ser um email válido.
- [X]  UI: O que o usuário digita no campo de senha (input) deve ser secreto.
- [X]  UI: Quando o formulário de registro ou login é enviado, ele deve ser validado.
- [X]  UI: Se houver erros, mensagens descritivas devem ser exibidas para ajudar o usuário.
- [X]  UI: Ao publicar, deve ser validado se há conteúdo no input.
- [X]  UI: Ao recarregar o aplicativo, é necessário verificar se o usuário está logado antes de exibir o conteúdo.
- [X]  UI: Conseguir publicar um post.
- [X]  UI: Poder dar e remover likes em uma publicação. Máximo de um por usuário.
- [X]  UI: Visualizar contagem de likes.
- [X]  UI: oder excluir uma postagem específica.
- [X]  UI: Solicitar confirmação antes de excluir um post.
- [X]  UI: Ao clicar em editar um post, você deve alterar o texto para um input que permite editar o texto e salvar as alterações.
- [X]  UI: Ao salvar as alterações, você deve voltar ao texto normal, mas com a informação editada.
- [X]  UI: Ao recarregar a página, poder ver os textos editados.

<a name="desenvolvedoras"></a>
# 👩‍💻 Desenvolvedoras
* Juciele Gomes: [GitHub](https://github.com/JucieleGomes) [LinkedIn](https://www.linkedin.com/in/juciele-gomes-03287b149/)
* Tamara Araujo: [GitHub](https://github.com/tamarataraujo) [LinkedIn](https://www.linkedin.com/in/tamara-araujo-281105148/)
* Sara Anita de Sa: [GitHub](https://github.com/SaraAnita1) [LinkedIn](https://www.linkedin.com/in/sara-anita-de-sa/)












‌



