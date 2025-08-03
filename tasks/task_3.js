/** Problem -03 ( Medicine Planner ) */
var lastDay = 31;
//write your code here
for (var i = 1; i <= lastDay; i++){
    i % 3 !== 0 ? console.log(i + " - rest") : console.log(i + " - medicine") ;
    // run conditional statement for skip 2 days after taking medicine.
}
// Solved