const fs = require("fs")

setTimeout(() => console.log("Timer 1 finished "), 0)
setImmediate(() => console.log("Intermediate 1 finished"))

fs.readFile("test-file.txt", "utf-8", (error, data) => {
    console.log("I/O finished")

    setTimeout(() => console.log("Timer 2 finished "), 0);
    setTimeout(() => console.log("Timer 3 finished "), 3000);
    setImmediate(() => console.log("Intermediate 1finished"));

    process.nextTick(() => console.log("next Tick"))
})

console.log("Hello from the top level code")