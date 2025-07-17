const menuData = {
  "desayunos": [
    ["Hot cakes", "Acompañado de fruta de temporada", 130, "hot-cakes"],
    ["Huevos rancheros", "Dos huevos estrellados bañados en salsa ranchera", 130, "huevos-rancheros"],
    ["Huevos al gusto", "Con guarnición de elección", 130, "huevos-al-gusto"],
    ["Molletes 3 quesos", "Gouda, suizo y parmesano", 130, "molletes-3-quesos"],
    ["Chilaquiles", "Estilo casero", 120, "chilaquiles-real"],
    ["Toast de salmón", "En pan de masa madre", 180, "toast-salmon"],
    ["Toast de aguacate", "En pan de masa madre", 150, "toast-de-aguacate"],
    ["Queso panela asado", "Acompañado de salsa y nopal", 120, "queso-panela-asado"],
    ["Matcha Bowl", "Granola, frutos rojos y mix de semillas", 150, "matcha-bowl"],
    ["Waffle", "Acompañado de fruta de temporada", 130, "waffles"]
  ],
  "sandwiches": [
    ["Koki", "Aioli, queso gouda, cebolla caramelizada, jamón de pavo ahumado, tocino y huevo frito", 160, "koki-sandwich"],
    ["BCS", "Pollo salsa buffalo con aderezo de queso azul y pepinillos", 160, "sandwich-bcs"],
    ["Veggie", "Queso de cabra con tomate deshidratado", 150, "sandwich-veggie"],
    ["Cuernito", "Croissant con jamón ahumado, queso gouda y ensalada de la casa", 130, "cuerito"],
    ["Árabe", "Pita con queso gouda y ensalada de la casa", 120, "sandwich-arabe"],
    ["Arma tu sandwich", "Incluye 2 proteínas y 1 topping", 150, "arma-tu-sandwich"]
  ],
  "principales": [
    ["Milanesa de pollo o res", "Acompañada de papas fritas o ensalada", 200, "milanesa-de-pollo-o-res"],
    ["Hamburguesa Olivia", "80% res 20% gouda, lechuga, jitomate, papas", 290, "hamburguesa-olivia"],
    ["Pita de Arrachera", "Queso gouda y cebolla caramelizada", 200, "pita-de-arrachera"],
    ["Alitas con salsa buffalo", "Acompañadas de papas fritas", 200, "alitas-con-salsa-buffalo"],
    ["Salmon Taki", "En salsa oriental", 230, "salmon-taki"],
    ["Pasta Alfredo", "En salsa cremosa", 140, "pasta-alfredo"],
    ["Pasta Arrabiata", "Poco picante", 140, "pasta-arrabiata"],
    ["Arrachera", "A la plancha con guarnición de elección", 250, "arrachera"]
  ],
  
  
  "infantil": [
    ["Nuggets de pollo", "", 110, "nuggets-pollo"],
    ["Spaghetti al burro", "", 110, "spaghetti-burro"],
    ["Hot dog con papas", "", 100, "hot-dog-con-papas"]
  ],
  "sopas": [
    ["Sopa de verduras", "Con consomé de verduras", 70, "sopa-de-verduras"],
    ["Sopa de fideos", "Con base de jitomate", 70, "sopa-fideos"],
    ["Crema del día", "De verduras seleccionadas", 70, "crema-dia"]
  ],
  "snacks": [
    ["Papas a la francesa", "", 60, "papas-a-la-francesa"],
    ["Fruta preparada", "", 60, "fruta-preparada"],
    ["Pepino o jícama preparada", "", 60, "pepino-o-j-cama-preparada"],
    ["Chips preparadas", "", 60, "chips-preparadas"],
    ["Paleta helada", "", 30, "paleta-helada"]
  ],
  "bebidas": [
    ["Espresso", "", 45, "espresso"],
    ["Americano", "", 50, "americano"],
    ["Capuccino", "", 65, "capuccino"],
    ["Latte", "", 65, "latte"],
    ["Chocolate", "", 55, "chocolate"],
    ["Matcha Latte", "", 65, "matcha-latte"],
    ["Chai Latte", "", 65, "chai-latte"],
    ["Golden Milk", "", 75, "golden-milk"],
    ["Infusión del día", "", 50, "infusion"],
    ["Té", "", 50, "te"],
    ["Jugo del día", "", 60, "jugo-del-d-a"],
    ["Jugo verde", "", 60, "jugo-verde"],
    ["Agua del día", "", 50, "agua-del-d-a"],
    ["Agua embotellada", "", 30, "agua-embotellada"],
    ["Agua mineral", "", 40, "agua-mineral"],
    ["Naranja o limonada", "", 45, "naranja-o-limonada"],
    ["Smoothie", "", 115, "smoothie"],
    ["Refresco", "", 50, "refresco"],
    ["Leche vegetal", "Añade $10", 10, "leche-vegetal"],
    ["Bebida fría", "Añade $5", 5, "bebida-fr-a"]
  ],
  "pan": [
    ["Croissant", "", 45, "croissant"],
    ["Croissant con almendra", "", 55, "croissant-con-almendra"],
    ["Pain au chocolat", "", 45, "pain-au-chocolat"],
    ["Pain au chocolat con almendra", "", 55, "pain-au-chocolat-con-almendra"],
    ["Croissant con nutella", "", 50, "croissant-con-nutella"],
    ["Rol de canela", "", 50, "rol-de-canela"],
    ["Rol de nutella", "", 50, "rol-de-nutella"],
    ["Panqué", "", 50, "panque"],
    ["Brownie", "", 35, "brownie"],
    ["Galleta", "", 25, "galleta"],
    ["Mini concha", "", 25, "mini-conchas"]
  ],
  "especiales": [
    ["Taco de chicharron prensado", "", 35, "taco-de-chicharron-prensado"],
    ["Taco de guisado", "", 35, "taco-de-guisado"],
    ["Taco de campechano", "", 35, "taco-de-campechano"],
    ["Taco de arrachera", "", 55, "taco-de-arrachera"]
  ],
  "extras": [
    ["Pierna de pavo", "Proteína extra", 30, "pierna-de-pavo"],
    ["Atún", "Proteína extra", 60, "atun"],
    ["Salmón", "Proteína extra", 90, "salm-n"],
    ["Arrachera", "Proteína extra", 80, "arrachera"],
    ["Huevo", "Proteína extra", 25, "huevo"],
    ["Pollo", "Proteína extra", 90, "pollo"],
    ["Salchicha", "Proteína extra", 30, "salchicha"],
    ["Tocino", "Proteína extra", 50, "tocino"],
    ["Queso de cabra", "Queso extra", 40, "queso-de-cabra"],
    ["Queso manchego", "Queso extra", 50, "queso-manchego"],
    ["Queso panela", "Queso extra", 30, "queso-panela"],
    ["Queso feta", "Queso extra", 40, "queso-feta"],
    ["Jocoque", "Lácteo extra", 40, "jocoque"]
  ],
  "toppings": [
    ["Tomate cherry", "Topping", 30, "tomate-cherry"],
    ["Aguacate", "Topping", 30, "aguacate"],
    ["Lechuga", "Topping", 30, "lechuga"],
    ["Espinaca", "Topping", 30, "espinaca"],
    ["Arugula", "Topping", 30, "arugula"],
    ["Cebolla", "Topping", 30, "cebolla"],
    ["Pepino", "Topping", 30, "pepino"],
    ["Zanahoria", "Topping", 30, "zanahoria"],
    ["Calabaza", "Topping", 30, "calabaza"],
    ["Jitomate", "Topping", 30, "jitomate"],
    ["Pimiento morron", "Topping", 30, "pimiento-morron"],
    ["Chiles en vinagre", "Topping", 30, "chiles-en-vinagre"]
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
        <img src="images/${img}.jpg" alt="${name}" onerror="this.src='images/placeholder.jpg'">
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
  cart.push({name, price});
  saveCart(cart);
  updateCartCounter();
  alert(`${name} añadido al carrito`);
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('menuContainer')) {
    renderMenu();
  }
  updateCartCounter();
});
