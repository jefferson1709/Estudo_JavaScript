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

let db = firebase.firestore();
/*
//Ler todos os dados de uma coleção
db.collection("turmaA").get()
    .then((snapshot)=>{
        snapshot.forEach((doc)=>{
            let aluno = doc.data();
            console.log(aluno);
            console.log(aluno.nome);
        })
})

let docRef = db.collection("turmaA").doc("D7ewfgj58yTrghJdKffLsa")
docRef.get().then((doc)=>{
    //let aluno = doc.data();
    console.log(doc.data().nome);
})

db.collection("turmaA").where("notas.nota1",">",5).get()
    .then((snapshot)=>{
        snapshot.forEach((doc)=>{
            let aluno = doc.data();
            console.log(aluno.nome, aluno.sobrenome);
        })
    })
*/

db.collection("turmaA").onSnapshot((snapshot)=>{
    snapshot.forEach((doc)=>{
        let aluno = doc.data();
        console.log(aluno);
    })
})

let docRef = db.collection("turmaA").doc("D7ewfgj58yTrghJdKffLsa")
docRef.onSnapshot((doc)=>{
    //let aluno = doc.data();
    console.log(doc.data().nome);
})

db.collection("turmaA").where("notas.nota1",">",5).onSnapshot((snapshot)=>{
        snapshot.forEach((doc)=>{
            let aluno = doc.data();
            console.log(aluno.nome, aluno.sobrenome);
        })
    })