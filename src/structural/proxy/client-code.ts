import { Subject } from './proxy';

export function clientCode(subject: Subject) {
  subject.request();
}
