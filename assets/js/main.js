//En el dom tambien hay validaciones (p7)

// clases y modal
import Leon from "./leon.js"; 
import Lobo from "./lobo.js"; 
import Oso from "./oso.js"; 
import Serpiente from "./serpiente.js"; 
import Aguila from "./aguila.js"; 
import Data from "./consulta.js";

// Arreglo para instancias
let animales = []; 

// restablecer formulario 
const resetForm = () => {
    const animalSelect = document.getElementById("animal");
    const edadSelect = document.getElementById("edad");
    const comentariosInput = document.getElementById("comentarios");
  
    // restablecer valores formulario
    animalSelect.selectedIndex = 0; // campo animal
    edadSelect.selectedIndex = 0; // campo edad
    comentariosInput.value = ""; 
};

// recargar tabla animales
const reloadTable = () => {
  const animalesTemplate = document.getElementById("Animales");
  animalesTemplate.innerHTML = ""; 

  animales.forEach((a, i) => { 
    animalesTemplate.innerHTML += `
      <div class="card text-center cardAnimal" style="width: 14rem; margin:25px; background-color: grey">
        <img src="${a.img}" id="animal${i}" class="card-img-top imgAnimal" alt="..." data-toggle="modal" data-target="#exampleModal" type="button">
        <div class="card-body p-0 clickAudio" style="  background-color: grey">
          <img src="assets/imgs/audio.svg" class="card-img-bottom imgAudio" alt="...">
        </div>
      </div>
    `;
  });

  modalAnimal(); 
  clickAudio();
}

// modal
const modalAnimal = () => { 
  const cardAnimal = [...document.getElementsByClassName("imgAnimal")]; 
  cardAnimal.forEach((item, i) => { 
    item.addEventListener("click", () => { 
      const exampleModal = document.querySelector(".modal-body"); 

      exampleModal.innerHTML = `
        <img src="${animales[i].img}" class="imagenAnimal rounded mx-auto d-block" alt="...">
        <h5 class="text-center m-3" style="color:white">${animales[i].nombre}</h5>
        <p class="text-center m-3" style="color:white">${animales[i].edad}</p>
        <p class="text-center m-3" style="color:white">Comentarios</p>
        <hr>
        <p class="text-center m-3" style="color:white">${animales[i].comentarios}</p>
      `;
    });
  });
}

//sonidos animales
const clickAudio = () => {  
  const divAudio = [...document.getElementsByClassName("clickAudio")];
  divAudio.forEach((item, i) => { 
    item.addEventListener("click", () => { 
      const sonidosAnimales = document.querySelector("#player"); 
      sonidosAnimales.setAttribute("src", './assets/sounds/' + animales[i].sonido);
      sonidosAnimales.play(); 
    });
  });
}

//botón registrar
document.getElementById("btnRegistrar").addEventListener("click", async () => {
  const data = await Data.getData(); 
  const dataAnimal = await data.animales; 
  let nombre = document.getElementById("animal").value; 
  let edad = document.getElementById("edad").value; 
  let comentarios = document.getElementById("comentarios").value; 
  let img = document.querySelector("#preview>img").src; 
  const sonido = dataAnimal.find((a) => a.name == nombre).sonido; 

  let newAnimal;

  // instancias
  if (nombre == "Aguila") {
    newAnimal = new Aguila(nombre, edad, img, comentarios, sonido);
  } else if (nombre == "Leon") {
    newAnimal = new Leon(nombre, edad, img, comentarios, sonido);
  } else if (nombre == "Lobo") {
    newAnimal = new Lobo(nombre, edad, img, comentarios, sonido);
  } else if (nombre == "Oso") {
    newAnimal = new Oso(nombre, edad, img, comentarios, sonido);
  } else if (nombre == "Serpiente") {
    newAnimal = new Serpiente(nombre, edad, img, comentarios, sonido);
  }

  // validando campos
  if (nombre && edad && comentarios) { 
    animales.push(newAnimal); 
    reloadTable(); // Recarganding la tabla 
    resetForm();
  } else {
    alert("Favor, completar todos los campos");
  }
});

// selección animal
document.getElementById("animal").addEventListener("change", async (event) => { 
  const { animales } = await Animales.getData(); 
  const valor = event.target.value; 
  const imagenAnimal = animales.find((a) => a.name == valor).imagen; 

  // imagn animal seleccionado
  document.getElementById("preview").innerHTML = `<img class="w-100" src="assets/imgs/${imagenAnimal}" />`;
});
