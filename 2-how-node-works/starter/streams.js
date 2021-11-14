const fs = require("fs")
const server = require("http").createServer()

//reading data from file 
// server.on("request", (req, res) => {
//     fs.readFile("test-file.txt", "utf-8", (err, data) => {
//         if (err) console.error(err)
//         res.end(data)
//     })
// })


//reading using streams to send chucks of data
// server.on("request", (req, res) => {
//     //create a readable stream
//     const readableStream = fs.createReadStream("test-file.txt")
//     //readable stream has three events to listen to
//     /*
//     data , when data is available for read
//     end , when all data has been read
//     error ,  when an error occurs in the process
//     */
    
//     readableStream.on("data", (data) => {
//         //write date to response
//         res.write(data)
//     })

//     readableStream.on("end", () => {
//         //finished reading
//         res.end()
//     })

//     readableStream.on("error" , (error)=> console.error(error))
// })


server.on("request", (req, res) => {
    const readableStream = fs.createReadStream("test-file.txt");
    readableStream.pipe(res)
});

server.listen("9000", "127.0.0.1", () => {
    console.log("Listening....")
})