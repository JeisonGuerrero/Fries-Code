// js/menu.js

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-productos");

  if (!contenedor) {
      console.error("El contenedor de productos no se encontró.");
      return;
  }

  productos.forEach(prod => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("producto");
    //   para ingresar por producto
      tarjeta.setAttribute("data-id", prod.id);
    //   para filtrar por categoria de productos
      tarjeta.setAttribute("data-category", prod.categoria);

      tarjeta.innerHTML = `
          <div class="card" data-category="${prod.categoria}">
             <img class="card-img-top" src="${prod.imagen}" alt="${prod.nombre}" height="150" >
              <div class="card-body">
                  <h5 class="card-title">${prod.nombre}</h5>
                  <p class="card-text">Precio: $${prod.precio}</p>
                  <div class="btn-container">
                    <button class="btn-agregar">Añadir</button>
                    <button class="btn-detalle" data-id="${prod.id}">Detalle</button>
                  </div>                 
              </div>
          </div>
      `;

      console.log(`Generando producto: ${prod.nombre}, Categoría: ${prod.categoria}`);

      const boton = tarjeta.querySelector(".btn-agregar");

      boton.addEventListener("click", () => {
          let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

          const index = carrito.findIndex(p => p.nombre === prod.nombre);

          if (index !== -1) {
              carrito[index].cantidad++;
          } else {
              carrito.push({ ...prod, cantidad: 1 });
          }

          localStorage.setItem("carrito", JSON.stringify(carrito));
          Swal.fire({
              title: `${prod.nombre}`,
              text: "Ha sido añadido al carrito",
              icon: "success"
          });

          if (typeof window.mostrarCarrito === "function") {
              window.mostrarCarrito();
          }
      });

      contenedor.appendChild(tarjeta);
  });

  // Llama a la función de inicialización del filtro después de generar las cartas
  if (typeof window.inicializarFiltro === "function") {
      console.log("Llamando a inicializarFiltro...");
      window.inicializarFiltro();
  }
});