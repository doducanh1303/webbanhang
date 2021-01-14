import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        var {product}=this.props;
        console.log(product);
        return (
            <div>
              
              
                   <div>
                   <div className="col-lg-12">
                   
                   <div className="single-product-wrap">
                     <div className="product-image">
                       <a href="single-product.html">
                         <img src={product.img} alt="Li's Product Image" />
                       </a>
                       <span className="sticker">New</span>
                     </div>
                     <div className="product_desc">
                       <div className="product_desc_info">
                         <div className="product-review">
                           <h5 className="manufacturer">
             <a href="shop-left-sidebar.html"></a>
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
                         <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                         <div className="price-box">
                           <span className="new-price new-price-2">$71.80</span>
                           <span className="old-price">$77.22</span>
                           <span className="discount-percentage">-7%</span>
                         </div>
                       </div>
                       <div className="add-actions">
                         <ul className="add-actions-link">
                           <li className="add-cart active"><a href="#">Add to cart</a></li>
                           <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                           <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                         </ul>
                       </div>
                     </div>
                   </div>
               
                 </div>
                   </div>
                    </div>
                   )
               
           
        
    }
}

export default ProductItem;