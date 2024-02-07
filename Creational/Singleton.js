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

  #volume = 1;
  
  constructor(volume) {
     this.#volume = volume;
  }

  static init(volume) {
    this.instance = new AudioManager(volume);
  }

  increaseVolume() {
    this.#volume += 0.1;
  }
}

AudioManager.init(0.5);
AudioManager.instance.increaseVolume();