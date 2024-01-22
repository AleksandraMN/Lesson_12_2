'use strict';

const rectangle = {
  width: 5,
  height: 5,
  set widthR(value) {
    this.width = value;
  },
  set heightR(value) {
    this.height = value;
  },
  get perimeter() {
    return `Периметр прямоугольника равен ` +
    `${this.width * 2 + this.height * 2} см.`;
  },
  get square() {
    return `Площадь прямоугольника равна ${this.width * this.height} см.`;
  },
};

rectangle.widthR = 25;
rectangle.heightR = 25;

console.dir(rectangle);
console.log(rectangle);
console.log(rectangle.perimeter);
console.log(rectangle.square);

