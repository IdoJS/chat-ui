export const logPrint = (...data) => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    console.log('LOGGER ', data);
  }
};