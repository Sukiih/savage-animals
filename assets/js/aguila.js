import Animal from "./animal.js"

 class Aguila extends Animal{

    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    chillar(){
        return this.sonido
    }
}

export default Aguila;