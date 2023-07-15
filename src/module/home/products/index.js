import React from 'react';
import { Btn } from '../../../components';
import "./scss/index.scss";
// import {tabletops_kitchen, bedding_bundles, bedding_sets} from "../../../assest"
export const Products = () => {
  return (
    <div className='product_section'>
       <div className='nested_product_section'>
         <div className='product'>
            <div className='child_product'>
            <p>Lorem Ipsum Dolor</p>
            <h1>Bedding <br/> Sets</h1>
            <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit.</p>
            <Btn value={"Shop Now"}/>
            </div>
         </div>
         <div className='product second'>
         <div className='child_product'>

         <p>Lorem Ipsum Dolor</p>
            <h1>Bedding <br/> Bundles</h1>
            <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit.</p>
            <Btn value={"Shop Now"}/>
            </div>
            </div>
            <div className='product third'>
            <div className='child_product'>
            <p>Lorem Ipsum Dolor</p>
            <h1>Tabletops <br/> and Kitchen</h1>
            <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit.</p>
            <Btn value={"Shop Now"}/>
            </div>
            </div>
       </div>
    </div>
  )
}
