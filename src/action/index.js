import * as types from './../contant/action';
export const addtocart=(product)=>{
  return {
      type:types.ADD_TO_CART, 
      product
  }
}
export const subtotal=(subtotal)=>{
  return {
      type:types.SUB_TOTAL, 
      subtotal
  }
}


export const remove=(product)=>{
  return {
    type:types.REMOVE, 
      product
  }
}
export const userlogin=(userlogin)=>{
  return {
    type:types.USERS, 
    userlogin
  }
}



