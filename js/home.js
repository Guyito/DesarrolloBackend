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


