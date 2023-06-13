import React, { useEffect,useState,useContext ,createContext, useReducer} from 'react'
import { cartReducer } from './Reducer';
const Cart = createContext()

function Context({children}) {
    const [state ,dispatch ] = useReducer(cartReducer , {     
        cart:[]
    })   
  return (
    <Cart.Provider value={{state , dispatch}}>
       {children}
    </Cart.Provider>
  )
}
export const CartState = () => {
    return useContext(Cart);
  };
export default Context