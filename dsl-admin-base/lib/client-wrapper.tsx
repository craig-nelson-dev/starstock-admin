import { useContext, useEffect } from 'react';
import { AppContextComponent } from '../lib/context';
import { RepositoryFactory } from '../repositories/RepositoryFactory';
import { useRefreshMutation } from '../graphql/generated/graphql';

export const ClientWrapper: React.FC = ({ children }) => {
  const { state, dispatch } = useContext(AppContextComponent);
  const [refreshToken] = useRefreshMutation();

  // fetch initial data
  useEffect(() => {
    if (state.loggedIn) {
      const fetchUser = async () => {
        try {
          const user = await RepositoryFactory.get('company').getCurrentUser();
          dispatch({ type: 'set-user', payload: user });
        } catch (e) {
          console.log(e);
        }
      };

      fetchUser();

      const fetchDetails = async () => {
        const data = await RepositoryFactory.get('company').get();
        dispatch({ type: 'set-fee', payload: data.fee });
      };

      fetchDetails();
    }
  }, [state.loggedIn]);

  // refresh token
  useEffect(() => {
    const refreshInterval = 60 * 1000 * 4;
    let intervalId: number;

    if (state.loggedIn) {
      const performRefresh = async () => {
        try {
          await refreshToken();
        } catch (e) {
          //
        }
      };

      intervalId = window.setInterval(performRefresh, refreshInterval);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [state.loggedIn]);

  return <>{children}</>;
};
