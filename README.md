# Distributed-Computing

Step 1: Open Visual Studio Code

Step 2: Then Open a new Terminal
Terminal -> New Terminal or (Ctrl + shift + `)

Step 3 : Clone repository. Run the below command on the terminal
 git clone https://github.com/kennataddese6/Distributed-Computing.git

Step 4: Navigate to it by the running the command on the  same terminal
cd Distributed-Computing

Step 5: Install dependecie. Run the command below on the terminal (Make sure Node.JS in insstalled)
npm install 

Step 6: Install http-server by running the command below
npm install -g http-server

Step 7: clear the terminal by the command below
clear

Step 8 : Open 3 new terminal by the + sign on the right of the opened terminal

Step 9 : Start the Central server on the first terminal with the command below
$env:PORT = 5001;    nodemon CentralServer.js

Step 10 : Start the Addition server on the second terminal by the command below
$env:PORT = 5002;    nodemon AdditonServer.js

Step 11 : Start the Divison server on the thrid terminal by the command below
$env:PORT = 5003;    nodemon DivisionServer.js

Step 12 : Now open a Hotspot on your Mobile Device

Step 13 : Now Search the hotspot you opened on your computer and connect to it

Step 13 : Start the http server by the command below on the forth terminal 
http-server

I love you Fekre