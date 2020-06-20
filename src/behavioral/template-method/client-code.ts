import {
  AbstractClass,
  ConcreteClass1,
  ConcreteClass2,
} from './template-method';

function clientCode(abstractClass: AbstractClass) {
  abstractClass.templateMethod();
}

console.log('Some client code can work with different subclasses:');
clientCode(new ConcreteClass1());

console.log('Same client code can work with different subclasses:');
clientCode(new ConcreteClass2());
