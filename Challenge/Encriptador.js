function encriptar(){
    var texto = document.getElementById("texto").value;
    var encriptado = btoa(texto);
    document.getElementById("texto2").style.display = "block";
    document.getElementById("imagen").style.display = "none";
    document.getElementById("texto2").value = encriptado;
}

function desencriptar(){
    var desencriptado = document.getElementById("texto2").value;
    var resultado = atob(desencriptado);
    document.getElementById("texto2").value = resultado;
}

function copiar(){
    var resultado = document.getElementById("texto2");
    resultado.select();
    document.execCommand("copy");
}