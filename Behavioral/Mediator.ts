// Mediator is a behavioral design pattern that reduces coupling between components of a program by making them communicate indirectly, through a special mediator object.

abstract class BaseComponent {
  protected mediator: Mediator;

  constructor(mediator?: Mediator) {
    this.mediator = mediator!;
  }

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  public abstract operation(): void;
}

class ComponentA extends BaseComponent {
  operation(): void {
    console.log('Run component A operation');
    this.mediator.notify(this, 'A');
  }
}

class ComponentB extends BaseComponent {
  operation(): void {
    console.log('Run component B operation');
  }
}

class Mediator {
  private componentA: BaseComponent;
  private componentB: BaseComponent;

  constructor(componentA: BaseComponent, componentB: BaseComponent) {
    this.componentA = componentA;
    this.componentB = componentB;
  }

  public notify(sender: BaseComponent, event: string) {
    if (event === 'A') {
      this.componentB.operation();
    }

    if (event === 'B') {
      this.componentA.operation();
    }
  }
}
const componentA = new ComponentA();
const componentB = new ComponentB();
const mediator = new Mediator(componentA, componentB);
componentA.setMediator(mediator);
componentB.setMediator(mediator);
// Component A will perform operation, and triggers component B although he doesn't know anything about it
componentA.operation();
