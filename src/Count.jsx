import { useState } from "react"

export default function CountButton(){
    let [count,setCount]=useState(0);
        let incCount=()=>{
            setCount(count+1);

        }
    return(
        

        <div>
            <h1>{count}</h1>
            <button onClick={incCount}>click</button>
        </div>
    )
}