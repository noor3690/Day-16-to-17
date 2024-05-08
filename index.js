"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// qno # 41
let magicians = ['Rubab', 'Iqra', 'Fareeha Api'];
function showMagicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
showMagicians(magicians);
// Ques #43
let magician = ['Rubab', 'Iqra', 'Fareeha Api'];
function make_great(magician) {
    let greatmagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatmagicians.push(`${magician} the Great`);
    }
    ;
    return greatmagicians;
}
let greatmagicians = make_great(magicians.slice());
console.log(`Original magicians: `);
showMagicians(magicians);
console.log(`Great magicians : `);
showMagicians(greatmagicians);
// QNO #44
function sandwich(...items) {
    console.log(` Sandwich order : `);
    for (let i = 0; i < items.length; i++) {
        console.log(`${items[i]}`);
    }
}
console.log(`Enjoy your sandwich Maham`);
sandwich(' capsicum', 'tomato', 'chicken');
sandwich(' garlic chicken', 'mayo sauce');
//  Ques # 45
function cars(manufacture, modelName, ...extraOption) {
    let carinfo = {
        manufacture,
        modelName,
        ...Object.assign({}, ...extraOption)
    };
    return carinfo;
}
;
let answer = cars('Honda', 'Civic', ['color', 'Black'], { features: ['navigation', 'Power window'] });
console.log(answer);
