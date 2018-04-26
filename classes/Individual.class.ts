export interface Individual_class {
  geneLen: number;
  fitness: number;
  goal: Array<string>;
  genes: Array<string>;
  checkFitness(genes: Array<string>, goal: Array<string>): number;
  spill(): void;
}

export abstract class Individual<Individual_class> {
  public geneLen: number;
  public fitness: number;
  public goal: Array<string>;
  public genes: Array<string>;
  constructor() {}

  checkFitness(genes: Array<string>, goal: Array<string>): number {
    let score: number = 0;
    genes.forEach((char, i) => {
      if (char === goal[i]) {
        score++;
      }
    });
    return score;
  }

  spill() {
    console.log(this.goal, this.geneLen, this.fitness, this.genes);
  }
}
