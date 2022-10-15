let food;
let drink;
let dessert;
let products = [
  {
    id: 1,
    type: "food",
    image: "https://s2.glbimg.com/7JkYey4r7EIQsRNcfVucbyf7b2Q=/512x320/smart/e.glbimg.com/og/ed/f/original/2020/04/21/filet-mignon-a-parmegiana_venuto.jpg",
    name: "Parmegiana",
    description: "Acompanha fritas",
    value: 32.9,
  },
  {
    id: 2,
    type: "food",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/fa/8b/a7/um-dos-melhores-pratos.jpg",
    name: "Costela",
    description: "Acompanha couve refogado e batata",
    value: 27.9,
  },
  {
    id: 3,
    type: "food",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/0b/9d/21/89/r3-express-food.jpg",
    name: "Frango à Milanesa",
    description: "Acompanha arroz, feijão e fritas",
    value: 22.9,
  },
  {
    id: 4,
    type: "food",
    image: "https://www.receitasdemae.com.br/wp-content/uploads/2014/12/Charuto-%C3%A1rabe.jpg",
    name: "Charuto Árabe",
    description: "Tempero picante",
    value: 25.9,
  },
  {
    id: 5,
    type: "food",
    image: "https://s1.1zoom.me/big0/588/Pizza_Tomatoes_Knife_Plate_Basil_585213_1280x853.jpg",
    name: "Pizza da Casa",
    description: "Ingredientes secretos!",
    value: 30.9,
  },
  {
    id: 1,
    type: "drink",
    image: "https://riomarfortalezaonline.com.br/fortalezashopping/2020/05/refrigerante_coca-cola_lata_350_ml-1.jpg",
    name: "Coca-cola",
    description: "Lata 350ml",
    value: 4.9,
  },
  {
    id: 2,
    type: "drink",
    image: "https://supernossoio.vtexassets.com/arquivos/ids/212705/Refrigerante-Sprite-Lata-350ml.jpg?v=637808100611030000",
    name: "Sprite",
    description: "Lata 350ml",
    value: 3.9,
  },
  {
    id: 3,
    type: "drink",
    image: "https://hiperideal.vteximg.com.br/arquivos/ids/197318-1000-1000/557307.jpg?v=637828722328930000",
    name: "Fanta",
    description: "Lata 350ml",
    value: 3.9,
  },
  {
    id: 4,
    type: "drink",
    image: "https://d225afdvrjsxie.cloudfront.net/Custom/Content/Products/95/19/95191_refrigerante-fanta-uva-lata-350ml_m1_637667833334258958.jpg",
    name: "Fanta Uva",
    description: "Lata 350ml",
    value: 3.9,
  },
  {
    id: 5,
    type: "drink",
    image: "https://www.citrosuco.com.br/wp-content/uploads/2022/02/THUMB-05.png",
    name: "Suco de Laranja",
    description: "Copo 400ml",
    value: 5.9,
  },
  {
    id: 1,
    type: "dessert",
    image: "https://s2.glbimg.com/d2lNGlslF0oHrlScMCO5NSIlDqg=/0x0:750x550/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2013/09/30/18_43_51_732_petit_gateau.jpg",
    name: "Petit Gateau",
    description: "Acompanha sorvete de creme",
    value: 18.9,
  },
  {
    id: 2,
    type: "dessert",
    image: "https://www.whatelsemag.com/wp-content/uploads/2020/10/What-Else-Mag-Gastronomia-Dia-Nacional-Sobremesa-10-Opcoes-Pratos-Doces-02.jpg",
    name: "Bolo de chocolate",
    description: "Com granulado colorido",
    value: 12.9,
  },
  {
    id: 3,
    type: "dessert",
    image: "https://img.itdg.com.br/tdg/images/blog/uploads/2017/10/Tortaholandesa.jpg?w=1200",
    name: "Torta Holandesa",
    description: "Deliciosa torta holandesa",
    value: 15.9,
  },
  {
    id: 4,
    type: "dessert",
    image: "https://s2.glbimg.com/mh4VsMjBFjo70heWuVwYsCx3m20=/0x0:264x191/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2015/10/14/14_39_47_8_download.jpg",
    name: "Cheesecake",
    description: "Com frutas vermelhas",
    value: 14.9,
  },
  {
    id: 5,
    type: "dessert",
    image: "./images/pudim 1.jpg",
    name: "Pudim",
    description: "Apenas pudim",
    value: 7.9,
  },
];
let button = document.getElementById("finish");

function addProduct(product, element) {
  let div = document.createElement("div");
  div.setAttribute("id", product.type + "-" + product.id);
  div.setAttribute("class", "card " + product.type);
  div.setAttribute("data-test", "food-option");
  let img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  let title = document.createElement("p");
  title.setAttribute("class", "title");
  title.setAttribute("data-test", "food-title");
  title.textContent = product.name;
  let description = document.createElement("p");
  description.setAttribute("class", "description");
  description.textContent = product.description;
  let value = document.createElement("p");
  value.setAttribute("class", "value");
  value.setAttribute("data-test", "food-price");
  value.textContent = "R$ " + product.value.toFixed(2).replace(".", ",");
  let icon = document.createElement("ion-icon");
  icon.setAttribute("name", "checkmark-circle");

  div.appendChild(img);
  div.appendChild(title);
  div.appendChild(description);
  div.appendChild(value);
  div.appendChild(icon);

  element.appendChild(div);
}

for (let i = 0; i < products.length; i++) {
  let element = document.getElementsByClassName(products[i].type + "s")[0];
  addProduct(products[i], element);
}

function removeActiveFromElements(type) {
  let elements = document.getElementsByClassName(type);

  for (let i = 0; i < elements.length; i++)
    elements[i].classList.remove("active");
}

function verifyOrder() {
  if (food !== undefined && drink !== undefined && dessert !== undefined) {
    button.innerHTML = "Fechar pedido";
    button.classList.add("active");
    finishOrder();
  }
}

function selectProduct(id) {
  let el = id;
  let type = id.split("-")[0];
  id = parseInt(id.split("-")[1]);

  switch (type) {
    case "food":
      food = products.find((item) => item.id === id && item.type == "food");
      break;
    case "drink":
      drink = products.find((item) => item.id === id && item.type == "drink");
      break;
    case "dessert":
      dessert = products.find(
        (item) => item.id === id && item.type == "dessert"
      );
      break;
  }

  removeActiveFromElements(type);
  document.getElementById(el).classList.add("active");
  verifyOrder();
}

function finishOrder() {
  let total = food.value + drink.value + dessert.value;
  let text =
    "Olá, gostaria de fazer o pedido:\n" +
    "- Prato: " +
    food.name +
    "\n" +
    "- Bebida: " +
    drink.name +
    "\n" +
    "- Sobremesa: " +
    dessert.name +
    "\n" +
    "- Total: R$ " +
    total.toFixed(2).replace(".", ",");
  text = encodeURIComponent(text);
  button.setAttribute('href', 'https://wa.me/5517981463338?text=' + text);  
}

let cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
  let card = cards[i];
  card.onclick = function () {
    selectProduct(this.id);
  };
}
