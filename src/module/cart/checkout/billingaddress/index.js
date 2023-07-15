import React from "react";
import "./scss/index.scss";
import { Input } from "../../../../components";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useFormik, Field, ErrorMessage,Form, Formik, validateYupSchema } from "formik";
import * as Yup from 'yup';





export const BillingAddress = ({totalAmountCobine,filertDataforAmount}) => {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };


  let initialValues={
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    addressone: "",
    addresstwo: "",
    country: "",
    province: "",
    city: "",
    zipcode: "",
    paymentMethod: "",

  };
  let onSubmit=(values)=>{
    console.log("values",values);
  };

  let validationSchema=Yup.object({
    firstname: Yup.string().required("Firstname is required!"),
    lastname: Yup.string().required("Lastname is required!"),
    email: Yup.string().email("Invalid Email").required("Email is required!"),
    phonenumber: Yup.number().required("Phone number is required!"),
    addressone: Yup.string().required("Address one is required!"),
    addresstwo: Yup.string().required("Address two is required!"),
    country: Yup.string().required("Country is required!"),
    province: Yup.string().required("provice is required!"),
    city: Yup.string().required("City is required!"),
    zipcode : Yup.string().required("Zip code is required!"),
    paymentMethod: Yup.string().required('Please select one payment method')
  });

  return (
    <>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {/* {formik => (  */}
      <Form>
    <div className="checkout">
      <div className="billingaddress_section">
        <div className="nested_billingaddress">
          <div className="billing_heading">
            <h3>Billing Address</h3>
          </div>
          <div className="billing_filleds">
            <div className="billing_row">
              <div className="field">
                <label htmlFor="firstname">First Name</label>
                <Field
                  type={"text"}
                  name={"firstname"}
                  id="firstname"
                  placeholder={"First Name"}
                />
                <ErrorMessage name="firstname">
                  {errormsg => <div className="error_mg">{errormsg}</div>}
                </ErrorMessage>
              </div>
              <div className="field">
                <label htmlFor="lastname">Last Name</label>
                <Field type={"text"} name={"lastname"} placeholder={"Last Name"} />
                <ErrorMessage name="lastname">
                  {errormsg => <div className="error_mg">{errormsg}</div>}
                </ErrorMessage>
              </div>
            </div>
            {/* second row */}
            <div className="billing_row">
              <div className="field">
                <label htmlFor="email">Email</label>
                <Field type={"email"} name={"email"} placeholder={"Email"} />
                <ErrorMessage name="email">
                  {errormsg => <div className="error_mg">{errormsg}</div>}
                </ErrorMessage>
              </div>
              <div className="field">
                <label htmlFor="phonenumber">Phone number</label>
                <Field type={"number"} id="phonenumber" name={"phonenumber"} placeholder={"number"} />
                <ErrorMessage name="phonenumber">
                  {errormsg => <div className="error_mg">{errormsg}</div>}
                </ErrorMessage>
              </div>
            </div>
            {/* third row */}
            <div className="billing_row">
              <div className="field">
                <label htmlFor="addressone">Line 1</label>
                <Field
                  type={"text"}
                  name={"addressone"}
                  id="addressone"
                  placeholder={"Street at apartment number"}
                />
                <ErrorMessage name="addressone">
                  {errormsg => <div className="error_mg">{errormsg}</div>}
                </ErrorMessage>
              </div>
              <div className="field">
                <label>Line 2</label>
                <Field
                  type={"text"}
                  name={"addresstwo"}
                  id="addresstwo"
                  placeholder={"Street at apartment number"}
                />
                 <ErrorMessage name="addresstwo">
                  {errormsg => <div className="error_mg">{errormsg}</div>}
                </ErrorMessage>
              </div>
            </div>
            <div className="billing_row">
              <div className="field">
                <label htmlFor="country">Country</label>
                <Field type={"text"} name={"country"} id="country" placeholder={"Country"} />
                <ErrorMessage name="country">
                  {errormsg => <div className="error_mg">{errormsg}</div>}
                </ErrorMessage>
              </div>
              <div className="field">
                <label htmlFor="province">Province</label>
                <Field
                  type={"text"}
                  name={"province"}
                  id="province"
                  placeholder={"Province"}
                />
                <ErrorMessage name="province">
                  {errormsg => <div className="error_mg">{errormsg}</div>}
                </ErrorMessage>
              </div>
            </div>
            <div className="billing_row">
              <div className="field">
                <label htmlFor="city">Town / City</label>
                <Field
                  type={"text"}
                  name={"city"}
                  id="city"
                  placeholder={"Town / City"}
                />
                <ErrorMessage name="city">
                  {errormsg => <div className="error_mg">{errormsg}</div>}
                </ErrorMessage>
              </div>
              <div className="field">
                <label className="" htmlFor="zipcode">Postcode / ZIP</label>
                <Field
                  type={"text"}
                  name={"zipcode"}
                  placeholder={"Postcode / ZIP"}
                  id="zipcode"
                />
                 <ErrorMessage name="zipcode">
                  {errormsg => <div className="error_mg">{errormsg}</div>}
                </ErrorMessage>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* payment Details */}
      <div className="payment_details">
        <div className="nested_paymentDetails">
          <div className="payment_heading">
            <h3>Payment Details</h3>
          </div>
          <div className="payment_list">
            <ul>
              <li>
                <span>Cart Subtotal</span>
                <span>${totalAmountCobine && totalAmountCobine+filertDataforAmount}</span>
              </li>
              <li>
                <span>Tax</span>
                <span>$42.30</span>
              </li>
              <li>
                <span>Total</span>
                <span>${totalAmountCobine && totalAmountCobine+filertDataforAmount}</span>
              </li>
            </ul>
          </div>
          <div className="total-order">
            <h3>Order Total: ${totalAmountCobine && totalAmountCobine+filertDataforAmount}</h3>
          </div>
          <div className="pay_btn">
           <button type="submit">Submit</button>
      </div>
        </div>

 {/* Payment Gatway */}
 <div className="payment_gatway">
        <div className="nested_payment_gatway">
        <div className="payment_paymentgatway">
            <h3>Pay Now</h3>
          </div>

  {value == "authorizenet" ?  (
    <div className="card_details">
    <div className="card_data">
     <label>Card Number</label>
     <Input placeholder={"Card Number"} type="number" name={"cardnumber"} />
     </div> 
     <div className="list_data">
     <div className="card_data">
     <label>Expiry Month</label>
     <Input placeholder={"Expiry Month"} type="text" name={"MM"} />
     </div>
     <div className="card_data">
     <label>Expiry Year</label>
     <Input placeholder={"Expiry Year"} type="number" name={"YY"} />
     </div>
     <div className="card_data">
     <label>CVC</label>
     <Input placeholder={"CVC"} type="number" name={"CVC"} />
     </div>
     </div>

 </div>
  ) : null}


          {/* check box */}
          <div>
          {/* <FormControl> */}
      {/* <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel  value="cashondelivery" control={<Radio />} label="Cash on Delivery (Order now pay on delivery)" />
        <FormControlLabel  value="authorizenet" control={<Radio />} label="AuthorizeNet (You can pay with your credit card)" />
      </RadioGroup> */}
    {/* </FormControl> */}
    <div onChange={handleChange}>
    <Field name="paymentMethod" type="radio" value="cashondelivery" id="cashondelivery" /> &nbsp;
    <label htmlFor="cashondelivery">Cash on Delivery (Order now pay on delivery)</label>
    </div>
    <div onChange={handleChange}>
    <Field name="paymentMethod" type="radio" value="authorizenet" id="authorizenet"  /> &nbsp;
    <label htmlFor="authorizenet">AuthorizeNet (You can pay with your credit card)</label>
    </div>
         <ErrorMessage name="paymentMethod">
           {errMsg => <div className="error_mg" style={{color: 'red'}}>{errMsg}</div>}
         </ErrorMessage>
          </div>
          
        </div>
      </div>
    

      </div>
      
    </div>
    </Form>
    {/* // )} */}
    </Formik>
    </>
  );
};
