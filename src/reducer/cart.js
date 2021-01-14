import * as types from './../contant/action';

var data=JSON.parse(localStorage.getItem('cart'))
const InitialState=data ? data :[]
const cart = (state = InitialState, action) => {
  var index=-1;//khong tim thay
    var {product}=action;
    switch (action.type) {
        case types.ADD_TO_CART:
       
        
           index=findHendal(state,product);
            if(index !==-1){

            state[index].product.quantity += product.quantity;
        
            }else{
               state.push(action)
            }
          
            console.log(action);
      
            localStorage.setItem('cart',JSON.stringify(state));
            return [...state];
        case types.REMOVE:
          console.log(action);
         var index=findHendal(state,product);
          if(index !== -1){
          state.splice(index,1);
          }
        
          localStorage.setItem('cart',JSON.stringify(state));
          return [...state];
        default:
            return state
    }
}
var findHendal=(cart,product)=>{
     var index=-1;
     for (var i = 0; i < cart.length; i++) {
       if(cart[i].product.id === product.id){
         
           index=i;
           break;
       }

     }
     return index;

}

export default cart;