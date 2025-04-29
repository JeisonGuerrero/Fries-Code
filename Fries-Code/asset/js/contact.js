document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita la recarga de la página

        // Captura los valores del formulario
        let nombre = document.querySelector('input[name="nombre"]').value;
        let email = document.querySelector('input[name="email"]').value;
        let mensaje = document.querySelector('textarea[name="mensaje"]').value;

        // Verifica que no estén vacíos
        if (nombre && email && mensaje) {
            // Modifica el mensaje flotante con los datos del usuario
            document.getElementById("usuario-nombre").textContent = nombre;
            document.getElementById("usuario-correo").textContent = email;

            // Muestra el mensaje flotante
            let toast = document.getElementById("mensaje-flotante");
            toast.style.display = "block";
            toast.style.opacity = "1";

            // Oculta el mensaje después de 3 segundos
            setTimeout(function() {
                toast.style.opacity = "0";
                setTimeout(() => toast.style.display = "none", 500);
            }, 3000);
        } else {
            alert("Por favor, completa todos los campos antes de enviar.");
        }
    });
});
