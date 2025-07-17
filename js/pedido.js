
function loadCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
function removeItem(index){
  const cart = loadCart();
  cart.splice(index,1);
  saveCart(cart);
  renderCart();
}
function renderCart(){
  const tbody = document.querySelector('#cartTable tbody');
  tbody.innerHTML = '';
  const cart = loadCart();
  let total = 0;
  cart.forEach((item, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${item.name}</td><td>$${item.price}</td><td><button onclick="removeItem(${i})">Eliminar</button></td>`;
    tbody.appendChild(tr);
    total += item.price;
  });
  document.getElementById('total').textContent = '$' + total.toFixed(2);
}
document.addEventListener('DOMContentLoaded', renderCart);
