//____________________________________________________________
/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var getArea = area / 2; // Dividing Area for sharing with 2 brothers
console.log(getArea);
// Solved


//____________________________________________________________
/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (money >= 25000) {
    // he can't get laptop if money is less than 25000tk.
    console.log("Laptop");
} else if (money >= 10000) {
    // he can't get cycle if money is less than 10000tk.
    console.log("Cycle");
} else {
    // he only get chocolate if money is less than 10000tk.
    console.log("Chocolate");
}
// Solved


//____________________________________________________________
/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here
for (var i = 1; i <= lastDay; i++) {
    i % 3 !== 0 ? console.log(i + " - rest") : console.log(i + " - medicine");
    // run conditional statement for skip 2 days after taking medicine.
}
// Solved


//____________________________________________________________
/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here
// getting length of fileName, it helps to finding extension type.
var length = fileName.length;
// getting true value if it is a PDF file.
var isPDF = fileName.slice(length - 4, length + 1) === ".pdf";
// getting true value if it is a DOCX file.
var isDOCX = fileName.slice(length - 5, length + 1) === ".docx";
// getting true value if it is important file that name starts with #.
var isImportant = fileName[0] === "#";
// running conditional statements.
if (isImportant) {
    console.log("Store")
} else if (isPDF || isDOCX) {
    console.log("Store")
} else {
    console.log("Delete")
}
// Solved


//____________________________________________________________
/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here
// values of student object concatenating as a Email format.
var getEmailAddress = student.name + student.roll + "." + student.department + "@ph.ac.bd";
console.log(getEmailAddress);
// Solved


//____________________________________________________________
/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
while (experience > 0) {
    // increases 5% of salary every year. 
    startingSalary = startingSalary * 1.05;
    experience--;
}
var currentSalary = Number(startingSalary.toFixed(2));
console.log(currentSalary)
// Solved