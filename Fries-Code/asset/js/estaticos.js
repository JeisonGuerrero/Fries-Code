document.addEventListener("DOMContentLoaded",() => {

    fetch("/Fries-Code/asset/paginas/Estaticos/footer.html").
        then(Response => Response.text()).
        then(data => {document.getElementById("template-footer").innerHTML = data;}).
        catch(Error => {console.error("Error al cargar página", Error);});

    fetch("/Fries-Code/asset/paginas/Estaticos/header.html").
        then(Response => Response.text()).
        then(data => {document.getElementById("template-header").innerHTML = data;}).
        catch(Error => {console.error("Error al cargar página", Error);});
})