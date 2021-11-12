const fs = require("fs");

//blocking sysnchronous way

const textIn = fs.readFileSync("txt/input.txt", "utf-8");

console.log(textIn);

const textOut = `This is what we know about Avacado: ${textIn}`;
console.log(textOut);

fs.writeFileSync("txt/output.txt", textOut);
console.log("Written Successfully");

///none blocking asycn operation
fs.readFile("txt/input.txt", "utf-8", (error, data) => {
  console.log(data);
});

console.log("after");
