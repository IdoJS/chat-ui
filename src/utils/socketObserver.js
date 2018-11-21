import io from 'socket.io-client';

const SOCKET_URL = 'https://spotim-demo-chat-server.herokuapp.com';
const SOCKET_EVENT = 'spotim/chat';
/**
 * Singleton Observer that listen to socket
 */

let observers = [];

class SocketObserver {

  static instance;

  constructor() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = this;

    this.socket = io(SOCKET_URL);


    this.socket.on(SOCKET_EVENT, (response) => {
      observers.forEach(obs => typeof obs.o === 'function' && obs.o(response));
    });
  }

  subscribe({identifier, o}) {
    observers.push({identifier, o});
    return this;
  }

  unSubscribe({identifier}) {
    observers = observers.filter(ob => ob.identifier !== identifier);
    return this;
  }

  send(requestData) {
    this.socket.emit(SOCKET_EVENT, requestData);
    return this;
  }

  clear() {
    observers = [];
  }

  getObservers(){
    return observers;
  }
}

export default new SocketObserver();