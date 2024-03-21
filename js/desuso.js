
// logueo

alert ("Bienvenido! Por favor seleccione la opcion de logueo:")


let nuevoUsuario = "true"

const LEGAJOUSUARIO = prompt ("Ingrese su Legajo:") 
let passwordUsuario = prompt("Ingrese su Password:")


if (LEGAJOUSUARIO != ""){
    console.log("Ingresando al sistema: " + LEGAJOUSUARIO);
}
else {
    alert("Error! Por favor solicite Usuario del Sistema");
}


// DOM contra Home

const contenedorHome = document.createElement('div')
contenedorHome.classList = 'containerStock'

const textoContenedorHome = document.createElement('h2')
textoContenedorHome.classList = 'textoConJavaS'
textoContenedorHome.textContent = 'Seleccione los materiales de ingreso o salida'

const parrafoContenedorHome = document.createElement('p')
parrafoContenedorHome.classList = 'parrafConJavaS'
parrafoContenedorHome.textContent = 'Lorem ipsum dolor sit amet.'

// Anido los elementos del div
contenedorHome.appendChild(textoContenedorHome)
contenedorHome.appendChild(parrafoContenedorHome)
console.log(contenedorHome)



let materialLavarropas = 0;

for (let i = 1; i == 10; i++){

    if (materialLavarropas == 5){
        console.log ("Se uso el 50% del stock, pedir Compra")
    }
}

// Buscar Material

let nombreMaterial = prompt ("cual material busca?");
const PARTCODE = "1234"

if ((nombreMaterial == "refrigerador") || (nombreMaterial == "heladera"))
    console.log (nombreMaterial + "el codigo de parte buscado es" + "" + PARTCODE);
    else {
console.log ("no existe el material")
    }


// Ingreso de entrada de materiales


// let materialLavarropas = 0 -- > Declarado linea 41
let materialHeladera=0
let materialHorno=0

let MATERIAL = prompt ("ingresar material")

while (MATERIAL != "ESC"){

switch (MATERIAL){

case "lavarropas": console.log ("Ingreso de lavarropas")
break;

case "horno": console.log("ingreso Horno")
break;

case "heladera": console.log("ingreso heladera")
break;

default: console.log ("error de material")
}
MATERIAL = prompt ("ingresar material")
}

alert ("Saliendo del sisema...")

