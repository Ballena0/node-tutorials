let arg = process.argv;
let sum = 0;
for (let i = 2; i < arg.length; i++) {
    let num = parseInt(arg[i]);
    sum = num + sum;
}

console.log(sum);