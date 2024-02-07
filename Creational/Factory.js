class FullTimeEmployee {
  rate = 15;

  work() {
    return `Full time employee works with following rate ${rate}$`;
  }
}

class PartTimeEmployee {
  rate = 10;

  work() {
    return `Part time employee works with following rate ${rate}$`;
  }
}

class EmployeeFactory {
  #employee = null;

  createEmployee(type) {
    if (type === 'fulltime') {
      this.#employee = new FullTimeEmployee();
    }
    if (type === 'part-time') {
      this.#employee = new PartTimeEmployee();
    }
  }

  get employee() {
    return this.#employee;
  }
}