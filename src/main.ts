console.log("TS is sourced");
import { App } from "./classes/App.class";
import * as readline from "readline-sync";

const main = (function(): void {
  const goal: string = readline.question('Enter Goal string> ');
  const pop: number = Number(readline.question('Enter population size> '));
  const app: App = new App(goal, pop);
  app.main();
  process.exit(0);
})();
