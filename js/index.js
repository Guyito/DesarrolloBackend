
// Proyecto de App para Stock e inventario

// Logueo y Salida

function newDoc() {
    user=document.getElementById("inputUsuario").value
    pass=document.getElementById("inputPassword").value

    if (user == "L5555" && pass =="1234"){
        window.location.assign("http://127.0.0.1:5500/pages/home.html")
    }else{
        alert("error")
    }
}

function salidaSys(){
    window.location.assign("http://127.0.0.1:5500/index.html")
}

// DOM - Texto de Usuario luego de logueo

let usuarioQueIngresa = document.getElementById ("usuarioEntrante")
// console.log(usuarioQueIngresa.innerText)

usuarioQueIngresa.innerText = "Bienvenido Usuario"
// console.log (usuarioQueIngresa.innerText)


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

// Pasado a Doc.

// const insertarEnDoc = document.querySelector('.containerStock')
// console.log(insertarEnDoc.children)


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


// // Materiales con precio:

// let materialLavarropas = 0;

// for (let i = 1; i == 10; i++){

//     if (materialLavarropas == 5){
//         console.log ("Se uso el 50% del stock, pedir Compra")
//     }
// }

// // Nuevo Usuario

// // let continuarOno = "si"

// // if (continuarOno != true){ 

// // let nombre = prompt ("Nombre de Usuario:")
// // let apellido = prompt ("Apellido de Usuario:")
// // const legajo = prompt ("Ingrese su legajo:")

// // console.log (nombre + " " + apellido + " " + legajo)
// // } else {
// //     alert ("salir del sistema")
// // }

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

//------------------------------------------------------------------------------------------

// SEGUNDA PRE ENTREGA

// Objetos del inventario, con Arrays

const cantidadDeProductos = [
    {
    tipo: "heladera",
    marca: "Electrolux",
    precioMaterial: 6900,
    codigoParte: 100200,
    stock: 38,
    },

    {
    tipo: "lavarropas",
    marca: "Drean",
    precioMaterial: 8900,
    codigoParte: 100500,
    stock: 120,
    },
    {
    tipo: "horno",
    marca: "Next",
    precioMaterial: 7900,
    codigoParte: 100800,
    stock: 265,
    },
    // AGREGADO DE OBJETO PARA COMPROBACION
    // {
    // tipo: "tostadora",
    // marca: "pepe",
    // precioMaterial: 900,
    // codigoParte: 10001,
    // stock: 500,
    // },
    {
    tipo: "waflera",
    marca: "Yelmo",
    precioMaterial: 750,
    codigoParte: 10005,
    stock: 0,
    }
]

const cantidades = cantidadDeProductos.length;
console.log("el inventario de productos contiene:" + cantidades) // Busco el totalizado de los productos en inventario

console.log(cantidadDeProductos[2]) // Selecciono objeto en el array
console.log (cantidadDeProductos.stock in cantidadDeProductos) // Chequeo de stock en inventario

const reponerStock = cantidadDeProductos.filter((sinStock) => sinStock.stock = 0)
console.log (reponerStock)


const aumentoPrecio = cantidadDeProductos.map((aument) => { // Aumento de precio sobre valor
    return {
        precioMaterial: aument.precioMaterial *1.20
    }
})
console.log (aumentoPrecio)


// Agregando elementos

cantidadDeProductos.push("calefon")
console.log(cantidadDeProductos)

/// Crando nuevo material en inventario

function datosMateriales (marca, precioMaterial, codigoParte, stock){
    this.marca = marca;
    this.precioMaterial = precioMaterial;
    this.codigoParte = codigoParte;
    this.stock = stock;
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
    }
    calculoTot (){
        this.precio = this.precio * this.stock
    }
}
const nuevoMaterial3 = new datosMaterialesConClase ("Drean", 9850, 300500, 90)
console.log (nuevoMaterial3)

console.log (new Date())

const precioMaximoMaterial = cantidadDeProductos.filter(idprod => idprod.precioMaterial >=8900)
console.log(precioMaximoMaterial)

const btn = document.getElementById("btn");


// Renderizando codigo de entrada-salida de materiales

let carrito = []

const electrodomesticos = [
    { id: 1, nombre: 'Lavadora', precio: 500 },
    { id: 2, nombre: 'Refrigerador', precio: 700 },
    { id: 3, nombre: 'Microondas', precio: 300 },
    { id: 4, nombre: 'Licuadora', precio: 100 },
    { id: 5, nombre: 'Horno', precio: 450 }
]

function agregarAlCarrito() {
    const select = document.getElementById('electrodomesticos')
    const id = parseInt(select.value)
    const selecccionElectrodomestico = electrodomesticos.find(item => item.id === id)

    carrito.push(selecccionElectrodomestico);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = ''
    
    carrito.forEach(item => {
        const itemDiv = document.createElement('div')
        itemDiv.textContent = item.nombre
        carritoDiv.appendChild(itemDiv)
    })
}

function calcularTotal() {
    const total = carrito.reduce((acc, item) => acc + item.precio, 0);
    alert(`Movimiento de Stock Valorizado: $${total}`);
}

// Asignar eventos a los botones
document.getElementById('finalizarBtn').addEventListener('click', calcularTotal);


function borrarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';
    
    carrito.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        const texto = `${item.nombre} - $${item.precio}`;
        itemDiv.textContent = texto;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.addEventListener('click', () => borrarDelCarrito(index));

        itemDiv.appendChild(deleteBtn);
        carritoDiv.appendChild(itemDiv);
    });
}

// Local Storage de usuarios

    const electroJSON = JSON.stringify(electrodomesticos)
    localStorage.setItem("electros", electroJSON)


