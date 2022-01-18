
    $("#button").click(() =>{
        $("#green").hide(2000).show(2000);
    })
			

/*

    $("#button").click(() =>{
        $("#square").fadeIn(2000);
    })
    $("#button").click(() =>{
        $("#square").fadeOut("slow");
    })
    $("#button").click(() =>{
        $("#square").fadeToggle(2000);
    })
    $("#button").click(() =>{
        $("#square").fadeTo(1000, 0.5);
    })

    $("#button").click(() =>{
        $("#green").slideDown();
    })
    $("#button").click(() =>{
        $("#green").slideUp();
    })
    $("#button").click(() =>{
        $("#green").slideToggle();
    })

    $("#button").click(() =>{
        $("#green").animate({height: 500, width: 500}, 3000);
    })
    $("#stop").click(() =>{
        $("#green").stop();
    })

    //Callback
    function callback(){
        console.log("Green escondido")
        $("#square").show(2000);
    }

    $("#button").click(() =>{
        $("#green").hide(2000, callback);
    })

    //ou
    
    $("#button").click(() =>{
        $("#green").hide(2000, function callback(){
            console.log("Green escondido")
            $("#square").show(2000);
        });
    })

    //chain
    $("#button").click(() =>{
        $("#green").hide(2000).show(2000);
    })

*/