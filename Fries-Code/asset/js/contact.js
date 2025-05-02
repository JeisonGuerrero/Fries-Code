Document.addEventListener("DOMContentLoaded", function () {
    Document.getElementById("contact - form").addEventListener("submit", function (event) {
        Event.preventDefault(); // Evita la recarga de la página

      // Captura los valores del formulario
      let nombre = document.querySelector('input[name ="nombre"]').value;
      let email = document.querySelector('input[name ="email"]').value;
      let mensaje = document.querySelector('textarea[name ="mensaje"]').value;

        // Verifica que no estén vacíos
        if(nombre && email && mensaje) {
        // Valida la estructura del correo electrónico
         let emailRegex = /˄[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if(emailRegex.test(email)) {
                // Modifica el mensaje flotante con los datos del usuario
                Document.getElementById("usuario - nombre").textContent = nombre;
                Document.getElementById("usuario - correo").textContent = email;
                // Muestra el mensaje flotante
                let toast = document.getElementById("mensaje - flotante");
                toast.textContent="¡Datos guardados con exito!";
                toast.style.display = "block";
                toast.style.opacity = "1";
                // Oculta el mensaje después de 3 segundos
                setTimeout(function () {
                    toast.style.opacity = "0";
                    setTimeout(() => toast.style.display = "none", 500);
                }, 3000);
                //Limpia el formulario
                document.getElementById("contact - form").reset();
            } else {
                Alert("Por favor, ingresa un correo electrónico válido.");
            }
        }else{
            Alert("Por favor, completa todos los campos antes de enviar.");
        }
    });
});
