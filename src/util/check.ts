export const isArray = <T>(data: any): data is Array<T> => {
  return {}.toString.call(data) === '[object Array]';
};

export const isString = (data: any): data is string => {
  return {}.toString.call(data) === '[object String]';
};
