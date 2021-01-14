import {combineReducers} from 'redux';
import product from './../reducer/product';
import cart from './../reducer/cart';
var appreducer=combineReducers({
 product,cart
})
export default appreducer;