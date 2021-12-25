var coche = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,

    toString: function () {
        console.log(`Coche:{marca:${this.marca},modelo:${this.modelo},annio:${this.annio}}`)
    }
}

console.log(coche.marca)

console.log(coche.toString())

//CONSTRUCTOR 
function coche(marca, modelo, annio) {
    this.marca = marca
    this.modelo = modelo
    this.annio = annio
}

var autoNuevo = new coche("Tesla","Model 3","2021")

console.log(autoNuevo);