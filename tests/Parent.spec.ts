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
});

// Individual class tests
describe('Individual Class', () => {
  it('this.getRandomInt should return number between min and max', () => {
    const max: number = 16;
    const min: number = 4;
    const rando = parent.getRandomInt(min, max);
    expect(rando).to.be.below(max);
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
