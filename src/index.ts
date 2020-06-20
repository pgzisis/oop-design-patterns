import {
  Invoker,
  SimpleCommand,
  Receiver,
  ComplexCommand,
} from './behavioral/command/command';

const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand('Say Hi!'));

const receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));

invoker.doSomethingImportant();
