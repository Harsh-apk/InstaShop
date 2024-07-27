import { disableFilterProduct, setAllProducts } from "../redux/productData";
import { resetError, setError } from "../redux/UISlice";

export const getAllProducts = async(dispatch) => {
    dispatch(resetError());
    const url = 'https://fakestoreapi.com/products/';
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        dispatch(setAllProducts(data));
        dispatch(disableFilterProduct());
      }
    } catch(error){
        dispatch(setError(error));
    }
  };
  