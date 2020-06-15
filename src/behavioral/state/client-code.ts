import { Context, ConcreteStateA } from './state';

const context = new Context(new ConcreteStateA());
context.request1();
context.request2();
