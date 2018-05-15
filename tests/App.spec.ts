import { Child, Child_class } from '../src/classes/Child.class';
import { App } from '../src/classes/App.class';
import { Parent, Parent_class } from '../src/classes/Parent.class';
import * as chai from 'chai';
import * as sorted from "chai-sorted";
const expect = chai.expect;

chai.use(sorted);

const pop:number  = 100;
const goal:string = 'Hello World';
const app:App = new App(goal, pop);
describe('App Class', () => {
  it('App.create_first_generation() should create a properly formed population', () => {
    expect(app.parents).to.be.descendingBy("fitness");
  });
});
