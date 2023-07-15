import React from 'react';
import "./scss/index.scss";
import {btm_bnr1,  btm_bnr2} from "../../../assest/index";
import { Btn } from '../../../components';

export const Feature = () => {
  return (
    <div className='feature_section'>
        <div className='nested_featureSection'>
          <div className='box'>
           <img src={btm_bnr1} alt="btm_bnr1" />
           <div className='box_content'>
           <p>Lorem ipsum dolor sit amet.</p>
           <h1>Bedding Bundles</h1>
            <Btn value={"Shop Now"}/>
           </div>
          </div>
          <div className='box'>
          <img src={btm_bnr2} alt="btm_bnr2" />
          <div className='box_content'>
          <p>Lorem ipsum dolor sit amet.</p>
          <h1>Bedding Bundles</h1>
            <Btn value={"Shop Now"}/>
          </div>
          </div>
        </div>
        </div>
  )
}
