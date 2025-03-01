import Product from "./product.jsx";

function ProductTab()
{let features=["fast","durable","easy"];
   
    
    return(
        <>
        <Product  title="Phone" price={30000} features={features}></Product>
        <Product title="Laptop" price={50000} features={features}></Product>

        
        </>
    )
}
export default ProductTab;