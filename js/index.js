
// Proyecto de App para Stock e inventario

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


// Buscar Material

// let nombreMaterial = prompt ("cual material busca?");
// const PARTCODE = "1234"

// if ((nombreMaterial == "refrigerador") || (nombreMaterial == "heladera"))
//     console.log (nombreMaterial + "el codigo de parte buscado es" + "" + PARTCODE);
//     else {
// console.log ("no existe el material")
//     }


// Materiales con precio:

// let materialLavarropas = 0;

// for (let i = 1; i == 10; i++){

//     if (materialLavarropas == 5){
//         console.log ("Se uso el 50% del stock, pedir Compra")
//     }
// }

// Nuevo Usuario

// let continuarOno = "si"

// if (continuarOno != true){ 

// let nombre = prompt ("Nombre de Usuario:")
// let apellido = prompt ("Apellido de Usuario:")
// const legajo = prompt ("Ingrese su legajo:")

// console.log (nombre + " " + apellido + " " + legajo)
// } else {
//     alert ("salir del sistema")
// }


// Ingreso de entrada de materiales

// let materialLavarropas =0
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

// case "total": console.log (entradaDeMaterial)

// default: console.log ("error de material")
// }
// MATERIAL = prompt ("ingresar material")
// }

// alert ("Saliendo del sisema...")

// Material Valorizado

function valorMaterial (precioMaterial, enviosNacionales){


    let ivaDeMaterial = 1.21;

    if (enviosNacionales === true){
        enviosNacionales = 3000
    }else enviosNacionales =0

    let resultadoPrecio = (precioMaterial * ivaDeMaterial) + enviosNacionales

    return resultadoPrecio
}

let nuevoValor = valorMaterial (3500, false)
console.log("el nuevo valor es" + nuevoValor)
