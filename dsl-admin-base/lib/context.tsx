import React from 'react';
import { DslUser } from '../graphql/generated/graphql';

interface AppContextState {
  currentUser: DslUser | null;
  loggedIn: boolean;
  fee: number;
}

export const initialState: AppContextState = {
  currentUser: null,
  loggedIn: false,
  fee: 0,
};

const reducer = (state: AppContextState, action: any) => {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'set-user':
      return { ...state, currentUser: action.payload };
    case 'set-fee':
      return { ...state, fee: action.payload };
    case 'set-loggedIn':
      return { ...state, loggedIn: action.payload };
    default:
      return state;
  }
};

export const AppContextComponent = React.createContext<{ state: AppContextState; dispatch?: any }>({
  state: initialState,
});

interface Props {
  loggedIn: boolean;
}

export const AppContext: React.FC<Props> = ({ children, loggedIn }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    ...initialState,
    loggedIn,
  });
  const value = { state, dispatch };

  return <AppContextComponent.Provider value={value}>{children}</AppContextComponent.Provider>;
};
