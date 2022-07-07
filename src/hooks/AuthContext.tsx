import { createContext, useCallback, ReactNode, useState, useContext } from "react";
import api from '../services/api'

interface AuthState {
    token: string;
    user: object;
};

interface SignInProps {
    email: string;
    password: string
}

interface AuthContextData {
    user: object;
    signIn(credentials: SignInProps): Promise<void>;
    signOut(): void
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const [data, setData] = useState <AuthState> (() =>{
        const token = localStorage.getItem('@GoBarber: token')
        const user = localStorage.getItem('@GoBarber: user')

        if (token && user) {
            return {token, user: JSON.parse(user) }
        }
        return {} as AuthState
    } )

    const signIn = useCallback(async ({ email, password }: SignInProps) => {
        const response = await api.post('sessions', {
            email,
            password
        })

        console.log('acesssou  ', response.data)

        const { token, user } = response.data
        localStorage.setItem('@GoBarber: token', token)
        localStorage.setItem('@GoBarber: user', JSON.stringify(user))
        // JSON.stringify(user)) transformando objeto em string para salvar em localstorage

        setData ({ token,user})
    }, [])

const signOut = useCallback (() => {
    const token = localStorage.getItem('@GoBarber: token')
    const user = localStorage.getItem('@GoBarber: user')

    setData ({} as AuthState )
},[])


    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth(): AuthContextData {
const context = useContext (AuthContext);

if (!context) {
    throw new Error( 'useAuth must be used within an AuthProvider')
}

return context

}

