// State is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.

abstract class State {
  context: Context;

  setContext(context: Context) {
    this.context = context;
  }

  abstract operation1(): string;
  abstract operation2(): string;
}

class StateA extends State {
  operation1(): string {
    return 'stateA - o1';
  }

  operation2(): string {
    return 'stateA - o2';
  }
}

class StateB extends State {
  operation1(): string {
    return 'stateB - o1';
  }

  operation2(): string {
    return 'stateB - o2';
  }
}

class Context {
  state: State;

  constructor(state: State) {
    this.changeState(state);
  }

  changeState(state: State) {
    this.state = state;
    state.setContext(this);
  }

  handle1() {
    const result = this.state.operation1();
    console.log(result);
    // Demonstrate how to change state at runtime
    this.changeState(new StateB());
  }

  handle2() {
    const result = this.state.operation2();
    console.log(result);
  }
}

const stateA = new StateA();

const context = new Context(stateA);
context.handle1();
context.handle2();
