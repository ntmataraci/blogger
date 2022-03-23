
import signUp from "../firebase/auth_signup_password"
import {useContext, useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
const SignUpScreen = () => {
const navigate=useNavigate()
const isLogged=useContext(AuthContext)
const[helper,setHelper]=useState(true)

    const submitLogin = (e)=>{
        e.preventDefault()
        const email=e.target[0].value
        const pass=e.target[1].value
isLogged.setUser(email)
        signUp(email,pass)
     setHelper(!helper)
       navigate("/")

    }    
    
    useEffect(()=>{
        isLogged.setLog(true)
    },[helper])

    return(
        <div onSubmit={submitLogin} style={{width:"20%",margin:"auto",minWidth:"300px"}}>
      <form style={{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap",flexDirection:"column"}}>
      E-Mail: <input type="email" required />
      Password:<input type="password" required/>
           <button>Sign Up</button>
            </form> 
  
        </div>
    )
}
export default SignUpScreen