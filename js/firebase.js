  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDGAEqojPBHkdKQCWYnkxSmt-8hdDnQhN4",
    authDomain: "juana-1.firebaseapp.com",
    projectId: "juana-1",
    storageBucket: "juana-1.appspot.com",
    messagingSenderId: "47056244588",
    appId: "1:47056244588:web:d02aca5ac177462e922d49",
    measurementId: "G-L571SFE55L"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);