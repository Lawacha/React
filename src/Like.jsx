import { useState } from "react"

export default function LikeButton(){
    let [isLiked,setIsLiked]=useState(false);
    
    let toggle=()=>{
       setIsLiked(!isLiked);
    }

    let likestyle={color:"red",
        fontSize:"20px"
    }
    return(
        <div>

            <p style={likestyle} onClick={toggle}>{isLiked?(<i className="fa-regular fa-heart"></i>):(<i class="fa-solid fa-heart"></i>)}</p>
            </div>
    )
}