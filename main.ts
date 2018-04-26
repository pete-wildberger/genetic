console.log('TS is sourced');
import { Individual, Individual_class } from './Individual.class';
import * as readline from 'readline';


const main = function():void {
  let parents: Array<Individual_class> = []
  let population: number = 100;
  // build colony
  while(population--){
    parents.push(new Individual('Hyaaaaah'))
  }
  // sort by best
  parents.sort((a, b) => {
    if(a.fitness < b.fitness){
      return -1;
    }
    if(a.fitness > b.fitness){
      return 1;
    }
    return 0;
  });
  let i = parents.length;
  while(i--){
    parents[i].spill();
  }

  console.log('between');

  // destroy unfit Individuals
  let fitOnes: any[] = parents.splice(49, 99);

  let j = fitOnes.length;
  while(j--){
    fitOnes[j].spill();
  }
}
main();
