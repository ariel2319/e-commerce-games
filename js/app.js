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
    price: 19.9,
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
          <button class="store_button_add" id="btn-add">
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
          <button class="sale_button_add">
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