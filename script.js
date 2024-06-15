document.getElementById("aumentar").addEventListener("click", aumentar);
document.getElementById("disminuir").addEventListener("click", disminuir);
document.getElementById("reestablecer").addEventListener("click", reestablecer);

const mostrarContador = document.getElementById("contador");

let valorContador = 0;

function cambiarColor () {
    if (valorContador > 0){
        contador.style.color = "green";
    } else if (valorContador < 0) {
        contador.style.color = "red"
    } else {
        contador.style.color = "black"
    }
}

function aumentar () {
    valorContador++;
    mostrarContador.textContent= valorContador
    cambiarColor()
}

function disminuir () {
    valorContador--;
    mostrarContador.textContent = valorContador
    cambiarColor()
}

function reestablecer () {
    valorContador = 0;
    mostrarContador.textContent = valorContador
    cambiarColor()
}