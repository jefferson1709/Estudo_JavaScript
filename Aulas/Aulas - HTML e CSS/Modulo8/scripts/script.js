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