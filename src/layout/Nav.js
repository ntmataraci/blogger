import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase/firebase";
import style from "./Navs.module.css"
const Nav = () => {
  const [isLogged, setIsLogged] = useState();
  const logging = useContext(AuthContext);

  useEffect(() => {
    setIsLogged(logging.isLogged);
  }, [logging.isLogged]);
  const navigate = useNavigate();


const logOut=()=>{
   logging.setLog(false)
   
const auth = getAuth(app);
signOut(auth).then(() => {
 return (<div>Çıkış başarılı</div>)
}).catch((error) => {
  // An error happened.
});

}


  return (
    <div
      style={{
        borderBottom: "1px solid silver",
        width: "50%",
        minWidth: "300px",
        margin: "1rem auto",
      }}
    >
      <div className={style.nav}>
        <span className={style.nav_alt} onClick={() => navigate("/")}>Home</span>
        <span  className={style.nav_alt} onClick={() => navigate("/addpost")}>Add Post</span>
        {isLogged?
            <span className={style.nav_alt} onClick={logOut}>Log Out</span>
            :
            <span className={style.nav_alt} onClick={() => navigate("/login")}>Sign In</span>
    }
    
      </div>
    </div>
  );
};

export default Nav;
