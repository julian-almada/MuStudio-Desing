document.addEventListener("DOMContentLoaded", () => {
  const contenedorTrabajos = document.querySelector("#contenedor-trabajos");
  const botonesVerMas = document.querySelectorAll(".ver-mas");

  let trabajos = [];

  // Cargar el JSON
  fetch("scripts/trabajos.json")
    .then((response) => response.json())
    .then((data) => {
      trabajos = data;
    })
    .catch((error) => console.error("Error cargando JSON:", error));

  function cargarTrabajos(trabajosElegidos) {
    contenedorTrabajos.innerHTML = ""; // Limpiar contenedor antes de cargar nuevos trabajos

    trabajosElegidos.forEach((trabajo) => {
      const div = document.createElement("div");
      div.classList.add("trabajos-de-categoria");
      div.innerHTML = `
              <div class="trabajo-imagen"><img src="${trabajo.imagen}" alt="${trabajo.titulo}"></div>
              <div class="contenedor-descripcion">
              <h2 class="nombre-trabajo">${trabajo.titulo}</h2>
              <p class="descripcion-producto">${trabajo.descripcion}</p>
              <button class="ver-trabajo">Ver Trabajo</button>
              </div>
              <button class="boton-cerrar">X</button>
          `;

      contenedorTrabajos.appendChild(div);

      // Asegurar que el elemento ya está en el DOM antes de agregar la clase
      setTimeout(() => {
        div.classList.add("mostrar");
        console.log("Clase agregada a:", div); // Depuración: Ver si la clase se aplica
      }, 100); // 100ms de retraso para animación
    });
  }

  // Agregar evento a cada botón "Ver más"
  botonesVerMas.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const tarjeta = e.target.closest(".tarjeta"); // Encuentra la tarjeta más cercana
      if (!tarjeta) return;

      const categoria = tarjeta.dataset.categoria; // Obtiene la categoría de la tarjeta
      console.log("Categoría seleccionada:", categoria); // Debug

      const trabajosFiltrados = trabajos.filter(
        (trabajo) => trabajo.categoria === categoria
      );
      console.log("Trabajos filtrados:", trabajosFiltrados); // Debug

      cargarTrabajos(trabajosFiltrados); // Muestra los trabajos de la categoría
    });
  });

  
});


document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector("#modal-trabajo");
    const imagenPrincipal = document.querySelector("#imagen-principal");
    const miniaturas = document.querySelectorAll(".miniatura");
    const botonCerrar = document.querySelector(".cerrar-modal");
    const modalTitulo = document.querySelector("#modal-titulo");
    const modalDescripcion = document.querySelector("#modal-descripcion");

    

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("ver-trabajo")) {
            const trabajo = e.target.closest(".trabajos-de-categoria");

            if (!trabajo) return;

            // Obtener la imagen principal
            const imagenSrc = trabajo.querySelector("img").src;
            const titulo = trabajo.querySelector(".nombre-trabajo").textContent;
            const descripcion = trabajo.querySelector(".descripcion-producto").textContent;

            imagenPrincipal.src = imagenSrc;
            modalTitulo.textContent = titulo;
            modalDescripcion.textContent = descripcion;


            miniaturas.forEach((miniatura, index) => {
              miniatura.src = imagenSrc.replace(".jpeg", `_${index + 1}.jpeg`);
          });

            modal.classList.add("mostrar");
        }
    });

    // Cambiar imagen principal al hacer clic en miniaturas
    miniaturas.forEach((miniatura) => {
      miniatura.addEventListener("click", (e) => {
          let imagenTemp = imagenPrincipal.src; // Guarda la imagen principal actual
          imagenPrincipal.src = e.target.src;  // Asigna la miniatura como imagen principal
          e.target.src = imagenTemp;  // La miniatura ahora muestra la imagen principal anterior
      });
  });

    // Cerrar modal
    botonCerrar.addEventListener("click", () => {
        modal.classList.remove("mostrar");
    });

    // Cerrar modal si se hace clic fuera del contenido
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("mostrar");
        }
    });
});