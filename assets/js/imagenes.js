//P4 imagenes

import Animales from "./consulta.js";

document.getElementById("animal").addEventListener("change", async (event) => {
    const { animales } = await Animales.getData()
    const valor = event.target.value
    const imgAnimal = animales.find((a) => a.name == valor).imagen

    document.getElementById("preview").innerHTML = `<img class="w-100" src="assets/imgs/${imgAnimal}" />`
})