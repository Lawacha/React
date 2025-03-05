import { useState } from "react"


export default function Comment(){
   let [isComment,setIsComment]=useState(false);

   let styles={
    fontSize:"30px" 
   }
    let toggle=()=>{
        setIsComment(!isComment);
        
    }
    return(
        <div style={styles}>
            <p onClick={toggle}>{isComment?(<i class="fa-solid fa-comment"></i>):(<i class="fa-regular fa-comment"></i>)}</p>
        </div>
    )
}