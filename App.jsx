import Product from './product.jsx';
import ProductTab from './ProductTab.jsx';
import './App.css'
import Hello from "./activityOne.jsx";

function App() {
  return (
    
    <div className='mainDiv'>
      <h1 className='heading'>Products</h1>
      <ProductTab></ProductTab>
    <Hello user="supp" textColor="blue"></Hello>
    <Hello user="suprii" textColor="brown"></Hello>
    </div>
  )
}

export default App;
