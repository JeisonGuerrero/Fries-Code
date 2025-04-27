document.addEventListener("DOMContentLoaded", () => {
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
            // Solo cuando el header ya est\u00e9 cargado, ejecutamos esto:
            cargarEventosHeader();
        })
        .catch(error => {
            console.error("Error al cargar header", error);
        });
});

function cargarEventosHeader() {
    const iconoCarrito = document.getElementById("icono-carrito");
    if (iconoCarrito) {
        iconoCarrito.addEventListener("click", () => window.mostrarCarrito());
    }
}
