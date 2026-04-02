import { getAnalytics } from "@react-native-firebase/analytics";
import { initializeApp } from "@react-native-firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnp-huN5aY8gGKHDPNyqTKrFRqBk2w1O4",
  authDomain: "tracenode-69da9.firebaseapp.com",
  databaseURL: "https://tracenode-69da9-default-rtdb.firebaseio.com",
  projectId: "tracenode-69da9",
  storageBucket: "tracenode-69da9.firebasestorage.app",
  messagingSenderId: "699593825963",
  appId: "1:699593825963:web:0c3d43cb7e56d01ab7a1ee",
  measurementId: "G-3C9TQ4387J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
