import React from 'react';
import {Footer, Navbar} from "../../../layout"; 
import {BillingAddress} from "./billingaddress" 
import {PaymentDetails} from "./paymentdetails"
import {PaymentGatways} from "./paymentgatways"

export const Checkout = ({totalAmountCobine, filertDataforAmount}) => {
  return (
    <div className=''>
      <Navbar/>
      <div className='checkout_section' style={{backgroundColor: "#FAFAFA"}}>
      <BillingAddress totalAmountCobine={totalAmountCobine} filertDataforAmount={filertDataforAmount}/>
       </div>
      <Footer/>
    </div>
  )
}
