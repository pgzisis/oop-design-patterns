import { Context, ConcreteStrategyA, ConcreteStrategyB } from './strategy';

const context = new Context(new ConcreteStrategyA());
console.log('Client: Strategy is set to normal sorting');
context.doSomeBusinessLogic();

console.log('Client: Strategy is set to reverse sorting');
context.setStrategy(new ConcreteStrategyB());
context.doSomeBusinessLogic();
