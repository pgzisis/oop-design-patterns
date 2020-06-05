import {
  ConcreteCreator1,
  ConcreteCreator2,
  clientCode,
} from './creational/factory-method';

console.log('App: Launched with the ConcreteCreator1\n');
clientCode(new ConcreteCreator1());

console.log('App: Launched with the ConcreteCreator2\n');
clientCode(new ConcreteCreator2());
