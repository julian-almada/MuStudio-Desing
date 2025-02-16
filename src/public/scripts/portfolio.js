document.addEventListener("DOMContentLoaded", () => {
  const contenedorTrabajos = document.querySelector("#contenedor-trabajos");
  const botonesVerMas = document.querySelectorAll(".ver-mas");

  let trabajos = [];

  // Cargar el JSON
  fetch("scripts/trabajos.json")
      .then(response => response.json())
      .then(data => {
          trabajos = data;
      })
      .catch(error => console.error("Error cargando JSON:", error));

  function cargarTrabajos(trabajosElegidos) {
      contenedorTrabajos.innerHTML = ""; // Limpiar contenedor antes de cargar nuevos trabajos

      trabajosElegidos.forEach(trabajo => {
          const div = document.createElement("div");
          div.classList.add("trabajos-de-categoria");
          div.innerHTML = `
              <div class="trabajo-imagen"><img src="${trabajo.imagen}" alt="${trabajo.titulo}"></div>
              <h2 class="nombre-trabajo">${trabajo.titulo}</h2>
              <p class="descripcion-producto">${trabajo.descripcion}</p>
              <button class="ver-trabajo">Ver Trabajo</button>
              <button class="boton-cerrar">X</button>
          `;

          contenedorTrabajos.appendChild(div);
      });
  }

  // Agregar evento a cada botón "Ver más"
  botonesVerMas.forEach(boton => {
      boton.addEventListener("click", (e) => {
          const tarjeta = e.target.closest(".tarjeta"); // Encuentra la tarjeta más cercana
          if (!tarjeta) return;

          const categoria = tarjeta.dataset.categoria; // Obtiene la categoría de la tarjeta
          console.log("Categoría seleccionada:", categoria); // Debug

          const trabajosFiltrados = trabajos.filter(trabajo => trabajo.categoria === categoria);
          console.log("Trabajos filtrados:", trabajosFiltrados); // Debug

          cargarTrabajos(trabajosFiltrados); // Muestra los trabajos de la categoría
      });
  });
});