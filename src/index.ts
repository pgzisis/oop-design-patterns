import {
  Subsystem1,
  Subsystem2,
  Facade,
  clientCode,
} from './structural/facade';

const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem1, subsystem2);
clientCode(facade);
