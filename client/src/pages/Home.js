import React  from 'react';
// import { useDispatch } from 'react-redux';
// import { getProducts } from '../action/productActions';
import ProductList from '../components/ProductList';
import Slideshow from '../components/Solidshow';

const Home = () => {
  
  return (
    <div>
    
     <Slideshow/>
    
  <ProductList />

    </div>
  )
}

export default Home;