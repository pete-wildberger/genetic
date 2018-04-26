console.log('TS is sourced');
import { Individual_class } from './classes/Individual.class';
import { Parent, Parent_class } from './classes/Parent.class';
import { Child, Child_class } from './classes/Child.class';
import * as readline from 'readline';

const create_and_sort_children = function(goal: string, parents: any[] ): Array<Child> {
  const parents_len: number = parents.length;
  let children: Array<Child_class> = []
  for(let i = 0; i < parents_len; i++){
    if( i + 1 == parents_len ){
      children.push(new Child(goal, parents[i].genes, parents[0].genes));
    } else {
      children.push(new Child(goal, parents[i].genes, parents[i + 1].genes));
    }
  }
  children.sort((a, b) => {
    if (a.fitness > b.fitness) {
      return -1;
    }
    if (a.fitness < b.fitness) {
      return 1;
    }
    return 0;
  });
  return children;
}

const main = function(): void {
  let parents: Array<Parent_class> = [];
  let population: number = 100;
  let goal: string = 'Hyaaaaah';
  // build colony
  // create first generation
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
  let kids = create_and_sort_children(goal, fitOnes);

  console.log(kids);

};
main();
