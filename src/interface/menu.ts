export interface Menu {
  name: string;
  key: string;
  path?: string;
  access?: number[];
  // icon?: JSX.Element;
  children?: Menu[];
}
