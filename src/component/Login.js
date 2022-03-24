import { useContext, useEffect, useRef,useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../store/auth-context"
import signIn from "../firebase/Auth_signin_password"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, db } from "../firebase/firebase";
import readDatabase from "../firebase/database";
import addPost from "../firebase/addDatabase";


const LoginScreen = () => {
const navigate=useNavigate()
const userInformContex=useContext(AuthContext)

const usernameRef=useRef()
const passwordRef=useRef()
const [authInformation,setAuthInformation]=useState()
const [loginMsg,setLoginMsg]=useState()

const submitLogin = (e)=>{
    e.preventDefault()
    const username=e.target[0].value
    const pass=e.target[1].value
    setAuthInformation({username:username,pass:pass})

}    


useEffect(()=>{
if(authInformation){
  if(signIn(authInformation.username,authInformation.pass)){
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
     setLoginMsg(user.email)
     userInformContex.setLog(true)
     userInformContex.setUser(authInformation.username)
        // ...
      } else {
        setTimeout( setLoginMsg("Wrong Username or Pass!")  ,3000)
        setLoginMsg("Loggining...")
        navigate("/")
    
        // ...
      }
    });       
  }
}
},[authInformation])

/* firbase actions */




/* for static database 
const authControl = (username) => {
    const selectedUser=userInformContex.userFetcher(username)
   if(selectedUser){
       if(selectedUser.password==authInformation.pass){
           console.log("basarılı giriş")
           userInformContex.setLog(true)
       } else {
           console.log("hatalı şifre")
       }
   }else{
       console.log("böyle bir kullanıcı yok")
   }
}

useEffect(()=>{
    if(authInformation){
   authControl(authInformation.username)
    }

},[authInformation])
 */

return(
        <div style={{width:"20%",margin:"auto",minWidth:"300px"}}>
      <form onSubmit={submitLogin} style={{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap",flexDirection:"column"}}>
      Username:  <input ref={usernameRef} type="email"/>
      Password:<input ref={passwordRef} type="password"/>
           <button>Login</button>
            </form> 
<p style={{color:"red"}}>{loginMsg}</p>
        If you don't have an account. <span style={{fontWeight:"bold"}} onClick={()=>navigate("/signup")}>Sign Up!</span>
        </div>
    )
}
export default LoginScreen