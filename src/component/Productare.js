import React, { Component } from 'react';
import Slider from "react-slick";
import axios from 'axios';
import ProductItem from './ProductItem.js';
import * as action from './../action/index'
import {connect} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Productare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product:[],
      danhsach:''
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
  var {product} = this.state;
  var {cart}=this.props;


    const settings = {
   dots:false,
      infinite:true ,
      zoom: false,
      speed: 1000,
      slidesToShow: 6,
      slidesToScroll: 3,
      width: 1170,
   arrows:false,
   
    };
    return (
      <div>
       <div className="product-area pt-60 pb-50">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="li-product-tab">
          <ul className="nav li-product-menu">
            <li><a className="active" data-toggle="tab" href="#li-new-product"><span>New Arrival</span></a></li>
            <li><a data-toggle="tab" href="#li-bestseller-product"><span>Bestseller</span></a></li>
            <li><a data-toggle="tab" href="#li-featured-product"><span>Featured Products</span></a></li>
          </ul>               
        </div>
        {/* Begin Li's Tab Menu Content Area */}
      </div>
    </div>
    <div className="tab-content">
    <ToastContainer/>
      <div id="li-new-product" className="tab-pane active show" role="tabpanel">
        <div className="row">
          <div className="product-active">
             
         
          <Slider {...settings} >
         {this.showProduct(product)}
         
          </Slider>
          
         
     
         
           
           
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>

      </div>
    );
  }
 showProduct=(product)=>{
    var result =null;
    if(product.length >0){
     var result =product.map((product)=>{
        return (
                <div>
           <div className="col-lg-12">
                  
                  <div className="single-product-wrap">
                    <div className="product-image">
                   
                     <li>
                       <Link to={"/single-product/"+product.productdm + "/" +product.id+".html" }>
                     
                        <img src={product.img} width="162" alt="Li's Product Image"  />
                  
                       </Link>
                     </li>
                    
                      <span className="sticker">New</span>
                    </div>
                    <div className="product_desc">
                      <div className="product_desc_info">
                        <div className="product-review">
                          <h5 className="manufacturer">
        <a href="shop-left-sidebar.html">{product.productdm}</a>
                          </h5>
                          <div className="rating-box">
                            <ul className="rating">
                              <li><i className="fa fa-star-o" /></li>
                              <li><i className="fa fa-star-o" /></li>
                              <li><i className="fa fa-star-o" /></li>
                              <li className="no-star"><i className="fa fa-star-o" /></li>
                              <li className="no-star"><i className="fa fa-star-o" /></li>
                            </ul>
                          </div>
                        </div>
                
        <h4><a className="product_name" href="#">{product.productname}</a></h4>
                  
                        <div className="price-box">
        <span className="new-price new-price-2">{product.pricereal}</span>
        <span className="old-price">{product.pricesale}</span>
                          <span className="discount-percentage">-7%</span>
                        </div>
                      </div>
                      <div className="add-actions">
                        <ul className="add-actions-link">
                          <li className="add-cart active" onClick={()=>this.themgiohang(product)}><a href="#" >Add to cart</a></li>
                         
                          <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
              
                </div>
  </div>
        )
      })
    }
    return result;
 }
 themgiohang=(product)=>{
   this.props.addtocart(product);
   toast("Thêm Vào Giro Hàng Thành Công");
          
 }
 
//  loadproduct=(product)=>{
//   this.props.showinfo(product)
//  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addtocart: (product) => {
      dispatch(action.addtocart(product))
    },

   
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart,
   
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Productare)