//inicializando o firebase
var config = {
    apikey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
};
firebase.initializeApp(config);
var db = firebase.firestone();
let auth = firebase.auth()


function login(){
    let userEmail = "novoteste@teste.com";
    let userPassword = "123abc";

    auth.setPersistence(firebase.auth.Auth.Persistence.NONE).then(()=>{
        auth.signInWithEmailAndPassword(userEmail, userPassword)
            .then(loggedUser => {
                console.log(loggedUser);
                console.log(auth.currentUser);
            }).catch(error =>{
                console.log(error);
            })
    }).catch(error =>{
        console.log(error);
    })
}
login();

function ler(){
    db.collection("lista").get().then(snapshot => {
        snapshot.forEach(item =>{
            console.log(item.data());
        })
    }).catch(error =>{
        console.log(error);
    })
}

function escrever(){
    
    db.collection("lista").add({tittle: "novo Objeto", numero: Math.random()})
        .then(doc => {
            console.log(doc);
        }).catch(error =>{
            console.log(error);
        })
}
ler()



// no firebase
//service cloud.firestore{
//    match /databases/{database}/documents{
//        match/{document=**}{
//            allow read: if true;
//            allow write: if requestAnimationFrame.auth.uid != null;
//            allow write: if requestAnimationFrame.auth.uid != id;
//        }
//    }
//}