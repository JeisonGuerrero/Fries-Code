document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-productos");

    if (!contenedor) {
        console.error("El contenedor de productos no se encontró.");
        return;
    }

    contenedor.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-detalle")) {
            const idProducto = e.target.getAttribute("data-id");
            console.log(`ID del producto seleccionado: ${idProducto}`);

            if (!idProducto) {
                console.error("El ID del producto no se encontró.");
                return;
            }

            localStorage.setItem("productoSeleccionado", idProducto);
            console.log("Redirigiendo a la página de detalles...");
            window.location.href = "/asset/paginas/detalle.html";
        }
    });
});