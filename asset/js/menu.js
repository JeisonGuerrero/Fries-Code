// js/menu.js

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-productos");
  
    productos.forEach(prod => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("producto");
  
      tarjeta.innerHTML = `
        <div class="card">
          <img class="card-img-top" src="${prod.imagen}" alt="${prod.nombre}" height="150">
          <div class="card-body">
            <h5 class="card-title">${prod.nombre}</h4>
            <p class="card-text">Precio: $${prod.precio}</p>
            <button class="btn-agregar">Añadir</button>
          </div>
        </div>
      `;
  
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
          text:  "Ha sido añadido al carrito",
          icon: "success"
        });

        if (typeof window.mostrarCarrito === "function") {
            window.mostrarCarrito();
        }

      });
  
      contenedor.appendChild(tarjeta);
    });
  });
  