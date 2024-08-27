function encriptar() {
    let texto = document.getElementById("texto").value;
    let mensaje_muñeco = document.getElementById("titulo_mensaje");
    let indicacion = document.getElementById("indicacion");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      mensaje_muñeco.textContent = "Texto encriptado con éxito";
      indicacion.textContent = "";
    } else {
      muñeco.src = "./img/muñeco.png";
      mensaje_muñeco.textContent = "Ningún mensaje fue encontrado";
      indicacion.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let mensaje_muñeco = document.getElementById("titulo_mensaje");
    let indicacion = document.getElementById("indicacion");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        mensaje_muñeco.textContent = "Texto desencriptado con éxito";
        indicacion.textContent = "";
      } else {
        muñeco.src = "./img/muñeco.png";
        mensaje_muñeco.textContent = "Ningún mensaje fue encontrado";
        indicacion.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    }
  }