// @flow
import App from 'fusion-react';
import {FetchToken} from 'fusion-tokens';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import StyledComponentsPlugin from './plugins/styled-components';
import Redux, {
  ReduxToken,
  ReducerToken,
} from 'fusion-plugin-react-redux';
import UniversalEvents, {UniversalEventsToken} from 'fusion-plugin-universal-events';
import RPC, {RPCToken, RPCHandlersToken} from 'fusion-plugin-rpc-redux-react';
import fetch from 'unfetch';
import reducer from './redux';
import rpcHandlers from './rpc/handlers';

import root from './root.js';

export default () => {
  const app = new App(root);

  app.register(StyledComponentsPlugin);
  app.register(Router);

  app.register(ReduxToken, Redux);
  app.register(ReducerToken, reducer);

  app.register(UniversalEventsToken, UniversalEvents);
  app.register(RPCToken, RPC);

  __NODE__
    ? app.register(RPCHandlersToken, rpcHandlers)
    : app.register(FetchToken, fetch);

  return app;
};
