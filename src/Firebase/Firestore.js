import { collection } from 'Firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig.js';


export function criarPublicacao(conteudoPublicacao) {
    const conteudoPublicacao = linhaDoTempo.querySelector('#caixaDeTextoPost').value;
    db.collection('Publicacoes').add({
        texto: conteudoPublicacao, timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }).then((response) => {
        conteudoPublicacao.value = '';
    }).catch((error) => {
        alert('Erro ao criar publicação');
    });
}
