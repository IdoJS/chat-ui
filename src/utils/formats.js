const REGEX_SPLIT_DATE = /[T.]+/;
const LOCAL_OFFSET = new Date().getTimezoneOffset() * 60000;

/**
 * Return split timestamp by timezone
 * [0] - date
 * [1] - time
 * @param timestamp
 */
export const splitTimestamp = (timestamp) => {
  const localTime = timestamp - LOCAL_OFFSET;
  let formattedDateArr;

  try {
    formattedDateArr = new Date(localTime).toISOString().split(REGEX_SPLIT_DATE);
  } catch(e){
    formattedDateArr = ['','',''];
  }
  return formattedDateArr;
};