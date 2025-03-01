import "./product.css"

function Product({title,features=[],price=10}){
    let list=features.map((feature,index)=><li key={index}>{feature}</li>)
    let styles={backgroundColor:price>30000?"wheat":""};
    return(
        <div style={styles} className="Product">
            <h2>{title}</h2>
            <p>{list}</p>
            <p>${price}</p>
            {price>30000?<p>discount 5%</p>:null}
        </div>
    );
}

export default Product;