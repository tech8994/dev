import React,{useState} from 'react';
import "./scss/index.scss";
import {product_img1} from "../../../assest/index";
import {BiHeart} from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import {AiOutlineShoppingCart} from "react-icons/ai";
import {HiOutlineShare} from "react-icons/hi";
import {FiEye} from "react-icons/fi";
import Slider from "react-slick";
import { DammyData } from '../../../data';
import { addToCart } from "../../../store/slices/addcart";




export const BedCollection = ({data, setSlug, setIdWishList, setIdAddToCartProd}) => {
 
  console.log(data);
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
    <div className='bedCollection_Section'>
       <div className='nested_bedCollection'>
        <div className='heading_bedCollection'>
            <h1>Bedding Collections</h1>
            <div className='filter_links'>
              <ul>
                <li><a href="#/">BED SHEETS</a></li>
                <li><a href="#/">HAMPTON</a></li>
                <li><a href="#/">BOLSTER</a></li>
              </ul>
            </div>
        </div>

           {/* list of cards */}
           <div className='Cards_Section'>
            {/* card */}

           {data === "Loading" ? (
              <div>
                <h1>Loading...</h1>
              </div>
           ) :(
            <Slider {...settings}>
            {data.map((value, id) =>{
               return(
                <div className='child_card' key={value.id}>
                <div className='img'>
                  <img src={`https://livinlinen.webtestdemo.com/dashboard/assets/images/products/${value.image}`} alt={value.img} />
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
                 {/* <NavLink to={value.link}>{value.name}</NavLink> */}
                 <NavLink to={"/product-detail"} onClick={() => setSlug(value.slug)}>
                {value.name}
              </NavLink>
                <p>${value.sale_price}</p>
                </div>
              </div>                
               )
            })}
  
  
          </Slider>   
           )}
           
           </div>
       </div>
    </div>
  )
}
