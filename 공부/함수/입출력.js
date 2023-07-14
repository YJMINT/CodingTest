const fs = require('fs');
const input = fs.readFileSync("../input.txt").toString().trim().split('\n').map(Number);

console.log(input, typeof(input));
