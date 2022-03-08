import { io } from "socket.io-client";
import { IRoomObject } from "what-the-trivia-types";
import { store } from "./store";

// const socket = io('https://what-the-trivia.herokuapp.com');
const socket = io('http://localhost:5000');

const { dispatch } = store;

socket.on("connect_error", (err) => {
  dispatch({ type: 'SET_ROOM_CONNECTION_ERROR', payload: true });
  disconnectSocket();
});

socket.on('gameUpdate', room => {
  dispatch({ type: 'UPDATE_ROOM', payload: room });
});

export const expireCurrentQuestion = (roomId: string) => {
  socket.emit('expireCurrentQuestion', roomId);
};

export const startNextQuestion = (roomId: string) => {
  socket.emit('startNextQuestion', roomId);
};

export const disconnectSocket = () => { 
  console.log("disconnecting...");
  if (socket) socket.disconnect();
};