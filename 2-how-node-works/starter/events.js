const EventEmitter = require("events");
const http = require("http")

// const myEvent = new EventEmitter();

//extending the EventEMitter
class SaleEvent extends EventEmitter{
    constructor() {
        super()
    }
}


const myEvent = new SaleEvent();

myEvent.on("onSale", () => console.log("There was a new sale"));
myEvent.on("onSale", () => console.log("Customer name Wanfadger"));

myEvent.on("onSale", (stock) => console.log(`There are ${stock} items left in the stock`));

//passing data on  event emit
myEvent.emit("onSale", 10);

///built in events
const server = http.createServer()

server.on("request", (req, res) => {
    console.log("Request recieved "+req.url)
    res.end("Request Recieved")
})

server.on("request", (req, res) => {
  console.log("Another recieved");
});


server.listen("9000", "127.0.0.1", () => {
    console.log("Server started on port 9000")
})
