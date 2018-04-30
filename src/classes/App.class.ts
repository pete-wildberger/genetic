import { Child, Child_class } from './Child.class';
import { Parent, Parent_class } from './Parent.class';

export class App {
  public population: number;
  public goal: string;
  public parents: Array<Parent_class>;
  constructor(goal: string, pop: number) {
    this.goal = goal;
    this.population = pop;
    this.parents = this.create_first_generation(goal, pop);
  }

  main = (): void => {
    this.run(this.goal, this.parents, this.population);
  };

  run = (goal: string, start: Array<Parent_class>, pop: number) => {
    let counter: number = 0;
    let done: number = 0;
    let current_gen: any[] = this.run_generation(goal, start, pop);
    while (done === 0) {
      console.log(goal);
      console.log(current_gen[0]);
      if (current_gen[0].fitness === goal.length) {
        done = 1;
      } else {
        current_gen = this.run_generation(goal, current_gen, pop);
        counter++;
      }
    }
    console.log(counter);
  };
  create_first_generation(goal: string, population: number): Array<Parent_class> {
    let parents: Array<Parent_class> = [];
    // build colony
    // create first generation
    while (population--) {
      parents.push(new Parent(goal));
    }
    // sort by best
    return this.sort_by_fitness(parents);
  }

  create_and_sort_children(goal: string, parents: any[]): Array<Child_class> {
    const parents_len: number = parents.length;
    let children: Array<Child_class> = [];
    for (let i = 0; i < parents_len; i++) {
      if (i + 1 == parents_len) {
        children.push(new Child(goal, parents[i].genes, parents[0].genes));
      } else {
        children.push(new Child(goal, parents[i].genes, parents[i + 1].genes));
      }
    }
    return this.sort_by_fitness(children);
  }

  natural_selection(arr: any[], pop: number): any[] {
    return arr.splice(0, Math.floor(arr.length / 2));
  }

  run_generation(goal: string, parents: any[], population: number): any[] {
    // select for fit
    let fittest = this.natural_selection(parents, population);
    // create from fit
    let kids = this.create_and_sort_children(goal, fittest);
    //  join
    let combined = fittest.concat(kids);

    return this.sort_by_fitness(combined);
  }

  sort_by_fitness(arr: any[]): any[] {
    arr.sort((a, b) => {
      if (a.fitness > b.fitness) {
        return -1;
      }
      if (a.fitness < b.fitness) {
        return 1;
      }
      return 0;
    });
    return arr;
  }
}
