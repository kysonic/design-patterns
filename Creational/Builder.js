class House {
  roof = '';
  walls = [];

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

