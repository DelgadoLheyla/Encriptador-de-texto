

const textArea = document.querySelector("#texto");
const mensaje = document.querySelector("#mensaje");
let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
let isEncriptado = false;
let isDesencriptado =false;
const patronValidacion = /^[a-zA-Z0-9\sñ!]+$/;
/**
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
 */

let btnEncriptador = document.getElementById("Encriptador");
let btnDesencriptador = document.getElementById("Desencriptar");
let btnCopiar = document.getElementById("Copiar");

btnEncriptador.onclick=function(){
    if (!isEncriptado){
        let textoIngresado =textArea.value;  
        if (textoIngresado !== ""){
            if (patronValidacion.test(textoIngresado)){
                const textoEncriptado = encriptador(textoIngresado)
                mensaje.value = textoEncriptado
                textArea.value = "";
                mensaje.style.backgroundImage = "none";
            }else{
                swal("El texto ingresado contiene caracteres no válidos", "Solo se permiten letras minúsculas sin acentos.","warning")
            }
        }else{
            swal("Ingrese texto, por favor!")
        }   
    }else{
        swal("El texto está encriptado", "si quieres visualizar el mensaje debe desencriptar","warning")
    }

}

btnDesencriptador.onclick=function(){
    let textoIngresado =textArea.value;  
    let textoModificado = false;
    for(let i=0; i<matrizCodigo.length; i++){
        if(textoIngresado.includes(matrizCodigo[i][1])){
            textoModificado = true;
            break;
        }
    }
    if(textoIngresado !== ""){
        if(isEncriptado || textoModificado===true){
        
            if (patronValidacion.test(textoIngresado)){
                const textoDesencriptado = desencriptador(textoIngresado);
                mensaje.value = textoDesencriptado;
                textArea.value = "";
                mensaje.style.backgroundImage = "none";
            }else{
                swal("El texto ingresado contiene caracteres no válidos", "Solo se permiten letras minúsculas sin acentos.","warning")
            } 
    
        }else{
            swal("El texto no está Encriptado", "seleccione el botón ENCRIPTAR !","warning")
        }
    }else{
        swal("Ingrese texto, por favor!")
    }


}

btnCopiar.onclick = function(){
    let mensajeElement = document.getElementById("mensaje");
    console.log(mensajeElement.value)
    if(mensajeElement.value !== "" ){
        const textoACopia = mensaje.value;
        textArea.value = textoACopia;
        mensaje.value= "";        
        mensaje.style.backgroundImage = "";
    }else{
        swal("Error!", "El campo mensaje esta vació", "error");
    }
   
}

function encriptador(stringEncriptador){
    
   // let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptador = stringEncriptador.toLowerCase();
    for(let i =0; i < matrizCodigo.length; i++){
        if(stringEncriptador.includes(matrizCodigo[i][0])){
            stringEncriptador = stringEncriptador.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    isEncriptado = true;
    return stringEncriptador;
}

function desencriptador(stringDesencriptador){
    position=1;
   // let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptador  = stringDesencriptador.toLowerCase();
    for(let i=0; i< matrizCodigo.length;i++){
        if(stringDesencriptador.includes(matrizCodigo[i][1])){
            stringDesencriptador = stringDesencriptador.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
    isEncriptado=false;
    return stringDesencriptador;
}

