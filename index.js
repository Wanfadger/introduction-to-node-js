const fs = require("fs");
const http = require("http")
const url = require('url')

//blocking sysnchronous way

// const textIn = fs.readFileSync("txt/input.txt", "utf-8");

// console.log(textIn);

// const textOut = `This is what we know about Avacado: ${textIn}`;
// console.log(textOut);

// fs.writeFileSync("txt/output.txt", textOut);
// console.log("Written Successfully");

///none blocking asycn operation
// fs.readFile("txt/input.txt", "utf-8", (error, data) => {
//   console.log(data);
// });

// console.log("after");

// fs.readFile("txt/start.txt", "utf-8", (error, data1) => {
//   fs.readFile(`txt/${data1}.txt`, "utf-8", (error, dat2) => {
//     fs.readFile(`txt/append.txt`, "utf-8", (error, data3) => {
//       fs.writeFile(`txt/final.txt`, `${dat2} . \n ${data3}`, (error, data) => {
//         if (error) console.log("something wrong happened");
//         console.log("success");
//       });
//     });
//   });
// });


/////////////////////
 //CREATING SERVER

const server = http.createServer((req, res) => {
    const pathName = req.url;
    console.log(pathName)
    if (pathName === '/home') res.end("home")
    else if(pathName == "/overview") res.end("Over view")
//   res.end("Hello World");
});

server.listen('8000', '127.0.0.1', () => {
    console.log('server started on port 8000')
})
 

