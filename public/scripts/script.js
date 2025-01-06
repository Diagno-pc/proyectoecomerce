/*const products = [
          { id: 1, name: "Producto 1", description: "Descripción del producto 1", price: 500, image: "../imagenes/CAM1.jpg" },
          { id: 2, name: "Producto 2", description: "Descripción del producto 2", price: 700, image: "../imagenes/LUCES2.jpg" },
          { id: 3, name: "Producto 3", description: "Descripción del producto 3", price: 600, image: "product3.jpg" },
          { id: 1, name: "Producto 1", description: "Descripción del producto 1", price: 500, image: "../imagenes/CAM1.jpg" },
          { id: 2, name: "Producto 2", description: "Descripción del producto 2", price: 700, image: "../imagenes/LUCES2.jpg" },
          { id: 3, name: "Producto 3", description: "Descripción del producto 3", price: 600, image: "product3.jpg" },
          { id: 1, name: "Producto 1", description: "Descripción del producto 1", price: 500, image: "../imagenes/CAM1.jpg" },
          { id: 2, name: "Producto 2", description: "Descripción del producto 2", price: 700, image: "../imagenes/LUCES2.jpg" },
          { id: 3, name: "Producto 3", description: "Descripción del producto 3", price: 600, image: "product3.jpg" },
          { id: 1, name: "Producto 1", description: "Descripción del producto 1", price: 500, image: "../imagenes/CAM1.jpg" },
          { id: 2, name: "Producto 2", description: "Descripción del producto 2", price: 700, image: "../imagenes/LUCES2.jpg" },
          { id: 3, name: "Producto 3", description: "Descripción del producto 3", price: 600, image: "product3.jpg" },
          // ... agregar 40 productos en total
      ];
      
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      
      const productList = document.getElementById('product-list');
      
      // Mostrar productos en la página
      function displayProducts() {
          products.forEach(product => {
              const productDiv = document.createElement('div');
              productDiv.classList.add('product');
              productDiv.innerHTML = `
                  <img src="${product.image}" alt="${product.name}">
                  <h2>${product.name}</h2>
                  <p>${product.description}</p>
                  <p>Precio: $${product.price} MXN</p>
                  <button onclick="addToCart(${product.id})">Añadir al carrito</button>
              `;
              productList.appendChild(productDiv);
          });
      }
      
      // Añadir producto al carrito
      function addToCart(productId) {
          const product = products.find(p => p.id === productId);
          cart.push(product);
          localStorage.setItem('cart', JSON.stringify(cart));
      }
      
      // Cargar productos cuando la página se cargue
      document.addEventListener('DOMContentLoaded', displayProducts);*/


      //aca pagina nueva

      const products = [
          { id:1, name: "CAMARA DE VIGILANCIA", description: "CAMARA DE VIGILANCIA DOMO IP", price: 50000, image: "public/imagenes/CAM1.jpg", details: "camara de vigilancia" },
          { id:2, name: "EFECTO 5 EN 1", description: "EFECTO 5 EN 1", price: 322000, image: "public/imagenes/LUCES1.jpg", details: "Detalles del Producto 2" },
          { id:3, name: "Producto 3", description: "Descripción del producto 3", price: 1500, image: "public/imagenes/MICRO.jpg", details: "Detalles del Producto 3" },
          { id:4, name: "Producto 1", description: "Descripción del producto 1", price: 1000, image: "public/imagenes/CAM1.jpg", details: "Detalles del Producto 4" },
          { id:5, name: "Producto 2", description: "Descripción del producto 2", price: 2000, image: "public/imagenes/LUCES1.jpg", details: "Detalles del Producto 5" },
          { id:6, name: "Producto 3", description: "Descripción del producto 3", price: 1500, image: "public/imagenes/MICRO.jpg", details: "Detalles del Producto 6" },
          { id:7, name: "Producto 1", description: "Descripción del producto 1", price: 1000, image: "public/imagenes/CAM1.jpg", details: "Detalles del Producto 7" },
          { id:8, name: "Producto 2", description: "Descripción del producto 2", price: 2000, image: "public/imagenes/LUCES1.jpg", details: "Detalles del Producto 8" },
          { id:9, name: "Producto 3", description: "Descripción del producto 3", price: 1500, image: "public/imagenes/MICRO.jpg", details: "Detalles del Producto 9" },
          { id:10, name: "Producto 1", description: "Descripción del producto 1", price: 1000, image: "public/imagenes/CAM1.jpg", details: "Detalles del Producto 10" },
          { id:11, name: "Producto 2", description: "Descripción del producto 2", price: 2000, image: "public/imagenes/LUCES1.jpg", details: "Detalles del Producto 11" },
          { id:12, name: "Producto 3", description: "Descripción del producto 3", price: 1500, image: "public/imagenes/MICRO.jpg", details: "Detalles del Producto 12" },
          // ... Puedes agregar más productos hasta llegar a 40 productos
      ];
      
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      
      // Función para mostrar los productos
      function displayProducts() {
          const productList = document.getElementById('product-list');
          products.forEach(product => {
              const productDiv = document.createElement('div');
              productDiv.classList.add('product');
              productDiv.innerHTML = `
                  <img src="${product.image}" alt="${product.name}">
                  <h2>${product.name}</h2>
                  <p>${product.description}</p>
                  <p>Precio: $${product.price} ARS</p>
                  <a href="public/view/product.html?id=${product.id}">Descripcion</a>
                  <button onclick="addToCart(${product.id})">Añadir al carrito</button>
              `;
              productList.appendChild(productDiv);
          });
      }
      
      // Función para agregar al carrito
      function addToCart(productId) {
          const product = products.find(p => p.id === productId);
          cart.push(product);
          localStorage.setItem('cart', JSON.stringify(cart));
      }
      
      // Cargar los productos al cargar la página
      document.addEventListener('DOMContentLoaded', displayProducts);
      
      