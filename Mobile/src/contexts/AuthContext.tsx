import React, { createContext, ReactNode } from "react";

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: { children: ReactNode }) {

  async function signIn() { 
    console.log('Vamos logar!')
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      user: {
        name: 'Wesley',
        avatarUrl: 'https://github.com/wesleywisch.png'
      }
    }}>
      {children}
    </AuthContext.Provider>
  )
}