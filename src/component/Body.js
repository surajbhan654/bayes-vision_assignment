import React from 'react';
import "./body.css";
import Header from './Header';
import Card from './Card';
import Card2 from './card2';
import { Section1 } from './Section1';
import { resList1, resList2 } from '../utils/mockData';


const Body = () => {
  console.log(resList1)
  return (
  
    <div className='container'>
       <Header/>
          <Section1/>
             <h1 className='card1-heading'> Why Choose BayesVision </h1>
          
              <div className='card6-container'>
                  {
                  resList1.map( (res) => (<Card key={res.id} resData = {res}/> ))
                  }
              </div>

              <h1 className='card1-heading'> Let's talk product </h1>

              <div className='card4-container'>
                  {
                  resList2.map( (res2) => (<Card2 key={res2.id} resData2 = {res2}/> ))
                  }
              </div>

              <div className='contactUs'>
                    Contact Us
              </div>

              <div className='email-container'>
                  sales@bayes-vision.com
              </div>

              <div className='copyright-container'>
                  COPYRIGHT © 2024 BAYESVISION - ALL RIGHTS RESERVED.
              </div>

       </div>
  );
};
export default Body;
