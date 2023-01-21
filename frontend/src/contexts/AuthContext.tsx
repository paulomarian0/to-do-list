import React, { createContext, useState } from "react";


export interface IAuthProvider {
  children?: JSX.Element
}

export const AuthContext = createContext({} as any);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [id, setId] = useState();

  return (
    <AuthContext.Provider value={{id, setId}}>
      {children}
    </AuthContext.Provider>
  )
}