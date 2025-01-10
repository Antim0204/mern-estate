// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnv-ublESJS0N1pBbrhPfVHj30b2UbHzQ",
  authDomain: "flipkart-clone-3eb43.firebaseapp.com",
  projectId: "flipkart-clone-3eb43",
  storageBucket: "flipkart-clone-3eb43.firebasestorage.app",
  messagingSenderId: "685081010095",
  appId: "1:685081010095:web:487861716c3f185ff9595a",
  measurementId: "G-2EY7BPM98V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);