const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
    console.log(`Startei!`);
});
eventEmitter.on("end", () => {
    console.log(`Finalizei!`);
});

console.log(`Antes de tudo`);
eventEmitter.emit("start");
console.log(`Depois do start`);
eventEmitter.emit("end");
