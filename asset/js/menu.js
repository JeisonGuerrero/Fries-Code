// js/menu.js

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-productos");
  
    productos.forEach(prod => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("producto");
  
      tarjeta.innerHTML = `
        <img src="${prod.imagen}" alt="${prod.nombre}" width="70">
        <h4>${prod.nombre}</h4>
        <p>Precio: $${prod.precio}</p>
        <button class="btn-agregar">Añadir al carrito</button>
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
        alert(`${prod.nombre} añadido al carrito`);

        if (typeof window.mostrarCarrito === "function") {
            window.mostrarCarrito();
        }

      });
  
      contenedor.appendChild(tarjeta);
    });
  });
  