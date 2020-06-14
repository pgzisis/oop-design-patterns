import {
  MonkeyHandler,
  SquirrelHandler,
  DogHandler,
  clientCode,
} from './behavioral/chain-of-responsibility';

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

console.log('Chain: Monkey > Squirrel > Dog\n');
clientCode(monkey);

console.log('Subchain: Squirrel > Dog\n');
clientCode(squirrel);
