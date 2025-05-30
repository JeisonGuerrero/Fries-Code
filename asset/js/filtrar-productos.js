document.addEventListener("DOMContentLoaded", () => {
    window.inicializarFiltro = function () {
        console.log("Inicializando filtro...");

        // Selecciona todos los enlaces de las categorías
        const categoryLinks = document.querySelectorAll(".dropdown-item");
        console.log(`Enlaces de categorías encontrados: ${categoryLinks.length}`);

        // Selecciona el contenedor de los productos
        const productContainer = document.getElementById("contenedor-productos");

        if (!productContainer) {
            console.error("El contenedor de productos no se encontró.");
            return;
        }

        // Agrega un evento de clic a cada enlace de categoría
        categoryLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                console.log(`Evento de clic en categoría: ${link.getAttribute("category")}`);
                const category = link.getAttribute("category");

                // Filtra los productos
                const products = productContainer.querySelectorAll(".producto");
                console.log(`Productos encontrados: ${products.length}`);

                products.forEach(product => {
                    const productCategory = product.getAttribute("data-category");
                    console.log(`Producto: ${productCategory}`);

                    // Muestra u oculta el producto según la categoría seleccionada
                    if (category === "all" || productCategory === category) {
                        product.style.display = "block";
                    } else {
                        product.style.display = "none";
                    }
                });
            });
        });
    };

    // Llama a la función de inicialización
    window.inicializarFiltro();
});