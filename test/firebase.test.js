import { criarPublicacao, atualizarLinhaDoTempo } from '../src/Firebase/Firestore.js';
import { db } from '../src/Firebase/FirebaseConfig.js';
// Teste a função criarPublicacao
test('criarPublicacao cria uma publicação no Firestore', async () => {
  const conteudoPublicacao = 'Teste de publicação';

  // Chame a função criarPublicacao
  await criarPublicacao(conteudoPublicacao);

  // Consulte o Firestore para verificar se a publicação foi criada
  const publicacoesRef = db.collection('publicacoes');
  const snapshot = await publicacoesRef.get();

  expect(snapshot.docs).toHaveLength(1);
  expect(snapshot.docs[0].data().publicacao).toBe(conteudoPublicacao);
});

// Teste a função atualizarLinhaDoTempo
test('atualizarLinhaDoTempo atualiza a linha do tempo corretamente', async () => {
  // Adicione uma publicação de teste ao Firestore
  const publicacoesRef = db.collection('publicacoes');
  await publicacoesRef.add({
    publicacao: 'Teste de publicação',
    data: new Date(),
    qntCurtidas: 0,
    autor: 'Test User',
  });

  // Defina as funções criarEstrturaDoPost e limparTela para fins de teste
  const criarEstrturaDoPost = jest.fn();
  const limparTela = jest.fn();

  // Chame a função atualizarLinhaDoTempo
  await atualizarLinhaDoTempo(criarEstrturaDoPost, limparTela);

  // Verifique se as funções foram chamadas corretamente
  expect(criarEstrturaDoPost).toHaveBeenCalledTimes(1);
  expect(limparTela).toHaveBeenCalledTimes(1);

  // Verifique se criarEstrturaDoPost foi chamado com os argumentos corretos
  expect(criarEstrturaDoPost).toHaveBeenCalledWith(
    'Test User',
    'Teste de publicação',
    expect.any(Date),
    0,
    expect.any(String),
  );
});
