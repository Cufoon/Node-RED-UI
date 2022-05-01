const checkElements = (msg) => {
  if (!msg.cufoon?.elements) {
    msg.cufoon = {
      ...msg.cufoon,
      elements: new Map()
    };
  }
  return msg;
};

const checkElementsMap = (msg) => {
  if (!msg.cufoon?.elementsMap) {
    msg.cufoon = {
      ...msg.cufoon,
      elementsMap: new Map()
    };
  }
  return msg;
};

const checkRoutes = (msg) => {
  if (!msg.cufoon?.routes) {
    msg.cufoon = {
      ...msg.cufoon,
      routes: new Map()
    };
  }
  return msg;
};

const checkRoutesMap = (msg) => {
  if (!msg.cufoon?.routesMap) {
    msg.cufoon = {
      ...msg.cufoon,
      routesMap: new Map()
    };
  }
  return msg;
};

const mapArrayAdd = (map, key, value) => {
  const now = map.get(key);
  if (now) {
    map.set(key, [...now, value]);
  } else {
    map.set(key, [value]);
  }
};

module.exports = {
  checkElements,
  checkElementsMap,
  checkRoutes,
  checkRoutesMap,
  mapArrayAdd
};
