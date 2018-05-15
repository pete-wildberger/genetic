import { Parent, Parent_class } from '../src/classes/Parent.class';
import { expect } from 'chai';

// includes Individual_class tests:
// Testing Globals
const goal: string = 'Hello World';
const parent: Parent_class = new Parent(goal);
const possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz0123456789';

describe('Parent Class', () => {
  it('should form the correct object', () => {
    expect(parent.goal).to.be.an('array');
    expect(parent.geneLen).to.equal(parent.goal.length);
  });
  it('Parent.startGenes(len) should return a string array', () => {
    let len: number = 8;
    let genes: string[] = parent.startGenes(len);
    expect(genes).to.be.an('array');
    expect(genes).to.have.lengthOf(len);
  });
});

// Individual class tests
describe('Individual Class', () => {
  it('this.checkFitness(genes, goal): number should return the correct fitness score', () => {
    const genes1: string[] = ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'];
    const genes2: string[] = ['H', 'a', '5', 'c', '3', '3', 'g', '5', 'b', 'f', 'a'];
    const hello: string[] = genes1;
    expect(parent.checkFitness(genes1, hello)).to.equal(genes1.length);
    expect(parent.checkFitness(genes2, hello)).to.equal(1);
  });
  it('this.getRandomInt should return number between min and max', () => {
    const max: number = 16;
    const min: number = 4;
    const rando = parent.getRandomInt(min, max);
    expect(rando).to.be.at.most(max);
    expect(rando).to.be.at.least(min);
  });
  it('this.randomChar() should return a char from the possible string', () => {
    const rando: string = parent.randomChar();
    expect(possible).to.include(rando);
  });
  it('this.mutation() should return an object with change and place properties', () => {
    const len: number = 8;
    const mutant: { change: string; place: number } = parent.mutation(len);
    expect(mutant).to.have.property('change');
    expect(possible).to.include(mutant.change);
    expect(mutant).to.have.property('place');
    expect(mutant.place).to.be.below(len);
    expect(mutant.place).to.be.at.least(0);
  });
});
