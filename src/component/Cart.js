import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as action from './../action/index'

class Cart extends Component {
  constructor(props) {
    super(props);
     this.state = {
       textValue:'',
       quantity:1,
       product:[]
      
     }    
  }
  componentDidMount(){
    axios({
      method: 'GET',
      url: 'http://localhost:4000/product',
      data:null
    }).then((response) => {
     this.setState({
       product: response.data
     })
    }).catch((error) =>{
      console.log(error);
    })
  }
    render() {
      var {cart} = this.props;
      var {quantity} = this.state;
      var {product}=this.state
 
      console.log(quantity);
        return (
            <div>
                <div className="Shopping-cart-area pt-60 pb-60">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <form action="#">
          <div className="table-content table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="li-product-remove">remove</th>
                  <th className="li-product-thumbnail">images</th>
                  <th className="cart-product-name">Product</th>
                  <th className="li-product-price">Unit Price</th>
                  <th className="li-product-quantity">Quantity</th>
                  <th className="li-product-subtotal">Total</th>
                  <debug></debug>
                </tr>
              </thead>
              <tbody>
        {
          cart.map((cart)=>{
            return (
              <tr>
              <td className="li-product-remove"><a href="#" onClick={()=>this.remove(cart.product)}><i className="fa fa-times" /></a></td>
              <td className="li-product-thumbnail"><a href="#"><img width="160" src={cart.product.img} alt="Li's Product Image" /></a></td>
             <td className="li-product-name"><a href="#">{cart.product.productdm}</a></td>
             <td className="li-product-price"><span className="amount">{cart.product.pricereal}</span></td>
              <td className="quantity">
                <label>Quantity</label>
                <div className="cart-plus-minus">
                  <input className="cart-plus-minus-box"  Value={cart.product.quantity} type="text" />
                  <div className="dec qtybutton" onClick={()=>this.down(cart)} ><i className="fa fa-angle-down"   /></div>
                  <div className="inc qtybutton" onClick={()=>this.up(cart)}><i className="fa fa-angle-up"  /></div>
                </div>
              </td>
            <td className="product-subtotal"><span className="amount">{cart.product.quantity * cart.product.pricereal}</span></td>
            </tr>
            )
          })
        }
                {/* <tr>
                  <td className="li-product-remove"><a href="#"><i className="fa fa-times" /></a></td>
                  <td className="li-product-thumbnail"><a href="#"><img src="images/product/small-size/6.jpg" alt="Li's Product Image" /></a></td>
                  <td className="li-product-name"><a href="#">Mug Today is a good day</a></td>
                  <td className="li-product-price"><span className="amount">$71.80</span></td>
                  <td className="quantity">
                    <label>Quantity</label>
                    <div className="cart-plus-minus">
                      <input className="cart-plus-minus-box" defaultValue={1} type="text" />
                      <div className="dec qtybutton"><i className="fa fa-angle-down" /></div>
                      <div className="inc qtybutton"><i className="fa fa-angle-up" /></div>
                    </div>
                  </td>
                  <td className="product-subtotal"><span className="amount">$60.50</span></td>
                </tr> */}
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="coupon-all">
                <div className="coupon">
                  <input id="coupon_code" className="input-text" name="coupon_code" defaultValue placeholder="Coupon code" type="text" />
                  <input className="button" name="apply_coupon" defaultValue="Apply coupon" type="submit" />
                </div>
                <div className="coupon2">
                  <input className="button" name="update_cart" defaultValue="Update cart" type="submit" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 ml-auto">
              <div className="cart-page-total">
                <h2>Cart totals</h2>
                <ul>
                  
              <li>Total <span>${this.totalcart(cart)}</span></li>
                </ul>
                <a href="#">Proceed to checkout</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

            </div>
        );
    }
    // showCart=(cart)=>{
    //   var result=null;
    //   if(cart.length>0){
    //     var result=cart.map((cart)=>{
    //       return (
    //         <tr>
    //         <td className="li-product-remove"><a href="#"><i className="fa fa-times" /></a></td>
    //         <td className="li-product-thumbnail"><a href="#"><img width="160" src={cart.product.img} alt="Li's Product Image" /></a></td>
    //        <td className="li-product-name"><a href="#">{cart.product.productdm}</a></td>
    //        <td className="li-product-price"><span className="amount">{cart.product.pricereal}</span></td>
    //         <td className="quantity">
    //           <label>Quantity</label>
    //           <div className="cart-plus-minus">
    //             <input className="cart-plus-minus-box"  defaultValue={quantity} type="text" />
    //             <div className="dec qtybutton" onClick={(quantity)=>this.down(quantity)} ><i className="fa fa-angle-down"   /></div>
    //             <div className="inc qtybutton" onClick={(quantity)=>this.up(quantity)}><i className="fa fa-angle-up"  /></div>
    //           </div>
    //         </td>
    //       <td className="product-subtotal"><span className="amount">{cart.product.quantity * cart.product.pricereal}</span></td>
    //       </tr>
    //       )
    //     })
    //   }else{
    //     return (
    //      <p style={{textalign: 'center'}}>Không có sản phẩm nào trong giỏ hàng</p>
    //     )
    //   }
    //   return result;
    // }
  
    up=()=>{
      this.setState({quantity:this.state.quantity +1})
    

    }
    totalcart=(cart)=>{
      var total=0
      if(cart.length >0){
        for (let i = 0; i < cart.length; i++) {
            total+=cart[i].product.quantity * cart[i].product.pricereal;
          
        }
      }

      return total
    
    }
    remove=(cart)=>{
   this.props.remove(cart)
     
    }
   
  
}
const mapStateToProps = (state, ownProps) => {
  return {
     cart: state.cart,
    
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: (product) => {
      dispatch(action.remove(product))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);