/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
var getArea = area / 2;
console.log(getArea);
//Completed


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (money >= 25000) {
    console.log("Laptop")
} else if (money >= 10000) {
    console.log("Cycle")
} else {
    console.log("Chocolate")
}
//completed


/** Problem -03 ( Medicine Planner ) */
var lastDay = 31;
//write your code here
for (var i = 1; i <= lastDay; i++) {
    i % 3 !== 0 ? console.log(i + " - rest") : console.log(i + " - medicine");
} 
//Completed