import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCf11TF3T5MQEPvA84gCejQ6SndIiwS66M',
  authDomain: 'bug-dos-millennials.firebaseapp.com',
  projectId: 'bug-dos-millennials',
  storageBucket: 'bug-dos-millennials.appspot.com',
  messagingSenderId: '860927681811',
  appId: '1:860927681811:web:79f9035bde939ec1b1e6e6',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
<<<<<<< HEAD

=======
const db = getFirestore(app);
>>>>>>> fddbfa4386c61e52ff3454ee631f6685a4885772
