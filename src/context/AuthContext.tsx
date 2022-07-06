import { createContext, useCallback, ReactNode} from "react";
import api from '../services/api'

interface SignInProps {
    email: string;
    password: string
}

interface AuthContextData{
    name: string;
    signIn(credentials: SignInProps): Promise<void>
}

type AuthProviderProps = {
    children: ReactNode;
  }

export const AuthContext = createContext <AuthContextData>( {} as AuthContextData )

export const AuthProvider: React.FC <AuthProviderProps>= ({children}) => {

    const signIn = useCallback (async( {email, password}: SignInProps ) => {
const response = await api.post('sessions', {
    email,
    password
})

console.log ('acesssou  ' , response.data)
    },[])

    return (
<AuthContext.Provider value ={{ name: 'John', signIn}}>
    {children}
</AuthContext.Provider>
    )
}

