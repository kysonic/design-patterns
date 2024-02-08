// Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these
// objects inside special wrapper objects that contain the behaviors.

function timeStamp() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      return original.apply(this, [`[${Date.now()}]: ${args[0]}`]);
    };
  };
}

class Logger {
  @timeStamp()
  log(message: string) {
    console.log(message);
  }
}

const logger = new Logger();

logger.log('Hello world');

// Also decorators could be implemented as function calls other function
// Or as class that calls super method
