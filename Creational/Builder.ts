// Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

class House {
  roof = '';
  walls: string[] = [];

  constructor() {
    this.buildRoof();
    this.buildWall('left');
    this.buildWall('right');
    this.buildWall('front');
    this.buildWall('behind');
  }

  buildRoof() {
    this.roof = 'roof';
  }

  buildWall(type) {
    this.walls.push(type);
  }
}
