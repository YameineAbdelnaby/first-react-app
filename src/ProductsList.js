import ProductsData from './ProductsData' ;
import './Pro.css' ;
import { Link } from 'react-router-dom';


function ProductsList () {
    
const products  = ProductsData.map( (product)=> {
    return (
        

<div className='yyyy'>
<div className='card' key ={ product.id}>
<img className='img' src={ product.img} alt='img' />
<h2> { product.title} </h2>
<h2> price: {product.price}$ </h2>
<h2>  count: {product.count}  </h2>
<Link className='but' to ={`/product/${product.id}`}> Details</Link> 
    </div>
    </div>
    )
})
return (
    <div  className='products-list'>
    
        { products}
        
        
         </div>

)


        
    
}
export default ProductsList ;