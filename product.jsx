import "./product.css"
import Title from "./title";
import Price from "./price";

function Product({title,index}){
    let oldPrice=["12,000","30,000","14,000","9,000"];
    let newPrice=["10,000","26,000","11,000","6,000"];

    return(
        <div className="Product">
            <Title title={title} indx={index}></Title>
           <Price oldPrice={oldPrice[index]} newPrice={newPrice[index]}></Price>
        </div>
    );
}

export default Product;