/** Problem 04 - (Delete / Store) */
var fileName = "data.docx";
//write your code here
var length = fileName.length; // getting length of fileName, it helps to finding extension type.
var isPDF = fileName.slice(length-4, length+1) === ".pdf"; // getting true value if it is a PDF file.
var isDOCX = fileName.slice(length-5, length+1) === ".docx"; // getting true value if it is a DOCX file.
var isImportant = fileName[0] === "#"; // getting true value if it is important file that name starts with #.
// running conditional statements.
if ( isImportant ){
    console.log("Store")
} else if ( isPDF || isDOCX ) {
    console.log("Store")
} else {
    console.log("Delete")
}
// Solved