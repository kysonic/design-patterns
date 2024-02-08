// Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers.
// Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

// Looks like linked list with handle operation
// Although it cannot

interface IHandler {
  setNext(handler: IHandler): IHandler;
  handle(request: string): string | null;
}

abstract class AbstractHandler implements IHandler {
  private nextHandler: IHandler;

  public setNext(handler: IHandler): IHandler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}

// Handlers
class MonkeyHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === 'Banana') {
      return `Monkey: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}

class SquirrelHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === 'Nut') {
      return `Squirrel: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}

class DogHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === 'MeatBall') {
      return `Dog: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}
