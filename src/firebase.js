import { initializeApp } from "firebase/app";

import { getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyATW8oUVWoZOvc5YmM5t6cP6lXeHVm5HSE",
  authDomain: "ecommercebienfrio.firebaseapp.com",
  projectId: "ecommercebienfrio",
  storageBucket: "ecommercebienfrio.appspot.com",
  messagingSenderId: "725372718090",
  appId: "1:725372718090:web:a0f066e3323e982214e3f3"
};



// Esta es una variable que representa "La plataforma" en si
const app = initializeApp(firebaseConfig);

// Esta es una variable que representa "la pestaña firestore Database o la base de datos"
export const db = getFirestore(app)

// doc
// getDoc
// getDocs
// where
// query
// collection 
// addDoc

// PAso a paso de pedidos a firebase
// 1) Entro a la pagina de firebase : npm i firebase
// 2) hago login a la consola : intializeAPp () => FirebaseApp