let fs = require('fs')
    // 
let arg = process.argv[2]
let a = fs.readFileSync(arg)
let x = a.toString()
let final = x.split("\n");
die = final.length - 1
console.log(die);