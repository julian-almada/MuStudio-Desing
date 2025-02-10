const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const botonTodos = document.querySelector("#todos");
const titulo = document.querySelector('#titulo-principal');
let botonesAgregar = document.querySelectorAll('.boton-agregar');
const numerito = document.querySelector('#numerito');

let productos = [];

fetch("scripts/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })



function cargarProductos(productosElegidos) {

  contenedorProductos.innerHTML = "";

  productosElegidos.forEach(producto => {
    
    const div = document.createElement("div");
    div.classList.add("producto-producto");
    div.innerHTML = `
        
          <div class="producto-imagen"><img src="${producto.imagen}" alt="${producto.titulo}"></div>
          <h2 class="nombre-producto">${producto.titulo}</h2>
          <h3 class="precio-producto">$ ${producto.precio}</h3>
        <div class="botones">
        <button class="boton-ver" data-id="${producto.id}">Ver</button>
        

        `;

        const botonVer = div.querySelector(".boton-ver");
        botonVer.addEventListener("click", mostrarDetalleProducto);

    contenedorProductos.append(div);
  });

  actualizarBotonesAgregar();
}

function mostrarDetalleProducto(event) {
  const productoId = event.target.dataset.id;
  const producto = productos.find(p => p.id === productoId);

  if (producto) {
    const urlDetalleProducto = `detalle_producto?id=${productoId}`;
    window.location.href = urlDetalleProducto;
  } else {
    alert("El producto no pudo ser encontrado.");
  }
}


