import React, { Component } from 'react';
import Slider from "react-slick";
import axios from 'axios'
import {connect} from 'react-redux';
import * as action from './../action/index';
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
   var {product} = this.state;
   console.log(product);
 
    
      const settings = {
        dots:false,
           infinite:true ,
           zoom: false,
           speed: 500,
           slidesToShow: 4,
           slidesToScroll: 1,
          arrows:true,
          autoplay:true,
         
         };
       
      
        return (
            <div>
                <div className="content-wraper">
  <div className="container">
   {
     product.map((item)=>{
       if(item.id == this.props.match.params.id){
         return (
          <div className="row single-product-area">
          <div className="col-lg-5 col-md-6">
            {/* Product Details Left */}
            <div className="product-details-left">
              <div className="product-details-images slider-navigation-1">
              <div className="lg-image">
                  <a className="popup-img venobox vbox-item" href data-gall="myGallery">
                  <img src={item.img}   />
                     </a>
      
                  </div>
                {/* <div className="lg-image">
                  <a className="popup-img venobox vbox-item" href="images/product/large-size/2.jpg" data-gall="myGallery">
                    <img src="images/product/large-size/2.jpg" alt="product image" />
                  </a>
                </div>
                <div className="lg-image">
                  <a className="popup-img venobox vbox-item" href="images/product/large-size/3.jpg" data-gall="myGallery">
                    <img src="images/product/large-size/3.jpg" alt="product image" />
                  </a>
                </div>
                <div className="lg-image">
                  <a className="popup-img venobox vbox-item" href="images/product/large-size/4.jpg" data-gall="myGallery">
                    <img src="images/product/large-size/4.jpg" alt="product image" />
                  </a>
                </div>
                <div className="lg-image">
                  <a className="popup-img venobox vbox-item" href="images/product/large-size/5.jpg" data-gall="myGallery">
                    <img src="images/product/large-size/5.jpg" alt="product image" />
                  </a>
                </div>
                <div className="lg-image">
                  <a className="popup-img venobox vbox-item" href="images/product/large-size/6.jpg" data-gall="myGallery">
                    <img src="images/product/large-size/6.jpg" alt="product image" />
                  </a>
                </div> */}
              </div>
              <div className="product-details-thumbs slider-thumbs-1"> 
              <Slider {...settings}>
              <div>
              <div className="sm-image" with="30px">< img src="../../images/product/small-size/1.jpg" /></div>
              </div>
              <div>
              <div className="sm-image"><img src="../../images/product/small-size/2.jpg" alt="product image thumb" /></div>
              </div>
              <div>
              <div className="sm-image"><img src="../../images/product/small-size/3.jpg" alt="product image thumb" /></div>
              </div>
              <div>
              <div className="sm-image"><img src="../../images/product/small-size/4.jpg" alt="product image thumb" /></div>
              </div>
              <div>
              <div className="sm-image"><img src="../../images/product/small-size/5.jpg" alt="product image thumb" /></div>
              </div>
              <div>
              <div className="sm-image"><img src="../../images/product/small-size/6.jpg" alt="product image thumb" /></div>
              </div>
            </Slider>
              </div>
            </div>
            {/*// Product Details Left */}
    
     
          </div>
          <div className="col-lg-7 col-md-6">
      <div className="product-details-view-content pt-60">
        <div className="product-info">
                  <h2>{item.productname}</h2>
                  <span className="product-details-ref">{item.productdm}</span>
          <div className="rating-box pt-20">
            <ul className="rating rating-with-review-item">
              <li><i className="fa fa-star-o" /></li>
              <li><i className="fa fa-star-o" /></li>
              <li><i className="fa fa-star-o" /></li>
              <li className="no-star"><i className="fa fa-star-o" /></li>
              <li className="no-star"><i className="fa fa-star-o" /></li>
              <li className="review-item"><a href="#">Read Review</a></li>
              <li className="review-item"><a href="#">Write Review</a></li>
            </ul>
          </div>
          <div className="price-box pt-20">
                  <span className="new-price new-price-2">${item.pricereal}</span>
          </div>
          <div className="product-desc">
            <p>
              <span>100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.
              </span>
            </p>
          </div>
          <div className="product-variants">
            <div className="produt-variants-size">
              <label>Dimension</label>
              <select className="nice-select">
                <option value={1} title="S" selected="selected">40x60cm</option>
                <option value={2} title="M">60x90cm</option>
                <option value={3} title="L">80x120cm</option>
              </select>
            </div>
          </div>
          <div className="single-add-to-cart">
            <form action="#" className="cart-quantity">
              <div className="quantity">
                <label>Quantity</label>
                <div className="cart-plus-minus">
                  <input className="cart-plus-minus-box" defaultValue={1} type="text" />
                  <div className="dec qtybutton"><i className="fa fa-angle-down" /></div>
                  <div className="inc qtybutton"><i className="fa fa-angle-up" /></div>
                </div>
              </div>
              <button className="add-to-cart" type="submit" onClick={()=>this.addto(product)}>Add to cart</button>
            </form>
          </div>
          <div className="product-additional-info pt-25">
            <a className="wishlist-btn" href="wishlist.html"><i className="fa fa-heart-o" />Add to wishlist</a>
            <div className="product-social-sharing pt-25">
              <ul>
                <li className="facebook"><a href="#"><i className="fa fa-facebook" />Facebook</a></li>
                <li className="twitter"><a href="#"><i className="fa fa-twitter" />Twitter</a></li>
                <li className="google-plus"><a href="#"><i className="fa fa-google-plus" />Google +</a></li>
                <li className="instagram"><a href="#"><i className="fa fa-instagram" />Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="block-reassurance">
            <ul>
              <li>
                <div className="reassurance-item">
                  <div className="reassurance-icon">
                    <i className="fa fa-check-square-o" />
                  </div>
                  <p>Security policy (edit with Customer reassurance module)</p>
                </div>
              </li>
              <li>
                <div className="reassurance-item">
                  <div className="reassurance-icon">
                    <i className="fa fa-truck" />
                  </div>
                  <p>Delivery policy (edit with Customer reassurance module)</p>
                </div>
              </li>
              <li>
                <div className="reassurance-item">
                  <div className="reassurance-icon">
                    <i className="fa fa-exchange" />
                  </div>
                  <p> Return policy (edit with Customer reassurance module)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
              </div> 
         )
       }
     })
   }
   
    </div>


  </div>
</div>

        );
    }
    addto=(product)=>{
     this.props.addtocart(product)
    }

}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addtocart: (product) => {
      dispatch(action.addtocart(product))
    }
  }
}


export default connect(null, mapDispatchToProps)(ProductDetail)