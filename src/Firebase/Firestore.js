import { db } from '../../Firebase/FirebaseConfig.js';
import { collection } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


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
