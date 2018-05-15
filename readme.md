## TS Node Genetic Algorithm

Ts config is set to compile on save but in case that doesn't work use the typescript complier command `tsc`. Download and use `yarn install` to get dependencies and `node main.js` or `yarn start` to start. You will then be prompted for a goal and population to input into the algorithm.
Fitness is calculated by finding how many chars the Individual shares with the goal.
To build 'genes' each 'Individual' goes through a few phases:

1.  We 'naturally select' (remove) the least fit half of the individuals from our population.
2.  Create new individuals to take the 'naturally selected' individuals spots by randomly splitting their two parents 'genes.' After the splice they receive on random 'mutation' character.
3.  sort the Individuals DESC by fitness.

Use `yarn test` to run mocha tests.
