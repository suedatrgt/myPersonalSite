var firebaseConfig = {
    apiKey: "AIzaSyA_ccKqGn2bxUqSKKdDKcbGx1AzwiPP3fA",
    authDomain: "sitem-3dde8.firebaseapp.com",
    databaseURL: "https://sitem-3dde8.firebaseio.com",
    projectId: "sitem-3dde8",
    storageBucket: "sitem-3dde8.appspot.com",
    messagingSenderId: "91393631012",
    appId: "1:91393631012:web:31f1bc8b94334d069789b1"
};
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 



const sendMesaj = () => {

    var data = { 
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        
    }
    

}