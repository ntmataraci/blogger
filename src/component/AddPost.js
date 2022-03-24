import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import addDatabase from "../firebase/addDatabase"
import AuthContext from "../store/auth-context"
import LoginScreen from "./Login"
import { getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";
const AddPost = () => {
const navigate=useNavigate()

const userInformContex=useContext(AuthContext)

const [isLogged,setIsLogged]=useState(false)
useEffect(()=>{
setIsLogged(userInformContex.isLogged)
},[userInformContex.isLogged])




const sendingPost = (e) => {
    e.preventDefault()

    const msg = e.target[0].value
    const photo=e.target[1].value
    const file=e.target[1].files[0]
    if (photo){
    uploadFunction(file,photo,msg)
    }else{
        uploadNoPhotoFunction(msg)
    }
    e.target[0].value=""
    userInformContex.refreshMe(userInformContex.refreshHandler)
    navigate("/blogger/")
}
/*photo */
const uploadFunction = async (file,photo,msg) => {
    const newDate=new Date()
    const storage =  getStorage();
    const storageRef =  ref(storage, `/images/${photo}`);
    const metadata = {contentType: 'image/jpeg'}
 await uploadBytes(storageRef, file, metadata).then((snapshot)=>console.log("uploaded"))
  .then(
 await getDownloadURL(storageRef).then(item=>{
 addDatabase(userInformContex.user,msg,newDate.getUTCFullYear()+"/"+(newDate.getMonth()+1)+"/"+(newDate.getDay()+20)+ " "+ ("0"+newDate.getHours()).slice(-2)+":"+("0"+newDate.getMinutes()).slice(-2) ,item)
   } ))
}

const uploadNoPhotoFunction = async (msg) => {
    const newDate=new Date()
 addDatabase(userInformContex.user,msg,newDate.getUTCFullYear()+"/"+(newDate.getMonth()+1)+"/"+(newDate.getDay()+20)+ " "+ ("0"+newDate.getHours()).slice(-2)+":"+("0"+newDate.getMinutes()).slice(-2),"")
}

console.log(userInformContex.user)

    const textBox=()=>{
        return(
<div style={{width:"50%",minWidth:"300px",border:"1p solid siver",borderRadius:"1rem",margin:"auto"}}>
<form onSubmit={sendingPost}>
   <textarea style={{width:"100%",height:"300px"}}></textarea>
   <input type="file" name="file"></input>
  <button>Send</button>
</form>
</div>
        )
    }

const PlsSub= () => {
    return(
        <div style={{margin:"auto",color:"red"}}>Please sign or sigup</div>
    )
}

    return(  
<>

{isLogged?textBox():<div style={{margin:"auto",justifyContent:"center",display:"flex",flexDirection:"column"}}><PlsSub/><LoginScreen/></div>}
</>

)
}

export default AddPost