import Animal from "./animal.js"
class Oso extends Animal{

    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    gruñir(){
        return this.sonido
    }
}

export default Oso;