import type { RenderFunc } from '$interface/render';

export const renderMenu: RenderFunc = () => {
  const result = `
    const Menus = () => {
      const rootSubmenuKeysRef = useRef([]);
      const menuPathMap = useRef(new Map());
      const navigate = useNavigate();
      const location = useLocation();

      const [inited, setInited] = useState(false);
      const [openKeys, setOpenKeys] = useState([]);
      const [selectedKeys, setSelectedKeys] = useState([
        Cufoon.PageMenuDifferentKey
      ]);

      useEffect(() => {
        console.log(location.pathname);
        if (location.pathname === '/') {
          if(Cufoon.DefaultPage !== '/') {
            navigate(Cufoon.DefaultPage);
          }
        }
        if (!inited) {
          const routes = Utils.getRouteList(location.pathname);
          if (routes.length === 0) {
            setInited(true);
            return;
          }
          const pathKeyMap = Utils.getPathToMenuKeyMap(Cufoon.PageMenuData);
          const key = pathKeyMap.get(String(routes[0]));
          setSelectedKeys((prev) => {
            key && (prev[0] = key.key);
            return prev;
          });
          key && setOpenKeys(key.group);
          setInited(true);
        }
      }, [location, inited]);

      const onOpenChange = (_key, keys) => {
        setOpenKeys((prev) => {
          const latestOpenKey = keys.find((key) => prev.indexOf(key) === -1);
          if (
            (latestOpenKey &&
              rootSubmenuKeysRef.current.indexOf(latestOpenKey) === -1) ||
            keys.length === 1
          ) {
            return keys;
          } else {
            return latestOpenKey ? [latestOpenKey] : [];
          }
        });
      };

      const onSelect = (key) => {
        setSelectedKeys((prev) => {
          prev[0] = key;
          return prev;
        });
        const path = menuPathMap.current.get(key);
        path && navigate(path);
      };

      const generateMenu = useCallback((m, root) => {
        return m.map((item) => {
          if (item.children) {
            if (root) {
              rootSubmenuKeysRef.current.push(item.key);
            }
            return (
              <Menu.SubMenu
                key={item.key}
                title={
                  <>
                    {item.icon}
                    {item.name}
                  </>
                }
              >
                {generateMenu(item.children, false)}
              </Menu.SubMenu>
            );
          }
          menuPathMap.current.set(item.key, item.path || '404');
          return (
            <Menu.Item key={item.key} data-qnxgpath={item.path}>
              {item.icon}
              {item.name}
            </Menu.Item>
          );
        });
      }, []);

      const MenuItems = useMemo(() => generateMenu(Cufoon.PageMenuData, true), []);

      return inited ? (
        <Menu
          theme='light'
          mode='horizontal'
          levelIndent={12}
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onClickSubMenu={onOpenChange}
          onClickMenuItem={onSelect}
          style={{ userSelect: 'none', marginBottom: '16px' }}
        >
          {MenuItems}
        </Menu>
      ) : null;
    };
  `;
  return [result, 'Menus'];
};
