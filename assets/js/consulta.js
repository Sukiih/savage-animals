//P3 IIFE

const animales = ( () => {
    const url = "./animales.json"
    const getData = async () => {
        const resultado = await fetch(url)
        const data = await resultado.json()
        return data
    }
    return {getData}
}) ()

export default animales 