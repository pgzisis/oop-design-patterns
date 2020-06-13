import { FlyweightFactory } from './flyweight';

export const factory = new FlyweightFactory([
  ['Chevrolet', 'Camaro2018', 'pink'],
  ['Mercedes Benz', 'C300', 'black'],
  ['Mercedes Benz', 'C500', 'red'],
  ['BMW', 'M5', 'red'],
  ['BMW', 'X5', 'white'],
]);

export function addCarToPoliceDatabase(
  ff: FlyweightFactory,
  plates: string,
  owner: string,
  brand: string,
  model: string,
  color: string
) {
  console.log('\nClient: Adding a car to database');
  const flyweight = ff.getFlyweight([brand, model, color]);

  flyweight.operation([plates, owner]);
}
