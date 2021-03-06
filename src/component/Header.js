import firebase from 'firebase';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Link
} from "react-router-dom";




class Header extends Component {
  constructor(props) {
    super(props);
   this.state={
     text:'',
     flag:false,
     trangthai:false,
     minicart:false,
     product:[]

   }    
  }

  render() {
    var {total}=this.props;
    var {cart}=this.props;
    console.log(cart);
 console.log(this.props.total);
    var ketqua=[];
    const arr=[
      "Cacatua tenuirostris",
    "Phalaropus fulicarius",
    "Meleagris gallopavo",
    "Vanessa indica",
    "Tapirus terrestris",
    ]
    for(var i=0;i<arr.length;i++){
      if(arr[i] === this.state.text){
        ketqua.push(arr[i]);
      }
     }
    //  var showtable=(ketqua)=>{
    //   if(ketqua){
    //     return (
    //       <div className="textbox">
    //       <ul>
    //         {
    //           ketqua.map((ketqua)=>{
    //           return (<li>{ketqua}</li>)
    //           })
    //         }
    //       </ul>
    //   </div>
    //     )
    //   }else{
    //     console.log("eeee");
    //   }
    //    }

    return (
 
        <div>
            <header>
  {/* Begin Header Top Area */}
  <div className="header-top">
    <div className="container">
      <div className="row">
        {/* Begin Header Top Left Area */}
        <div className="col-lg-3 col-md-4">
          <div className="header-top-left">
            <ul className="phone-wrap">
              <li><span>Telephone Enquiry:</span><a href="#">(+123) 123 321 345</a></li>
            </ul>
          </div>
        </div>
        {/* Header Top Left Area End Here */}
        {/* Begin Header Top Right Area */}
        <div className="col-lg-9 col-md-8">
          <div className="header-top-right">
            <ul className="ht-menu">
              {/* Begin Setting Area */}
              <li>
                <div className="ht-setting-trigger" onClick={()=>this.checklogin()}>
                
                 {this.showUser()}        
                 
                  </div>
              {this.hienthiformcontent()}
                
              </li>
              {/* Setting Area End Here */}
              {/* Begin Currency Area */}
              <li>
                <span className="currency-selector-wrapper">Currency :</span>
                <div className="ht-currency-trigger" onClick={()=>this.checklogin()}><span>USD $</span></div>
               {/* {this.hienthinoidungmoney()} */}
              </li>
              {/* Currency Area End Here */}
              {/* Begin Language Area */}
              <li>
                <span className="language-selector-wrapper">Language :</span>
                <div className="ht-language-trigger"><span>English</span></div>
                {/* <div className="language ht-language">
                  <ul className="ht-setting-list">
                    <li className="active"><a href="#"><img src="images/menu/flag-icon/1.jpg" alt="" />English</a></li>
                    <li><a href="#"><img src="images/menu/flag-icon/2.jpg" alt="" />Français</a></li>
                  </ul>
                </div> */}
              </li>
              {/* Language Area End Here */}
            </ul>
          </div>
        </div>
        {/* Header Top Right Area End Here */}
      </div>
    </div>
  </div>
  {/* Header Top Area End Here */}
  {/* Begin Header Middle Area */}
  <div className="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
    <div className="container">
      <div className="row">
        {/* Begin Header Logo Area */}
        <div className="col-lg-3">
          <div className="logo pb-sm-30 pb-xs-30">
          <li>
            <Link to="/">
            <img src="../../images/menu/logo/1.jpg" alt="" />
            </Link>
          </li>
          </div>
        </div>
        {/* Header Logo Area End Here */}
        {/* Begin Header Middle Right Area */}
        <div className="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
          {/* Begin Header Middle Searchbox Area */}
          <form action="#" className="hm-searchbox">
            <select className="nice-select select-search-category">
              <option value={0}>All</option>                         
              <option value={10}>Laptops</option>                     
              <option value={17}>- -  Prime Video</option>                    
              <option value={20}>- - - -  All Videos</option>                     
              <option value={21}>- - - -  Blouses</option>                        
              <option value={22}>- - - -  Evening Dresses</option>                
              <option value={23}>- - - -  Summer Dresses</option>                     
              <option value={24}>- - - -  T-shirts</option>                       
              <option value={25}>- - - -  Rent or Buy</option>                        
              <option value={26}>- - - -  Your Watchlist</option>                     
              <option value={27}>- - - -  Watch Anywhere</option>                     
              <option value={28}>- - - -  Getting Started</option>         
              <option value={18}>- - - -  Computers</option>                      
              <option value={29}>- - - -  More to Explore</option>         
              <option value={30}>- - - -  TV &amp; Video</option>                     
              <option value={31}>- - - -  Audio &amp; Theater</option>               
              <option value={32}>- - - -  Camera, Photo </option>
              <option value={33}>- - - -  Cell Phones</option>                        
              <option value={34}>- - - -  Headphones</option>                     
              <option value={35}>- - - -  Video Games</option>                        
              <option value={36}>- - - -  Wireless Speakers</option>            
              <option value={19}>- - - -  Electronics</option>                        
              <option value={37}>- - - -  Amazon Home</option>                        
              <option value={38}>- - - -  Kitchen &amp; Dining</option>           
              <option value={39}>- - - -  Furniture</option>                      
              <option value={40}>- - - -  Bed &amp; Bath</option>                     
              <option value={41}>- - - -  Appliances</option>                 
              <option value={11}>TV &amp; Audio</option>                  
              <option value={42}>- -  Chamcham</option>                        
              <option value={45}>- - - -  Office</option>                     
              <option value={47}>- - - -  Gaming</option>                 
              <option value={48}>- - - -  Chromebook</option>                     
              <option value={49}>- - - -  Refurbished</option>                    
              <option value={50}>- - - -  Touchscreen</option>                        
              <option value={51}>- - - -  Ultrabooks</option>                     
              <option value={52}>- - - -  Blouses</option>                        
              <option value={43}>- -  Sanai</option>                        
              <option value={53}>- - - -  Hard Drives</option>                        
              <option value={54}>- - - -  Graphic Cards</option>                      
              <option value={55}>- - - -  Processors (CPU)</option>  
              <option value={56}>- - - -  Memory</option>                     
              <option value={57}>- - - -  Motherboards</option>                       
              <option value={58}>- - - -  Fans &amp; Cooling</option> 
              <option value={59}>- - - -  CD/DVD Drives</option>                      
              <option value={44}>- -  Meito</option>                        
              <option value={60}>- - - -  Sound Cards</option>                        
              <option value={61}>- - - -  Cases &amp; Towers</option>   
              <option value={62}>- - - -  Casual Dresses</option>                     
              <option value={63}>- - - -  Evening Dresses</option>       
              <option value={64}>- - - -  T-shirts</option>                       
              <option value={65}>- - - -  Tops</option>                                 
              <option value={12}>Smartphone</option>                  
              <option value={66}>- -  Camera Accessories</option>                     
              <option value={68}>- - - -  Octa Core</option>                      
              <option value={69}>- - - -  Quad Core</option>                  
              <option value={70}>- - - -  Dual Core</option>                      
              <option value={71}>- - - -  7.0 Screen</option>                     
              <option value={72}>- - - -  9.0 Screen</option>                     
              <option value={73}>- - - -  Bags &amp; Cases</option>                   
              <option value={67}>- -  XailStation</option>                     
              <option value={74}>- - - -  Batteries</option>                      
              <option value={75}>- - - -  Microphones</option>                        
              <option value={76}>- - - -  Stabilizers</option>                        
              <option value={77}>- - - -  Video Tapes</option>                        
              <option value={78}>- - - -  Memory Card Readers</option> 
              <option value={79}>- - - -  Tripods</option>           
              <option value={13}>Cameras</option>                          
              <option value={14}>headphone</option>                                
              <option value={15}>Smartwatch</option>                           
              <option value={16}>Accessories</option>
            </select>
            <input type="text" placeholder="Enter your search key ..." onClick={()=>this.checktextbox()} onChange={(e)=>this.ischage(e)} />
            <button className="li-btn" type="submit"><i className="fa fa-search" /></button>
             {this.hienthitextbox(ketqua)}
             {()=>this.showSeach(arr)}
          </form>
          {/* Header Middle Searchbox Area End Here */}
          {/* Begin Header Middle Right Area */}
          <div className="header-middle-right">
            <ul className="hm-menu">
              {/* Begin Header Middle Wishlist Area */}
              <li className="hm-wishlist">
                <a href="wishlist.html">
                  <span className="cart-item-count wishlist-item-count">0</span>
                  <i className="fa fa-heart-o" />
                </a>
              </li>
              {/* Header Middle Wishlist Area End Here */}
              {/* Begin Header Mini Cart Area */}
              <li className="hm-minicart" >
                <div className="hm-minicart-trigger">
                  <span className="item-icon" onClick={()=>this.checkminicart()} />
               
                    <span className="item-text" >£{this.showmoney(cart)}
                     <span className="cart-item-count">{this.showTotal(total)}</span>
                    </span>
                
                </div>
                <span />
              {this.showminicart(cart)}
              </li>
              {/* Header Mini Cart Area End Here */}
            </ul>
          </div>
          {/* Header Middle Right Area End Here */}
        </div>
        {/* Header Middle Right Area End Here */}
      </div>
    </div>
  </div>
  {/* Header Middle Area End Here */}
  {/* Begin Header Bottom Area */}
  <div className="header-bottom header-sticky d-none d-lg-block d-xl-block">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* Begin Header Bottom Menu Area */}
          <div className="hb-menu">
            <nav>
              <ul>
                <li className="dropdown-holder"><a href="index.html">Home</a>
                  <ul className="hb-dropdown">
                    <li className="active"><a href="index.html">Home One</a></li>
                    <li><a href="index-2.html">Home Two</a></li>
                    <li><a href="index-3.html">Home Three</a></li>
                    <li><a href="index-4.html">Home Four</a></li>
                  </ul>
                </li>
                <li className="megamenu-holder"><a href="shop-left-sidebar.html">Shop</a>
                  <ul className="megamenu hb-megamenu">
                    <li><a href="shop-left-sidebar.html">Shop Page Layout</a>
                      <ul>
                        <li><a href="shop-3-column.html">Shop 3 Column</a></li>
                        <li><a href="shop-4-column.html">Shop 4 Column</a></li>
                        <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                        <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                        <li><a href="shop-list.html">Shop List</a></li>
                        <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                        <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
                      </ul>
                    </li>
                    <li><a href="single-product-gallery-left.html">Single Product Style</a>
                      <ul>
                        <li><a href="single-product-carousel.html">Single Product Carousel</a></li>
                        <li><a href="single-product-gallery-left.html">Single Product Gallery Left</a></li>
                        <li><a href="single-product-gallery-right.html">Single Product Gallery Right</a></li>
                        <li><a href="single-product-tab-style-top.html">Single Product Tab Style Top</a></li>
                        <li><a href="single-product-tab-style-left.html">Single Product Tab Style Left</a></li>
                        <li><a href="single-product-tab-style-right.html">Single Product Tab Style Right</a></li>
                      </ul>
                    </li>
                    <li><a href="single-product.html">Single Products</a>
                      <ul>
                        <li><a href="single-product.html">Single Product</a></li>
                        <li><a href="single-product-sale.html">Single Product Sale</a></li>
                        <li><a href="single-product-group.html">Single Product Group</a></li>
                        <li><a href="single-product-normal.html">Single Product Normal</a></li>
                        <li><a href="single-product-affiliate.html">Single Product Affiliate</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-holder"><a href="blog-left-sidebar.html">Blog</a>
                  <ul className="hb-dropdown">
                    <li className="sub-dropdown-holder"><a href="blog-left-sidebar.html">Blog Grid View</a>
                      <ul className="hb-dropdown hb-sub-dropdown">
                        <li><a href="blog-2-column.html">Blog 2 Column</a></li>
                        <li><a href="blog-3-column.html">Blog 3 Column</a></li>
                        <li><a href="blog-left-sidebar.html">Grid Left Sidebar</a></li>
                        <li><a href="blog-right-sidebar.html">Grid Right Sidebar</a></li>
                      </ul>
                    </li>
                    <li className="sub-dropdown-holder"><a href="blog-list-left-sidebar.html">Blog List View</a>
                      <ul className="hb-dropdown hb-sub-dropdown">
                        <li><a href="blog-list.html">Blog List</a></li>
                        <li><a href="blog-list-left-sidebar.html">List Left Sidebar</a></li>
                        <li><a href="blog-list-right-sidebar.html">List Right Sidebar</a></li>
                      </ul>
                    </li>
                    <li className="sub-dropdown-holder"><a href="blog-details-left-sidebar.html">Blog Details</a>
                      <ul className="hb-dropdown hb-sub-dropdown">
                        <li><a href="blog-details-left-sidebar.html">Left Sidebar</a></li>
                        <li><a href="blog-details-right-sidebar.html">Right Sidebar</a></li>
                      </ul>
                    </li>
                    <li className="sub-dropdown-holder"><a href="blog-gallery-format.html">Blog Format</a>
                      <ul className="hb-dropdown hb-sub-dropdown">
                        <li><a href="blog-audio-format.html">Blog Audio Format</a></li>
                        <li><a href="blog-video-format.html">Blog Video Format</a></li>
                        <li><a href="blog-gallery-format.html">Blog Gallery Format</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="megamenu-static-holder"><a href="index.html">Pages</a>
                  <ul className="megamenu hb-megamenu">
                    <li><a href="blog-left-sidebar.html">Blog Layouts</a>
                      <ul>
                        <li><a href="blog-2-column.html">Blog 2 Column</a></li>
                        <li><a href="blog-3-column.html">Blog 3 Column</a></li>
                        <li><a href="blog-left-sidebar.html">Grid Left Sidebar</a></li>
                        <li><a href="blog-right-sidebar.html">Grid Right Sidebar</a></li>
                        <li><a href="blog-list.html">Blog List</a></li>
                        <li><a href="blog-list-left-sidebar.html">List Left Sidebar</a></li>
                        <li><a href="blog-list-right-sidebar.html">List Right Sidebar</a></li>
                      </ul>
                    </li>
                    <li><a href="blog-details-left-sidebar.html">Blog Details Pages</a>
                      <ul>
                        <li><a href="blog-details-left-sidebar.html">Left Sidebar</a></li>
                        <li><a href="blog-details-right-sidebar.html">Right Sidebar</a></li>
                        <li><a href="blog-audio-format.html">Blog Audio Format</a></li>
                        <li><a href="blog-video-format.html">Blog Video Format</a></li>
                        <li><a href="blog-gallery-format.html">Blog Gallery Format</a></li>
                      </ul>
                    </li>
                    <li><a href="index.html">Other Pages</a>
                      <ul>
                        <li><a href="login-register.html">My Account</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="compare.html">Compare</a></li>
                        <li><a href="wishlist.html">Wishlist</a></li>
                        <li><a href="shopping-cart.html">Shopping Cart</a></li>
                      </ul>
                    </li>
                    <li><a href="index.html">Other Pages 2</a>
                      <ul>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                        <li><a href="404.html">404 Error</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="shop-left-sidebar.html">Smartwatch</a></li>
                <li><a href="shop-left-sidebar.html">Accessories</a></li>
              </ul>
            </nav>
          </div>
          {/* Header Bottom Menu Area End Here */}
        </div>
      </div>
    </div>
  </div>
  {/* Header Bottom Area End Here */}
  {/* Begin Mobile Menu Area */}
  <div className="mobile-menu-area d-lg-none d-xl-none col-12">
    <div className="container"> 
      <div className="row">
        <div className="mobile-menu">
        </div>
      </div>
    </div>
  </div>
  {/* Mobile Menu Area End Here */}
</header>

    
      </div>
    );
  }
  checklogin=()=>{
    this.setState({
      flag:!this.state.flag
    })
    }

  hienthiformcontent=()=>{
    if(this.state.flag === true){
      return (
        <div className="setting ht-setting">
        <ul className="ht-setting-list">
          <li><a href="login-register.html">My Account</a></li>
          <li><a href="checkout.html">Checkout</a></li>
        {this.showList()}
        </ul>
      </div>
      )
    }
  }
  showList=()=>{
    if(this.props.name){
      return (
        <li ><a href="" onClick={()=>this.logout()}>Sign out</a></li>
      )
    }else {
      return (
        <li><Link to="/login">Sign In</Link></li>
      )
    }
  }
  logout=()=>{
    firebase.auth().signOut()
  }
  checktextbox=()=>{
    this.setState({
      trangthai:!this.state.trangthai
    })
  }
  hienthitextbox=(ketqua)=>{
    if(this.state.trangthai == true){
      return (
     <div className="textbox">
         <ul>
           <li style={{color:"red"}}>Lịch sử tìm kiếm</li>
           {ketqua.map((item)=>{
             return (
             <li>
               <Link to="/single-product">
                 {item}
               </Link>
             </li>
             )
           })}
           
         </ul>
     </div>
      )
    }
  }
showUser=()=>{
  if(!this.props.name){
    return (
      <span>Setting</span>
    )
   
  }else{
  
   return (
 <li>
   <span>{this.props.name}</span>
 </li>

  )
  }
}

 showTotal=(total)=>{
   var cout=total.length
   return cout
 }
 showminicart=(cart)=>{
   if(this.state.minicart === true){
     return (
      <div className="minicart">
      <ul className="minicart-product-list">
        {cart.map((value) => {
            return (
              <li>
            <a href="single-product.html" className="minicart-product-image">
              <img src={value.product.img} alt="cart products" />
            </a>
            <div className="minicart-product-details">
            <h6><a href="single-product.html">{value.product.productname}</a></h6>
              <span>£{value.product.pricereal} x {value.product.quantity} </span>
            </div>
            <button className="close" title="Remove">
              <i className="fa fa-close" />
            </button>
          </li>
            )
        })}
     
      </ul>
  
      <p className="minicart-total">SUBTOTAL: <span>£{this.showmoney(cart)}</span></p>
    
      <div className="minicart-button">
       <li>
         <Link to="/shopping-cart">
         <a href="shopping-cart.html" className="li-button li-button-fullwidth li-button-dark">
          <span>View Full Cart</span>
        </a>
         </Link>
       </li>
        <a href="checkout.html" className="li-button li-button-fullwidth">
          <span>Checkout</span>
        </a>
      </div>
    </div>
     )
   }
 }
 checkminicart=()=>{
  this.setState({
   minicart:!this.state.minicart
  })
 }
 showmoney=(cart)=>{
    var total=0;
    for (let i = 0; i < cart.length; i++) {
      total+=cart[i].product.quantity * cart[i].product.pricereal;
      
    }
    return total
 }

 ischage=(e)=>{
   this.setState({
     text:e.target.value
   })
 }
}

const mapStateToProps = (state, ownProps) => {
  return {
    total: state.cart,
    cart:state.cart
    
  }
}
export default connect(mapStateToProps,null)(Header)