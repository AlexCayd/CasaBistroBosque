// Cargar y guardar carrito
function loadCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Eliminar item con SweetAlert
function removeItem(index) {
  const cart = loadCart();
  const itemName = cart[index]?.name;

  Swal.fire({
    title: '¿Eliminar producto?',
    text: `¿Seguro que deseas eliminar "${itemName}" del carrito?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#183D2D',
    cancelButtonColor: '#FF6B00',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
    background: '#fefbf6',
    color: '#183D2D',
    customClass: {
      popup: 'swal-bosque'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      cart.splice(index, 1);
      saveCart(cart);
      renderCart();

      Swal.fire({
        title: 'Eliminado',
        text: `"${itemName}" fue eliminado del carrito.`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        background: '#fefbf6',
        color: '#183D2D',
        customClass: {
          popup: 'swal-bosque'
        }
      });
    }
  });
}

// Renderizar carrito en la tabla
function renderCart() {
  const tbody = document.querySelector('#cartTable tbody');
  tbody.innerHTML = '';
  const cart = loadCart();
  let total = 0;

  cart.forEach((item, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.name}</td>
      <td>$${item.price}</td>
      <td><button onclick="removeItem(${i})">Eliminar</button></td>
    `;
    tbody.appendChild(tr);
    total += item.price;
  });

  document.getElementById('total').textContent = '$' + total.toFixed(2);
}

// Enviar pedido a Google Sheets
function enviarPedido() {
  const cart = loadCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const productos = cart.map(item => item.name).join(", ");

  if (cart.length === 0) {
    Swal.fire({ title: "Carrito vacío", icon: "warning" });
    return;
  }

  Swal.fire({
    title: 'Completa tu pedido',
    html: `
      <input id="swal-nombre" class="swal2-input" placeholder="Nombre">
      <input id="swal-telefono" class="swal2-input" placeholder="Teléfono">
      <input id="swal-correo" class="swal2-input" placeholder="Correo electrónico">
    `,
    confirmButtonText: 'Enviar',
    preConfirm: () => {
      const nombre = document.getElementById('swal-nombre').value.trim();
      const telefono = document.getElementById('swal-telefono').value.trim();
      const correo = document.getElementById('swal-correo').value.trim();
      if (!nombre || !telefono || !correo) {
        Swal.showValidationMessage('Completa todos los campos');
        return false;
      }
      return { nombre, telefono, correo };
    }
  }).then((result) => {
    if (!result.isConfirmed) return;

    const { nombre, telefono, correo } = result.value;
    const params = new URLSearchParams({
      nombre,
      telefono,
      correo,
      total,
      productos
    });

    // CAMBIA ESTA URL POR LA NUEVA QUE TE PROPORCIONE GOOGLE
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxcJ0VbumSbW2kniFhb701uaqnmWPtfWFm0VkhmAW4NYTV56i1ot5k5IuJd9oh_sbLI/exec";
    
    fetch(SCRIPT_URL + "?" + params.toString(), {
      method: 'GET',
      mode: 'no-cors'
    })
      .then(() => {
        Swal.fire({
          title: "Pedido registrado",
          text: "Gracias. Nos pondremos en contacto.",
          icon: "success"
        });
        localStorage.removeItem('cart');
        updateCartCounter();
        renderCart();
      })
      .catch(err => {
        console.error("Error:", err);
        Swal.fire("Error", "No se pudo conectar con el servidor.", "error");
      });
  });
}


// Actualizar contador de carrito (si lo tienes en el header)
function updateCartCounter() {
  const count = loadCart().length;
  const el = document.getElementById('cartCounter');
  if (el) el.textContent = count;
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  renderCart();

  const pagarBtn = document.querySelector('.pay-btn');
  if (pagarBtn) {
    pagarBtn.addEventListener('click', (e) => {
      e.preventDefault();
      enviarPedido();
    });
  }
});
