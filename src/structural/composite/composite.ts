export abstract class Component {
  protected parent!: Component | null;

  public setParent(parent: Component | null) {
    this.parent = parent;
  }

  public getParent(): Component | null {
    return this.parent;
  }

  public add(_component: Component): void {}

  public remove(_component: Component): void {}

  public isComposite(): boolean {
    return false;
  }

  public abstract operation(): string;
}

export class Leaf extends Component {
  public operation(): string {
    return 'Leaf';
  }
}

export class Composite extends Component {
  protected children: Component[] = [];

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

  public operation(): string {
    const results = [];
    for (const child of this.children) {
      results.push(child.operation());
    }

    return `Branch(${results.join('+')})`;
  }
}
