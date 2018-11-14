import {combineReducers} from 'redux';
import {createRPCReducer} from 'fusion-plugin-rpc-redux-react';

type ActionT = {
  type: string,
  payload: any,
  meta?: any,
};

type stateT = {
  data: ?{
    id: number,
    name: string,
  },
  isLoading: boolean,
  query: ?{
    id: number,
  },
};

const initialState: stateT = {
  data: null,
  isLoading: false,
  query: null,
};

const userReducer = createRPCReducer('getUser', {
  start: (state: StateT = initialState, action: ActionT) => ({
    ...state,
    query: action.payload,
    isLoading: true,
  }),
  success: (state: StateT, action: ActionT): StateT => ({
    ...state,
    isLoading: false,
    data: action.payload.user,
  }),
  // $FlowFixMe: createRpcReducer not typed properly
  failure: (state: StateT, action): StateT => ({
    ...state,
    isLoading: false,
    error: action.payload.error,
  }),
});

export default combineReducers({
  user: userReducer,
});

