import {initializeApp} from "firebase/app";
import "firebase/auth";
import {getFirestore} from "firebase/firestore";

const credentials = {
  apiKey: "AIzaSyC6GIYAKRmT9FuchlhCG7TC5O5W_-NTYKM",
  authDomain: "pineapple-b1c8f.firebaseapp.com",
  projectId: "pineapple-b1c8f",
  storageBucket: "pineapple-b1c8f.appspot.com",
  messagingSenderId: "658926583287",
  appId: "1:658926583287:web:ac163c0f5520e5819e82f2",
  measurementId: "G-JC29BRWZNF",
};

const app = initializeApp(credentials)
export const firestore = getFirestore(app)