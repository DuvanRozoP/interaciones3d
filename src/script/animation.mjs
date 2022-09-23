var position = ['200px'];



const operacion = (amplitud,w,fase,tiempo) => {
  return amplitud * Math.cos(w*tiempo + fase);
} 

export const oscilacionDatos = (idElement,amplitud,w,fase,time) => {
  return new Promise ( (resolve,reject) => {

    let positionDato = [];
    let dato;
    for (let t = 0; t < time; t += 0.1) {
      dato = operacion(amplitud,w,fase,t).toFixed(2);

      if ( dato >= amplitud && dato !=  operacion(amplitud,w,fase,t-0.1).toFixed(2)){
        positionDato.push(dato + 'px');
      }

      if ( dato <= -amplitud && dato !=  operacion(amplitud,w,fase,t-0.1).toFixed(2)) {
        positionDato.push(dato + 'px');
      }
      
    }
    const elementos = idElement;
    let durat = time * 15;
    anime({
      targets: elementos,
      translateY: positionDato, // -> from '28px' to '100%',
      duration: durat, // 1000
      easing: 'linear',
    });
  })
}


const obtenerpocion = (t,amplitud,gamma,omega) => {
  return amplitud * Math.exp(gamma * t) * Math.cos(omega * t);
}

export const masaResorte = (idElement,amplitud,gamma,omega) => {
  
  //INICIALIZANDO PROMESA
  return new Promise( (resolve,reject) =>{
    //100 t
    for (var t = 0; t < 50; t += 0.2) {
      var tempPosition = 200 + 3 * parseFloat(obtenerpocion(t,amplitud,gamma,omega).toFixed(2)) + "px"; // 3
      position.push(tempPosition);
    }

    // const elementos = ".resorte";
    const elementos = idElement;
    console.log(position);
    anime({
      targets: elementos,
      width: position, // -> from '28px' to '100%',
      duration: 6000, // 1000
      easing: 'easeInOutQuad',
    });
  })
}

