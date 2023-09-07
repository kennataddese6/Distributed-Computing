const WebSocket = require("ws");
const ws = new WebSocket("ws://localhost:5001");

function connected() {
  const message = {
    email: "DivisionServer",
  };
  ws.send(JSON.stringify(message));
  setTimeout(() => {
    const componsed = {
      email: "DivisionServer",
      address: "AdditionServer",
      content: "hello from Division server",
    };
    ws.send(JSON.stringify(componsed));
  }, 6000); // delay of 1000 milliseconds
}
ws.addEventListener("message", function (event) {
  console.log("Received message:", event.data);
});
function failed() {
  console.log("failed");
}

ws.addEventListener("open", connected);
ws.addEventListener("close", failed);
