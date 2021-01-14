import React from 'react';
import Homepage from './../page/Homepage';
import ProductDetail from './../component/ProductDetail';
import Cart from './../component/Cart';
import Login from './../component/Login';
const routes=[
    {
        path: '/',
        exact: true,
        component:()=><Homepage/>
    },
    {
        path: '/single-product/:slug/:id.html',
        exact: true,
        component:({match})=><ProductDetail match={match}/>
    },
    {
        path: '/shopping-cart',
        exact: true,
        component:()=><Cart/>
    },
    {
        path: '/login',
        exact: true,
        component:()=><Login/>
    },

]
export default routes
