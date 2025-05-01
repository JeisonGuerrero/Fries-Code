document.addEventListener("DOMContentLoaded", () => {
    // Cargar el footer y el header
    fetch("/Fries-Code/asset/paginas/Estaticos/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("template-footer").innerHTML = data;
        })
        .catch(error => {
            console.error("Error al cargar footer", error);
        });

        fetch("/Fries-Code/asset/paginas/Estaticos/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("template-header").innerHTML = data;
    
            // Ahora que el header está cargado, cargamos los eventos
            cargarEventosHeader();
    
            // Llama a inicializarFiltro después de cargar el header
            if (typeof window.inicializarFiltro === "function") {
                console.log("Llamando a inicializarFiltro después de cargar el header...");
                window.inicializarFiltro();
            }
        })
        .catch(error => {
            console.error("Error al cargar header", error);
        });
});
// !No cambiar esto¡
// Funciones para el carrito
function mostrarCarrito() {
    const carritoBox = document.getElementById("carrito-flotante");
    const lista = document.getElementById("lista-carrito");
    const totalSpan = document.getElementById("total-carrito");

    carritoBox.classList.toggle("oculto");
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    lista.innerHTML = "";
    let total = 0;

    if (carrito.length === 0) {
        const vacio = document.createElement("li");
        vacio.textContent = "Tu carrito está vacío 🛒";
        lista.appendChild(vacio);
    } else {
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
    }

    totalSpan.textContent = total;
}

function restarProducto(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito[index].cantidad--;

    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

function eliminarProducto(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

function cerrarCarrito() {
    const carritoBox = document.getElementById("carrito-flotante");
    carritoBox.classList.add("oculto");
}

function realizarPago() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
        alert("Tu carrito está vacío 😕");
        return;
    }

    localStorage.setItem("pedido", JSON.stringify(carrito));
    window.location.href = "/Fries-Code/asset/paginas/pago.html";
}

function cargarEventosHeader() {
    const iconoCarrito = document.getElementById("icono-carrito");
    if (iconoCarrito) {
        iconoCarrito.addEventListener("click", () => {
            mostrarCarrito();
        });
    }
}
