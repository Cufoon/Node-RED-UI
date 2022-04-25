export const isArray = <T>(data: any): data is Array<T> => {
  return {}.toString.call(data) === '[object Array]';
};
