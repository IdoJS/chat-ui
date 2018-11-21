import io from 'socket.io-client';
import mockIo from '../../src/__mocks__/mockSocket';

export const getIO = () => {
  if (process.env.NODE_ENV === 'test') {
    return mockIo.connect();
  } else {
    return io;
  }
};