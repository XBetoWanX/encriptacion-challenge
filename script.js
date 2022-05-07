
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
var input = document.getElementById("input-texto");
var copiarTexto = document.getElementById("msg")
function imprimir(frase){
    document.write(frase);
}
// const encriptadorToChar = {
//     'ai': 'a',
//     'enter': 'e',
//     'imes' : 'i',
//     'ober': 'o',
//     'ufat': 'u',
// }
// const arregloEncriptador = encriptador.split('');
// const arregloDesencriptador = arregloEncriptador.map((char) => encriptadorToChar[char]);
// const textoDesencriptado = arregloDesencriptador.join("");


//Funcion para verificar si un string contiene caracteres especiales
function verificar(str){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~´áéíóúÁÉÍÓÚ]/;
    return specialChars.test(str);
}

function isUpper(str) {
    return /[A-Z]/.test(str);

}

function encriptar(){
    if (verificar(input.value) == false && isUpper(input.value) == false){
        var  textoEncriptar = input.value;
        var  textoEncriptado = textoEncriptar.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector("#msg").value = textoEncriptado;
        if(textoEncriptado.length > 0){
            quitarMuneco();
        }else{
            mostarMuneco();
        }
        // document.querySelector("#input-texto").value;
    }else{
        document.querySelector("#msg").value = "El texto ingresado no puede contener mayúsculas y\ / \o caracteres especiales";
    }
}

function desencriptar(){
    if (verificar(input.value) == false && isUpper(input.value) == false){
        var  textoDesencriptar = input.value;
        var textoDesencriptado = textoDesencriptar.replace(/enter/gi,"e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        document.querySelector("#msg").value = textoDesencriptado;
        if(textoDesencriptado.length > 0){
            quitarMuneco();
        }else{
            mostarMuneco();
        }
        
    }else{
        document.querySelector("#msg").value = "El texto ingresado no puede contener mayúsculas y\ / \o caracteres especiales";
    }
    
    // document.querySelector("#input-texto").value;
}


    // function copiar() {
    //     /* Save value of myText to input variable */
    //     var input = document.getElementById("msg").value;
       
    //      /* Copy the text inside the text field */
    //     navigator.clipboard.writeText(input);
         
    //     alert("Copied Text: " + input);
    // };      

    function copiar(){
            var content = document.getElementById('msg');
        
            content.select();
            document.execCommand('copy');
        
            alert("Copiado");
          
    }

    function quitarMuneco(){
        const muneco = document.getElementById("muneco").classList;
        muneco.add("muneco");
    }

    function mostarMuneco(){
        const muneco = document.getElementById("muneco").classList;
        muneco.remove("muneco");
    }

var button = document.getElementById("btn-encriptar");
button.onclick = verificar;
button.onclick = isUpper;
button.onclick = encriptar; 

var button2 = document.getElementById("btn-desencriptar")
button2.onclick = desencriptar;
button2.onclick = isUpper;
button2.onclick = desencriptar;
var copiarr = document.getElementById("btn-copy");
copiarr.onclick = copiar;