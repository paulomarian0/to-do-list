import React, { createContext, useState } from "react";


export interface IAuthProvider {
  children?: JSX.Element
}

export const AuthContext = createContext({} as any);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [id, setId] = useState();
  const [needUpdate, setNeedUpdate] = useState(false);

  return (
    <AuthContext.Provider value={{id, setId, needUpdate, setNeedUpdate}}>
      {children}
    </AuthContext.Provider>
  )
}