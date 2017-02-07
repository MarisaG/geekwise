 var students = ["Haley", "matt", "david","micaela", "osvaldo", "rose", "alfredo", "rigoberto","leonardo", "gustavo", "erica", "kevin", "montgomery", "cobi", "joshua" ];

function randomStudent(){
  var numStudents = students.length;
  var randStudent = Math.ceil(Math.random() * numStudents)- 1;
console.log( students[randStudent] );
}
randomStudent()
