// @flow
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import StyledComponents from './plugins/styled-components/';

import root from './root.js';

export default () => {
  const app = new App(root);

  app.register(StyledComponents);
  app.register(Router);

  return app;
};
