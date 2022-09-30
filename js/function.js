$(function (){


    abrirMenu();
    function abrirMenu(){
    $(".w33").click(function(){
        $("alugar.html").fadeIn()
    })
    }
    
    $("body").click(function(e){
        e.stopPropagation
        $(".menu-mobile").fadeOut()
    })

    

})