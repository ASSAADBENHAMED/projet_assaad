import axios from 'axios';
import { ADD_PRODUCET_FAILED, ADD_PRODUCET_SUCCESS, GET_PRODUCET_FAILED, GET_PRODUCET_LOADING, GET_PRODUCET_SUCCESS } from './productTypes';


export const getProducts= () => async(dispatch) =>{
    try {
        dispatch({type:GET_PRODUCET_LOADING})
       const res = await axios.get('/api/product');
       dispatch({type: GET_PRODUCET_SUCCESS, payload:res.data});
    } catch (error) {
        dispatch({type:GET_PRODUCET_FAILED, payload:error }); 
    } 
};
export const addProducts= (productInfo) => async(dispatch) =>{
    try {
       const res = await axios.post('/api/product ',productInfo);
       dispatch({type:ADD_PRODUCET_SUCCESS, payload:res.data});
    
    } catch (error) {
        dispatch({type:ADD_PRODUCET_FAILED, payload:error }); 
    } 
};
/* export const addProducts= (productInfo) => async(dispatch) =>{
    try {

        const form= new FormData();
        form.append("file",productInfo.file);
        form.append("upload_preset","decoration");
      const res = await axios.post("https://api.cloudinary.com/v1_1/alassaad/upload",form)
      productInfo.image =  res.data.secure_url
       
    await axios.post('/api/product' ,productInfo);
       dispatch(getProducts());
    } catch (error) {
        dispatch({type:ADD_PRODUCET_FAILED, payload:error }); 
    } 
};
 */
export const updateProducts= (productInfo) => async(dispatch) =>{
    try {
        const form= new FormData();
        form.append("file",productInfo.file);
        form.append("upload_preset","decoration");
      const res = await axios.post("https://api.cloudinary.com/v1_1/alassaad/upload",form)
      productInfo.image =  res.data.secure_url    
            
    await axios.put(`/api/product/${productInfo._id}` ,productInfo);
       dispatch(getProducts());
    } catch (error) {
        dispatch({type:ADD_PRODUCET_FAILED, payload:error }); 
    } 
};

export const deleteProducts= (prodId) => async(dispatch) =>{
    try {
        
            
    await axios.delete(`/api/product/${prodId}`);
       dispatch(getProducts());
    } catch (error) {
        dispatch({type:ADD_PRODUCET_FAILED, payload:error }); 
    } 
};