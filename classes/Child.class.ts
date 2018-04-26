import { Individual, Individual_class } from "./Individual.class";

export interface Child_class extends Individual_class {
  makeGenes(momGenes: Array<string>, dadGenes: Array<string>): Array<string>;
  getRandomInt(min: number, max: number): number;
}

export class Child<Child_class> extends Individual<Individual_class> {
  constructor(goal: string, mom: Array<string>, dad: Array<string>) {
    super();
    this.goal = goal.split("");
    this.geneLen = this.goal.length;
    this.genes = this.makeGenes(mom, dad);
    this.fitness = this.checkFitness(this.genes, this.goal);
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  makeGenes = (
    momGenes: Array<string>,
    dadGenes: Array<string>
  ): Array<string> => {
    let i: number;
    let result: Array<string> = [];
    let positions: Array<number> = [];
    let exchangeLen: number = Math.floor(this.geneLen / 2);
    // randomly choosing which genes to swap
    while (exchangeLen) {
      let num: number = this.getRandomInt(0, this.geneLen - 1);
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
    return result;
  };
}
