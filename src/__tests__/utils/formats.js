import {splitTimestamp} from '../../utils/formats';

describe('Formats', ()=>{
  it('Test splitTimestamp with valid timestamp', () => {
    const d = Date.now();
    const currentTimeArr = splitTimestamp(d);

    expect(currentTimeArr).toHaveLength(3);
  });

  it('Test splitTimestamp with invalid timestamp', () => {
    const d = 0;
    const currentTimeArr = splitTimestamp(d);

    expect(currentTimeArr).toHaveLength(3);
  });
});