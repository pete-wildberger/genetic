"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Individual = /** @class */ (function () {
    function Individual() {
    }
    Individual.prototype.checkFitness = function (genes, goal) {
        var score = 0;
        genes.forEach(function (char, i) {
            if (char === goal[i]) {
                score++;
            }
        });
        return score;
    };
    Individual.prototype.spill = function () {
        console.log(this.goal, this.geneLen, this.fitness, this.genes);
    };
    return Individual;
}());
exports.Individual = Individual;
