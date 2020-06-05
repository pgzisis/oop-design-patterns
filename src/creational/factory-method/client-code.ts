import { Creator, ConcreteCreator1, ConcreteCreator2 } from './';

export function clientCode(creator: Creator) {
  console.log(
    "Client: I'm not aware of the creator's class, but it still works"
  );
  console.log(creator.someOperation());
}

console.log('App: Launched with the ConcreteCreator1\n');
clientCode(new ConcreteCreator1());

console.log('App: Launched with the ConcreteCreator2\n');
clientCode(new ConcreteCreator2());
