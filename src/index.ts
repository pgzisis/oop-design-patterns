import {
  clientCode,
  ConcreteImplementationA,
  Abstraction,
  ConcreteImplementationB,
  ExtendedAbstraction,
} from './structural/bridge';

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);
