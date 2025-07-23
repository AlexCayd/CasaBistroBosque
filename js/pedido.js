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
      <style>
        .swal2-input, .swal2-select {
          margin: 8px 0 4px 0;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 20px;
          width: 100%;
          box-sizing: border-box;
        }
        .swal2-input:disabled {
          background: #f8f9fa;
          color: #6c757d;
          cursor: not-allowed;
        }
        .swal2-label {
          display: block;
          margin-top: 16px;
          margin-bottom: 4px;
          font-size: 14px;
          color: #183D2D;
          font-weight: 600;
          text-align: left;
        }
        .form-group {
          margin-bottom: 8px;
        }
        #efectivo-detalle {
          margin-top: 8px;
        }
        #monto-grupo {
          display: none;
        }
      </style>

      <div class="form-group">
        <label class="swal2-label" for="swal-nombre">Nombre:</label>
        <input id="swal-nombre" class="swal2-input" placeholder="Nombre completo">
      </div>

      <div class="form-group">
        <label class="swal2-label" for="swal-telefono">Teléfono:</label>
        <input id="swal-telefono" class="swal2-input" placeholder="Número de contacto">
      </div>

      <div class="form-group">
        <label class="swal2-label" for="swal-departamento">Departamento:</label>
        <input id="swal-departamento" class="swal2-input" placeholder="Departamento">
      </div>

      <div class="form-group">
        <label class="swal2-label">Total a pagar:</label>
        <input class="swal2-input" value="$${total}" disabled>
      </div>

      <div class="form-group">
        <label class="swal2-label" for="pago-metodo">Método de pago:</label>
        <select id="pago-metodo" class="swal2-select">
          <option value="" selected disabled>Selecciona un método</option>
          <option value="efectivo">Efectivo</option>
          <option value="terminal">Terminal</option>
        </select>
      </div>

      <div id="efectivo-detalle" style="display:none;">
        <div class="form-group">
          <label class="swal2-label" for="cambio-exacto">¿Pagas con cambio exacto?</label>
          <select id="cambio-exacto" class="swal2-select">
            <option value="exacto">Sí, pago exacto</option>
            <option value="no-exacto">No, indicar con cuánto pago</option>
          </select>
        </div>

        <div id="monto-grupo" class="form-group">
          <label class="swal2-label" for="monto-pago">Monto con el que vas a pagar:</label>
          <input id="monto-pago" class="swal2-input" placeholder="Ej. 300" type="number" min="${total}">
        </div>
      </div>
    `,
    confirmButtonText: 'Enviar',
    background: '#fefbf6',
    color: '#183D2D',
    confirmButtonColor: '#FF6B00',
    didOpen: () => {
      const pagoMetodo = document.getElementById('pago-metodo');
      const efectivoDetalle = document.getElementById('efectivo-detalle');
      const cambioExacto = document.getElementById('cambio-exacto');
      const montoGrupo = document.getElementById('monto-grupo');

      pagoMetodo.addEventListener('change', function() {
        if (this.value === 'efectivo') {
          efectivoDetalle.style.display = 'block';
        } else {
          efectivoDetalle.style.display = 'none';
          cambioExacto.value = 'exacto';
          montoGrupo.style.display = 'none';
          document.getElementById('monto-pago').value = '';
        }
      });

      cambioExacto.addEventListener('change', function() {
        if (this.value === 'no-exacto') {
          montoGrupo.style.display = 'block';
        } else {
          montoGrupo.style.display = 'none';
          document.getElementById('monto-pago').value = '';
        }
      });
    },
    preConfirm: () => {
      const nombre = document.getElementById('swal-nombre').value.trim();
      const telefono = document.getElementById('swal-telefono').value.trim();
      const departamento = document.getElementById('swal-departamento').value.trim();
      const metodoPago = document.getElementById('pago-metodo')?.value;
      const tipoCambio = document.getElementById('cambio-exacto')?.value;
      const montoPago = document.getElementById('monto-pago')?.value.trim();

      if (!nombre || !telefono || !departamento) {
        Swal.showValidationMessage('Completa todos los campos de contacto');
        return false;
      }

      if (!metodoPago) {
        Swal.showValidationMessage('Selecciona un método de pago');
        return false;
      }

      let cambio = "N/A";

      if (metodoPago === "efectivo") {
        if (!tipoCambio) {
          Swal.showValidationMessage('Selecciona si pagas exacto');
          return false;
        }

        if (tipoCambio === "no-exacto") {
          if (!montoPago || isNaN(montoPago)) {
            Swal.showValidationMessage('Ingresa un monto válido');
            return false;
          }
          if (Number(montoPago) < total) {
            Swal.showValidationMessage(`El monto no puede ser menor a $${total}`);
            return false;
          }
          cambio = `Paga con $${montoPago}`;
        } else {
          cambio = "Paga exacto";
        }
      }

      return { nombre, telefono, departamento, metodoPago, cambio };
    }
  }).then((result) => {
    if (!result.isConfirmed) return;

    const { nombre, telefono, departamento, metodoPago, cambio } = result.value;

    const params = new URLSearchParams({
      nombre,
      telefono,
      departamento,
      total: `${total}`,
      productos,
      pago: metodoPago,
      cambio
    });

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz1yKJ134enroCT9U3czU2Bg35URzNSBatZ96684ebXOooM6WNdPRQhl0EeQ13H0P1H/exec";

    fetch(SCRIPT_URL + "?" + params.toString(), {
      method: 'GET'
    })
      .then(() => {
        Swal.fire({
          title: "Pedido registrado",
          text: "Gracias. Nos pondremos en contacto.",
          icon: "success",
          background: '#fefbf6',
          color: '#183D2D',
          confirmButtonColor: '#FF6B00'
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
