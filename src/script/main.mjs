import { masaResorte } from "./animation.mjs";

const elementoBoton = document.querySelector('.start');

elementoBoton.addEventListener('click', () => {
    console.log('oprimiendo boton')
    masaResorte(".resorte",20,-0.1,2).then(resolve => {
        console.log("quest complete masa resorte: ",resolve);
    }).catch(reject => {
        console.log("quest incomplete masa resorte: ",reject);
    })
})
