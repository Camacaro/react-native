import React, {createContext, useContext, useReducer} from 'react';
import {authReducer} from './authReducer';

// Definir como luce, qué información tendré aquí
export interface AuthState {
  isLoggedIn: Boolean;
  username?: string;
  favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
};

// Lo usaremos para decirle a React cómo luce y qué expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  logout: () => void;
  changeUsername: (username: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Hook Auth Context
export const useAuthContext = () => useContext(AuthContext);

// Componente proveedor del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFaIcon', payload: iconName});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  const changeUsername = (username: string) => {
    dispatch({type: 'changeUsername', payload: username});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        logout,
        changeUsername,
        changeFavoriteIcon,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
