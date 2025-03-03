import Product from "./product.jsx";

function ProductTab()
{
    let styles={display:"flex",
    }
    return(
        <div style={styles}>
        <Product  index="0"  title="Logitect MX Master" ></Product>
        <Product index="1" title="Apple Pencil" ></Product>
        <Product index="2" title="Zebronics" ></Product>
        <Product index="3" title="Petronics Toad" ></Product>
        </div>
    )
}
export default ProductTab;