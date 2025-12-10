// Definición de productos y stock INICIAL.
// Luego podemos conectar esto a Firestore o a una API.
const productsData = {
  "entremes-pastelillos": {
    title: 'Pastelillos 3" (Entremés)',
    items: [
      { id: "ent-past-fresa",   name: "Fresa",          stock: 24 },
      { id: "ent-past-nutella", name: "Nutella",        stock: 18 },
      { id: "ent-past-pollo",   name: "Pollo",          stock: 30 },
      { id: "ent-past-carne",   name: "Carne",          stock: 30 },
      { id: "ent-past-camaron", name: "Camarones",      stock: 12 },
      { id: "ent-past-queso-g", name: "Queso y guayaba",stock: 20 },
      { id: "ent-past-flan",    name: "Flan",           stock: 10 }
    ]
  },
  "entremes-flanes": {
    title: "Flanes 3.5 oz (Entremés)",
    items: [
      { id: "ent-flan-vainilla", name: "Vainilla", stock: 20 },
      { id: "ent-flan-queso",    name: "Queso",    stock: 20 }
    ]
  },
  "entremes-tembleques": {
    title: "Tembleques 3.5 oz (Entremés)",
    items: [
      { id: "ent-temb-coco", name: "Típico de coco", stock: 24 }
    ]
  },
  "regular-pastelillos": {
    title: 'Pastelillos 6" (Tamaño regular)',
    items: [
      { id: "reg-past-fresa",   name: "Fresa",          stock: 12 },
      { id: "reg-past-nutella", name: "Nutella",        stock: 10 },
      { id: "reg-past-pollo",   name: "Pollo",          stock: 18 },
      { id: "reg-past-carne",   name: "Carne",          stock: 18 },
      { id: "reg-past-camaron", name: "Camarones",      stock: 8 },
      { id: "reg-past-queso-g", name: "Queso y guayaba",stock: 14 }
    ]
  },
  "regular-flanes": {
    title: "Flanes 32 oz (Tamaño regular)",
    items: [
      { id: "reg-flan-vainilla", name: "Vainilla", stock: 6 },
      { id: "reg-flan-queso",    name: "Queso",    stock: 6 }
    ]
  },
  "regular-tembleques": {
    title: "Tembleques 32 oz (Tamaño regular)",
    items: [
      { id: "reg-temb-coco", name: "Típico de coco", stock: 8 }
    ]
  }
};

const screens = document.querySelectorAll(".screen");
const screenContainer = document.getElementById("screenContainer");
const productsTitle = document.getElementById("productsTitle");
const productsList = document.getElementById("productsList");
const backToMenuBtn = document.getElementById("backToMenu");

// Mostrar pantalla por id
function showScreen(id) {
  screens.forEach(sc => sc.classList.remove("active"));
  const el = document.getElementById(id);
  if (el) el.classList.add("active");
}

// Botones principales (Entremés / Regular)
document.querySelectorAll(".pill-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.screen;
    if (target === "entremes") {
      showScreen("screen-entremes");
    } else if (target === "regular") {
      showScreen("screen-regular");
    }
  });
});

// Botones de submenú (pastelillos, flanes, tembleques)
document.querySelectorAll(".card-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const subscreen = btn.dataset.subscreen;
    loadProducts(subscreen);
  });
});

// Volver a menú anterior (simple: regreso a home por ahora)
backToMenuBtn.addEventListener("click", () => {
  showScreen("screen-home");
});

// Carga dinámica de productos según la clave
function loadProducts(key) {
  const data = productsData[key];
  if (!data) return;

  productsTitle.textContent = data.title;
  productsList.innerHTML = "";

  data.items.forEach(item => {
    const card = document.createElement("article");
    card.className = "product-card";

    const name = document.createElement("div");
    name.className = "product-name";
    name.textContent = item.name;

    const meta = document.createElement("div");
    meta.className = "product-meta";
    meta.textContent = "Sabor";

    const stock = document.createElement("div");
    stock.className = "product-stock";
    stock.textContent = `Stock: ${item.stock} unidades`;

    card.appendChild(name);
    card.appendChild(meta);
    card.appendChild(stock);

    productsList.appendChild(card);
  });

  showScreen("screen-products");
}

// Pantalla inicial
showScreen("screen-home");
