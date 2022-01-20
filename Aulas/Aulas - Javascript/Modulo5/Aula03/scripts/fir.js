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

/*
function criarUsuario(){
    let newUserEmail = "novoteste@teste.com";
    let newUserPassword = "123abc";

    
    auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)
        .then(user => {
            console.log(user);
        }).catch(error =>{
            console.log(error);
        })
}
let user = auth.currentUser;
console.log(user)


function login(){
    let userEmail = "novoteste@teste.com";
    let userPassword = "123abc";

    auth.signInWithEmailAndPassword(userEmail, userPassword)
        .then(loggedUser => {
            console.log(loggedUser);
            console.log(auth.currentUser);
        }).catch(error =>{
            console.log(error);
        })
}
login();
*/
auth.onAuthStateChanged(user => {
    if(user){
        console.log(user)
    }else{
        console.log("Niguem Logado")
    }
})


function logout(){
    auth.signOut().then(() => {
        console.log("Usuario foi deslogado");
    }).catch(error =>{
        console.log(error);
    })
}

setTimeout(logout, 2000);
setTimeout(login, 2000);


let user = auth.currentUser;
console.log(user)

//persistencia do estado do login
function login(){
    let userEmail = "novoteste@teste.com";
    let userPassword = "123abc";

    //auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL) // saiu do computador perdeu a autorização
    //auth.setPersistence(firebase.auth.Auth.Persistence.SESSION) // saiu da aba perdeu a autorização
    //auth.setPersistence(firebase.auth.Auth.Persistence.NONE) //Atualizar ou sair da pagina perdeu a autorização
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(()=>{
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



