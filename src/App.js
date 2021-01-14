import firebase from 'firebase';
import React,{useEffect,useState} from 'react';
import {
  BrowserRouter as Router,

  Redirect,

  Route
} from "react-router-dom";
import './App.css';
import './bootstrap.min.css';
import Footer from './component/Footer';
import Header from './component/Header';
import './fontawesome-stars.css';
import './helper.css';
import './jquery-ui.min.css';
import './magnific-popup.css';
import './meanmenu.css';
import './nice-select.css';
import './owl.carousel.min.css';
import './responsive.css';
import routes from './router/routes';
import './venobox.css';
;

const config = {
  apiKey: 'AIzaSyBJVLjm-CeJC1rSeGRJK-tRJHnLHiHLQD8',
  authDomain: 'limuba.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);

function App() {
  const [name,setName]=useState("")

  useEffect(()=>{
 
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
      console.log("không có tài khoản nào dc log in");
    }else{
      setName(user.displayName);
      console.log("Đăng Nhập Thành Công");
    }

    })
    return ()=> unregisterAuthObserver();
  },[])
  return (
<Router>
<div className="App">
       <div className="body-wrapper">
       <header>
        <Header name={name}/>
        </header>
        <main>
          {
            routes.map((routes)=>{
             return (
               <Route
               path={routes.path}
               exact={routes.exact}
               component={routes.component}
               />
             )
            })
          }




        </main>
        <footer>
          <Footer/>
          {/* <Cart/> */}
        </footer>
       </div>
    </div>
</Router>
  );
}

export default App;
