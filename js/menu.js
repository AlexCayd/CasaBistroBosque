// HEADER
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===================== MENÚ =====================
const menuData = {
  "desayunos": [
    ["Hot cakes", "Esponjosos, servidos con miel de maple y fruta fresca de temporada", 145, "hot-cakes"],
    ["Huevos rancheros", "Dos huevos estrellados sobre tortilla con salsa ranchera casera y frijoles", 160, "huevos-rancheros"],
    ["Huevos al gusto", "Estrellados, revueltos o tibios, con guarnición a elegir", 160, "huevos-al-gusto"],
    ["Molletes 3 quesos", "Pan dorado con gouda, suizo y parmesano, gratinados al horno", 150, "molletes-3-quesos"],
    ["Chilaquiles", "Totopos bañados en salsa verde o roja, estilo casero", 160, "chilaquiles-real"],
    ["Toast de salmón", "Pan de masa madre con salmón ahumado, crema y hojas verdes", 220, "toast-salmon"],
    ["Toast de aguacate", "Rebanada de masa madre con aguacate fresco y topping del día", 180, "toast-de-aguacate"],
    ["Queso panela asado", "Queso dorado a la plancha con nopal y salsa de la casa", 140, "queso-panela-asado"],
    ["Matcha Bowl", "Tazón energizante con matcha, frutos rojos, granola y semillas", 165, "matcha-bowl"],
    ["Waffle", "Crujiente por fuera, suave por dentro, con fruta de temporada", 145, "waffles"],
    ["Orden de frutos rojos", "Mix de frutos rojos frescos servido en tazón, ligero y refrescante", 100, "orden-frutos-rojos"],
    ["Fruta con yogurt", "Fruta fresca de temporada con yogurt cremoso y granola crujiente", 100, "fruta-con-yogurt"],
    ["Pan de masa madre con mermelada", "Rebanada de masa madre tostada con mermelada casera", 30, "pan-masa-madre-mermelada"]
  ],

  "sandwiches": [
    ["Koki", "Gouda, tocino, jamón de pavo, huevo frito y aioli en pan artesanal", 200, "koki-sandwich"],
    ["BCS", "Pollo en salsa buffalo con pepinillos y aderezo de queso azul", 180, "sandwich-bcs"],
    ["Veggie", "Queso de cabra, tomate deshidratado y vegetales en pan crujiente", 180, "sandwich-veggie"],
    ["Cuernito", "Croissant relleno de jamón ahumado, queso gouda y ensalada fresca", 145, "cuerito"],
    ["Árabe", "Pan pita con queso gouda fundido y ensalada fresca de la casa", 140, "sandwich-arabe"],
    ["Arma tu sandwich", "Elige 2 proteínas y 1 topping para personalizar tu sándwich", 180, "arma-tu-sandwich"]
  ],

  "principales": [
    ["Milanesa de pollo o res", "Crujiente milanesa con papas fritas o ensalada a elección", 220, "milanesa-de-pollo-o-res"],
    ["Hamburguesa Olivia", "Carne jugosa con gouda, lechuga, jitomate y papas fritas", 240, "hamburguesa-olivia"],
    ["Pita de Arrachera", "Pan pita con arrachera, cebolla caramelizada y queso gouda fundido", 230, "pita-de-arrachera"],
    ["Alitas con salsa buffalo", "Alitas crujientes bañadas en salsa buffalo con papas a un lado", 230, "alitas-con-salsa-buffalo"],
    ["Salmon Taki", "Salmón en salsa oriental, con guarnición de arroz o verduras", 260, "salmon-taki"],
    ["Pasta Alfredo", "Pasta cremosa con salsa Alfredo y toque de parmesano", 165, "pasta-alfredo"],
    ["Pasta Arrabiata", "Pasta con salsa roja ligeramente picante y especias italianas", 165, "pasta-arrabiata"],
    ["Arrachera", "Corte suave y jugoso a la plancha con guarnición a elegir", 280, "arrachera"],
    ["Orden de verduras al vapor", "Verduras frescas al vapor, ligeramente sazonadas, opción ligera y casera", 50, "orden-verduras-al-vapor"],
    ["Pasta a la boloñesa", "Pasta con salsa boloñesa casera de jitomate y carne, estilo clásico", 220, "pasta-bolonesa"]
  ],

  "infantil": [
    ["Nuggets de pollo", "Nuggets dorados y crujientes con papas a elegir", 120, "nuggets-pollo"],
    ["Spaghetti al burro", "Pasta suave con mantequilla y queso rallado, ideal para niños", 120, "spaghetti-burro"],
    ["Hot dog con papas", "Clásico hot dog en pan suave con papas fritas doradas", 120, "hot-dog-con-papas"]
  ],

  "sopas": [
    ["Sopa de verduras", "Caldo ligero con vegetales frescos y sabor casero", 80, "sopa-de-verduras"],
    ["Sopa de fideos", "Fideos suaves en caldo de jitomate con toque tradicional", 80, "sopa-fideos"],
    ["Crema del día", "Preparada con verduras frescas y base cremosa del chef", 100, "crema-dia"],
    ["Caldo de pollo", "Caldo reconfortante con pollo, verduras y arroz, sazón hogareño", 120, "caldo-de-pollo"]
  ],

  "especiales": [
    ["Taco de chicharron prensado", "Chicharrón prensado dorado con sabor intenso en tortilla calientita", 60, "taco-de-chicharron-prensado"],
    ["Taco de guisado", "Taco relleno con el guiso casero del día, sazón tradicional", 60, "taco-de-guisado"],
    ["Taco de campechano", "Deliciosa mezcla de carne y chorizo en tortilla recién hecha", 60, "taco-de-campechano"],
    ["Taco de arrachera", "Arrachera jugosa a la plancha con cebolla en tortilla suave", 80, "taco-de-arrachera"],
    ["Tacos dorados de pollo", "Crujientes tacos dorados rellenos de pollo, con lechuga, crema y salsa de la casa", 180, "tacos-dorados-pollo"]
  ],

  "snacks": [
    ["Papas a la francesa", "Papas doradas y crujientes con sal de la casa", 65, "papas-a-la-francesa"],
    ["Fruta preparada", "Fruta fresca con limón, sal y chile en polvo", 65, "fruta-preparada"],
    ["Pepino o jícama preparada", "Bastones frescos con limón y chile, opción ligera y refrescante", 65, "pepino-o-j-cama-preparada"],
    ["Chips preparadas", "Papas estilo sabritas con salsas, queso y toppings", 65, "chips-preparadas"],
    ["Paleta helada", "Paleta congelada hecha con fruta natural, sin conservadores", 65, "paleta-helada"],
    ["Guacamole con totopos", "Guacamole fresco con totopos de maíz crujientes para compartir", 100, "guacamole-con-totopos"]
  ],

  "pan": [
    ["Croissant", "Hojaldre clásico francés, mantequilloso y ligeramente tostado", 50, "croissant"],
    ["Croissant con almendra", "Croissant relleno con crema de almendra y topping crujiente", 60, "croissant-con-almendra"],
    ["Pain au chocolat", "Hojaldre relleno de chocolate semiamargo estilo francés", 50, "pain-au-chocolat"],
    ["Pain au chocolat con almendra", "Doble relleno de chocolate y almendra tostada", 60, "pain-au-chocolat-con-almendra"],
    ["Croissant con nutella", "Croissant dorado con generoso relleno de Nutella cremosa", 60, "croissant-con-nutella"],
    ["Rol de canela", "Suave, especiado y glaseado con azúcar y mantequilla", 55, "rol-de-canela"],
    ["Rol de nutella", "Rol esponjoso con relleno cálido de Nutella fundida", 55, "rol-de-nutella"],
    ["Panqué", "Pan suave de vainilla hecho en casa, estilo tradicional", 55, "panque"],
    ["Brownie", "Brownie denso y húmedo de chocolate oscuro, casero", 60, "brownie"],
    ["Galleta", "Grande, suave y horneada con trozos dulces", 35, "galleta"],
    ["Mini concha", "Versión mini del clásico pan dulce mexicano", 35, "mini-conchas"]
  ],

  "bebidas": [
    ["Espresso", "Café concentrado, intenso y aromático, extraído al momento", 50, "espresso"],
    ["Americano", "Café negro suave con cuerpo ligero y aroma profundo", 55, "americano"],
    ["Capuccino", "Café con leche vaporizada y abundante espuma cremosa", 75, "capuccino"],
    ["Latte", "Mezcla suave de espresso con leche vaporizada y ligera espuma", 75, "latte"],
    ["Chocolate", "Bebida caliente de chocolate oscuro, espesa y reconfortante", 65, "chocolate"],
    ["Matcha Latte", "Té verde japonés con leche, sabor suave y vegetal", 75, "matcha-latte"],
    ["Chai Latte", "Té negro con especias dulces y leche caliente", 75, "chai-latte"],
    ["Golden Milk", "Leche vegetal con cúrcuma, jengibre y especias digestivas", 85, "golden-milk"],
    ["Infusión del día", "Tisana de hierbas naturales, sin cafeína", 55, "infusion"],
    ["Té", "Selecciona entre té negro, verde o herbal, servido caliente", 55, "te"],
    ["Jugo del día", "Jugo fresco 100% natural, exprimido al momento", 70, "jugo-del-d-a"],
    ["Jugo verde", "Combinación nutritiva de manzana, piña, apio y espinaca", 70, "jugo-verde"],
    ["Agua del día", "Agua fresca natural con fruta de temporada", 55, "agua-del-d-a"],
    ["Agua embotellada", "600 ml, natural sin gas, ideal para acompañar", 35, "agua-embotellada"],
    ["Agua mineral", "Agua con gas, fría y burbujeante", 55, "agua-mineral"],
    ["Naranjada o limonada", "Cítricos exprimidos al momento, dulzor natural y refrescante", 55, "naranja-o-limonada"],
    ["Smoothie", "Frutas congeladas licuadas con yogurt vegetal, textura espesa", 130, "smoothie"],
    ["Refresco", "330 ml, refresco embotellado en variedad de sabores", 55, "refresco"],
    ["Leche vegetal", "Soya, almendra o avena, para sustituir leche (+$10)", 20, "leche-vegetal"],
    ["Bebida fría", "Opción servida con hielo (+$5)", 10, "bebida-fr-a"]
  ],

  "extras": [
    ["Pierna de pavo", "Rebanadas de pierna de pavo al horno, como extra proteico", 35, "pierna-de-pavo"],
    ["Atún", "Atún en agua, perfecto como complemento fresco y ligero", 70, "atun"],
    ["Salmón", "Salmón al grill o ahumado como proteína premium", 130, "salm-n"],
    ["Arrachera", "Trozos suaves de arrachera a la plancha, extra jugoso", 140, "arrachera"],
    ["Huevo", "Huevo extra estrellado o revuelto al gusto", 30, "huevo"],
    ["Pollo", "Tiras de pechuga a la plancha como proteína extra", 100, "pollo"],
    ["Salchicha", "Rebanadas de salchicha asada como acompañamiento clásico", 35, "salchicha"],
    ["Tocino", "Crujiente tocino dorado al sartén, extra sabroso", 55, "tocino"],
    ["Queso de cabra", "Suave, cremoso y ligeramente ácido, ideal para ensaladas", 55, "queso-de-cabra"],
    ["Queso manchego", "Queso fundido o en láminas, sabor suave y versátil", 55, "queso-manchego"],
    ["Queso panela", "Panela fresco en cubos o rebanado, ligero y saludable", 50, "queso-panela"],
    ["Queso feta", "Queso griego desmoronado, ideal para dar sabor salado", 60, "queso-feta"],
    ["Jocoque", "Lácteo cremoso de sabor ácido, excelente para bowls o pan", 45, "jocoque"],
    ["Guacamole extra", "Porción adicional de guacamole casero para acompañar tus platillos", 80, "guacamole-extra"],
    ["Bistec extra", "Tiras de bistec a la plancha como extra proteico para tu plato", 100, "bistec-extra"],
    ["Arroz extra", "Porción de arroz blanco suave para complementar tu comida", 45, "arroz-extra"]
  ],

  "toppings": [
    ["Tomate cherry", "Jugosos tomates mini, dulces y frescos, perfectos para ensaladas", 35, "tomate-cherry"],
    ["Aguacate", "Rebanadas de aguacate maduro, cremoso y nutritivo", 35, "aguacate"],
    ["Lechuga", "Lechuga crujiente y fresca, ideal para dar textura", 35, "lechuga"],
    ["Espinaca", "Hojas verdes baby, suaves y llenas de nutrientes", 35, "espinaca"],
    ["Arugula", "Arugula fresca de sabor ligeramente picante, para dar personalidad", 35, "arugula"],
    ["Cebolla", "Cebolla blanca o morada, cruda o asada al gusto", 35, "cebolla"],
    ["Pepino", "Rodajas de pepino fresco, crujiente y refrescante", 35, "pepino"],
    ["Zanahoria", "Tiras de zanahoria crujiente y ligeramente dulce", 35, "zanahoria"],
    ["Calabaza", "Cubitos de calabaza cocida o rostizada, dulce y suave", 35, "calabaza"],
    ["Jitomate", "Rebanadas de jitomate rojo y jugoso", 35, "jitomate"],
    ["Pimiento morrón", "Pimientos dulces en tiras, rojos, verdes o amarillos", 35, "pimiento-morron"],
    ["Chiles en vinagre", "Chiles jalapeños curtidos, ligeramente picantes, para contrastar sabores", 35, "chiles-en-vinagre"]
  ]
};

const headingMap = {
  "principales": "PRINCIPALES",
  "desayunos": "DESAYUNOS",
  "sandwiches": "SANDWICHES",
  "infantil": "INFANTIL",
  "sopas": "SOPAS",
  "snacks": "SNACKS",
  "bebidas": "BEBIDAS",
  "pan": "PAN",
  "especiales": "TACOS",
  "extras": "EXTRAS",
  "toppings": "TOPPINGS"
};

// ===================== CARRITO (localStorage) =====================
function loadCart() {
  try {
    return JSON.parse(localStorage.getItem('cart')) || [];
  } catch (e) {
    console.error('Error leyendo carrito de localStorage', e);
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCounter() {
  const el = document.getElementById('cartCounter');
  if (!el) return;
  const cart = loadCart();
  el.textContent = cart.length;
}

// ===================== MENÚ + MODAL =====================
function renderMenu() {
  const container = document.getElementById('menuContainer');
  if (!container) return;

  for (const [category, items] of Object.entries(menuData)) {
    const section = document.createElement('section');
    section.className = 'category';
    section.id = category;
    section.innerHTML = `<h3>${headingMap[category] || category.toUpperCase()}</h3>`;

    const grid = document.createElement('div');
    grid.className = 'items';

    items.forEach(item => {
      const [name, desc, price, img] = item;
      const card = document.createElement('div');
      card.className = 'card';
      // Dentro de renderMenu(), donde creas cada card:
      card.innerHTML = `
        <img loading="lazy" src="images/${img}.jpg" alt="${name}" onerror="this.src='images/placeholder.jpg'" class="menu-image">
        <div class="card-content">
          <h4>${name}</h4>
          <p>${desc}</p>
          <span class="price">$${price}</span>
          <button onclick="addToCart('${name.replace(/'/g, "\\'")}', ${price}, '${img}')">Añadir</button>
        </div>
      `;

      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  }

  // Click en imágenes para abrir modal
  document.querySelectorAll('.menu-image').forEach(img => {
    img.addEventListener('click', function () {
      openImageModal(this.src, this.alt);
    });
  });

  // Animación de aparición con IntersectionObserver
  const cards = document.querySelectorAll('.card');
  if (cards.length > 0) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
  }
}

function addToCart(name, price, img) {
  const cart = loadCart();
  cart.push({ name, price, img }); // ahora también guarda img
  saveCart(cart);
  updateCartCounter();

  Swal.fire({
    title: 'Producto añadido',
    text: `"${name}" ha sido añadido al carrito`,
    icon: 'success',
    background: '#fefbf6',
    color: '#183D2D',
    confirmButtonColor: '#183D2D',
    confirmButtonText: 'Aceptar',
    customClass: {
      popup: 'swal-bosque'
    }
  });
}


// ===================== MODAL DE IMAGEN =====================
function createImageModal() {
  if (document.getElementById('imageModal')) return; // evitar duplicado

  const modal = document.createElement('div');
  modal.id = 'imageModal';
  modal.className = 'image-modal';
  modal.innerHTML = `
    <div class="image-modal-content">
      <img src="" alt="" id="modalImage">
      <p id="modalCaption"></p>
    </div>
  `;
  document.body.appendChild(modal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeImageModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeImageModal();
    }
  });
}

function openImageModal(src, caption) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');

  if (!modal || !modalImg || !modalCaption) return;

  modal.style.display = 'flex';
  modalImg.src = src;
  modalCaption.textContent = caption;

  setTimeout(() => {
    modal.classList.add('active');
  }, 10);

  document.body.style.overflow = 'hidden';
}

function closeImageModal() {
  const modal = document.getElementById('imageModal');
  if (!modal) return;

  modal.classList.remove('active');

  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }, 300);
}

// ===================== CARRITO (TABLA + ENVÍO) =====================
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
      updateCartCounter();

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
  if (!tbody) return;

  tbody.innerHTML = '';
  const cart = loadCart();
  let total = 0;

  cart.forEach((item, i) => {
    // 1) Intentar usar el slug guardado en el carrito
    let imgSlug = item.img;

    // 2) Si no viene img en el carrito, buscarlo por nombre en el menú
    if (!imgSlug) {
      for (const items of Object.values(menuData)) {
        const found = items.find(([name]) => name === item.name);
        if (found) {
          imgSlug = found[3]; // 4º elemento = slug de imagen
          break;
        }
      }
    }

    const imgSrc = imgSlug
      ? `images/${imgSlug}.jpg`
      : 'images/placeholder.jpg';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <img src="${imgSrc}" alt="${item.name}" class="cart-thumb"
             onerror="this.src='images/placeholder.jpg'">
      </td>
      <td>${item.name}</td>
      <td>$${item.price}</td>
      <td><button onclick="removeItem(${i})">Eliminar</button></td>
    `;
    tbody.appendChild(tr);
    total += item.price;
  });

  const totalEl = document.getElementById('total');
  if (totalEl) {
    totalEl.textContent = '$' + total.toFixed(2);
  }
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

      pagoMetodo.addEventListener('change', function () {
        if (this.value === 'efectivo') {
          efectivoDetalle.style.display = 'block';
        } else {
          efectivoDetalle.style.display = 'none';
          cambioExacto.value = 'exacto';
          montoGrupo.style.display = 'none';
          document.getElementById('monto-pago').value = '';
        }
      });

      cambioExacto.addEventListener('change', function () {
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

// ===================== INICIALIZACIÓN =====================
document.addEventListener('DOMContentLoaded', () => {
  // Página de menú
  renderMenu();
  createImageModal();
  updateCartCounter();

  // Página de carrito
  if (document.querySelector('#cartTable tbody')) {
    renderCart();
  }

  const pagarBtn = document.querySelector('.pay-btn');
  if (pagarBtn) {
    pagarBtn.addEventListener('click', (e) => {
      e.preventDefault();
      enviarPedido();
    });
  }
});
