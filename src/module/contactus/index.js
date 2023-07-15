import React from 'react';
import "./scss/index.scss";
import {Navbar, Footer} from "../../layout";
import {Input} from "../../components"


export const ContactUs = () => {
 
  return (
    <>
    <Navbar/>
    <div className='contactus_section'>
        <div className='banner_section'>
           <h1>Contact Us</h1>
        </div>
      <div className='nested_contactus'>
        <div className='details'>
          <div className='address'>
            <h5>Address</h5>
            <div className='nested_address'>
               <div>
                <h6>Email:</h6>
                <p>info@nativelinum.com</p>
               </div>
            <form className='get_in_touch'>
              <div>
              <Input placeholder={"Full Name"} type="text" required={"required"} />
              </div>
              <div>
              <Input placeholder={"Email"} type="text" required={"required"} />
              </div>
              <div>
              <Input placeholder={"Password"} type="number" required={"required"} />
              </div>
              <div>
                <textarea cols="12" placeholder='Requirments'></textarea>
              </div>
            </form>


            </div>
          <h5>CONTACT US</h5>
          <p>Whether you’re looking for answers, would like to solve a problem, or just want to let us know how we did, you’ll find.

          </p>
          </div>
        </div>

        <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.0561165280014!2d-117.82247894872523!3d33.862444635059546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd13799938fcf%3A0xebc3386997b5537c!2s2001%20E%20Miraloma%20Ave%2C%20Placentia%2C%20CA%2092870%2C%20USA!5e0!3m2!1sen!2s!4v1675468507643!5m2!1sen!2s" width="100%" height="100%"  style={{border: "none"}} allowFullScreen="" loading="lazy" ></iframe>

        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
