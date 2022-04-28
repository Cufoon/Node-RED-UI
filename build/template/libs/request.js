"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLib = void 0;
exports.requestLib = `
const codeMap = {
  '300': 'Multiple Choice',
  '301': 'Moved Permanently',
  '302': 'Found',
  '303': 'See Other',
  '304': 'Not Modified',
  '307': 'Temporary Redirect',
  '308': 'Permanent Redirect',
  '400': '请求错误',
  '401': '登录凭证错误',
  '403': 'Forbidden',
  '404': 'Not Found',
  '405': 'Method Not Allowed',
  '406': 'Not Acceptable',
  '407': 'Proxy Authentication Required',
  '409': 'Conflict',
  '410': 'Gone',
  '411': 'Length Required',
  '412': 'Precondition Failed',
  '413': 'Payload Too Large',
  '414': 'URI Too Long',
  '415': 'Unsupported Media Type',
  '416': 'Range Not Satisfiable',
  '417': 'Expectation Failed',
  '421': 'Misdirected Request',
  '426': 'Upgrade Required',
  '428': 'Precondition Required',
  '429': 'Too Many Requests',
  '431': 'Request Header Fields Too Large',
  '451': 'Unavailable For Legal Reasons',
  '500': '服务器内部错误',
  '501': 'Not Implemented',
  '502': 'Bad Gateway',
  '503': 'Service Unavailable',
  '504': 'Gateway Timeout',
  '505': 'HTTP Version Not Supported',
  '506': 'Variant Also Negotiates',
  '510': 'Not Extended',
  '511': 'Network Authentication Required'
};

Utils.request = async (url, method, data, option) => {
  try {
      const options = {
          method: method,
          throwErrIfParseFail: true,
          getResponse: true
      };
      if (option?.abortSignal) {
          options.signal = option.abortSignal;
      }
      if (data) {
          options.data = data;
      }
      const { response, data: body } = await umiRequest(url, options);
      // if (process.env.NODE_ENV === 'development') {
          console.group('Request to ', url);
          console.log('send ', data);
          console.log('geth ', response);
          console.log('getb ', body);
          console.groupEnd();
      // }
      if (response.status < 200 || response.status >= 300) {
          return [codeMap[response.status.toString()] || 'error: response status unknown'];
      }
      if (body.code !== 0) {
          const errorMessage = body.code ? \`error code:\${body.code}\` : 'error: unknown';
          return [body.msg || errorMessage];
      }
      return ['', body.data];
  } catch (e) {
    if (e.name === 'AbortError' || e.type === 'AbortError') {
      return ['', null];
    }
    console.log('请求意外错误', e);
    return [e.toString()];
  }
}

Utils.requestGet = async (url) => {
  return await Utils.request(url, 'GET');
}

Utils.requestGetWithParam = async (url, data) => {
  const query = qs.stringify(data);
  return await Utils.request(\`\${url}?\${query}\`, 'GET');
}

Utils.requestGetWithData = async (url, data) => {
  return await Utils.request(url, 'GET', data);
}

Utils.requestPost = async (url, data) => {
  return await Utils.request(url, 'POST', data);
}

Utils.requestPut = async (url, data) => {
  return await Utils.request(url, 'PUT', data);
}

const useRequest = (url, options, deps) => {
  const [err, setErr] = useState();
  const [res, setRes] = useState();
  const [loading, setLoading] = useState(false);
  const livingRef = useRef(true);
  const abortRef = useRef();

  const fetcher = async (signal) => {
    setLoading(true);
    const method = options?.method ?? 'GET';
    let data = {};
    if (options?.data && lodash.isFunction(options.data)) {
      data.data = options.data();
    } else {
      data.data = options.data;
    }
    let toUrl = url;
    if (options?.params) {
      if (lodash.isFunction(options.params)) {
        data.params = options.params();
      }
      else {
        data.params = options.params;
      }
      toUrl = \`\${url}?\${qs.stringify(data.params)}\`;
    }
    const loadingMessage = createMessageLoading(\`\${method}--<\${url}>--\${Date.now()}\`);
    loadingMessage.showLoading(options?.loadingText || '加载中');
    const [err, res] = await Utils.request(toUrl, method, data.data, { abortSignal: signal });
    if (livingRef.current) {
      setErr(err);
      setRes(res);
    }
    setLoading(false);
    loadingMessage.hideLoading();
    if (err) {
      options?.fail?.(err);
    } else {
      if (res) {
        options?.success?.(res);
      }
    }
  };

  useEffect(() => {
    (async () => {
      abortRef.current?.abort();
      abortRef.current = new AbortController();
      options?.before?.();
      await fetcher(abortRef.current.signal);
      options?.after?.();
    })();
  }, deps);

  useEffect(() => {
    livingRef.current = true;
    return () => {
      livingRef.current = false;
      abortRef.current?.abort();
    };
  }, []);

  return {
    loading,
    error: err,
    data: res
  };
};
`;
