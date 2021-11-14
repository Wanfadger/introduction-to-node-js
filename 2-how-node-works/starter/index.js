const fs = require("fs")
const crypto = require("crypto")

//changing the thread pool
process.env.UV_THREADPOOL_SIZE = 10

setTimeout(() => console.log("Timer 1 finished "), 0)
setImmediate(() => console.log("Intermediate 1 finished"))

let start = Date.now()

fs.readFile("test-file.txt", "utf-8", (error, data) => {
    console.log("I/O finished")

    setTimeout(() => console.log("Timer 2 finished "), 0);
    setTimeout(() => console.log("Timer 3 finished "), 3000);
    setImmediate(() => console.log("Intermediate 1finished"));

    process.nextTick(() => console.log("next Tick"))


    crypto.pbkdf2("password", "salt", 10000, 1000, 'sha512', () => {
        console.log(`${Date.now() - start}  password encrypted`)
    });

        crypto.pbkdf2("password", "salt", 10000, 1000, "sha512", () => {
          console.log(`${Date.now() - start}  password encrypted`);
        });
        crypto.pbkdf2("password", "salt", 10000, 1000, "sha512", () => {
          console.log(`${Date.now() - start}  password encrypted`);
        });
        crypto.pbkdf2("password", "salt", 10000, 1000, "sha512", () => {
          console.log(`${Date.now() - start}  password encrypted`);
        });
        crypto.pbkdf2("password", "salt", 10000, 1000, "sha512", () => {
          console.log(`${Date.now() - start}  password encrypted`);
        });
        crypto.pbkdf2("password", "salt", 10000, 1000, "sha512", () => {
          console.log(`${Date.now() - start}  password encrypted`);
        });


})

console.log("Hello from the top level code")