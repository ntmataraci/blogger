import { createContext, useContext } from "react"
import React,{useState} from "react"
import users from "../data/users"

const userFetcher=(name)=>users.filter(user=>user.username==name)[0]

const AuthContext=React.createContext()

export const AuthProvider= ({children}) => {
    const [isLogged,setIsLogged]=useState(false)
    const [user,setUser]=useState()
    const [refreshMe,setRefreshMe]=useState(false)
    return(
    <AuthContext.Provider value={{ userFetcher,isLogged:isLogged,setLog:(x)=>setIsLogged(x),user:user,setUser:(x)=>setUser(x),refreshMe:(x)=>setRefreshMe(x),refreshHandler:refreshMe}}>
    { children }
  </AuthContext.Provider>
    )
}

export default AuthContext
// export {AuthContextProvider}