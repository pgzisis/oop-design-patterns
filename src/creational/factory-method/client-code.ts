import { Creator } from './';

export function clientCode(creator: Creator) {
  console.log(
    "Client: I'm not aware of the creator's class, but it still works"
  );
  console.log(creator.someOperation());
}
