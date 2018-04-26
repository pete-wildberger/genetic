console.log("TS is sourced");
import { App } from "./classes/App.class";
import * as readline from "readline";

const main = (function(): void {
  let app = new App("Hyaaaaah", 100);
  app.main();
})();
