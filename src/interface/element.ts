export interface Element<T, U> {
  id: string;
  name: string;
  options?: T;
  params?: U;
}
