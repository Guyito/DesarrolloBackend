
// // Proyecto de App para Stock e inventario

// alert ("Bienvenido! Por favor seleccione la opcion de logueo:")


// let nuevoUsuario = "true"

// const LEGAJOUSUARIO = prompt ("Ingrese su Legajo:") 
// let passwordUsuario = prompt("Ingrese su Password:")


// if (LEGAJOUSUARIO != ""){
//     console.log("Ingresando al sistema: " + LEGAJOUSUARIO);
// }
// else {
//     alert("Error! Por favor solicite Usuario del Sistema");
// }


// // Buscar Material

// let nombreMaterial = prompt ("cual material busca?");
// const PARTCODE = "1234"

// if ((nombreMaterial == "refrigerador") || (nombreMaterial == "heladera"))
//     console.log (nombreMaterial + "el codigo de parte buscado es" + "" + PARTCODE);
//     else {
// console.log ("no existe el material")
//     }


// // Materiales con precio:

// let materialLavarropas = 0;

// for (let i = 1; i == 10; i++){

//     if (materialLavarropas == 5){
//         console.log ("Se uso el 50% del stock, pedir Compra")
//     }
// }

// // Nuevo Usuario

// let continuarOno = "si"

// if (continuarOno != true){ 

// let nombre = prompt ("Nombre de Usuario:")
// let apellido = prompt ("Apellido de Usuario:")
// const legajo = prompt ("Ingrese su legajo:")

// console.log (nombre + " " + apellido + " " + legajo)
// } else {
//     alert ("salir del sistema")
// }

// // Ingreso de entrada de materiales

// // let materialLavarropas =0 (YA DECLARADO)
// let materialHeladera=0
// let materialHorno=0

// let MATERIAL = prompt ("ingresar material")

// while (MATERIAL != "ESC"){

// switch (MATERIAL){

// case "lavarropas": console.log ("Ingreso de lavarropas")
// break;

// case "horno": console.log("ingreso Horno")
// break;

// case "heladera": console.log("ingreso heladera")
// break;

// default: console.log ("error de material")
// }
// MATERIAL = prompt ("ingresar material")
// }

// alert ("Saliendo del sisema...")

// // Material Valorizado

// function valorMaterial (precioMaterial, enviosNacionales){


//     let ivaDeMaterial = 1.21;

//     if (enviosNacionales === true){
//         enviosNacionales = 3000
//     }else enviosNacionales =0

//     let resultadoPrecio = (precioMaterial * ivaDeMaterial) + enviosNacionales

//     return resultadoPrecio
// }

// let nuevoValor = valorMaterial (3500, false)
// console.log("el nuevo valor es" + nuevoValor)


// SEGUNDA PRE ENTREGA

// const objHeladera = {
//     marca: "Electrolux",
//     precioMaterial: 6900,
//     codigoParte: 100200,
//     stock: 38,
// }

// const objLavarropas = {
//     marca: "Drean",
//     precioMaterial: 8900,
//     codigoParte: 100500,
//     stock: 120,
// }
// const objHorno= {
//     marca: "Next",
//     precioMaterial: 7900,
//     codigoParte: 100800,
//     stock: 265,
// }

// console.log(objHeladera.marca)

// /// Sumando stock en inventario
// objHeladera["stock"] = prompt("ingrese nuevo stock de Heladeras:")
// console.log(objHeladera)

/// Crando nuevo material en inventario

function datosMateriales (marca, precioMaterial, codigoParte, stock){
    this.marca = marca;
    this.precioMaterial = precioMaterial;
    this.codigoParte = codigoParte;
    this.stock = stock;
    this.valorTotalizado = function (precioMaterial, stock) {precioMaterial*stock}
}

const nuevoMaterial = new datosMateriales("whirpool", 35500, 100900, 5)
console.log(nuevoMaterial)

const nuevoMaterial2 = new datosMateriales ("samsung", 10050, 200500, 1)
console.log (nuevoMaterial2)

class datosMaterialesConClase {
    constructor (marca, precio, codigoParte, stock){
        this.marca = marca;
        this.precio = precio;
        this.codigoParte = codigoParte;
        this.stock = stock;
        this.valorTotalizado = function (precioMaterial, stock) {precio*stock}
    }
    calculoTot (){
        this.precio = this.precio * this.stock
    }
}
const nuevoMaterial3 = new datosMaterialesConClase ("Drean", 9850, 300500, 90)
console.log (nuevoMaterial3)


// Arrays

const cantidadProductos = ["lavarropas", "horno", "heladera"]
const cantidades = cantidadProductos.length;
console.log("el inventario de productos contiene:" + cantidades)

stockElectros = ["lavarropas", "horno", "heladera"]
stockElectros.push ('extender garantia 12 meses')
console.log(stockElectros)




