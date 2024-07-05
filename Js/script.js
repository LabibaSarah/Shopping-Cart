let cart = [];

function addToCart(productName, productPrice) {
    const item = cart.find(item => item.name === productName);
    if (!item) {
        cart.push({ name: productName, price: productPrice });
        renderCart();
    } else {
        alert('This product is already in the cart.');
    }
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    renderCart();
}

function renderCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';

    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartDiv.appendChild(itemDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderCart);
