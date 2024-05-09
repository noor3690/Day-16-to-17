// Ques # 49
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I love ".concat(hobby, "."));
    });
}
;
logHobbies('reading', 'Coding', 'Swiming');
// Ques # 50
var myIdealDay = "My Ideal day would involve:\n1. Waking up early and going for a jog.\n2. Spending a few hours coding on a personal project.\n3. Ending the day by reading a good book.";
console.log(myIdealDay);
// Ques # 51
// Original function for calculating the area of rectangle
function rectangleArea(width, height) {
    return width * height;
}
var ans = rectangleArea(3, 5);
console.log(ans);
// Refactored into an arrow function
var rectangle_area = function (width, height) { return width * height; };
console.log(rectangle_area(3, 9));
