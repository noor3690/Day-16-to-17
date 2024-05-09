// Ques # 46
let laptop = {
    make : 'Dell',
    model : 'XPS 15',
    year : 2021,
    describe : function(){
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
};
laptop.describe()


// Ques # 47
let laptops = [
    {
    make : 'Dell',
    model : 'XPS 15',
    year : 2021
    },
    {
        make : 'Apple',
        model : 'MacBook Pro',
        year : 2020 
    },
    {
        make : 'HP',
        model : 'Spectre x360',
        year : 2018
    }
];
let [laptop1, laptop2 , laptop3] = laptops;
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);

// Ques # 48
let priceSet1 = [1200, 400, 1600];
let priceSet2 = [1700, 800, 1900];
let combinedPrice = [...priceSet1 , ...priceSet2].sort(( a , b) => a- b);
console.log(combinedPrice);


















