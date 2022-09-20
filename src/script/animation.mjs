var position = ['200px'];

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

