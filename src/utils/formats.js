const REGEX_SPLIT_DATE = /[T.]+/;

export const splitTimestamp = (timestamp) => {
  let formattedDateArr;
  try {
    formattedDateArr = new Date(timestamp).toISOString().split(REGEX_SPLIT_DATE);
  } catch(e){
    formattedDateArr = ['','',''];
  }
  return formattedDateArr;
};