// Memento is a behavioral design pattern that allows making snapshots of an object’s state and restoring it in future.

// UNDO/REDO, Redux time travel

abstract class Operation {
  abstract execute(value: number): number;
}

class OperationA extends Operation {
  execute(value: number): number {
    return value + 10;
  }
}

class OperationB extends Operation {
  execute(value: number): number {
    return value - 2;
  }
}

class Momento {
  state = { value: 0 };
  snapshots: string[] = [];
  currentIndex = 0;

  do(operation: Operation) {
    // Execute operation
    this.state.value = operation.execute(this.state.value);
    // Save snap
    this.snapshots.push(JSON.stringify(this.state));
    this.currentIndex++;
  }

  undo() {
    if (this.currentIndex <= 0) {
      return;
    }

    this.state = JSON.parse(this.snapshots[this.currentIndex - 1]);
    this.currentIndex--;
  }

  redo() {
    if (this.currentIndex >= this.snapshots.length - 1) {
      return;
    }

    this.state = JSON.parse(this.snapshots[this.currentIndex + 1]);
    this.currentIndex++;
  }
}

const momento = new Momento();
const operationA = new OperationA();
const operationB = new OperationB();

momento.do(operationA); // 10
momento.do(operationB); // 8
momento.do(operationB); // 6

momento.undo(); // 8
momento.undo(); // 10

momento.redo(); // 8
