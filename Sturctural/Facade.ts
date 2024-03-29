// Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.

// Looks like command in clean architecture or service ()

class Subsystem1 {
  operation1() {
    console.log('Perform operation 1');
  }
  operationN() {
    console.log('Perform operation N');
  }
}

class Subsystem2 {
  operation1() {
    console.log('Perform operation 2');
  }
  operationZ() {
    console.log('Perform operation Z');
  }
}

class Facade {
  protected subsystem1: Subsystem1;

  protected subsystem2: Subsystem2;

  /**
   * Depending on your application's needs, you can provide the Facade with
   * existing subsystem objects or force the Facade to create them on its own.
   */
  constructor(subsystem1?: Subsystem1, subsystem2?: Subsystem2) {
    this.subsystem1 = subsystem1 || new Subsystem1();
    this.subsystem2 = subsystem2 || new Subsystem2();
  }

  /**
   * The Facade's methods are convenient shortcuts to the sophisticated
   * functionality of the subsystems. However, clients get only to a fraction
   * of a subsystem's capabilities.
   */
  public operation(): string {
    let result = 'Facade initializes subsystems:\n';
    result += this.subsystem1.operation1();
    result += this.subsystem2.operation1();
    result += 'Facade orders subsystems to perform the action:\n';
    result += this.subsystem1.operationN();
    result += this.subsystem2.operationZ();

    return result;
  }
}
