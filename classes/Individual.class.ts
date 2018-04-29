export interface Individual_class {
  geneLen: number;
  fitness: number;
  goal: Array<string>;
  genes: Array<string>;
  checkFitness(genes: Array<string>, goal: Array<string>): number;
  getRandomInt(min: number, max: number): number;
  mutation(len: number): { change: string; place: number };
  randomChar(): string;
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
  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  mutation(len: number): { change: string; place: number } {
    let change: string = this.randomChar();
    let place: number = this.getRandomInt(0, len - 1);
    return { change, place };
  }
  randomChar(): string {
    const possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const len = possible.length;
    return possible.charAt(Math.floor(Math.random() * len));
  }
  spill() {
    console.log(this.goal, this.geneLen, this.fitness, this.genes);
  }
}
