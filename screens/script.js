import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDZWXurY0DGfIWxeKTRvWv6aPohsGIG9OE",
  authDomain: "project-kp-fd649.firebaseapp.com",
  projectId: "project-kp-fd649",
  storageBucket: "project-kp-fd649.firebasestorage.app",
  messagingSenderId: "90304196213",
  appId: "1:90304196213:web:79b9e3bf6e262123d4123c",
  measurementId: "G-5Z3KJ0ZGMQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);