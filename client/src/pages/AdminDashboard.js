import ProductAdd from "../components/ProductAdd"
import React, { useEffect } from 'react'
import ProductCard from "../components/ProductCard"
import { getProducts } from '../action/productActions';
import { useDispatch ,  useSelector} from 'react-redux';

const AdminDashboard = () => {

  const productList =useSelector(state=>state.product)
 
   

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts()); 
  }, []);
  console.log((productList))
 
   return (
   
   
    <div >
    <div><ProductAdd /></div>
  <div >
    {productList.productsList.map((el,i)=><ProductCard key={i} product={el}/>)}
    </div>
    </div>
  
  
 
  )
}

export default AdminDashboard 