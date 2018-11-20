import React from 'react';
import ReactDOM from 'react-dom';

import "./index.scss";
import Login from "./components/Login";
import io from "socket.io-client";


ReactDOM.render(<Login/>, document.getElementById('root'));


//connecting to Socket.IO chat server
const socket = io("https://spotim-demo-chat-server.herokuapp.com");
socket.on("connect", function() {
  console.log("connected to chat server!");
});
socket.on("disconnect", function() {
  console.log("disconnected from chat server!");
});
