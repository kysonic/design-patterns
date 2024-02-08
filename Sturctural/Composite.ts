// Composite is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects.

// Actually this pattern implements Tree data structure, so you can use classic tree or BST
abstract class Component {
  protected parent: Component | null;

  public setParent(parent: Component | null) {
    this.parent = parent;
  }

  public getParent(): Component | null {
    return this.parent;
  }

  public add(component: Component) {}
  public remove(component: Component) {}

  public isComposite(): boolean {
    return false;
  }

  public abstract operation(): string;
}

// Leaf it is node that does't have children
class Leaf extends Component {
  public operation(): string {
    return 'Leaf';
  }
}

class Composite extends Component {
  protected children: Component[] = [];

  /**
   * A composite object can add or remove other components (both simple or
   * complex) to or from its child list.
   */
  public add(component: Component): void {
    this.children.push(component);
    component.setParent(this);
  }

  public remove(component: Component): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);

    component.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }

  /**
   * The Composite executes its primary logic in a particular way. It
   * traverses recursively through all its children, collecting and summing
   * their results. Since the composite's children pass these calls to their
   * children and so forth, the whole object tree is traversed as a result.
   */
  public operation(): string {
    const results: string[] = [];
    for (const child of this.children) {
      results.push(child.operation());
    }

    return `Branch(${results.join('+')})`;
  }
}

/**
 * The client code works with all of the components via the base interface.
 */
function clientCode(component: Component) {
  // ...

  console.log(`RESULT: ${component.operation()}`);

  // ...
}

/**
 * This way the client code can support the simple leaf components...
 */
const simple = new Leaf();
console.log("Client: I've got a simple component:");
clientCode(simple);
console.log('');

/**
 * ...as well as the complex composites.
 */
const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Composite();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
console.log("Client: Now I've got a composite tree:");
clientCode(tree);
console.log('');
