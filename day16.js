var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Ques # 46
var laptop = {
    make: 'Dell',
    model: 'XPS 15',
    year: 2021,
    describe: function () {
        console.log("This laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    }
};
laptop.describe();
// Ques # 47
var laptops = [
    {
        make: 'Dell',
        model: 'XPS 15',
        year: 2021
    },
    {
        make: 'Apple',
        model: 'MacBook Pro',
        year: 2020
    },
    {
        make: 'HP',
        model: 'Spectre x360',
        year: 2018
    }
];
var laptop1 = laptops[0], laptop2 = laptops[1], laptop3 = laptops[2];
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
// Ques # 48
var priceSet1 = [1200, 400, 1600];
var priceSet2 = [1700, 800, 1900];
var combinedPrice = __spreadArray(__spreadArray([], priceSet1, true), priceSet2, true).sort(function (a, b) { return a - b; });
console.log(combinedPrice);
