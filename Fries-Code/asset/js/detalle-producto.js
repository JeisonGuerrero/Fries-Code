document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-productos");

    if (!contenedor) {
        console.error("El contenedor de productos no se encontró.");
        return;
    }

    contenedor.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-detalle")) {
            const idProducto = e.target.getAttribute("data-id");
            localStorage.setItem("productoSeleccionado", idProducto);
            window.location.href = "/Fries-Code/asset/paginas/detalle.html";
        }
    });
});