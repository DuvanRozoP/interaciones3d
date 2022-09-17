const elementoResorte = document.querySelector(".resorte");

function animationResorte(){
    const animation = elementoResorte.animate([
        // Keyframes
        { trasnform:  "scaleX(110%)"}
    ],{
        // Options
        casing: "linear",
        iterations: 1,
        duration: 2000,

    });

    return animation.finished;
}

function displace(){
    animationResorte().then(()=>{
        
    })
}