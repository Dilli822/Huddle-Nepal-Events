

// ES6 Module System
// export function add(a, b){
//     return a + b;
// }
// add(5,6);

import * as fs from "fs/promises";

await fs.writeFile(
    "helo.txt",
    "Thanks"
);

// try catch not to stop the program
try{
    let contents = await fs.readFile("note.text", "utf-8");
    console.log(contents);
} catch(err){
    console.log("This is error ", err);
}
console.log("This is what we want to know!");


// unlink function demo text to unlink
await fs.unlink("a.text");

// folder read -- delete test folder
await fs.rmdir("testing");
// with callback we can know if it is deleted or task is completed or not

