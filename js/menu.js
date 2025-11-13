// HEADER
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

const menuData = {
  "desayunos": [
    ["Hot cakes", "Esponjosos, servidos con miel de maple y fruta fresca de temporada", 145, "hot-cakes"],
    ["Huevos rancheros", "Dos huevos estrellados sobre tortilla con salsa ranchera casera y frijoles", 145, "huevos-rancheros"],
    ["Huevos al gusto", "Estrellados, revueltos o tibios, con guarnición a elegir", 145, "huevos-al-gusto"],
    ["Molletes 3 quesos", "Pan dorado con gouda, suizo y parmesano, gratinados al horno", 145, "molletes-3-quesos"],
    ["Chilaquiles", "Totopos bañados en salsa verde o roja, estilo casero", 135, "chilaquiles-real"],
    ["Toast de salmón", "Pan de masa madre con salmón ahumado, crema y hojas verdes", 200, "toast-salmon"],
    ["Toast de aguacate", "Rebanada de masa madre con aguacate fresco y topping del día", 165, "toast-de-aguacate"],
    ["Queso panela asado", "Queso dorado a la plancha con nopal y salsa de la casa", 135, "queso-panela-asado"],
    ["Matcha Bowl", "Tazón energizante con matcha, frutos rojos, granola y semillas", 165, "matcha-bowl"],
    ["Waffle", "Crujiente por fuera, suave por dentro, con fruta de temporada", 145, "waffles"]
  ],

  "sandwiches": [
    ["Koki", "Gouda, tocino, jamón de pavo, huevo frito y aioli en pan artesanal", 180, "koki-sandwich"],
    ["BCS", "Pollo en salsa buffalo con pepinillos y aderezo de queso azul", 180, "sandwich-bcs"],
    ["Veggie", "Queso de cabra, tomate deshidratado y vegetales en pan crujiente", 180, "sandwich-veggie"],
    ["Cuernito", "Croissant relleno de jamón ahumado, queso gouda y ensalada fresca", 145, "cuerito"],
    ["Árabe", "Pan pita con queso gouda fundido y ensalada fresca de la casa", 135, "sandwich-arabe"],
    ["Arma tu sandwich", "Elige 2 proteínas y 1 topping para personalizar tu sándwich", 180, "arma-tu-sandwich"]
  ],

  "principales": [
    ["Milanesa de pollo o res", "Crujiente milanesa con papas fritas o ensalada a elección", 220, "milanesa-de-pollo-o-res"],
    ["Hamburguesa Olivia", "Carne jugosa con gouda, lechuga, jitomate y papas fritas", 320, "hamburguesa-olivia"],
    ["Pita de Arrachera", "Pan pita con arrachera, cebolla caramelizada y queso gouda fundido", 220, "pita-de-arrachera"],
    ["Alitas con salsa buffalo", "Alitas crujientes bañadas en salsa buffalo con papas a un lado", 220, "alitas-con-salsa-buffalo"],
    ["Salmon Taki", "Salmón en salsa oriental, con guarnición de arroz o verduras", 260, "salmon-taki"],
    ["Pasta Alfredo", "Pasta cremosa con salsa Alfredo y toque de parmesano", 155, "pasta-alfredo"],
    ["Pasta Arrabiata", "Pasta con salsa roja ligeramente picante y especias italianas", 155, "pasta-arrabiata"],
    ["Arrachera", "Corte suave y jugoso a la plancha con guarnición a elegir", 275, "arrachera"]
  ],

  "infantil": [
    ["Nuggets de pollo", "Nuggets dorados y crujientes con papas a elegir", 120, "nuggets-pollo"],
    ["Spaghetti al burro", "Pasta suave con mantequilla y queso rallado, ideal para niños", 120, "spaghetti-burro"],
    ["Hot dog con papas", "Clásico hot dog en pan suave con papas fritas doradas", 120, "hot-dog-con-papas"]
  ],

  "sopas": [
    ["Sopa de verduras", "Caldo ligero con vegetales frescos y sabor casero", 80, "sopa-de-verduras"],
    ["Sopa de fideos", "Fideos suaves en caldo de jitomate con toque tradicional", 80, "sopa-fideos"],
    ["Crema del día", "Preparada con verduras frescas y base cremosa del chef", 80, "crema-dia"]
  ],

  "especiales": [
    ["Taco de chicharron prensado", "Chicharrón prensado dorado con sabor intenso en tortilla calientita", 45, "taco-de-chicharron-prensado"],
    ["Taco de guisado", "Taco relleno con el guiso casero del día, sazón tradicional", 45, "taco-de-guisado"],
    ["Taco de campechano", "Deliciosa mezcla de carne y chorizo en tortilla recién hecha", 45, "taco-de-campechano"],
    ["Taco de arrachera", "Arrachera jugosa a la plancha con cebolla en tortilla suave", 70, "taco-de-arrachera"]
  ],

  "snacks": [
    ["Papas a la francesa", "Papas doradas y crujientes con sal de la casa", 65, "papas-a-la-francesa"],
    ["Fruta preparada", "Fruta fresca con limón, sal y chile en polvo", 65, "fruta-preparada"],
    ["Pepino o jícama preparada", "Bastones frescos con limón y chile, opción ligera y refrescante", 65, "pepino-o-j-cama-preparada"],
    ["Chips preparadas", "Papas estilo sabritas con salsas, queso y toppings", 65, "chips-preparadas"],
    ["Paleta helada", "Paleta congelada hecha con fruta natural, sin conservadores", 35, "paleta-helada"]
  ],

  "pan": [
    ["Croissant", "Hojaldre clásico francés, mantequilloso y ligeramente tostado", 50, "croissant"],
    ["Croissant con almendra", "Croissant relleno con crema de almendra y topping crujiente", 60, "croissant-con-almendra"],
    ["Pain au chocolat", "Hojaldre relleno de chocolate semiamargo estilo francés", 50, "pain-au-chocolat"],
    ["Pain au chocolat con almendra", "Doble relleno de chocolate y almendra tostada", 60, "pain-au-chocolat-con-almendra"],
    ["Croissant con nutella", "Croissant dorado con generoso relleno de Nutella cremosa", 55, "croissant-con-nutella"],
    ["Rol de canela", "Suave, especiado y glaseado con azúcar y mantequilla", 55, "rol-de-canela"],
    ["Rol de nutella", "Rol esponjoso con relleno cálido de Nutella fundida", 55, "rol-de-nutella"],
    ["Panqué", "Pan suave de vainilla hecho en casa, estilo tradicional", 55, "panque"],
    ["Brownie", "Brownie denso y húmedo de chocolate oscuro, casero", 40, "brownie"],
    ["Galleta", "Grande, suave y horneada con trozos dulces", 30, "galleta"],
    ["Mini concha", "Versión mini del clásico pan dulce mexicano", 30, "mini-conchas"]
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
    ["Agua mineral", "Agua con gas, fría y burbujeante", 45, "agua-mineral"],
    ["Naranjada o limonada", "Cítricos exprimidos al momento, dulzor natural y refrescante", 50, "naranja-o-limonada"],
    ["Smoothie", "Frutas congeladas licuadas con yogurt vegetal, textura espesa", 130, "smoothie"],
    ["Refresco", "330 ml, refresco embotellado en variedad de sabores", 55, "refresco"],
    ["Leche vegetal", "Soya, almendra o avena, para sustituir leche (+$10)", 15, "leche-vegetal"],
    ["Bebida fría", "Opción servida con hielo (+$5)", 10, "bebida-fr-a"]
  ],

  "extras": [
    ["Pierna de pavo", "Rebanadas de pierna de pavo al horno, como extra proteico", 35, "pierna-de-pavo"],
    ["Atún", "Atún en agua, perfecto como complemento fresco y ligero", 70, "atun"],
    ["Salmón", "Salmón al grill o ahumado como proteína premium", 100, "salm-n"],
    ["Arrachera", "Trozos suaves de arrachera a la plancha, extra jugoso", 90, "arrachera"],
    ["Huevo", "Huevo extra estrellado o revuelto al gusto", 30, "huevo"],
    ["Pollo", "Tiras de pechuga a la plancha como proteína extra", 100, "pollo"],
    ["Salchicha", "Rebanadas de salchicha asada como acompañamiento clásico", 35, "salchicha"],
    ["Tocino", "Crujiente tocino dorado al sartén, extra sabroso", 55, "tocino"],
    ["Queso de cabra", "Suave, cremoso y ligeramente ácido, ideal para ensaladas", 45, "queso-de-cabra"],
    ["Queso manchego", "Queso fundido o en láminas, sabor suave y versátil", 55, "queso-manchego"],
    ["Queso panela", "Panela fresco en cubos o rebanado, ligero y saludable", 35, "queso-panela"],
    ["Queso feta", "Queso griego desmoronado, ideal para dar sabor salado", 45, "queso-feta"],
    ["Jocoque", "Lácteo cremoso de sabor ácido, excelente para bowls o pan", 45, "jocoque"]
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
}

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


function renderMenu() {
  const container = document.getElementById('menuContainer');
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
      card.innerHTML = `
        <img loading="lazy" src="images/${img}.jpg" alt="${name}" onerror="this.src='images/placeholder.jpg'">
        <div class="card-content">
          <h4>${name}</h4>
          <p>${desc}</p>
          <span class="price">$${price}</span>
          <button onclick="addToCart('${name}', ${price})">Añadir</button>
        </div>`;
      grid.appendChild(card);
    });
    section.appendChild(grid);
    container.appendChild(section);
  }
}

function loadCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCounter() {
  const count = loadCart().length;
  const counterEl = document.getElementById('cartCounter');
  if (counterEl) {
    counterEl.textContent = count;
  }
}

function addToCart(name, price) {
  const cart = loadCart();
  cart.push({ name, price });
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


document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('menuContainer')) {
    renderMenu();
  }
  updateCartCounter();
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => {
    observer.observe(card);
  });
});
