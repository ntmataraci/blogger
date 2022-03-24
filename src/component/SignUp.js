
import signUp from "../firebase/auth_signup_password"
import {useContext, useEffect, useRef, useState} from "react"
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
const SignUpScreen = () => {
const navigate=useNavigate()
const isLogged=useContext(AuthContext)
const[helper,setHelper]=useState(true)
const [usernameHandler,setUsernameHandler]=useState()
const [passwordHandler,setpasswordHandler]=useState()
const [passwordConfHandler,setpasswordConfHandler]=useState()
    const submitLogin = (e)=>{
        e.preventDefault()
        const email=e.target[0].value
        const pass=e.target[1].value
isLogged.setUser(email)
        signUp(email,pass)
     setHelper(!helper)
       navigate("/blogger/")
    }    
    
    // useEffect(()=>{
    //     isLogged.setLog(true)
    // },[helper])

    return(
        <div onSubmit={submitLogin} style={{width:"20%",margin:"auto",minWidth:"300px"}}>
      <form style={{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap",flexDirection:"column"}}>
      E-Mail: <input type="email" required  onChange={(e)=>setUsernameHandler(e.target.value)}/>
      Password:<input type="password" required onChange={(e)=>setpasswordHandler(e.target.value)} />
      Password Confirmation:<input type="password" required onChange={(e)=>setpasswordConfHandler(e.target.value)} />
      {console.log(usernameHandler,passwordHandler)}
      {usernameHandler&&passwordHandler&&passwordConfHandler&&
      (usernameHandler.indexOf("@")<0||passwordHandler.length<=5||usernameHandler.indexOf(".")<0)?
         <button disabled>Please Use min 5 Character for Password</button>:
         (passwordConfHandler&&passwordHandler!=passwordConfHandler)?
           <button disabled>Please Confirm your password correctly</button>:<button onClick={()=>isLogged.setLog(true)}>Sign Up</button>
         }
            </form> 
  
        </div>
    )
}
export default SignUpScreen