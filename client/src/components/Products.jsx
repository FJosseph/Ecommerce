import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/actions';
import Product from './Product';
import '../styles/products.css'
function Products() {
    const allProducts = useSelector(state=>state.allProducts)
    const products = useSelector(state=>state.products)
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(getAllProducts())
    },[dispatch])
    return ( 
        <section id='products' className='products'>
            {allProducts.length?allProducts.map(x=>
                    <Product
                    key={x.id}
                    name={x.name}
                    description={x.description}
                    images={x.images}
                    />
                ):'No hay productos'}
        </section>
     );
}

export default Products;