
console.log("Hello world from javascript");

function addId(Id){
    let a = 708;
    return Id + a;
}

addId("Generated Unique Id is");

// global in node js making an object global
global.myName = "dilli hang";
global.totalMonths = 12;

console.log(myName);
console.log(totalMonths);


//function with global which are custom made global objects
function findGlobal() {
    //making var
    var funVar = "This is funVar";
    console.log("From inside the findGlobal Function!");
    console.log(myName);
    console.log(totalMonths);
}

findGlobal();

// now the myName and totalMonths are global objects
// console.log(funVar); //ReferenceError: funVar is not defined
// error because funVar is only global variable inside the findGlobal function

// process
console.log(process);

// knowyour platform
console.log("process --->", process.platform);
// knowing env variables, path
console.log("Path--> ", process.path);


// setInterval, setTimeout -- save as Javascrippt
// setInterval( ()=> console.log("I am only visible after 3sec "), 3000);
// function callOnce() {
//     setInterval(()=> console.log("I am only visible after 3sec "), 3000);
// }
// callOnce();

console.log(__filename); // shows filename directory
console.log(__dirname); // shows folder directory 

require // is used to export and import module or packages




