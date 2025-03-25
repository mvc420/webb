
document.addEventListener("DOMContentLoaded", () => {
    const carrito = [];
    const botonesCompra = document.querySelectorAll("#card button");
    const carritoIcono = document.querySelector("#carrito");

    botonesCompra.forEach((button, index) => {
        button.addEventListener("click", () => {
            const card = button.parentElement;
            const nombre = card.querySelector("h2").textContent;
            const precio = card.querySelector("#precio").textContent.replace("precio: ", "");
            const imagen = card.querySelector("img").src;

            const producto = { nombre, precio, imagen };
            carrito.push(producto);

            actualizarCarrito();
        });
    });

    function actualizarCarrito() {
        let resumen = "Carrito:\n";
        carrito.forEach((producto, index) => {
            resumen += `${index + 1}. ${producto.imagen}. ${producto.nombre} - ${producto.precio}\n`;
            /*llenarcarrito(producto.nombre, producto.precio, producto.imagen);*/
        });
        /*llenarcarrito(carrito.nombre, carrito.precio, carrito.imagen);*/
       alert(resumen );
    }

    carritoIcono.addEventListener("click", () => {
        actualizarCarrito();
    });
    
});
function llenarcarrito(nombre, precio, imagen) {
    console.log("el valor de los parametros resibidos es"+nombre, precio, imagen);
    var carro = document.getElementById("carro");
    

     if (carro.style.visibility == "hidden")
    {
        carro.style.visibility = "visible";
    }
     else carro.style.visibility
    {
        carro.style.visibility = "hidden";
    }
}

