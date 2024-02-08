// Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
interface IEmployee {
  rate: number;
}

class FullTimeEmployee implements IEmployee {
  rate = 15;

  work() {
    return `Full time employee works with following rate ${this.rate}$`;
  }
}

class PartTimeEmployee implements IEmployee {
  rate = 10;

  work() {
    return `Part time employee works with following rate ${this.rate}$`;
  }
}

class EmployeeFactory {
  private _employee: IEmployee | null = null;

  createEmployee(type) {
    if (type === 'fulltime') {
      this._employee = new FullTimeEmployee();
    }
    if (type === 'part-time') {
      this._employee = new PartTimeEmployee();
    }
  }

  get employee() {
    return this._employee;
  }
}
