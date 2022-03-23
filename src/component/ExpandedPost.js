import postDatabase from "../data/post-database"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import readDatabase from "../firebase/database"
const ExpandedPost = () => {

    const param=useParams().postId
const [posts,setsPosts]=useState()
const [filtered,setFiltered]=useState()

useEffect (async()=>{
const data=await readDatabase()
setsPosts(data)
},[])

useEffect(()=>{
    posts&&setFiltered(posts.filter(item=>item.id==param)[0])
    console.log(filtered)
},[posts])



    return(
<>
{filtered&&
<div style={{width:"50%",minWidth:"300px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"auto",wordBreak:"break-all"}}>
  {filtered.img? <div><img src={filtered.img} style={{maxWidth:"60%",maxHeight:"30%",minWidth:"200px"}}></img></div>:""}
<div style={{textIndent:"2rem",lineHeight:"1.3rem",wordSpacing:"0.1rem"}}><p>{filtered.post}</p></div>
<div style={{display:"flex",gap:"1rem",justifyContent:"flex-end",flexDirection:"row",width:"100%"}}><div>{filtered.email}</div><div>{filtered.date}</div></div>
</div>
}

</>
    )
}

export default ExpandedPost