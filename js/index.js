
const productos = [
    {
        id: "galaxyZFold5",
        nombre: "Samsung Galaxy Z Fold5",
        descripcion: "Celular Samsung Galxy Z Fold 5, 512GB 50MP Icy blue.",
        precio: 100000,
        stock: 10,
        imagen: "multimedia/zfold5.webp",
        categoria: "Samsung",
        detalle: "Sobre este producto: Fotografía profesional al alcance de tu mano con el nuevo Samsung Galaxy Z Fold5; con cámara de 50+12+10 MP para explorar tu creatividad. Obtené los mejores resultados gracias a su procesador Octa-Core (3.36GHz,2.8GHz,2GHz), su memoria interna de 256 GB expandible a través de una . Disfrutá de jugar; ver series o trabajar en una pantalla de full vision de 7.6'.",
    },
    {
        id: "galaxyA54",
        nombre: "Samsung Galaxy A54 5g",
        descripcion: "Samsung Galaxy A54 5g 8+128gb Color Black.",
        precio: 100000,
        stock: 10,
        imagen: "multimedia/a54.jpg",
        categoria: "Samnsung",
        detalle: "Sobre este producto: Fotografía profesional al alcance de tu mano con el nuevo Samsung Galaxy A54 5G; con cámara de 50+12+5 MP para explorar tu creatividad. Obtené los mejores resultados gracias a su procesador Octa-Core (2.4GHz,2GHz), su memoria interna de 256 GB expandible a través de una MicroSD hasta 1TB. Disfrutá de jugar; ver series o trabajar en una pantalla de full vision de 6.4'.",
    },
    {
        id: "galaxyA24",
        nombre: "Samsung Galaxy A24 128 GB",
        descripcion: "Samsung Galaxy A24 128 GB negro 6 GB RAM.",
        precio: 100000,
        stock: 10,
        imagen: "multimedia/a24.webp",
        categoria: "Samsung",
        detalle: "Sobre este producto: No te pierdas de un solo momento con el nuevo Samsung Galaxy A24. Con su cámara de 50+5+2 MP; sacá fotos nítidas y claras tanto de día como de noche. El Samsung Galaxy A24 posee un procesador Octa-Core (2.2GHz,2GHz) para que disfrutes de todas tus aplicaciones sin inconvenientes. Memoria interna de 128 GB y expandible con una MicroSD hasta 1TB",
    },
    {
        id: "motorolaG13",
        nombre: "Motorola Moto G13",
        descripcion: "Moto G13 64 GB gris oxford 4 GB RAM.",
        precio: 100000,
        stock: 10,
        imagen: "multimedia/motorolag13.webp",
        categoria: "motorola",
        detalle: "Sobre este producto: Te presentamos el Motorola Moto G13 con un procesador Octa-Core 2 GHz para que estés al día con todas las aplicaciones y juegos de última generación. Descubrí todas las posibilidades para tus fotos, tanto de día como de noche, con la cámara de 50+2+2 Mp. Memoria interna de 128 GB y expandible con una RAM 4 GB",
    },
    {
        id: "motorolag32",
        nombre: "Motorola Moto G32",
        descripcion: "Motorola Moto G32 6GB RAM - Plata.",
        precio: 100000,
        stock: 10,
        imagen: "multimedia/motorolag32.webp",
        categoria: "motorola",
        detalle: "Sobre este producto: Te presentamos el Motorola Moto G32 con un procesador Octa-Core 2.4 GHz para que estés al día con todas las aplicaciones y juegos de última generación. Descubrí todas las posibilidades para tus fotos, tanto de día como de noche, con la cámara de 50+8+2 MP. Memoria interna de 128 GB y expandible con una MicroSd hasta 1TB",
    },
    {
        id: "motorolae22",
        nombre: "Motorola Moto E22",
        descripcion: "Motorola Moto E22 64 GB - Negro.",
        precio: 100000,
        stock: 10,
        imagen: "multimedia/motorolae22.webp",
        categoria: "motorola",
        detalle: "Sobre este producto: No te pierdas de un solo momento con el nuevo Motorola Moto E22. Con su cámara de 16+2 Mp; sacá fotos nítidas y claras tanto de día como de noche. El Motorola Moto E22 posee un procesador Octa-Core 2.3 GHz para que disfrutes de todas tus aplicaciones sin inconvenientes. Memoria interna de 32 GB y expandible con una MicroSD hasta 1TB.",
    },
    {
        id: "tcl408",
        nombre: "TCL 408",
        descripcion: "TCL 408 - Gravity Grey.",
        precio: 100000,
        stock: 10,
        imagen: "multimedia/tcl408.jpg",
        categoria: "tcl",
        detalle: "Sobre este producto: Te presentamos el TCL 408 con un procesador Octa-Core (2.0GHz,1.5GHz) para que estés al día con todas las aplicaciones y juegos de última generación. Descubrí todas las posibilidades para tus fotos, tanto de día como de noche, con la cámara de . Memoria interna de 64 GB y expandible con una MicroSD hasta 512 GB.",
    },
    {
        id: "tcl405",
        nombre: "TCL 405",
        descripcion: "TCL 405 - Gris orcuro.",
        precio:100000,
        stock: 10,
        imagen: "multimedia/tcl405.jpg",
        categoria: "tcl",
        detalle: "Sobre este producto: Te presentamos el TCL 405 con un procesador Octa-Core (2.0GHz,1.5GHz) para que estés al día con todas las aplicaciones y juegos de última generación. Descubrí todas las posibilidades para tus fotos, tanto de día como de noche, con la cámara de 13+2 MP. Memoria interna de 64 GB y expandible con una MicroSD hasta 512 GB.",
    },
    {
        id: "tcl40se",
        nombre: "TCL 40SE",
        descripcion: "TCL 40SE - Dark Gray.",
        precio: 100000,
        stock: 10,
        imagen: "multimedia/tcl40se.webp",
        categoria: "tcl",
        detalle: "Sobre este producto: Te presentamos el 40SE con un procesador Octa-Core (2.3GHz,1.8GHz) para que estés al día con todas las aplicaciones y juegos de última generación. Descubrí todas las posibilidades para tus fotos, tanto de día como de noche, con la cámara de 50+2+2 MP. Memoria interna de 128GB y expandible con una MicroSD hasta 1TB."
    },
    {
        id: "xiaomiNote11",
        nombre: "Xiaomi Redmi Note 11",
        descripcion: "Xiaomi Redmi Note 11 4gb Ram 128gb Rom Color Azul estelar.",
        precio: 100000,
        stock: 10,
        imagen: "multimedia/xiaomiNote11.jpg",
        categoria: "xiaomi",
        detalle: "Sobre este producto: Dispositivo liberado para que elijas la compañía telefónica que prefieras. Pantalla AMOLED de 6.43. Tiene 4 cámaras traseras de 50Mpx/8Mpx/2Mpx/2Mpx. Cámara delantera de 13Mpx. Procesador Snapdragon 680 Octa-Core de 2.4GHz con 4GB de RAM. Batería de 5000mAh. Memoria interna de 128GB. Con reconocimiento facial y sensor de huella dactilar. Resistente al polvo.",
    },
    {
        id: "xiaomi10c",
        nombre: "Xiaomi Redmi 10C",
        descripcion: "Xiaomi Redmi 10C - Gris grafito - 128 GB - 4 GB.",
        precio: 100000,
        stock: 10,
        imagen: "multimedia/xiaomi10c.webp",
        categoria: "xiaomi",
        detalle: "Sobre este producto: Pantalla HD+ Dot Drop de 6.71 para disfrutar contenidos con nitidez. Procesador Snapdragon 680 y 4 GB RAM para un rendimiento fluido. Cámara trasera dual 50 Mpx y frontal 5 Mpx para fotos y videos de calidad. Batería de 5000 mAh con carga rápida para uso prolongado. Lector de huella digital y reconocimiento facial para mayor seguridad. Conectividad 4G, WiFi, GPS y Bluetooth para estar siempre conectado."
    },
    {
        id: "xiaomi10a",
        nombre: "Xiaomi Redmi 10A",
        descripcion: "Xiaomi Redmi 10A Dual SIM 32 GB gris grafito 2 GB RAM.",
        precio: 100000,
        stock: 10,
        imagen: "multimedia/xiaomi10a.jpg",
        categoria: "xiaomi",
        detalle: "Sobre este producto: Dispositivo liberado para que elijas la compañía telefónica que prefieras. Pantalla IPS de 6.53. Cámara trasera de 13Mpx. Cámara delantera de 5Mpx. Procesador MediaTek MT6762G Helio G25 Octa-Core de 2GHz con 2GB de RAM. Batería de 5000mAh. Memoria interna de 32GB. Con reconocimiento facial y sensor de huella dactilar."
    },
    {
        id: "iPhone12",
        nombre: "Apple iPhone 12",
        descripcion: "Apple iPhone 12 (128 GB) - Negro -.",
        precio: 100000,
        stock:10,
        imagen: "multimedia/iphone12.jpg",
        categoria: "apple",
        detalle: "Sobre este producto: Pantalla Super Retina XDR de 6.1 pulgadas. Ceramic Shield, más resistente que cualquier vidrio de smartphone. Chip A14 Bionic, el más rápido en un smartphone. Sistema avanzado de dos cámaras de 12 MP (ultra gran angular y gran angular), modo Noche, Deep Fusion, HDR Inteligente 3 y grabación de video 4K HDR en Dolby Vision. Cámara frontal TrueDepth de 12 MP con modo Noche y grabación de video 4K HDR en Dolby Vision. Resistencia al agua IP68, la mejor de la industria. Compatibilidad con accesorios MagSafe, que se acoplan fácilmente a tu iPhone y permiten una carga inalámbrica más rápida. iOS 14 con widgets rediseñados en la pantalla de inicio, nueva Biblioteca de Apps, App Clips, y mucho más.",
    },
    {
        id: "iphone13",
        nombre: "Apple iPhone 13 Pro Max",
        descripcion: "Apple iPhone 13 Pro Max (512 GB) - Grafito.",
        precio: 100000,
        stock: 10,
        imagen: "multimedia/iphone13.jpg",
        categoria: "apple",
        detalle: "Sobre este producto: Pantalla Super Retina XDR de 6.7 pulgadas con ProMotion que brinda una respuesta más rápida y fluida. Modo Cine con baja profundidad de campo y cambios de enfoque automáticos en tus videos. Nuevo sistema de cámaras Pro de 12 MP (teleobjetivo, gran angular y ultra gran angular), escáner LiDAR, rango de zoom óptico de 6x, fotografía macro, Estilos Fotográficos, video ProRes3, HDR Inteligente 4, modo Noche, Apple ProRAW y grabación de video 4K HDR en Dolby Vision. Cámara frontal TrueDepth de 12 MP con modo Noche y grabación de video 4K HDR en Dolby Vision. Chip A15 Bionic para un rendimiento fuera de serie. Hasta 28 horas de reproducción de video, la mayor duración de batería jamás vista en un iPhone. Diseño resistente con Ceramic Shield. Resistencia al agua IP68, líder en la industria. iOS 15 con nuevas funcionalidades para aprovechar tu iPhone al máximo. Compatibilidad con accesorios MagSafe, que se acoplan fácilmente a tu iPhone y permiten unacarga inalámbrica más rápida."
    },
    {
        id: "iphone14",
        nombre: "Apple iPhone 14 Pro Max",
        descripcion: "Apple iPhone 14 Pro Max (128 GB) - Color plata.",
        precio: 100000,
        stock: 10,
        imagen: "multimedia/iphone14.jpg",
        categoria: "apple",
        detalle: "Sobre este producto: Pantalla Super Retina XDR de 6.7 pulgadas, siempre activa con tecnología ProMotion. Dynamic Island, una forma nueva y mágica de interactuar con tu iPhone. Cámara gran angular de 48MP para una resolución hasta 4 veces mayor. Modo Cine ahora en 4K Dolby Vision de hasta 30cps. Modo Acción para lograr videos estables, aún con cámara en mano. Detección de Choques, una funcionalidad de seguridad que pide ayuda cuando tú no puedes. Batería para todo el día y hasta 29 horas de reproducción de video. A16 Bionic, el chip de smartphone en su máxima expresión. Red 5G ultrarrápida. Ceramic Shield y resistencia al agua, características de durabilidad líderes en la industria. iOS 16 ofrece aún más opciones de personalización y más formas de comunicarse y compartir."
    },
]

const productosContainer = document.getElementById('contenedorProductos');

productos.forEach(producto => {
    const productoDiv = document.createElement('div');
    productoDiv.classList.add('producto');

    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    productoDiv.appendChild(imagen);

    const nombre = document.createElement('h2');
    nombre.textContent = producto.nombre;
    productoDiv.appendChild(nombre);

    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion;
    productoDiv.appendChild(descripcion);

    const precio = document.createElement('p');
    precio.textContent = `Precio:$${producto.precio}`;
    productoDiv.appendChild(precio);

    // Agregar el botón de compra
    const botonVerMas = document.createElement('button');
    botonVerMas.textContent = 'Ver más';
    botonVerMas.classList.add('botonVerMas');
    botonVerMas.addEventListener('click', () => {
        // Lógica para manejar la compra del producto
        // Puedes implementar aquí la funcionalidad de compra del producto
        console.log(`Producto ${producto.nombre} comprado`);
    });
    productoDiv.appendChild(botonVerMas);

    productosContainer.appendChild(productoDiv);
});








