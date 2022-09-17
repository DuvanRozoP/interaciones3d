
function resorteMovie(){

    let timing = 10;
    const elementresrte = document.getElementById('resorte')

    let id = setInterval(frame,10);


    function frame(){
        if(timing == 500){
            timing = 10;
        }else{
            timing++;
            elementresrte.style.width = timing+"px";
        }   
    }
}


function segundoAMilisegundos(segundos){
    return segundos
}