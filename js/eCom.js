let products = [
    {id: 1, name: 'Curso 1', price: 10.99, image: 'img/cursos.png'},
    {id: 2, name: 'Curso 2', price: 20.99, image: 'img/cursos.png'},
    {id: 3, name: 'Curso 3', price: 30.99, image: 'img/cursos.png'},
    {id: 4, name: 'Curso 4', price: 40.99, image: 'img/cursos.png'},
    {id: 5, name: 'Curso 5', price: 50.99, image: 'img/cursos.png'},
    {id: 6, name: 'Curso 6', price: 60.99, image: 'img/cursos.png'},
    {id: 7, name: 'Curso 7', price: 70.99, image: 'img/cursos.png'},
    {id: 8, name: 'Curso 8', price: 80.99, image: 'img/cursos.png'},
    {id: 9, name: 'Curso 9', price: 90.99, image: 'img/cursos.png'}
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderProducts() {
    let productGrid = document.querySelector('#product-grid');
    if (!productGrid) return;
    productGrid.innerHTML = '';
    products.forEach((product) => {
        let productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button>Adicionar ao carrinho</button>
        `;
        productDiv.querySelector('button').addEventListener('click', () => addToCart(product.id));
        productGrid.appendChild(productDiv);
    });
}

function addToCart(productId) {
    let product = products.find((product) => product.id === productId);
    cart.push(product);
    saveCart();  // Salva o carrinho no localStorage
    alert(`${product.name} foi adicionado ao carrinho!`);
}

function renderCart() {
    let cartTable = document.querySelector('.cart table tbody');
    if (!cartTable) return;
    cartTable.innerHTML = '';
    cart.forEach((product) => {
        let cartRow = document.createElement('tr');
        cartRow.innerHTML = `
        <td>${product.name}</td>
        <td>1</td>
        <td>$${product.price}</td>
        <td>$${product.price}</td>
        `;
        cartTable.appendChild(cartRow);
    });
    updateTotal();
}

function updateTotal() {
    let total = cart.reduce((acc, product) => acc + product.price, 0);
    let totalElement = document.getElementById('total');
    if (totalElement) {
        totalElement.textContent = `$${total.toFixed(2)}`;
    }
}

document.getElementById('checkout')?.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert('Pedido realizado com sucesso!');
        cart = [];
        saveCart();  // Limpa o carrinho no localStorage após a compra
        renderCart();
    }
});

renderProducts();
renderCart();
