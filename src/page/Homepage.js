import React, { Component } from 'react';
import SimpleSlider from './../component/SimpleSlider';
import Productare from './../component/Productare';
import Ads from './../component/Ads';
import ProductLaptop from './../component/ProductLaptop';
import Producttvandradio from './../component/Producttvandradio';
import Listadshome from './../component/Listadshome';

class Homepage extends Component {
    render() {
        return (
            <div>
         <div className="slider-with-banner">
            <SimpleSlider/>
        </div>
                
            <Productare/>
            <Ads/>
        {/* sp */}
        <ProductLaptop/>
        <Producttvandradio/>
        <Listadshome/>
        <ProductLaptop/>
        <Producttvandradio/>
        {/* het */}


            </div>
        );
    }
}

export default Homepage;