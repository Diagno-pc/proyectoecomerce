const products = [
          { id:1, name: "CAMARA DE VIGILANCIA", description: "CAMARA DE VIGILANCIA DOMO IP", price: 50000, image: "../imagenes/CAM1.jpg", details: "Características Principales Imágenes de Alta Definición: Equipado con un sensor de 1080p, esta cámara proporciona videos nítidos y claros, permitiendo ver cada detalle con claridad. Visión Nocturna: Gracias a sus luces infrarrojas y su sistema de conmutación automática, la cámara puede ver hasta 30 metros en total oscuridad, asegurando vigilancia las 24 horas. Audio Bidireccional: Comuníquese directamente con quien esté en el área vigilada a través del micrófono incorporado y el altavoz de alta calidad. Amplio Campo de Visión: Con una capacidad de rotación de 350° y una inclinación de 90°, cubre una amplia área, minimizando los puntos ciegos. Conectividad WiFi: Conéctese fácilmente a su red WiFi doméstica sin necesidad de cables adicionales. Compatible con los estándares WiFi más comunes. Acceso Remoto: Visualice en tiempo real lo que sucede desde su teléfono móvil, tablet o computadora. La cámara soporta hasta 4 usuarios conectados simultáneamente." },
          { id:2, name: "EFECTO 5 EN 1", description: "EFECTO 5 EN 1", price: 322000, image: "../imagenes/LUCES1.jpg", details: "Efecto de luz de alto brillo: la bola mágica con LED 4 en 1 rgbw de 12 W, mientras que la luz roja y verde es de 120 mw y 30 mW, la luz par LED tiene 4 luces LED 4 en 1 de 6 W. No importa qué tipo de efecto utilices, los efectos de iluminación son brillantes y de amplia cobertura. Estroboscópico especial y efecto UV: la luz estroboscópica especial y el efecto UV se componen de 4 luces LED UV blanco 2 en 1, la luz parpadeante y el efecto especial de luz púrpura hacen que tu escenario o fiestas sean más divertidas e inesperadas, especialmente adecuadas para las luces de fiesta de Halloween. Control remoto y DMX: este modo de funcionamiento del accesorio de iluminación: Auto, DMX512, activado por sonido, maestro/esclavo y control remoto. Con el control remoto, puedes controlar libremente los efectos de iluminación como quieras. Además, puedes utilizar el control dmx para disfrutar de efectos" },
          { id:3, name: "Producto 3", description: "Descripción del producto 3", price: 1500, image: "../imagenes/MICRO.jpg", details: "Detalles del Producto 3" },
          { id:4, name: "Producto 1", description: "Descripción del producto 1", price: 1000, image: "../imagenes/CAM1.jpg", details: "Detalles del Producto 4" },
          { id:5, name: "Producto 2", description: "Descripción del producto 2", price: 2000, image: "../imagenes/LUCES1.jpg", details: "Detalles del Producto 5" },
          { id:6, name: "Producto 3", description: "Descripción del producto 3", price: 1500, image: "../imagenes/MICRO.jpg", details: "Detalles del Producto 6" },
          { id:7, name: "Producto 1", description: "Descripción del producto 1", price: 1000, image: "../imagenes/CAM1.jpg", details: "Detalles del Producto 7" },
          { id:8, name: "Producto 2", description: "Descripción del producto 2", price: 2000, image: "../imagenes/LUCES1.jpg", details: "Detalles del Producto 8" },
          { id:9, name: "Producto 3", description: "Descripción del producto 3", price: 1500, image: "../imagenes/MICRO.jpg", details: "Detalles del Producto 9" },
          { id:10, name: "Producto 1", description: "Descripción del producto 1", price: 1000, image: "../imagenes/CAM1.jpg", details: "Detalles del Producto 10" },
          { id:11, name: "Producto 2", description: "Descripción del producto 2", price: 2000, image: "../imagenes/LUCES1.jpg", details: "Detalles del Producto 11" },
          { id:12, name: "Producto 3", description: "Descripción del producto 3", price: 1500, image: "../imagenes/MICRO.jpg", details: "Detalles del Producto 12" },
          // ... Puedes agregar más productos hasta llegar a 40 productos
      ];



const productId = new URLSearchParams(window.location.search).get('id');
const product = products.find(p => p.id == productId);
const productInfoDiv = document.getElementById('product-info');

productInfoDiv.innerHTML = `
     <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p>Precio: $${product.price}</p>
    <p>${product.details}</p>
`;

document.getElementById('add-to-cart-button').onclick = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
};
