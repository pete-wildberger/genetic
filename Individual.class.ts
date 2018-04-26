export interface Individual_class {
  geneLen: number;
  fitness: number;
  goal: Array<string>;
  genes: Array<string>;
  spill():void;
}

export class Individual {
  public geneLen: number;
  public fitness: number;
  public goal: Array<string>;
  public genes: Array<string>;
  constructor(goal:string){
    this.goal = goal.split("");
    this.geneLen = this.goal.length;
    this.genes = this.makeGenes(this.geneLen);
    this.fitness = this.checkFitness(this.genes, this.goal);

  }
  checkFitness(genes: Array<string>, goal: Array<string>):number{
    let score:number = 0;
    genes.forEach((char, i) => {
      if(char === goal[i]){
        score++
      }
    })
    return score;
  }

  makeGenes(length: number): Array<string> {
    let text: Array<string> = [];
    const possible:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++){
        text.push(possible.charAt(Math.floor(Math.random() * possible.length)));
    }
    return text;
  }
  spill(){
    console.log(
    this.goal,
    this.geneLen,
    this.fitness,
    this.genes
    );
  }

}
