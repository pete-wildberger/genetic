import { Individual, Individual_class } from './Individual.class';

export interface Parent_class extends Individual_class {
  startGenes(length: number): Array<string>;
}

export class Parent extends Individual<Individual_class> {
  constructor(goal: string) {
    super();
    this.goal = goal.split('');
    this.geneLen = this.goal.length;
    this.genes = this.startGenes(this.geneLen);
    this.fitness = this.checkFitness(this.genes, this.goal);
  }
  startGenes(length: number): Array<string> {
    let text: Array<string> = [];
    const possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
      text.push(possible.charAt(Math.floor(Math.random() * possible.length)));
    }
    return text;
  }
}
