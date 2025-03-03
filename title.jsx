import Product from "./product";
import ProductTab from "./ProductTab";

export default function Title({title,indx}){
 let features=[
    ["8000 DPI","5 Programmable Buttons"],
    ["Intuittive Touch Surface","Designed for iPad Pro"],
    ["Designed for iPad Pro","Intuitive Touch Surface" ],
    ["Wireless Mouse 2.4 Ghz","Optical Orientiation"]];
let styles={
    color:"black", 
    height:"80%",
   display:"flex",
   flexDirection:"column",
   justifyContent:"center",
}
    return(
        <div style={styles}>
            <h2>{title}</h2>
            <p>{features[indx][0]}</p>
            <p>{features[indx][1]}</p>
          
        </div>
    )
}