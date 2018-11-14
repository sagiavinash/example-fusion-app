import {getSimulator} from 'fusion-test-utils';
import loadApp from '../../test-utils';
import {FusionStyle} from '../home';
import {RPCToken, RPCHandlersToken, mock as MockRpc, getMockRpcHandlers} from 'fusion-plugin-rpc';

const fixtures = {
  GET_USER_SUCCESS: {
    getUser: {
      user: {
        id: 123,
        name: 'John Doe',
      }
    },
  },
};

test('render home page', async () => {
  const app = await loadApp();

  app.register(RPCToken, MockRpc);
  app.register(RPCHandlersToken, getMockRpcHandlers([fixtures.GET_USER_SUCCESS]));

  const sim = getSimulator(app);
  const ctx = await sim.render('/');
  const welcomeMessage = ctx.rendered.find(FusionStyle).text();

  expect(welcomeMessage).toBe('Hi John Doe!');
});
