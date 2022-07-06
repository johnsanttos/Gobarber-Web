import { createContext, useCallback, ReactNode} from "react";

interface AuthContextData{
    name: string;
    signIn (): void
}

type AuthProviderProps = {
    children: ReactNode;
  }

export const AuthContext = createContext <AuthContextData>( {} as AuthContextData )

export const AuthProvider: React.FC <AuthProviderProps>= ({children}) => {

    const signIn = useCallback (() => {
console.log ('signin')
    },[])

    return (
<AuthContext.Provider value ={{ name: 'John', signIn}}>
    {children}
</AuthContext.Provider>
    )
}

