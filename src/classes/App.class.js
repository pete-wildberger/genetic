"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Child_class_1 = require("./Child.class");
var Parent_class_1 = require("./Parent.class");
var App = /** @class */ (function () {
    function App(goal, pop) {
        var _this = this;
        this.main = function () {
            var gen_1 = _this.run_generation(_this.goal, _this.parents, _this.population);
            var gen_2 = _this.run_generation(_this.goal, gen_1, _this.population);
            var gen_3 = _this.run_generation(_this.goal, gen_2, _this.population);
            var gen_4 = _this.run_generation(_this.goal, gen_3, _this.population);
            console.log(gen_4.length);
            console.log(gen_4);
        };
        this.goal = goal;
        this.population = pop;
        this.parents = this.create_first_generation(goal, pop);
    }
    App.prototype.create_first_generation = function (goal, population) {
        var parents = [];
        // build colony
        // create first generation
        while (population--) {
            parents.push(new Parent_class_1.Parent(goal));
        }
        // sort by best
        return this.sort_by_fitness(parents);
    };
    App.prototype.create_and_sort_children = function (goal, parents) {
        var parents_len = parents.length;
        var children = [];
        for (var i = 0; i < parents_len; i++) {
            if (i + 1 == parents_len) {
                children.push(new Child_class_1.Child(goal, parents[i].genes, parents[0].genes));
            }
            else {
                children.push(new Child_class_1.Child(goal, parents[i].genes, parents[i + 1].genes));
            }
        }
        return this.sort_by_fitness(children);
    };
    App.prototype.natural_selection = function (arr, pop) {
        return arr.splice(0, Math.floor(arr.length / 2));
    };
    App.prototype.run_generation = function (goal, parents, population) {
        // select for fit
        var fittest = this.natural_selection(parents, population);
        // create from fit
        var kids = this.create_and_sort_children(goal, fittest);
        //  join
        var combined = fittest.concat(kids);
        return this.sort_by_fitness(combined);
    };
    App.prototype.sort_by_fitness = function (arr) {
        arr.sort(function (a, b) {
            if (a.fitness > b.fitness) {
                return -1;
            }
            if (a.fitness < b.fitness) {
                return 1;
            }
            return 0;
        });
        return arr;
    };
    return App;
}());
exports.App = App;
