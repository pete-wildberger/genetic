console.log('TS is sourced');
import { Individual_class } from './classes/Individual.class';
import { Parent, Parent_class } from './classes/Parent.class';
import { Child, Child_class } from './classes/Child.class';
import * as readline from 'readline';

const main = function(): void {
  let parents: Array<Parent_class> = [];
  let population: number = 100;
  let goal: string = 'Hyaaaaah';
  // build colony
  while (population--) {
    parents.push(new Parent(goal));
  }
  // sort by best
  parents.sort((a, b) => {
    if (a.fitness > b.fitness) {
      return -1;
    }
    if (a.fitness < b.fitness) {
      return 1;
    }
    return 0;
  });

  console.log('between');

  // destroy unfit Individuals
  let fitOnes: Array<Parent_class> = parents.slice(0, 49);

  fitOnes.forEach(fit => {
    fit.spill();
  });

  let baby = new Child(goal, fitOnes[0].genes, fitOnes[1].genes);
  console.log(baby.genes);
  console.log(fitOnes[0]);
  console.log(fitOnes[1]);
  console.log(baby);
};
main();
