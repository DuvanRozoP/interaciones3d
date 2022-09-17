// OPERACIONES



// ANIMACIONES 
function moverresorte(){
    var tamano = 100; // los pixeles
    const resorte = document.getElementById('resorte');

    // funcion , milisegundos
    var repetidorAnimation = setInterval(animation,16);
    function animation(){
        if (tamano > 800){
            clearInterval(repetidorAnimation);
        }

        resorte.style.width = tamano + "px";
        tamano++;
    }
}
//la posision y eso
var amplitud=10
var gamma=-0.01
var omega=2


function obtenerpocion(t){

    return amplitud*Math.exp(gamma*t)*Math.cos(omega*t)

}
for(var t=0; t<100; t+=0.1){
    
 console.log(obtenerpocion(t))
    
}
//end
function segundoAMilisegundos(segundos){
    return segundos
}