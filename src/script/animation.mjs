var position = ['200px'];

const obtenerpocion = (t,amplitud,gamma,omega) => {
  return amplitud * Math.exp(gamma * t) * Math.cos(omega * t);
}

const masaResorte = (idElement,amplitud,gamma,omega) => {
  //100 t
  for (var t = 0; t < 50; t += 0.1) {
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
}

module.exports = { masaResorte };
