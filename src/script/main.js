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
const resorte = document.getElementById('resorte');
function moverresorte(position){
    console.log(position);
    var tamano = 200; // los pixeles  

    var repetidorAnimation = setInterval(animation,10);
    var index = 0;

    var aumento = parseFloat(position[index]) + 10;
    var diminucion = -(parseFloat(position[index]) + 10);

    console.log("aumento: ",aumento);
    console.log("disminucion: ",diminucion);

    function animation(){  
        if (position[index] == null) {
            clearInterval(repetidorAnimation);
        }

        if(position[index] > 0.0001){
            tamano += parseFloat(position[index]) *3;
            resorte.style.width = tamano + "px";
        }

        if (position[index] < 0.0001) {
            tamano -= -(parseFloat(position[index]) *3);
            resorte.style.width = tamano + "px";
        }
        
        console.log(tamano)

        index++;
    }
}