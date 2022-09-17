// OPERACIONES

//la posision y eso
var amplitud=10
var gamma=-0.01
var omega=2



function obtenerpocion(t){
    return amplitud*Math.exp(gamma*t)*Math.cos(omega*t)
}

function masaResorte() {
    var position= [];
    for(var t=0; t<100; t += 0.1){
        position.push(obtenerpocion(t).toFixed(2));
    }
    //console.log(position);
    moverresorte(position)
}
//end
function segundoAMilisegundos(segundos){
    return segundos
}

// ANIMACIONES 
function moverresorte(position){
    console.log(position);
    var tamano = 200; // los pixeles
    const resorte = document.getElementById('resorte');

    var repetidorAnimation = setInterval(animation,10);
    var index = 0;

    function animation(){  
        if (position[index] == null) {
            clearInterval(repetidorAnimation);
        }

        if(position[index] > 0){
            resorte.style.width = tamano + "px";
            tamano+= parseFloat(position[index]) + 10 ;
        }




        if (position[index] < 0) {
            resorte.style.width = tamano + "px";
            tamano-= parseFloat(position[index]) - 10;
        }

        index++;
    }
}