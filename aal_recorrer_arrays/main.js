var articulos = [
    { nombre: "Bicicleta", precio: 400},
    { nombre: "TV", precio: 1000},
    { nombre: "Libro", precio: 30},
    { nombre: "Celular", precio: 1200},
    { nombre: "Portatil", precio: 2000},
    { nombre: "Teclado", precio: 50},
    { nombre: "Cascos", precio: 100},
]

//FILTER
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.precio <= 500
})

//MAP
var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre
})

//FIND
var encuentraArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "Teclado"
})

//FOR EACH
var encuentraArticulo = articulos.forEach(function (articulo) {
    console.log(articulo.nombre)
})

//SOME
var articulosBaratos = articulos.some(function (articulo) {
    return articulo.precio <=400
})