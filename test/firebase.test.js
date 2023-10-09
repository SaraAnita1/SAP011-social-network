import { addDoc } from 'firebase/firestore';
import linhaDoTempo from '../src/lib/LinhaDoTempo/linhaDoTempo.js'; // arrumar a importação

// Teste a função criarPublicacao
jest.mock('firebase/firestore');
// testar a linha do tempo
test('criarPublicacao cria uma publicação no Firestore', async () => {
  // Chame a função criarPublicacao
  const estrutura = linhaDoTempo();
  console.log(estrutura);
  estrutura.queryselector('#caixaDeTextoPost').value = 'Teste de publicação';
  estrutura.queryselector('#botaoPublicar').click();
  expect(addDoc).toHaveBeenCalled();
});

// // Teste a função atualizarLinhaDoTempo
// test('atualizarLinhaDoTempo atualiza a linha do tempo corretamente', async () => {
//   // Adicione uma publicação de teste ao Firestore
//   const publicacoesRef = db.collection('publicacoes');
//   await publicacoesRef.add({
//     publicacao: 'Teste de publicação',
//     data: new Date(),
//     qntCurtidas: 0,
//     autor: 'Test User',
//   });

//   // Defina as funções criarEstrturaDoPost e limparTela para fins de teste
//   const criarEstrturaDoPost = jest.fn();
//   const limparTela = jest.fn();

//   // Chame a função atualizarLinhaDoTempo
//   await atualizarLinhaDoTempo(criarEstrturaDoPost, limparTela);

//   // Verifique se as funções foram chamadas corretamente
//   expect(criarEstrturaDoPost).toHaveBeenCalledTimes(1);
//   expect(limparTela).toHaveBeenCalledTimes(1);

//   // Verifique se criarEstrturaDoPost foi chamado com os argumentos corretos
//   expect(criarEstrturaDoPost).toHaveBeenCalledWith(
//     'Test User',
//     'Teste de publicação',
//     expect.any(Date),
//     0,
//     expect.any(String),
//   );
// });

// firebaseAuth
const mockAuth = {
  currentUser: null,
};

jest.mock('firebase/auth', () => ({
  getAuth: () => ({ currentUser: null}),
  signInWithEmailAndPassword: jest.fn()
}));


describe('Testando funções assíncronas', () => {
  it('Deve logar com email e senha', async () => {

    const email = 'test@example.com';
    const senha = 'password';
    await login(email, senha);

    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(mockAuth, email, senha);

    // Verifique se a função foi chamada apenas uma vez
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});