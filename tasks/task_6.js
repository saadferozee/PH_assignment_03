/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
while (experience > 0) {
    // increases 5% of salary every year. 
    startingSalary = startingSalary * 1.05;
    experience--;
}
var salaryNow = startingSalary.toFixed(2);
console.log(salaryNow)
// Solved