import postDatabase from "../data/post-database";
import "./Post.css";
import { Link, useParams } from "react-router-dom";
import readDatabase from "../firebase/database";
import { useContext, useEffect, useState } from "react";
import { async } from "@firebase/util";
import AuthContext from "../store/auth-context";
const Post = () => {
  const [posts, setPosts] = useState();
  const [pageNo,setPageNo]=useState(0)

const userInformContex=useContext(AuthContext)

  useEffect(async () => {
    const data = await readDatabase();
    
   (data.sort((a,b)=>{
     if(a.date<=b.date){
       return 1}else{return -1}
    }))
    setPosts(data);
  }, [userInformContex.refreshHandler]);

  const myArr=[]
  if(posts){
  for(let i=0;i<Math.ceil(posts.length/3);i++){
   myArr.push(i)
  }
  }



const paginationHandler= (e) => {
setPageNo(+e.target.innerText-1)
}

useEffect(()=>{

    if(posts){
        const newArr=posts.slice(pageNo*3,pageNo*3+3)
  }
    },)


  const expandPostDatabase = posts
    ? posts.slice(pageNo*3,pageNo*3+3).map((item) => {
      console.log(item.id)
        return (
          <div
            key={item.id}
            style={{
              width: "300px",
              height: "250px",
              border: "1px solid silver",
              padding: "0.5rem",
              borderRadius: "1rem",
              wordWrap:"break-word"
            }}
          >
            <div>
              {item.img&&
              <img
                src={item.img}
                style={{ height: "50px", float: "left", marginRight: "1rem" }}
              ></img>
    }
            </div>
            <div style={{ textAlign: "justify" }}>
              {item.post.length > 270
                ? item.post.substring(0, 270) + "...":item.post}
                 {item.post.length > 270&&
              <Link to={`/${item.id}`}>
                <div className="continue">Continue</div>
              </Link>
    }
            </div>
            <div style={{display:"flex",justifyContent:"flex-end",flexDirection:"column"}}>
            <div style={{display:"flex",justifyContent:"flex-end"}}><i>{item.email}</i></div>
            <div style={{display:"flex",justifyContent:"flex-end"}}><i>{item.date}</i></div>
            </div>
          </div>
        );
      })
    : console.log("kayıt yok");

  return <>
    <div style={{width:"100%",display:"flex",flexWrap:"wrap",gap:"1rem"}}>Page: {myArr.map((item,idx)=>{
      return(
     <div key={Math.floor(Math.random()*1000+1)+idx} onClick={paginationHandler}>{item+1}</div>
        )
    }
        )
        }
   </div>
  {posts && expandPostDatabase}

  </>;
};

export default Post;
