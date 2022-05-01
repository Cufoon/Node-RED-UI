export const generateMenuData = (menu: any) => {
  const scan = (v: { [x: string]: any; children?: any }[]): string => {
    let x = '';
    v.map((item: { [x: string]: any; children?: any }) => {
      let y = '';
      Object.keys(item).map((key) => {
        if (key === 'children') {
          const c = scan(item.children);
          y += `children: ${c},`;
        } else {
          if (key === 'icon') {
            y += `icon: <${item[key]} />,`;
          } else {
            y += `${key}: '${item[key]}',`;
          }
        }
      });
      x += `{${y}},`;
    });
    return `[${x}]`;
  };

  return scan(menu);
};
