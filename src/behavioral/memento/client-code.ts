import { Originator, Caretaker } from './';

const originator = new Originator('Super-duper-super-puper-super');
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.showHistory();

console.log("\nClient: Now, let's rollback!\n");
caretaker.undo();

console.log('\nClient: Once more!\n');
caretaker.undo();
