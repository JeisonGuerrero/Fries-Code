document.addEventListener("DOMContentLoaded", () => {
    const detalleContenedor = document.getElementById("detalle-contenedor");

    if (!detalleContenedor) {
        console.error("El contenedor de detalle no se encontró.");
        return;
    }

    const idProducto = localStorage.getItem("productoSeleccionado");
    const producto = productos.find(prod => prod.id === parseInt(idProducto));

    if (!producto) {
        detalleContenedor.innerHTML = "<p>Producto no encontrado.</p>";
        return;
    }

    detalleContenedor.innerHTML = `
        <div class="container">
            <h1 class="title">${producto.nombre}</h2>
            <div class="container__detalle">
                <div class="container_img">
                    <img class="img__producto" src="${producto.imagen}" alt="${producto.nombre}">
                </div>
                <div class="container_info">
                    <h3 class="">Descripción</h3>
                    <p class="">${producto.descripcion || "Sin descripción disponible."}</p>
                    <h3 class="">Precio</h3>
                    <p class="">$${producto.precio}</p>
                    <button class="btn btn-primary" onclick="window.history.back()">Volver</button>
                </div>    
            </div>            
        </div>
    `;
});