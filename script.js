const inputTexto = document.querySelector(".input-texto")

const mensaje = document.querySelector(".mensaje")


/* REGLAS DE ENCRIPTADO */
/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

//ENCRIPTAR MENSAJE

function btnEncriptar(){
    const encriptado = encriptar(inputTexto.value); 
    mensaje.value = encriptado;
    mensaje.style.backgroundImage = "none"; 
    inputTexto.value = "" 
    /*REVISA: no logro el efecto de eliminar la imagen */
}

function encriptar(textoEncriptado) {
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase(); /* pasar el texto a minúscula */ 

    for (let i = 0; i < codigo.length; i++){
        if (textoEncriptado.includes(codigo[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(codigo[i][0], codigo[i][1]) 
            /*.replaceAll es para que reemplace todas las coincidencias */
        } 
    }
    return textoEncriptado;
}


//DESENCRIPTAR MENSAJE

function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value) /*aquí se guarda la función creada para desencriptar, en la variable que se define a tal fin*/
    mensaje.value = textoEncriptado
    inputTexto.value = ""  
}

function desencriptar(textoDesencriptado) {
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for(let i=0; i < codigo.length; i++) {
        if(textoDesencriptado.includes(codigo[i][1])) {
            textoDesencriptado = textoDesencriptado.replaceAll(codigo[i][1], codigo[i][0])
        }
    }

    return textoDesencriptado;

}


// COPIAR TEXTO

function btnCopiar(){
    mensaje.select() //para seleccionar el texto que está en el cuadro mensaje
    navigator.clipboard.writeText(mensaje.value); //para guardar en el porta papeles el texto seleccionado en la línea de código anterior
    mensaje.value = "";
    alert("Texto copiado")
}