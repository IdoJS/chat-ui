import {getIO} from './socket';

const SOCKET_URL = 'https://spotim-demo-chat-server.herokuapp.com';
const SOCKET_EVENT = 'spotim/chat';
const SOCKET_IDENTIFIER = 'socket_identifier';
/**
 * Singleton Observer that listen to socket
 */

let observers = [];

class SocketObserver {

  static instance;

  constructor() {
    const io = getIO();

    if (this.instance) {
      return this.instance;
    }

    this.instance = this;

    window.socket = io(SOCKET_URL);


    window.socket.on(SOCKET_EVENT, (response) => {
      if (response.id === SOCKET_IDENTIFIER){
        observers.forEach(obs => typeof obs.o === 'function' && obs.o(response));
      }
    });
  }

  /**
   * Add observer
   * @param identifier
   * @param o
   * @returns {SocketObserver}
   */
  subscribe({identifier, o}) {
    observers.push({identifier, o});
    return this;
  }

  /**
   * Remove observer
   * @param identifier
   * @returns {SocketObserver}
   */
  unSubscribe({identifier}) {
    observers = observers.filter(ob => ob.identifier !== identifier);
    return this;
  }

  /**
   * Make socket request
   * @param requestData
   * @returns {SocketObserver}
   */
  send(requestData) {
    window.socket.emit(SOCKET_EVENT, Object.assign(requestData, {id: SOCKET_IDENTIFIER}));
    return this;
  }

  /**
   * Remove all observers
   */
  clear() {
    observers = [];
  }

  /**
   * Get observer list
   * @returns {Array}
   */
  getObservers() {
    return [...observers];
  }
}

export default new SocketObserver();