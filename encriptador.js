//ENCRIPTADOR
//VARIABLES
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Encriptador de texto:)'

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingrese una palabra'

document.addEventListener("DOMContentLoaded", function() {
  var inputTexto1 = document.getElementById("input-texto");
  var inputTexto2 = document.getElementById("input-texto2");
  var btnEncriptar = document.querySelector(".btn-1");
  var btnDesencriptar = document.querySelector(".btn-2");
  var btnCopiar = document.querySelector(".btn-3");

  // Función para encriptar un texto utilizando un algoritmo de sustitución básico
  function encriptarTexto(texto) {
      var mapa = {
          'a': 'm',
          'b': 'n',
          'c': 'o',
          'd': 'p',
          'e': 'q',
          'f': 'r',
          'g': 's',
          'h': 't',
          'i': 'u',
          'j': 'v',
          'k': 'w',
          'l': 'x',
          'm': 'y',
          'n': 'z',
          'o': 'a',
          'p': 'b',
          'q': 'c',
          'r': 'd',
          's': 'e',
          't': 'f',
          'u': 'g',
          'v': 'h',
          'w': 'i',
          'x': 'j',
          'y': 'k',
          'z': 'l',
          ' ': ' '
      };

      var textoEncriptado = "";
      for (var i = 0; i < texto.length; i++) {
          var caracter = texto[i].toLowerCase();
          if (mapa[caracter]) {
              textoEncriptado += mapa[caracter];
          }
      }
      return textoEncriptado;
  }

  // Función para desencriptar un texto encriptado
  function desencriptarTexto(textoEncriptado) {
      var mapaInverso = {
          'm': 'a',
          'n': 'b',
          'o': 'c',
          'p': 'd',
          'q': 'e',
          'r': 'f',
          's': 'g',
          't': 'h',
          'u': 'i',
          'v': 'j',
          'w': 'k',
          'x': 'l',
          'y': 'm',
          'z': 'n',
          'a': 'o',
          'b': 'p',
          'c': 'q',
          'd': 'r',
          'e': 's',
          'f': 't',
          'g': 'u',
          'h': 'v',
          'i': 'w',
          'j': 'x',
          'k': 'y',
          'l': 'z',
          ' ': ' '
      };

      var textoDesencriptado = "";
      for (var i = 0; i < textoEncriptado.length; i++) {
          var caracter = textoEncriptado[i];
          if (mapaInverso[caracter]) {
              textoDesencriptado += mapaInverso[caracter];
          }
      }
      return textoDesencriptado;
  }

  // Event listener para el botón de encriptar
  btnEncriptar.addEventListener("click", function(event) {
      event.preventDefault();
      var texto = inputTexto1.value;
      inputTexto2.value = encriptarTexto(texto);
  });

  // Event listener para el botón de desencriptar
  btnDesencriptar.addEventListener("click", function(event) {
      event.preventDefault();
      var textoEncriptado = inputTexto2.value;
      inputTexto2.value = desencriptarTexto(textoEncriptado);
  });

  // Event listener para el botón de copiar
  btnCopiar.addEventListener("click", function(event) {
      event.preventDefault();
      inputTexto2.select();
      document.execCommand("copy");
      alert("¡Texto copiado al portapapeles!");
  });
});
