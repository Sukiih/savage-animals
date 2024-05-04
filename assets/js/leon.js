import Animal from "./animal.js"
 class Leon extends Animal{

    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    rugir(){
        return this.sonido
    }
}

export default Leon;