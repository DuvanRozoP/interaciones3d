import { masaResorte, oscilacionDatos } from "./animation.mjs";
import { grafica } from "./graficas.mjs";

const elementoBoton = document.querySelector(".start");
/*
elementoBoton.addEventListener('click', () => {
    console.log('oprimiendo boton')
    masaResorte(".resorte",20,-0.1,2).then(resolve => {
        console.log("quest complete masa resorte: ",resolve);
    }).catch(reject => {
        console.log("quest incomplete masa resorte: ",reject);
    })
})
*/

document.querySelector("#boton_arrancar").addEventListener("click", () => {
  animationOscilation();
  showGraphic();
});

function animationOscilation() {
  let amplitud = document.querySelector("#inputA").value;
  let w = document.querySelector("#inputW").value;
  let fase = document.querySelector("#inputF").value;
  let time = document.querySelector("#inputTime").value;

  let piMax = Math.PI / 2;
  console.log(piMax);

  if (fase > piMax) {
    alert("φ supero el maximo en valor");
    return 0;
  }

  if (amplitud == "" || w == "" || fase == "" || time == "") {
    alert("Rellene todas las casillas por favor.");
    return 0;
  }

  oscilacionDatos(
    ".prueba",
    Number(amplitud*100),
    Number(w),
    Number(fase),
    Number(time)
  )
    .then((resolve) => {
      console.log(resolve);
    })
    .catch((reject) => {
      console.log(reject);
    });
}

function showGraphic() {
  let amplitud = document.querySelector("#inputA").value;
  let w = document.querySelector("#inputW").value;
  let fase = document.querySelector("#inputF").value;
  let time = document.querySelector("#inputTime").value;
 

  grafica(Number(amplitud), Number(w), Number(fase), Number(time), graf)
    .then((resolve) => {
      console.log("funciono showGraphics");
    })
    .catch((reject) => {
      console.log("fallo funcion showGraphics");
    });
}
