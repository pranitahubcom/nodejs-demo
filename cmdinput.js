const fs = require('fs');

//code fro create form terminal
// const input = process.argv;
// fs.writeFileSync(input[2],input[3])

// console.log(process.argv[2])

const input = process.argv;
if (input[2] === "add") {       
    fs.writeFileSync(input[3],input[4])}
    else if (input[2] === "remove") { 
        fs.unlinkSync(input[3])
    }
    else{
        console.log("Invalid input: " + input)

    }