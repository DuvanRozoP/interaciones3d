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
var amplitud=1
var gamma=1
var omega=2
var t
var posision
function obtenerpocion(t){
    posision=amplitud*Math.exp(gamma*t)*Math.cos(omega*t)
}
for(t=0;t<10;t++){
    
obtenerpocion()
    console.log(posision)
}
//end
function segundoAMilisegundos(segundos){
    return segundos
}