export const utilLib = `
const PlainObject = {};
if (Object.hasOwn !== undefined && Object.hasOwn !== null) {
  PlainObject.hasOwnProperty = function(property){
    return Object.hasOwn(this, property);
  }
}

const Utils = {
  isFunction: (data) => {
    return PlainObject.toString.call(data) === '[object Function]';
  },
  hasOwn: (data, property) => {
    return PlainObject.hasOwnProperty.call(data, property);
  },
  getRouteList: (path) => {
    if (path === '/' || path === '//') {
      return ['person-info'];
    }
    if (path[0] === '/') {
      path = path.substring(1);
    }
    if (path[path.length - 1] === '/') {
      path = path.substring(0, path.length - 1);
    }
    return path.split('/');
  }
};

(()=>{
  let pathKeyMapOne = null;
  Utils.getPathToMenuKeyMap = (menus) => {
      if (pathKeyMapOne) {
          return pathKeyMapOne;
      }
      const pathKeyMap = new Map();
      const fmt = (m, group) => {
          m.map((item) => {
              if (item.children) {
                  fmt(item.children, [...group, item.key]);
                  return;
              }
              if (item.path) {
                  pathKeyMap.set(item.path, { group, key: item.key, access: item.access || [] });
              }
          });
      };
      fmt(menus, []);
      pathKeyMapOne = pathKeyMap;
      return pathKeyMap;
  };
})();
`;
