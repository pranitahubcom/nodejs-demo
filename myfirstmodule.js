const demo = require('./demo')
const fs = require('fs')
const ps = require('fs')

fs.writeFileSync("ndemo.txt",'hello world')
fs.writeFileSync("index.js",'hello world')
ps.readFileSync("ndemo1.txt")

const arr = [1,2,3,4,5,6,7,8,9];
console.log(arr);
console.log(demo.x);
console.log(__dirname)
console.log("->>",__filename)