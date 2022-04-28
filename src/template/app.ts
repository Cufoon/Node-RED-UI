export const generateAppRender = (root: string) => {
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
