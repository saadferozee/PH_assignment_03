/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here
// values of student object concatenating as a Email format.
var getEmailAddress = student.name + student.roll + "." + student.department + "@ph.ac.bd";
console.log(getEmailAddress);
// Solved