// Ques # 49
function logHobbies (...hobbies : string[]){
    hobbies.forEach(hobby => {
        console.log(`I love ${hobby}.`)
    });
};
logHobbies('reading', 'Coding', 'Swiming');

// Ques # 50
let myIdealDay = `My Ideal day would involve:
1. Waking up early and going for a jog.
2. Spending a few hours coding on a personal project.
3. Ending the day by reading a good book.`;
console.log(myIdealDay)

// Ques # 51
// Original function for calculating the area of rectangle
function rectangleArea (width : number , height : number){
    return width * height;
}
let ans = rectangleArea(3,5);
console.log(ans);
// Refactored into an arrow function
let rectangle_area = (width : number , height : number) : number => width * height;
console.log(rectangle_area(3,9));