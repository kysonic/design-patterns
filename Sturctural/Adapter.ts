// Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.

interface IShipping {
  request(zipStart: number, zipEnd: number, weight: number): string;
}

class Shipping implements IShipping {
  request(zipStart, zipEnd, weight) {
    return '45$';
  }
}

class AdvancedShipping {
  login(credentials: any) {}
  setStart(zip: number) {}
  setDestination(zip: number) {}
  calculate(weight: number): string {
    return '45$';
  }
}

class ShippingAdapter implements IShipping {
  private _shipping: AdvancedShipping | null = null;

  constructor(credentials) {
    this._shipping = new AdvancedShipping();
    // New version of shipping required authorization
    this._shipping.login(credentials);
  }

  // There is no request method in new advanced shipping, but our code works with it
  request(zipStart, zipEnd, weight) {
    this._shipping?.setStart(zipStart);
    this._shipping?.setDestination(zipEnd);

    return this._shipping?.calculate(weight) ?? 'xx-xx';
  }
}
