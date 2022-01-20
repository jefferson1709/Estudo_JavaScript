//inicializando o firebase
var firebaseConfig = {
    apikey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
};
firebase.initilizeApp(firebaseConfig);
const storage = firebase.storage();

const ref = storage.ref("/images");
const newMetadata={
    contentType: 'image/jpg'
}


ref.child("Foto.jpg").getMetadata().then(metadata=>{
    console.log(metadata)
}).catch(err=>{
    console.log(err)
})

ref.child("Foto.jpg").updateMetadata(newMetadata).then(metadata=>{
    console.log(metadata)
}).catch(err=>{
    console.log(err)
})


/*
const fileRef = ref.childrem("imagen.png")
fileRef.getDownloadURL().then(url=>{console.log(url)})

const fileParent = fileRef.parent.parent;
fileParent.listAll().then(res => {
    console.log(res)       
})


ref.listAll().then(res => {
    console.log(res)
    res.items[0].listAll().then(res => {
        console.log(res)
    })        
})

const ref = storage.ref("/images/imagen.png");
ref.getDownloadURL().then(url=>{console.log(url)})

const ref = storage.ref("/images");
ref.parent.child("IMG20211102.jpg")
    .getDownloadURL().then(url=>{console.log(url)})


ref.root.listAll().then(res => { console.log(res) })

ref.parent.child("IMG20211102.jpg")
    .getDownloadURL().then(url=>{console.log(url)})

console.log(ref.name)
console.log(ref.fullpath)

const fileInput = documento.getElementById("fileInput")
fileInput.addEventListner("change",(e)=>{

    const file = e.target.files[0];
    ref.child(file.name).put(file).then((snapshot)=>{
        console.log(snapshot)
    })
})

const fileBase64 =' '

ref.child("Foto.name").putString(fileBase64, "base64").then((snapshot)=>{
    console.log(snapshot)
})


*/