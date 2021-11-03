// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB1zemNOpHgfZ0v22Q8w1_IwOuHn9-hhTU',
  authDomain: 'alalaya-686ba.firebaseapp.com',
  projectId: 'alalaya-686ba',
  storageBucket: 'alalaya-686ba.appspot.com',
  messagingSenderId: '490329773156',
  appId: '1:490329773156:web:56a6f4b5797114ce0a3b71',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
