// modify the code https://medium.freecodecamp.org/testing-socket-io-client-app-using-jest-and-react-testing-library-9cae93c070a3

let EVENTS = {};
function emit(event, ...args) {
  EVENTS[event].forEach(func => func(...args));
}
const socket = () => {
  return {
    on(event, func) {
      if (EVENTS[event]) {
        return EVENTS[event].push(func);
      }
      EVENTS[event] = [func];
    },
    emit
  }
};
export const mockIo = {
  connect() {
    return socket;
  }
};

export default mockIo;