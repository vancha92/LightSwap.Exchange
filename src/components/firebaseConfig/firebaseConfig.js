import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeUJe7ssTvU2bRDqvjQQGwk2qNAu0ttYk",
  authDomain: "lightswapexchange.firebaseapp.com",
  projectId: "lightswapexchange",
  storageBucket: "lightswapexchange.appspot.com",
  messagingSenderId: "456195757513",
  appId: "1:456195757513:web:54d8a913fe882683c20418",
};

//   Init firebase
initializeApp(firebaseConfig);

//   Init firestore
const db = getFirestore();

export { db };
