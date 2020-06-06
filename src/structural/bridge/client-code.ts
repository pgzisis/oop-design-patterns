import {
  Abstraction,
  ConcreteImplementationA,
  ConcreteImplementationB,
  ExtendedAbstraction,
} from './';

export function clientCode(abstraction: Abstraction) {
  console.log(abstraction.operation());
}

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);
