import socketObserver from '../../../src/utils/socketObserver';

describe('Test socketObserver', () => {
  const identifier = 'mockSocket';

  beforeEach(() => {
    socketObserver.clear();
  });

  it('Check subscribe', () => {
    socketObserver.subscribe({
      identifier,
      o: null
    });

    expect(socketObserver.getObservers().findIndex((obs) => obs.identifier === identifier)).not.toEqual(-1);
  });

  it('Check unSubscribe', () => {
    socketObserver.subscribe({
      identifier,
      o: null
    });

    socketObserver.unSubscribe({
      identifier
    });

    expect(socketObserver.getObservers().findIndex((obs) => obs.identifier === identifier)).toEqual(-1);
  });

  it('Check send via socket', (done) => {
    const request = {text: 'mockText', avatar: 'mockAvatar'};

    socketObserver.subscribe({
      identifier,
      o: (response) => {
        expect(response).toMatchObject(request);
        done();
      }
    });

    socketObserver.send(request);
  });

});