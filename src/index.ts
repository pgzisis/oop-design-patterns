import {
  clientCode,
  ConcreteFactory1,
  ConcreteFactory2,
} from './creational/abstract-factory';

console.log('Client: Testing client code with the first factory type...');
clientCode(new ConcreteFactory1());

console.log(
  'Client: Testing the same client code with the second factory type...'
);
clientCode(new ConcreteFactory2());
