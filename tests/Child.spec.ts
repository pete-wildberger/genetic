import { Child, Child_class } from '../src/classes/Child.class';
import { expect } from 'chai';

const goal:string = 'Hello World';
const dad: string[] = ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'];
const mom: string[] = ['H', 'a', '5', 'c', '3', '3', 'g', '5', 'b', 'f', 'a'];
const child:Child_class = new Child(goal, mom, dad);

describe('Child Class', () => {
  it('Child.makeGenes() should create a proper genes', () => {
    expect(child.genes.length).to.equal(goal.length);
  });
});
