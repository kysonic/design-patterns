// Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.
abstract class Chair {
  abstract hasLegs(): boolean;
  abstract sitOn(): boolean;
}

class ModernChair extends Chair {
  material = 'plastic';

  hasLegs(): boolean {
    return true;
  }

  sitOn(): boolean {
    return false;
  }
}

class BarrocoChair extends Chair {
  material = 'wood';

  hasLegs(): boolean {
    return true;
  }

  sitOn(): boolean {
    return false;
  }
}

class ChairFactory {
  createChair(type: string): Chair | void {
    if (type === 'modern') {
      return new ModernChair();
    }

    if (type === 'barocco') {
      return new BarrocoChair();
    }
  }
}
