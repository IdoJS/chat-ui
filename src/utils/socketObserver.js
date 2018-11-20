import io from 'socket.io-client';

const SOCKET_URL = 'https://spotim-demo-chat-server.herokuapp.com';
const SOCKET_EVENT = 'spotim/chat';
/**
 * Singleton Observer that listen to socket
 */
class SocketObserver {

  static instance;

  constructor(){
    if(this.instance){
      return this.instance;
    }

    this.instance = this;

    this.socket = io(SOCKET_URL);
    this.observers = [];


    this.socket.on(SOCKET_EVENT, (response) => {
      this.observers.forEach(obs => obs.o(response));
    });
  }

  subscribe({identifier, o}){
    this.observers.push({identifier, o});
    return this;
  }

  unSubscribe({identifier}){
    this.observers = this.observers.filter(ob => ob.identifier !== identifier);
    return this;
  }

  send(requestData){
    this.socket.emit(SOCKET_EVENT, requestData);
    return this;
  }

}

export default new SocketObserver();