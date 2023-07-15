import React ,{useState, useEffect} from 'react';
import "./scss/index.scss";
import {ImFacebook, ImTwitter} from "react-icons/im";
import {IoLogoInstagram} from "react-icons/io";
import {BsYoutube} from "react-icons/bs";
import {MdLocationPin} from "react-icons/md";
import {AiFillPhone} from "react-icons/ai";
import {MdEmail} from "react-icons/md";
import { NavLink } from 'react-router-dom';
import axios from "axios";



export const Footer = () => {
  const [contactus, setContactUs] = useState([]);
  const [loading, setLoading] = useState(true);    


  useEffect(() => {
    let response;
    (async () => {
      try {
        setLoading(true);

        response =
         await axios.get(
          "https://livinlinen.webtestdemo.com/dashboard/api/get-settings"
        );
        if (response.status == 200) {
          console.log(response);
          setContactUs(response.data.data);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  console.log(contactus);
  let data= loading ? "Loading" : contactus[0];
    // console.log(data);

    
  return (
    <>
    <div className='footer-section'>
    <div className='nested_footeSection'>
      <div className='content_footer'>
        <div className='child'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className='followus'>Follow us</p>
            <ul className='ul_links'>
              {data !== "Loading" ? (   
                <>          
                <li><NavLink to={data.twiter && data.twiter}><ImTwitter/></NavLink></li>
                <li><NavLink to={data.facebook && data.facebook}><ImFacebook/></NavLink></li>
                <li><NavLink to={data.instagram && data.instagram}><IoLogoInstagram/></NavLink></li>
                <li><NavLink to={data.youtube && data.youtube}><BsYoutube/></NavLink></li>
                </>
                ) : null}

            </ul>
        </div>
        <div className='child'>
           <p>Information</p> 
           <ul className='link'>
            <li><a href="#/">Privacy Policy</a></li>
            <li><a href="#/">Retrun Policy</a></li>
            <li><a href="#/">Terms & Conditions</a></li>

           </ul>
           
        </div>
        <div className='child'>
              <p>Who We Are</p>
              <ul className='link'>
            <li><a href="#/">Home</a></li>
            <li><a href="#/">New Arrivals</a></li>
            <li><a href="#/">Build Your Bed</a></li>
            <li><a href="#/">Bedding Tabletops & Kitchen</a></li>
            <li><a href="#/">Curtains</a></li>
            <li><a href="#/">Bath</a></li>
            <li><a href="#/">Fabric</a></li>
            <li><a href="#/">Contact Us</a></li>
           </ul>
        </div>
        <div className='child'>
               <p>Contact us</p>
            <ul className='link'>
              {data !== "Loading" ? (
               <>
         <li>
           <MdLocationPin/> {data.address && data.address}
           </li>
           <li>
            <a href={`tel:+${data.phone}`}>
           <AiFillPhone/>  
           {data.phone && data.phone}
           <br/>
           <span>{data.phone2 && data.phone2}
           </span>  
           </a>
           </li>
           <li>
            <a href={`mailto:${data.email}`}>
           <MdEmail />  
           {data.email && data.email}
           </a>
           </li>
               </> 
              ) : null }
        
           </ul>
        </div>
      </div>
    </div>
    <div className='copyright'>
     <p>Copyright © 2023, Livin Linen</p>
    </div>
    </div>
    </>
  )
}
