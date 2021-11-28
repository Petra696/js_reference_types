console.log('Person');
let name = "Petra";
let age = 45;

//Object persoon
let person = {
    name: "Petra",
    age: 45
};
console.log(person);

//only name
person["name"] = "Petra";
console.log(person.name);

//only age
person["age"] = "45";
console.log(person.age);

//behaalde cijfers
let evaluations = ["7", "10", "9"];
console.log(evaluations);
//value is 3

//Arrays selecteren kleuren
let selectedColors = ["green", "blue", "orange"];
selectedColors[3] = 1;
console.log(selectedColors[0]);

//Arrays selecteren kleuren
let selectedColors1 = ["green", "blue", "orange"];
selectedColors1[3] = 1;
console.log(selectedColors1[2]);

//Arrays selecteren kleuren
let selectedColors2 = ["green", "blue", "orange"];
selectedColors2[3] = ("yellow");
console.log(selectedColors2);

//Arrays push kleuren
let selectedColors3 = ["green", "blue", "orange", "yellow"];
selectedColors3.push("5");
console.log(selectedColors3);

//object to array
let selectedColors4 = ["green", "blue", "orange", "yellow", "5"];
selectedColors4.push("greeting: hi, I am an object");
console.log(selectedColors4[5]);