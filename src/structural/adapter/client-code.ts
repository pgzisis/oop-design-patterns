import { Target } from './';

export function clientCode(target: Target) {
  console.log(target.request());
}
