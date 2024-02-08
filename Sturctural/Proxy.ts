// Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object.
// A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0;
    }
  },

  set(target, prop, value) {
    if (prop in target) {
      return value;
    } else {
      throw new Error('There is no such index');
    }
  },
});

console.log(numbers[1]);
console.log(numbers[123]);

numbers[1] = 5;
numbers[123] = 2;
