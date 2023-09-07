const express = require("express");
const WebSocket = require("ws");
const cors = require("cors");
const dotenv = require("dotenv");

const wss = new WebSocket.Server({ noServer: true });
const clients = new Map();
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
console.log("Server is listening on port", port);

wss.on("connection", function connection(ws, req) {
  ws.on("message", function incoming(message) {
    const messageData = JSON.parse(message);
    console.log("message", messageData);
    const email = messageData.email;
    const content = messageData.content;
    const address = messageData.address;
    clients.set(email, ws);
    // Send personalized messages to a specific client
    if (content || address) {
      clients.forEach(function (clientWs, clientEmail) {
        console.log("User connected is at floor: ", clientEmail);
        if (clientEmail === String(address)) {
          clientWs.send(JSON.stringify(content));
          console.log("Client found Message Sent to : ", address);
        } else {
          console.log("no user found", address, clientEmail);
        }
      });
    } else {
      console.log("Client Just Connected", email);
    }
  });

  ws.on("close", function close() {
    console.log("Client disconnected");
    clients.forEach(function (clientWs, clientEmail) {
      if (clientWs === ws) {
        clients.delete(clientEmail);
      }
    });
  });
});

const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (socket) => {
    wss.emit("connection", socket, request);
  });
});

module.exports = app; // Export app to be used by tests
