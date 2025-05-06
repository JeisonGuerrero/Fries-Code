document.addEventListener("DOMContentLoaded", () => {
    const resumen = document.getElementById("resumen-container");
    const pedido = JSON.parse(localStorage.getItem("pedido")) || [];

    function renderizarResumen() {
        resumen.innerHTML = ""; // Limpiar el contenido actual

        let total = 0;

        if (pedido.length === 0) {
            resumen.innerHTML = "<p>No hay productos en el pedido.</p>";
        } else {
            pedido.forEach((producto, index) => {
                const subtotal = producto.precio * producto.cantidad;
                total += subtotal;

                const div = document.createElement("div");
                div.innerHTML = `
                    <div class="contenedor-pago">
                        <div class="producto">
                            <img src="${producto.imagen}" alt="producto">
                            <div class="info">
                                <h2>${producto.nombre}</h2>
                                <p>Precio: $${producto.precio}</p>
                                <p>Subtotal: $${subtotal}</p>
                                <div class="cantidad">
                                    <p>Cantidad:</p>
                                    <button onclick="cambiarCantidad(${index}, -1)">−</button>
                                    <span id="cantidad">${producto.cantidad}</span>
                                    <button onclick="cambiarCantidad(${index}, 1)">+</button>
                                </div>
                                <button class="btn-eliminar" onclick="eliminarProducto(${index})">❌ Eliminar</button>
                            </div>
                        </div>
                    </div>
                `;
                resumen.appendChild(div);
            });

            const totalElement = document.createElement("h2");
            totalElement.textContent = "Total a pagar: $" + total;
            resumen.appendChild(totalElement);
        }
    }

    function cambiarCantidad(index, cambio) {
        pedido[index].cantidad += cambio;

        if (pedido[index].cantidad <= 0) {
            eliminarProducto(index);
            return;
        }

        localStorage.setItem("pedido", JSON.stringify(pedido));
        renderizarResumen();
    }

    function eliminarProducto(index) {
        pedido.splice(index, 1);
        localStorage.setItem("pedido", JSON.stringify(pedido));
        renderizarResumen();
    }

    function vaciarCarrito() {
        pedido.length = 0;
        localStorage.removeItem("pedido");
        renderizarResumen();
    }

    function confirmarPago() {
        alert("🎉¡Gracias por su compra! 🛍️\n 🎉 Vuelva pronto 😊");
        localStorage.removeItem("carrito");
        localStorage.removeItem("pedido");
        window.location.href = "/asset/paginas/home.html";
    }

    renderizarResumen();

    // Exponer funciones globalmente para los botones
    window.cambiarCantidad = cambiarCantidad;
    window.eliminarProducto = eliminarProducto;
    window.vaciarCarrito = vaciarCarrito;
    window.confirmarPago = confirmarPago;
});