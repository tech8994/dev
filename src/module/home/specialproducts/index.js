import React from 'react';
import "./scss/index.scss";
import {product_img1, btm_bnr3} from "../../../assest/index";
import {BiHeart} from "react-icons/bi";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {HiOutlineShare} from "react-icons/hi";
import {FiEye} from "react-icons/fi";
import Slider from "react-slick";
import { Btn } from '../../../components';
import { NavLink } from 'react-router-dom';

export const SpecialProduct = ({data, setSlug, setIdWishList, setIdAddToCartProd}) => {



    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <div className='specialProduct_Section'>
    <div className='nested_specialProduct'>
     <div className='heading_specialProduct'>
         <h1>Special Products</h1>
     </div>

        {/* list of cards */}
        <div className='Cards_Section'>
         {/* card */}


  {data === "Loading" ? (
    <div>
                <h1>Loading...</h1>
              </div>
  ):(
    <Slider {...settings}>
    {data.map((value) =>{
      return(
        <div className='child_card' key={value.id}>
        <div className='img'>
          <img src={`https://livinlinen.webtestdemo.com/dashboard/assets/images/products/${value.image}`} alt={value.image} />
          <div className='img_icons'>
            <div className='icon'>
            <NavLink onClick={() => setIdWishList(value.id)}>
             <BiHeart/>   
             </NavLink>
             <NavLink onClick={() => setIdAddToCartProd(value.id)}>
             <AiOutlineShoppingCart/>   
             </NavLink>
             </div>

             <div className='icon'>
             <HiOutlineShare/>  
             <NavLink
                      to={"/product-detail"}
                      onClick={() => setSlug(value.slug)}
                    > 
             <FiEye/>
             </NavLink>   
             </div>

          </div>
        </div>
        <div className='product_content'>
         {/* <p>{value.name}</p> */}
         <NavLink to={"/product-detail"} onClick={() => setSlug(value.slug)}>
                {value.name}
              </NavLink>
        <p>${value.sale_price}</p>
        </div>
      </div>
      )
    })}  

    
    
    
    
    
    
    
    
    
         </Slider>    
  )
  }
       
     
        </div>

   {/* banner */}
   <div className='banner'>
    <img src={btm_bnr3} alt="btm_bnr3" />
    <div className='content_banner'>
    <p>Lorem ipsum dolor sit amet.</p>
           <h1>Bedding Bundles</h1>
            <Btn value={"Shop Now"}/>
    </div>
   </div>

    </div>
 </div>
  )
}
