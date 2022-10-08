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
const Keyboard = {
  elements: {
      main: null,
      keysContainer: null,
      keys: []
  },

  eventHandlers: {
      oninput: null,
      onclose: null
  },

  properties: {
      value: "",
      capsLock: false
  },

  init() {
      // Create main elements
      this.elements.main = document.createElement("div");
      this.elements.keysContainer = document.createElement("div");

      // Setup main elements
      this.elements.main.classList.add("keyboard", "keyboard--hidden");
      this.elements.keysContainer.classList.add("keyboard__keys");
      this.elements.keysContainer.appendChild(this._createKeys());

      this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

      // Add to DOM
      this.elements.main.appendChild(this.elements.keysContainer);
      document.body.appendChild(this.elements.main);

      // Automatically use keyboard for elements with .use-keyboard-input
      document.querySelectorAll(".use-keyboard-input").forEach(element => {
          element.addEventListener("focus", () => {
              this.open(element.value, currentValue => {
                  element.value = currentValue;
              });
          });
      });
  },

   _createKeys() {
      const fragment = document.createDocumentFragment();
      const keyLayout = [
          "7", "8", "9", "+",  "backspace",
          "4", "5", "6", "-","(", 
          "1", "2", "3", "*",")",   
          "cos(","0", "\u03C0", "\u00F7","sen(",
          
      ];

      // Creates HTML for an icon
      const createIconHTML = (icon_name) => {
          return `<i class="material-icons">${icon_name}</i>`;
      };
      console.time("creacion_teclado")
      keyLayout.forEach(key => {
          const keyElement = document.createElement("button");
          const insertLineBreak = ["backspace", "(", ")", "sen("].indexOf(key) !== -1;

          // Add attributes/classes
          keyElement.setAttribute("type", "button");
          keyElement.classList.add("keyboard__key");

          switch (key) {
              case "backspace":
                  keyElement.classList.add("keyboard__key--wide");
                  keyElement.innerHTML = createIconHTML("borrar");

                  keyElement.addEventListener("click", () => {
                      this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                      this._triggerEvent("oninput");
                  });

                  break;

              case "caps":
                  keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                  keyElement.innerHTML = createIconHTML("caps");

                  keyElement.addEventListener("click", () => {
                      this._toggleCapsLock();
                      keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                  });

                  break;

              case "enter":
                  keyElement.classList.add("keyboard__key--wide");
                  keyElement.innerHTML = createIconHTML("return");

                  keyElement.addEventListener("click", () => {
                      this.properties.value += "\n";
                      this._triggerEvent("oninput");
                  });

                  break;

              case "space":
                  keyElement.classList.add("keyboard__key--extra-wide");
                  keyElement.innerHTML = createIconHTML("space_bar");

                  keyElement.addEventListener("click", () => {
                      this.properties.value += " ";
                      this._triggerEvent("oninput");
                  });

                  break;

              case "done":
                  keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                  keyElement.innerHTML = createIconHTML("terminar");

                  keyElement.addEventListener("click", () => {
                      this.close();
                      this._triggerEvent("onclose");
                  });

                  break;

              default:
                  keyElement.textContent = key.toLowerCase();

                  keyElement.addEventListener("click", () => {
                      this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                      this._triggerEvent("oninput");
                  });

                  break;
          }

          fragment.appendChild(keyElement);

          if (insertLineBreak) {
              fragment.appendChild(document.createElement("br"));
          }
      });
        console.timeEnd("creacion_teclado")
      return fragment;
  },

  _triggerEvent(handlerName) {
      if (typeof this.eventHandlers[handlerName] == "function") {
          this.eventHandlers[handlerName](this.properties.value);
      }
  },

  _toggleCapsLock() {
      this.properties.capsLock = !this.properties.capsLock;

      for (const key of this.elements.keys) {
          if (key.childElementCount === 0) {
              key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
          }
      }
  },

  open(initialValue, oninput, onclose) {
      this.properties.value = initialValue || "";
      this.eventHandlers.oninput = oninput;
      this.eventHandlers.onclose = onclose;
      this.elements.main.classList.remove("keyboard--hidden");
  },

  close() {
      this.properties.value = "";
      this.eventHandlers.oninput = oninput;
      this.eventHandlers.onclose = onclose;
      this.elements.main.classList.add("keyboard--hidden");
  }
};
function createkeyboardvirtual(){
  return new Promise((resolve,reject)=>{
      Keyboard.init();
      resolve("funciona")
  })
}
window.addEventListener("DOMContentLoaded", function () {
   createkeyboardvirtual().then(resolve=>{
      console.log("funciona bien")

  } ).catch(error=>{
      console.log("no salio")
  }) 
});
