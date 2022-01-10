let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");
ctx.moveTo(0,0);
ctx.strokeStyle="blue";
ctx.lineTo(250,250);
/*ctx.stroke();*/
ctx.lineWidth = 5;
ctx.strokeStyle="#FF0000";
ctx.lineTo(500,0);
ctx.stroke();

ctx.rect(10,10,100,200)
ctx.fillStyle="blue"
//ctx.fillRect(10,10,100,200);
ctx.lineWidth = 5;
//ctx.strokeStyle="red";
ctx.strokeRect(10,10,100,200);

ctx.fill();
ctx.stroke();

ctx.clearRect(20,20,30,30)


ctx.beginPath();
ctx.lineWidth = 4;
ctx.strokeStyle= "red";
ctx.moveTo(10,10);
ctx.lineTo(400,300);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle= "blue";
ctx.fillStyle= "green";
ctx.moveTo(50,10);
ctx.lineTo(300,300);
ctx.lineTo(200,300);
ctx.closePath();
ctx.fill()
ctx.stroke();

let x = 250; 
let y = 250;
let raio= 100;
let inicio= 0;
let fim= 2 * Math.PI;


ctx.beginPath();
ctx.strokeStyle= "red";
ctx.fillStyle= "green";
ctx.arc(x, y, raio, inicio, fim);

ctx.fill()
ctx.stroke();