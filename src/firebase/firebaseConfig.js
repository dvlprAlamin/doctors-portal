import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseInit";


// Initialize Firebase
const firebaseInitialize = () => {
    initializeApp(firebaseConfig);
}
export default firebaseInitialize;