

//nuevo

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsList = document.getElementById('cart-items');
const totalPriceElem = document.getElementById('total-price');
const whatsappButton = document.getElementById('whatsapp-button');
const clearCartButton = document.getElementById('clear-cart-button');

// Función para mostrar los productos en el carrito
function displayCart() {
    cartItemsList.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} ARS`;
        cartItemsList.appendChild(li);
        totalPrice += item.price;
    });
    totalPriceElem.textContent = `Total: $${totalPrice} ARS`;

    // Enlace para WhatsApp
    const message = encodeURIComponent(`¡Hola! Quiero comprar los siguientes productos:\n${cart.map(item => `${item.name} - $${item.price}`).join('\n')}\nTotal: $${totalPrice} ARS`);
    whatsappButton.onclick = () => {
        window.open(`https://wa.me/1234567890?text=${message}`);
    };
}

// Vaciar el carrito
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Mostrar carrito al cargar la página
document.addEventListener('DOMContentLoaded', displayCart);

// Evento para vaciar el carrito
clearCartButton.onclick = clearCart;
