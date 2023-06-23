type RouteMethods = string[];
type Middlewares = string[];

interface Endpoint {
  path: string;
  methods: RouteMethods;
  middlewares: Middlewares;
}

interface StackItem {
  route?: any;
  regexp?: RegExp;
  name?: string;
  path?: string;
  handle: any;
  keys: any[];
  methods: RouteMethods;
}

const regExpToParseExpressPathRegExp =
  /^\/\^\\\/(?:(:?[\w\\.-]*(?:\\\/:?[\w\\.-]*)*)|(\(\?:\(\[\^\\\/]\+\?\)\)))\\\/.*/;
const regExpToReplaceExpressPathRegExpParams = /\(\?:\(\[\^\\\/]\+\?\)\)/;
const regexpExpressParamRegexp = /\(\?:\(\[\^\\\/]\+\?\)\)/g;

const EXPRESS_ROOT_PATH_REGEXP_VALUE = '/^\\/?(?=\\/|$)/i';
const STACK_ITEM_VALID_NAMES = ['router', 'bound dispatch', 'mounted_app'];

const getRouteMethods = function (route: any): RouteMethods {
  let methods = Object.keys(route.methods);

  methods = methods.filter((method) => method !== '_all');
  methods = methods.map((method) => method.toUpperCase());

  return methods;
};

const getRouteMiddlewares = function (route: any): Middlewares {
  return route.stack.map((item: any) => {
    return item.handle.name || 'anonymous';
  });
};

const hasParams = function (expressPathRegExp: string): boolean {
  return regexpExpressParamRegexp.test(expressPathRegExp);
};

const parseExpressRoute = function (route: any, basePath: string): Endpoint[] {
  const paths: string[] = [];

  if (Array.isArray(route.path)) {
    paths.push(...route.path);
  } else {
    paths.push(route.path);
  }

  const endpoints = paths.map((path) => {
    const completePath = basePath && path === '/' ? basePath : `${basePath}${path}`;

    const endpoint: Endpoint = {
      path: completePath,
      methods: getRouteMethods(route),
      middlewares: getRouteMiddlewares(route),
    };

    return endpoint;
  });

  return endpoints;
};

const parseExpressPath = function (expressPathRegExp: RegExp, params: any[]): string {
  let expressPathRegExpExec = regExpToParseExpressPathRegExp.exec(expressPathRegExp.toString());
  let parsedRegExp = expressPathRegExp.toString();
  let paramIndex = 0;

  while (hasParams(parsedRegExp)) {
    const paramName = params[paramIndex].name;
    const paramId = `:${paramName}`;

    parsedRegExp = parsedRegExp.replace(regExpToReplaceExpressPathRegExpParams, paramId);

    paramIndex++;
  }

  if (parsedRegExp !== expressPathRegExp.toString()) {
    expressPathRegExpExec = regExpToParseExpressPathRegExp.exec(parsedRegExp);
  }

  const parsedPath = expressPathRegExpExec?.[1].replace(/\\\//g, '/');

  return parsedPath as string;
};

const parseEndpoints = function (app: any, basePath = '', endpoints: Endpoint[] = []): Endpoint[] {
  const stack = app.stack || (app._router && app._router.stack);

  if (!stack) {
    endpoints = addEndpoints(endpoints, [
      {
        path: basePath,
        methods: [],
        middlewares: [],
      },
    ]);
  } else {
    endpoints = parseStack(stack, basePath, endpoints);
  }

  return endpoints;
};

const addEndpoints = function (currentEndpoints: Endpoint[], endpointsToAdd: Endpoint[]): Endpoint[] {
  endpointsToAdd.forEach((newEndpoint) => {
    const existingEndpoint = currentEndpoints.find((item) => item.path === newEndpoint.path);

    if (existingEndpoint !== undefined) {
      const newMethods = newEndpoint.methods.filter((method) => !existingEndpoint.methods.includes(method));

      existingEndpoint.methods = existingEndpoint.methods.concat(newMethods);
    } else {
      currentEndpoints.push(newEndpoint);
    }
  });

  return currentEndpoints;
};

const parseStack = function (stack: StackItem[], basePath: string, endpoints: Endpoint[]): Endpoint[] {
  stack.forEach((stackItem) => {
    if (stackItem.route) {
      const newEndpoints = parseExpressRoute(stackItem.route, basePath);

      endpoints = addEndpoints(endpoints, newEndpoints);
    } else if (STACK_ITEM_VALID_NAMES.includes(stackItem.name || '')) {
      const isExpressPathRegexp = regExpToParseExpressPathRegExp.test(stackItem.regexp?.toString() || '');

      let newBasePath = basePath;

      if (isExpressPathRegexp) {
        const parsedPath = parseExpressPath(stackItem.regexp as RegExp, stackItem.keys);

        newBasePath += `/${parsedPath}`;
      } else if (
        !stackItem.path &&
        stackItem.regexp &&
        stackItem.regexp.toString() !== EXPRESS_ROOT_PATH_REGEXP_VALUE
      ) {
        const regExpPath = ` RegExp(${stackItem.regexp}) `;

        newBasePath += `/${regExpPath}`;
      }

      endpoints = parseEndpoints(stackItem.handle, newBasePath, endpoints);
    }
  });

  return endpoints;
};

const getEndpoints = function (app: any): Endpoint[] {
  const endpoints = parseEndpoints(app);

  return endpoints;
};

export default getEndpoints;
