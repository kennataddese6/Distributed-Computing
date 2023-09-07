const WebSocket = require("ws");
const ws = new WebSocket("ws://localhost:5001");

function connected() {
  const message = {
    email: "+",
  };
  ws.send(JSON.stringify(message));
}
function addNumber(number) {
  console.log("I am performing addition", number);
  const numbers = JSON.parse(number);
  const result = Number(numbers.FirstNumber) + Number(numbers.SecondNumber);
  const componsed = {
    email: "+",
    address: "Client",
    content: result,
  };
  ws.send(JSON.stringify(componsed));
  console.log(componsed);
}
ws.addEventListener("message", function (event) {
  console.log("Received message:", event.data);
  addNumber(event.data);
});
function failed() {
  console.log("failed");
}

ws.addEventListener("open", connected);
ws.addEventListener("close", failed);
