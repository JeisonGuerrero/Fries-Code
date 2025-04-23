
document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("carrito-container");
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
    if (carrito.length === 0) {
      contenedor.innerHTML = "<p>Tu carrito está vacío 🛒</p>";
      return;
    }
  
    carrito.forEach((producto, index) => {
      const card = document.createElement("div");
      card.className = "producto-card";
      card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" />
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <p>Subtotal: $${producto.precio * producto.cantidad}</p>
        <button onclick="eliminarProducto(${index})">Eliminar</button>
        `;
      contenedor.appendChild(card);
    });
  });
  
  function eliminarProducto(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    location.reload();
  }
  
window.addEventListener("storage", () => {
    location.reload(); // recarga si se detecta cambio desde otra pestaña
});
