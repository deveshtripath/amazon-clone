import firebase from "firebase";



const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBoPkHwc0pbSbRU--hznxEUNZUt1fl6tdY",
    authDomain: "clone-44223.firebaseapp.com",
    projectId: "clone-44223",
    storageBucket: "clone-44223.appspot.com",
    messagingSenderId: "28404844506",
    appId: "1:28404844506:web:67c828986ae730c03de2e3",
    measurementId: "G-H0PLTMEMJB"



});

const auth = firebase.auth();


export { auth };






// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyBoPkHwc0pbSbRU--hznxEUNZUt1fl6tdY",
//     authDomain: "clone-44223.firebaseapp.com",
//     projectId: "clone-44223",
//     storageBucket: "clone-44223.appspot.com",
//     messagingSenderId: "28404844506",
//     appId: "1:28404844506:web:67c828986ae730c03de2e3",
//     measurementId: "G-H0PLTMEMJB"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };