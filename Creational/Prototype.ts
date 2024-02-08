// Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

function Animal(name) {
  this.name = name;
}

Animal.prototype.myName = function () {
  console.log(`My name is ${this.name}`);
};

const animal = new Animal('Fafik');
animal.myName();
