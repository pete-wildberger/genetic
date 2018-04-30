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
var Parent = /** @class */ (function (_super) {
    __extends(Parent, _super);
    function Parent(goal) {
        var _this = _super.call(this) || this;
        _this.goal = goal.split("");
        _this.geneLen = _this.goal.length;
        _this.genes = _this.startGenes(_this.geneLen);
        _this.fitness = _this.checkFitness(_this.genes, _this.goal);
        return _this;
    }
    Parent.prototype.startGenes = function (length) {
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var len = possible.length;
        var text = [];
        for (var i = 0; i < length; i++) {
            text.push(possible.charAt(Math.floor(Math.random() * len)));
        }
        return text;
    };
    return Parent;
}(Individual_class_1.Individual));
exports.Parent = Parent;
