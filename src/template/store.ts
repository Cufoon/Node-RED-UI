export const generateStore = (v: { [index: string]: any }) => {
  let init = '';
  Object.keys(v).map((item) => {
    init += `${JSON.stringify(item)}: ${v[item]},`;
  });
  return `
const initialState = {${init}};

const notRealized = (action) => {
  console.log('your action is', action);
  console.log('dispatch is not set!');
  console.log('state is not changed!');
};

const GlobalStateContext = createContext(initialState);
const GlobalDispatchContext = createContext(notRealized);

const useSelector = (selector) => {
  const store = useContext(GlobalStateContext);
  return selector(store);
};

const useDispatch = () => {
  return useContext(GlobalDispatchContext);
};

const reducer = (state, action) => {
  if (
    action.process !== null &&
    action.process !== undefined &&
    Utils.isFunction(action.process)
  ) {
    let preState = null;
    if (Utils.hasOwn(action, 'value')) {
      preState = action.value;
    } else {
      preState = state[action.key];
    }
    const nextState = action.process(preState, action.params);
    return {
      ...state,
      [action.key]: nextState
    };
  } else {
    if(Utils.hasOwn(action, 'value')){
      return {
        ...state,
        [action.key]: action.value
      };
    }
  }
  return state;
};

const GlobalStateComponent = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={store}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};
`;
};
