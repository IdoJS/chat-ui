import io from 'socket.io-client';
import mockIo from '../../src/__mocks__/mockSocket';

export const getIO = () => {
  if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'dev') {
    return mockIo.connect();
  } else {
    return io;
  }
};