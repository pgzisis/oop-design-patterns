import { clientCode, Target, Adaptee, Adapter } from './structural/adapter';

console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
clientCode(target);

const adaptee = new Adaptee();
console.log(
  "Client: The Adaptee class has a weird interface. See I don't understand it:"
);
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);
