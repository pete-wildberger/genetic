import { Individual, Individual_class } from './Individual.class';

export interface Child_class extends Individual_class {
  makeGenes(momGenes: Array<string>, dadGenes: Array<string>, len: number): Array<string>;
}

export class Child<Child_class> extends Individual<Individual_class> {
  constructor(goal: string, mom: Array<string>, dad: Array<string>) {
    super();
    this.goal = goal.split('');
    this.geneLen = this.goal.length;
    this.genes = this.makeGenes(mom, dad, this.geneLen);
    this.fitness = this.checkFitness(this.genes, this.goal);
  }

  makeGenes(momGenes: Array<string>, dadGenes: Array<string>, len: number): Array<string> {
    const mutations: { change: string; place: number } = this.mutation(len);
    let i: number;
    let result: Array<string> = [];
    let positions: Array<number> = [];
    let exchangeLen: number = Math.floor(len / 2);
    // randomly choosing which genes to swap
    while (exchangeLen) {
      let num: number = this.getRandomInt(0, len - 1);
      if (positions.indexOf(num) === -1) {
        positions.push(num);
        exchangeLen--;
      }
    }
    // swapping genes between parents
    i = this.geneLen;
    while (i--) {
      if (positions.indexOf(i) === -1) {
        result[i] = dadGenes[i];
      } else {
        result[i] = momGenes[i];
      }
    }
    result[mutations.place] = mutations.change;
    return result;
  }
}
