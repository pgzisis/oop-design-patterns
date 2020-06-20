import { Target } from './adapter';

export function clientCode(target: Target) {
  console.log(target.request());
}
