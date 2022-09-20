import { masaResorte } from "./animation.mjs";

const elementoBoton = document.querySelector('.start');

elementoBoton.addEventListener('click', () => {
    console.log('oprimiendo boton')
    masaResorte(".resorte",20,-0.1,2);
})
