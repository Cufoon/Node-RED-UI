"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAppRender = void 0;
const generateAppRender = (root) => {
    return `
  const appContainer = document.getElementById('${root}');
  const appRoot = createRoot(appContainer);
  appRoot.render(
    <GlobalStateComponent>
      <BrowserRouter>
        <RouteList />
      </BrowserRouter>
    </GlobalStateComponent>
  );
  `;
};
exports.generateAppRender = generateAppRender;
