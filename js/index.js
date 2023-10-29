//Carga dinámica de las cards.

let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })


const contenedorProductos = document.querySelector("#contenedorProductos");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <h2 class="producto-nombre">${producto.nombre}</h2>
            <p class="producto-descripcion">${producto.descripcion}</p>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="botonVerMas" id="verMas">Ver más</button>
        `;

        contenedorProductos.append(div);
    });
}



//Filtrado por categoría.

const botonesCategorias = document.querySelectorAll(".categoriaProducto");

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        if (e.currentTarget.id != "todos") {
            const productosBoton = productos.filter(producto => producto.categoria === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            cargarProductos(productos);
        }
    })
});




//Ir al detalle del producto.

let botonVerDetalle = document.querySelectorAll(".botonVerMas");










