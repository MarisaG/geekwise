 var students = ["Haley", "matt", "david","micaela", "osvaldo", "rose", "alfredo", "rigoberto","leonardo", "gustavo", "erica", "kevin", "montgomery", "cobi", "joshua" ];

var fruits = ["mango", "apple", "orange", "plum", "lemon", ];
// console.log(fruits);

//push adds to the end of the array
fruits.push("peaches");
// console.log(fruits);

//pop removes from the end
  var lastFruit = fruits.pop();
// console.log(fruits);
// console.log(lastFruit);

//unshift adds to the front of the array
fruits.unshift('kiwi');
// console.log(fruits);

//shift removes from the front
var firstFruit = fruits.shift();
// console.log(fruits);
// console.log(firstFruit);

//IndexOf- Finds the index of an item in an array
var posFruit = fruits.indexOf("plum");
// console.log(posFruit);

//Splice- remove and item by idex number
var remFruit = fruits.splice(1,1);
 //                          ^  ^
                      // index  number removed

// console.log(remFruit);
// console.log(fruits);
|
//Slice- copies an array
var copyFruit = fruits.slice(2,3);
//                           ^ ^
//             starting index up-to but not including
// console.log(copyFruit, fruits);

var myName = ["marisa", "history"]
myName.unshift("math", "english");
myName.push("help", "idk");
myName.sort();
//alphatize
myName.reverse()
//invert

var newName = myName.slice(4,5)
console.log(myName);
console.log(newName);

var nums = [1, 53, 5, 103, 7, 78, 10];
nums. sort();
console.log(nums);
// function randomStudent(){
//   var numStudents = students.length;
//   var randStudent = Math.ceil(Math.random() * numStudents)- 1;
// console.log( students[randStudent] );
// }
// randomStudent()
