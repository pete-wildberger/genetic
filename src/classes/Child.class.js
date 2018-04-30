"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Individual_class_1 = require("./Individual.class");
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(goal, mom, dad) {
        var _this = _super.call(this) || this;
        _this.makeGenes = function (momGenes, dadGenes) {
            var i;
            var result = [];
            var positions = [];
            var exchangeLen = Math.floor(_this.geneLen / 2);
            // randomly choosing which genes to swap
            while (exchangeLen) {
                var num = _this.getRandomInt(0, _this.geneLen - 1);
                if (positions.indexOf(num) === -1) {
                    positions.push(num);
                    exchangeLen--;
                }
            }
            // swapping genes between parents
            i = _this.geneLen;
            while (i--) {
                if (positions.indexOf(i) === -1) {
                    result[i] = dadGenes[i];
                }
                else {
                    result[i] = momGenes[i];
                }
            }
            return result;
        };
        _this.goal = goal.split("");
        _this.geneLen = _this.goal.length;
        _this.genes = _this.makeGenes(mom, dad);
        _this.fitness = _this.checkFitness(_this.genes, _this.goal);
        return _this;
    }
    Child.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return Child;
}(Individual_class_1.Individual));
exports.Child = Child;
