const EventEmitter = require("events");

const myEvent = new EventEmitter();

myEvent.on("onSale", () => console.log("There was a new sale"));
myEvent.on("onSale", () => console.log("Customer name Wanfadger"));

myEvent.on("onSale", (stock) => console.log(`There are ${stock} items left in the stock`));

myEvent.emit("onSale" , 10);
//passing data on  event emit
