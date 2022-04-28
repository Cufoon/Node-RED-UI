export const isArray = <T>(data: unknown): data is Array<T> => {
  return {}.toString.call(data) === '[object Array]';
};

export const isString = (data: unknown): data is string => {
  return {}.toString.call(data) === '[object String]';
};
