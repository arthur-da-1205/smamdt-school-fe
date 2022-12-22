import { LocalStorage } from '@libraries/storage';
import React, { createContext, useContext, useState } from 'react';

interface IContextProps {
  isAuthenticated: boolean;
  user: any | null;
  setToken: (token: string) => void;
  setUser: (user: any) => void;
  setLogout: () => void;
}

const AppContext = createContext<IContextProps>({
  isAuthenticated: false,
  user: null,
  setToken: () => {},
  setUser: () => {},
  setLogout: () => {},
});

interface IProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<IProviderProps> = ({ children }) => {
  const localToken: any = LocalStorage.getItem('user_token');
  const localUser: any = LocalStorage.getItem('user_profile');
  const [token, setTokenState] = useState<string | null>(localToken);
  const [user, setUserState] = useState<any | null>(localUser || null);

  // anomaly, ERROR must be defined outside provider

  const setToken = (token: string | null) => {
    if (!token) {
      LocalStorage.removeItem('user_token');
    } else {
      LocalStorage.setItem('user_token', token);
    }

    setTokenState(token);
  };

  const setUser = (user: any | null) => {
    if (!user) {
      LocalStorage.removeItem('user_profile');
    } else {
      LocalStorage.setItem('user_profile', user);
    }

    setUserState(user);
  };

  const setLogout = () => {
    // do not change the order
    setUserState(null);
    setTokenState(null);
    LocalStorage.clear();
  };

  const contextPayload = React.useMemo(
    () => ({
      isAuthenticated: !!token,
      user,
      setToken,
      setUser,
      setLogout,
    }),
    [token, user]
  );

  return <AppContext.Provider value={contextPayload}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
