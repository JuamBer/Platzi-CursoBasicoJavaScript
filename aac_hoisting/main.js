// var miNombre = undefined
console.log(miNombre + " soy ese hoisting")
miNombre = "Diego"

hey()
function hey(){
    console.log("Hola " + miNombre)
}