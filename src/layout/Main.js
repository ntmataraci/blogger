import Post from "../component/Post";
import style from "./Main.module.css"
import { Outlet } from "react-router-dom";
import AuthContext from "../store/auth-context";
const Main = () => {
  const screnWidth = window.innerWidth;


  

  return (
    <>
    <Outlet/>
      {screnWidth > 750 ? (
        <div
className={style.post_container}
        >
          <Post />
        </div>
 
      ) : (
        <div
        className={style.post_container_small}
        >
          <Post />
        </div>
      )}
    </>
  );
};

export default Main;
