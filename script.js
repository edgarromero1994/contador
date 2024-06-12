const botonAumentar = document.getElementById("aumentar");
const mostrarContador = document.getElementById("contador");
const botonDisminuir = document.getElementById("disminuir");
const botonreestablecer = document.getElementById("reestablecer");

botonAumentar.addEventListener("click", aumentar);
botonDisminuir.addEventListener("click", disminuir);
botonreestablecer.addEventListener("click", reestabler);

let valorContador = 0;

function cambiarColor () {
    if (valorContador  > 0) {
        contador.style.color = "green";
    } else if (valorContador < 0) {
        contador.style.color = "red";
    } else {
        contador.style.color = "black";
    }
}

function aumentar () {
    valorContador++;
    mostrarContador.textContent = valorContador;
    cambiarColor();
}

function disminuir () {
    valorContador--;
    mostrarContador.textContent = valorContador;
    cambiarColor();
}

function reestabler () {
    valorContador = 0;
    mostrarContador.textContent = valorContador;
    cambiarColor();
}
