import { Child, Child_class } from './Child.class';
import { Parent, Parent_class } from './Parent.class';

export class App {
  public population: number;
  public goal: string;
  public parents: Array<Parent_class>;
  constructor(goal:string, pop: number){
    this.goal = goal;
    this.population = pop;
    this.parents = this.create_first_generation(goal, pop);
  }
  create_first_generation(goal:string, population:number ): Array<Parent_class> {
    let parents: Array<Parent_class> = [];
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
    return parents;
  }
  natural_selection(arr:any[], pop: number): any[]{
    const half:number = Math.floor(arr.length / 2);
    return arr.slice(0, half);
  }
  create_and_sort_children(goal: string, parents: any[] ): Array<Child> {
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

  main = ():void => {
    let fittest = this.natural_selection(this.parents, this.population);
    let kids = this.create_and_sort_children(this.goal, this.parents);
    console.log(kids);
  }

}
