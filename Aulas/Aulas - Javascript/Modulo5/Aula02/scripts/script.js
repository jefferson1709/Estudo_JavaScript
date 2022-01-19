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

const TURMA = "turmaA";

let db = firebase.firestore();
/*
db.collection(TURMA).add({
    nome: "Jefferson",
    sobrenome: "Santos",
    notas: {nota1: 9.6, nota2: 7.8},
}).then((doc)=>{
    console.log("Documento adicionado com sucesso:", doc);
}).catch(err =>{
    console.log(err)
})
*/
db.collection(TURMA).doc("AlunoNovo").set({
    nome: "Jeff",
    sobrenome: "Santos",
    notas: {nota1: 7.3, nota2: 6.9},
}).then((doc)=>{
    console.log("Documento inserido com sucesso:");
}).catch(err =>{
    console.log(err)
})

db.collection(TURMA).doc("G2sLwye8r6dfHhluEnfr3").update({
    "notas.nota1": 9,
    "sobrenome": "Leal",
    faltas: 5,
    cidades=["Sao paulo", "alagoas"],
    cidades: firebase.firestore.FieldValue.arrayUnion("minas gerais", "santa catarina", "bahia"),
    cidades: firebase.firestore.FieldValue.arrayRemove("santa catarina"),
    cidades: firebase.firestore.FieldValue.delete(),
    faltas: firebase.firestore.FieldValue.increment(1),
}).then(()=>{
    console.log("Documento atualisado com sucesso");
}).catch(err =>{
    console.log(err);
})

db.collection(TURMA).doc("G2sLwye8r6dfHhluEnfr3").delete().then(()=>{
    console.log("Documento apagado com sucesso");
}).catch(err =>{
    console.log(err);
})


