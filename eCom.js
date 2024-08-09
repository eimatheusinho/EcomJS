let products = [
    {id: 1, name: 'Curso 1 ', price: 10.99, image: 'img/produto.png'},
    {id: 2, name: 'Curso 2 ', price: 20.99, image: 'img/produto.png'},
    {id: 3, name: 'Curso 3 ', price: 30.99, image: 'img/produto.png'},
    {id: 4, name: 'Curso 4 ', price: 40.99, image: 'img/produto.png'},
    {id: 5, name: 'Curso 5 ', price: 50.99, image: 'img/produto.png'},
    {id: 6, name: 'Curso 6 ', price: 60.99, image: 'img/produto.png'},
    {id: 7, name: 'Curso 7 ', price: 70.99, image: 'img/produto.png'},
    {id: 8, name: 'Curso 8 ', price: 80.99, image: 'img/produto.png'},
    {id: 9, name: 'Curso 9 ', price: 90.99, image: 'img/produto.png'},
    //se quiser mais produtos só adicionar
];

let cart = [];

function renderProducts() {
    let productGrid = document.querySelector('.product-grid');
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
    renderCart();
}

function renderCart() {
    let cartTable = document.querySelector('.cart table tbody');
    cartTable.innerHTML = '';
    cart.forEach((product) =>{
        let cartRow = document.createElement('tr');
        cartRow.innerHTML = `
        <td>${product.name}</td>
        <td>1</td>
        <td>$${product.price}</td>
        <td>$${product.price}</td>
        `;
        cartTable.appendChild(cartRow);
    });
    updatetotal();
}

function updatetotal() {
    let total = cart.reduce((acc, product) => acc + product.price, 0);
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

let currentProduct = 0;
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert('Pedido realizado com sucesso!');
        cart = [];
        renderCart();
    }
}); 

renderProducts();