console.log('TS is sourced');
import { Individual_class } from './classes/Individual.class';
import { Parent, Parent_class } from './classes/Parent.class';
import { Child, Child_class } from './classes/Child.class';
import { App } from './classes/App.class';
import * as readline from 'readline';

const main = (function(): void {
  let app = new App('Hyaaaaah', 100);
  app.main();
})();
