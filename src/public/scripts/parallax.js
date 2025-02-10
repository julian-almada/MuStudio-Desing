window.onscroll = function () {
    let posicion = window.pageYOffset || document.documentElement.scrollTop;
    let boton = document.getElementById("volver-inicio");

    // Mostrar u ocultar el botón según la posición del scroll
    if (posicion > 200) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }

    // Opcional: Si tienes otros elementos como "icon_fondo"
    let elementosIcon = document.querySelectorAll("#icon_fondo");
    let elementosFondoChiquito = document.querySelectorAll("#fondo-chiquito");

    elementosIcon.forEach(elemento => {
        elemento.style.top = posicion * 0.4 + "px";
    });

    elementosFondoChiquito.forEach(elemento => {
        elemento.style.top = posicion * 0.1 + "px";
    });
};

function volverAlInicio() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}