// Import the functions you need from the SDKs you need
import { initializeApp } from "https://ww.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTpzHZj-iH0COGEvUo_QaTTMF4zwQCBUU",
  authDomain: "college-a99a7.firebaseapp.com",
  projectId: "college-a99a7",
  storageBucket: "college-a99a7.firebasestorage.app",
  messagingSenderId: "216720540537",
  appId: "1:216720540537:web:5e385b9582d76a72c2a5a8",
  measurementId: "G-DGTWNRVSJ1"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);





const submit = document.getElementById("button")

submit.addEventListener('click', function(e){
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Login Successfully")
    window.location.href = '/index.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    alert(errorMessage)
    // alert(errorCode)
    // ..
  });

})
