'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  discount: 0,
  get priceT() {
    this.calculateItemPrice();
    return this.totalPrice;
  },
  set priceT(sum) {
    this.totalPrice = sum;
  },
  add(x, y, z, p) {
    const obj =
    {'nameProduct': x, 'price': y, 'count': z, 'promocode': p};
    const array = this.items.push(obj);
    this.calculateItemPrice();
    this.increaseCount(z);
    this.setDiscount = p;
    return array;
  },
  increaseCount(z) {
    return this.count += z;
  },
  get setDiscount() {
    return this.discount;
  },
  set setDiscount(p) {
    const arr = [];
    this.items.map((item) => {
      const {promocode} = item;
      return arr.push(promocode);
    });
    let discount = 0;
    for (const p of arr) {
      if (p === 'METHED') {
        discount += 15;
      }
      if (p === 'NEWYEAR') {
        discount += 21;
      }
    }
    this.discount = discount;
  },
  calculateItemPrice() {
    const array = [];
    let sum = 0;
    this.items.map((item) => {
      const {price} = item;
      return array.push(price);
    });
    array.reduce((acc, item, array) => {
      sum = acc + item;
      return sum;
    }, 0);
    sum -= ((sum * this.discount) / 100);
    return this.priceT = sum;
  },
  clear() {
    return this.items.splice(0, this.items.length),
    this.totalPrice = 0, this.count = 0, this.discount = 0;
  },
  print() {
    const str = JSON.stringify(this.items);
    console.log('Корзина товаров: ', str);
    console.log(`Общая стоимость товаров в корзине = ${this.priceT} рублей.`);
    console.log(`Общее количество товаров в корзине = ${this.count} шт.`);
    console.log(`Общая скидка по промокодам = ${this.setDiscount} %.`);
  },
};


cart.add('яйца', 200, 1, 'METHED');
cart.add('молоко', 130, 1);
cart.add('рожки', 70, 1);
cart.add('сыр', 655, 1);
cart.add('масло', 475, 1, 'NEWYEAR');

cart.print();

cart.totalPrice = 10;
// cart.clear();
cart.print();
console.dir(cart);
