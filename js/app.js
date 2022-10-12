//mis datos
const gamesList =[
  { id: 1,
    name: 'A Plague Tale',
    img: './images/a plague tale portada.jpg',
    price: 39.9,
    amount: 5,
    discount: 0, 
  },
  { id: 2,
    name: 'Ciberpunk 2077',
    img: './images/cyberpunk-2077 portada.jpg',
    price: 59.9,
    amount: 3, 
    discount: 0,
  },
  { id: 3,
    name: 'FIFA 23',
    img: './images/fifa 23 portada.png',
    price: 59.9,
    amount: 11, 
    discount: 0,
  },
  { id: 4,
    name: 'Metal Gear Rising',
    img: './images/metal gear rising revengeance portada.jpg',
    price: 49.9,
    amount: 4, 
    discount: 0,
  },
  { id: 5,
    name: 'NBA 2K 23',
    img: './images/nba 2k 23 portada.jpg',
    price: 59.9,
    amount: 5, 
    discount: 0, 
  },
  { id: 6,
    name: 'Red Dead Redeption II',
    img: './images/red dead redemption II portada.jpg',
    price: 55.9,
    amount: 8, 
    discount: 0,
  },
  { id: 7,
    name: 'Spider Man Remastered',
    img: './images/spider man remastered portada.jpg',
    price: 29.9,
    amount: 10, 
    discount: 0,
  },
  { id: 8,
    name: 'The Witcher 3',
    img: './images/the witcher 3 portada.jpg',
    price: 39.9,
    amount: 10, 
    discount: 0,
  },
  { id: 9,
    name: 'BassMaste Fishing 2022',
    img: './images/bassmaster fishing 2022 portada.jpg',
    price: 19.9,
    amount: 2, 
    discount: 20,
  },
  { id: 10,
    name: 'Batman Arkham Origins',
    img: './images/batman-arkham-origins-complete-edition portada.jpg',
    price: 29.9,
    amount: 3, 
    discount: 30,
  },
  { id: 11,
    name: 'Bioshock',
    img: './images/bioshock portada.jpg',
    price: 19.9,
    amount: 8, 
    discount: 20,
  },
  { id: 12,
    name: 'Borderlands 2 - GOTY',
    img: './images/borderlands-2-game-of-the-year-edition portada.jpg',
    price: 29.9,
    amount: 3, 
    discount: 25,
  },
  { id: 13,
    name: 'Gears of War 4',
    img: './images/gears of war 4 portada.jpg',
    price: 39.9,
    amount: 5, 
    discount: 20,
  },
  { id: 14,
    name: 'Half Life 2',
    img: './images/half life 2 portada.jpg',
    price: 25.9,
    amount: 5, 
    discount: 50,
  },
]

/* Cargar juegos STORE */
const gamesStore = document.querySelector('.games-container');

function fillStore () {
  let html='';
  for (const {id, name, img, price, amount, discount} of gamesList){
    if (discount === 0){
      html += `
      <article class="store_card">   
        <img class="store_img" src="${img}" alt="${name}">
        <div class="store_card_description">
          <p class="store_card_title">${name}</p>
          <button class="store_button_add agregar" id="btn-add">
            <span class="material-symbols-outlined">
            add_circle
            </span>
          </button>
          <p class="store_card_price">$ ${price}</p>
          <p class="store_card_amount">${amount} U.</p>
        </div>
    </article>
    `
    }
  }
  gamesStore.innerHTML = html;
}
fillStore();

/* Cargar juegos SALE */
const gamesSale = document.querySelector('.games-sale-container');

function fillSale () {
  let html = '';
  for (const{id, name, img, price, amount, discount} of gamesList){
    if (discount !== 0){
      const priceDiscount = price - (price * discount / 100);
      html += `
      <article class="sale_card">
        <img class="sale_img" src="${img}" alt="${name}">
        <div class="sale_card_description">
          <p class="sale_card_title">${name}</p>
          <button class="sale_button_add agregar">
            <span class="material-symbols-outlined">
            add_circle
            </span>
          </button>
          <div class="sale_card_discount_container">
            <p class="sale_card_discount">%${discount}</p>
          </div>
          <p class="sale_card_old_price">$ ${price}</p>
          <p class="sale_card_price">$${priceDiscount.toPrecision(4)}</p>
          <p class="sale_card_amount">${amount} U.</p>
        </div>
      </article>
      `
    }
  }
  gamesSale.innerHTML = html;
}
fillSale();


/* Carritooo */
let carrito = [];

const gamesContenedor =document.querySelector('.shop-cart');
const totalPrice = document.getElementById('buy-total');
const buttonBuy = document.querySelector('.btn-checkout');


function fillCarrito() {
  let html='';
  for (const {id, amount} of carrito) {
    //condición para ir llenando el carro de compras, si en carrito no hay id coincidente con alguno de la gamesList, entonces no ya nada que meter en el carro
    const {name, img, price} = gamesList.find((game) => game.id === id)
    const subPrice = price * amount; 
      html += `
      <div class="shop-details">
        <div class="shop-img-container"> 
          <img src="${img}" alt="${name}" class="mini-img">
        </div>
        <div class="shop-text">${name}</div>
        <div class="shop-amount-container">
          <button class="btn-amount" id="btn-remove" data-id="${id}"> 
            <span class="material-symbols-outlined">
            do_not_disturb_on
            </span> 
          </button>
          <div class="shop-text"> ${amount} </div>
          <button class="btn-amount" id="btn-add" data-id="${id}"> 
            <span class="material-symbols-outlined">
            add_circle
            </span> 
          </button>
        </div>
        <div class="shop-text"> $${subPrice} </div>
      </div>
      `
      /* console.log (html); */
  }
  /* sección innerhtml */
  gamesContenedor.innerHTML = html;
  totalPrice.innerHTML = total();
}
/* fillCarrito(); */

function addCarrito (id) {
  const cantidad = 1;
  //si la id que pasamos por parametro es igual a la id de un game, entonces guardamos el boolean en findProduct
  const findProduct = gamesList.find((game)=> game.id === id);
  
  //si findProduct es T y su valor es mayo que 0
  if (findProduct && findProduct.amount > 0) {
    const findGame = carrito.find ((gameCarro) => gameCarro.id === id);

    if (findGame) {
      //verificamos sihay unid disponibles paara la venta, sino largo un cartelito
      if (checkUnits(id, cantidad + findGame.amount)){
        findGame.amount += cantidad;
        } else {
          window.alert('supera las unidaedes disponibles')
      }
    } else {
      carrito.push({id, cantidad});
    } 
  }  else {
      window.alert('Lo sentimos, no contamos con unidades disponibles')
  }
  fillCarrito();
}

function checkUnits (id, cantidad) {
  const findProduct = gamesList.find(game => game.id === id)

  return findProduct.amount - cantidad >= 0; 
}

function removeOfCarrito(id) {
  const cantidad=1;

  const findGame = carrito.find ((gameCarro)=> gameCarro.id === id)

  if (findGame && findGame.amount -cantidad > 0) {
    findGame.amount -= cantidad;
  } else {
    carrito = carrito.filter((gameCarro) => gameCarro.id !== id)
  }
  fillCarrito();
}

function removeGame (id) {
  carrito = carrito.filter((gameCarro) => gameCarro.id !== id)
  fillCarrito();
}

function countItems() {
  let suma = 0;
  for ( const item of carrito) {
    suma+= item.amount;
  }
  return suma;
}

function total () {
  let suma = 0;

  for (const item of carrito) {
  const findProduct = gamesList.find((game) => game.id === item.id);
  suma += item.amount * findProduct.price
  }
  return suma;
}

function buy () {
  for (const item of carrito) {
    const findProduct = gamesList.find((game) => game.id === item.id);

    findProduct.amount -= item.cantidad
  }

  window.alert ('Ty 4 your buy')
  carrito = [];
  fillCarrito();
  fillSale();
  fillStore();
}

fillCarrito();

gamesStore.addEventListener('click', (e) =>{
  if (e.target.closest('.agregar')) {
    const id = +e.target.closest('.agregar').dataset.id
    addCarrito(id);
  }
})

gamesContenedor.addEventListener('click', (e) =>{
  if (e.target.closest('#btn-add')) {
    const id = +e.target.closest('#btn-add').dataset.id
    addCarrito(id);
  }

  if (e.target.closest('#btn-remove')) {
    const id = +e.target.closest('#btn-remove').dataset.id
    removeGame(id);
  }
})



buttonBuy.addEventListener('click', (e)=> {
  buy();
})