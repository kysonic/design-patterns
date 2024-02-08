// Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

// Just object
const mySingleton = {
  property1: 'something',
  property2: 'something else',
  method1() {
    console.log('hello world');
  },
};

// Unity like
class AudioManager {
  static instance;

  private _volume = 1;

  constructor(volume) {
    this._volume = volume;
  }

  static init(volume) {
    this.instance = new AudioManager(volume);
  }

  increaseVolume() {
    this._volume += 0.1;
  }
}

AudioManager.init(0.5);
AudioManager.instance.increaseVolume();
