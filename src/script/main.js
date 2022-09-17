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


function segundoAMilisegundos(segundos){
    return segundos
}