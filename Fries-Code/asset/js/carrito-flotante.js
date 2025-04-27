document.addEventListener("DOMContentLoaded", () => {
  const carritoBox = document.getElementById("carrito-flotante");
  const lista = document.getElementById("lista-carrito");
  const totalSpan = document.getElementById("total-carrito");

  // Esta función se define aquí para que pueda ser llamada globalmente
  window.mostrarCarrito = function () {
      carritoBox.classList.toggle("oculto");
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      lista.innerHTML = "";
      let total = 0;

      carrito.forEach((prod, index) => {
          const item = document.createElement("li");
          const subtotal = prod.precio * prod.cantidad;
          total += subtotal;

          item.innerHTML = `
              ${prod.nombre} x${prod.cantidad} - $${subtotal}
              <button onclick="restarProducto(${index})">-</button>
              <button onclick="eliminarProducto(${index})">🗑️</button>
          `;
          lista.appendChild(item);
      });

      totalSpan.textContent = total;
  };

  window.restarProducto = function (index) {
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito[index].cantidad--;

      if (carrito[index].cantidad <= 0) {
          carrito.splice(index, 1);
      }

      localStorage.setItem("carrito", JSON.stringify(carrito));
      mostrarCarrito();
  };

  window.eliminarProducto = function (index) {
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.splice(index, 1);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      mostrarCarrito();
  };

  window.cerrarCarrito = function () {
      carritoBox.classList.add("oculto");
  };

  window.realizarPago = function () {
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

      if (carrito.length === 0) {
          alert("Tu carrito está vacío 😕");
          return;
      }

      localStorage.setItem("pedido", JSON.stringify(carrito));
      window.location.href = "/Fries-Code/asset/paginas/pago.html";
  };

  // Ahora sí activamos el evento al cargar todo
  document.addEventListener("click", (e) => {
      if (e.target.closest("#icono-carrito")) {
          mostrarCarrito();
      }
  });
});
