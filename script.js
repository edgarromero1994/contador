document.addEventListener("DOMContentLoaded", () => {

document.getElementById("aumentar").addEventListener("click", aumentarValor)
document.getElementById("disminuir").addEventListener("click", disminuirValor)
document.getElementById("reestablecer").addEventListener("click", reestablecerValor)

const mostrarValorContador = document.getElementById("contador")
let valorContador = 0;
function cambiarColor () {
  if (valorContador > 0) {
    contador.style.color = "green"
  } else if (valorContador < 0) {
    contador.style.color = "red"
  }  else {
    contador.style.color = "black"
  }
}


function aumentarValor () {
  valorContador++;
  mostrarValorContador.textContent = valorContador
  cambiarColor()
}

function disminuirValor () {
  valorContador--;
  mostrarValorContador.textContent = valorContador
  cambiarColor()
}

function reestablecerValor () {
  valorContador = 0;
  mostrarValorContador.textContent =  valorContador 
  cambiarColor()
}

})