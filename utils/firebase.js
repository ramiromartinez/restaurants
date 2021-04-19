import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDmzkSQFgd_KGjqwmRqDE2BiAHRlQsOR1U",
    authDomain: "restaurants-435f3.firebaseapp.com",
    projectId: "restaurants-435f3",
    storageBucket: "restaurants-435f3.appspot.com",
    messagingSenderId: "499494897063",
    appId: "1:499494897063:web:dc0fbfec518f10a7eba282"
  }
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig)
