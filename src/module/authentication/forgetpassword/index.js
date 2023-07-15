import React,{useState, useEffect} from 'react';
import "./scss/index.scss";
import {Navbar,Footer} from "../../../layout";
import { Btn } from '../../../components';
import axios from 'axios';
import { toast } from 'react-toastify';

export const ForgetPassword = () => {
   let [getEmail, setGetEmail]=useState("");


   
   let forgetPasswordFunc = async (data) => {
    try {
      let res = await axios.post(
        "https://livinlinen.webtestdemo.com/dashboard/api/forgot_password",
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("bed_token")}`,
          },
        }
      );
      if (res.status == 200) {
        // console.log("Res Foget Password", res);
        toast.success(res.data.Livin_Linen[0].msg);     
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onSubmitForgetPass=(e) =>{
    e.preventDefault();
    let emailForgetPass={
      email: getEmail,
   };
   forgetPasswordFunc(emailForgetPass);
 };

  return (
    <div className='forgetpassword_section'>
        {/* <Navbar/> */}
        <div className='nested_forgetpassword'>
            <div className='card_forgetPassword'>
                <h1>Forget Password</h1>
                <p>We will send you an email to reset your password.</p>
                <div className='email_box'>
                    <form onSubmit={onSubmitForgetPass}>
                 <label>Email</label>
              <input type="email" placeholder='Email' name='email' onChange={(e) => setGetEmail(e.target.value)}  />                 
              <div className='email_sub_btn'>
              <Btn value={"Submit"}/>
              </div>
              </form>
                </div>

            </div>
        </div>
        {/* <Footer/> */}
    </div>
  )
}
