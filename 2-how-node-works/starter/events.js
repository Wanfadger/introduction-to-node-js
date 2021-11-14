const EventEmitter = require("events")

const myEvent = new EventEmitter()

myEvent.on("onSale" , () => console.log("There was a new sale"))
myEvent.on("onSale", () => console.log("Customer name Wanfadger"))

myEvent.emit("onSale")