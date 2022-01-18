let selected = $("#container2").children().filter(".div2");
console.log(selected)

let selected = $("#container2").children().first();
console.log(selected)

let selected = $("#container2").children().last();
console.log(selected)

let selected = $("#container2").children().not("#div8");
console.log(selected)

let selected = $("#container2").children().eq(0);
console.log(selected)

let selected = $("#container2").children().eq(2);
console.log(selected)

let selected = $("#container2").children().eq(10000);
console.log(selected)

/*
$("h1").addClass("bg-blue")

setTimeout(()=>{
    $("h1").addClass("bg-blue")
},1000)

setTimeout(()=>{
    $("h1").removeClass("bg-blue")
},3000)

setTimeout(()=>{
    $("h1").toggleClass("bg-blue")
},3000)

setTimeout(()=>{
    $("h1").toggleClass("bg-blue")
},3000)

console.log($("h1").css("background-color"))
console.log($("h1").css("background-color","red"))
console.log($("h1").css("font-size", "50px"))

console.log($("h1").css({"background-color":"green", "font-size": "50px"}))

let box = $("box");

box.width(600);

box.append( "Largura:", box.width(),"<br>",
            "Largura + padding:", box.innerWidth(),"<br>",
            "Largura + padding + borda:", box.outerWidth(),"<br>",
            "Largura + padding + borda + margem:", box.outerWidth(true));


let selected = $("#div3");
console.log(selected)

let selected = $("#div3").sublings();
console.log(selected)

let selected = $("#div3").sublings("#div4");
console.log(selected)

let selected = $("#div3").next();
console.log(selected)

let selected = $("#div3").nextAll();
console.log(selected)

let selected = $("#div3").nextAll("#div5");
console.log(selected)

let selected = $("#div3").prev();
console.log(selected)

let selected = $("#div3").prevAll();
console.log(selected)
        
let selected = $("#div1").nextUntil("#div4");
console.log(selected)

let selected = $("#div5").prevUntil("#div2");
console.log(selected)

let selected = $("#div");
console.log(selected)

let selected = $("#div").filter(".div2");
console.log(selected)

let selected = $("#div").filter(".div1");
console.log(selected)

let selected = $("#div").filter("#div5");
console.log(selected)


*/