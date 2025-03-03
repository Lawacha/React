import Product from "./product"
export default function Price({oldPrice,newPrice}){
   let old={textDecoration:"line-through",};
   let newP={fontWeight:"bolder"};
   let styles={backgroundColor:"#ffc300",
    height:"20%",

    color:"black",
    borderBottomLeftRadius:"8px",
    borderBottomRightRadius:"8px"

   }
   return (
        <div style={styles}>
            $<span style={old}>{oldPrice}</span>
            &nbsp;   &nbsp;   
            $<span style={newP}>{newPrice}</span>
        </div>
    )
}