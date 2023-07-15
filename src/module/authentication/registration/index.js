import React, { useState, useEffect } from "react";
import "./scss/index.scss";
import { Input } from "../../../components";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
// import axios from "axios";
import { registerUser } from "../../../store/slices/authentication";



export const Registration = () => {

  const navigate=useNavigate();

    const dispatch=useDispatch();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
    password_confirmation: "",
  });

  const onChangeFunc = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const {password, password_confirmation, first_name, last_name}=formData
  const onSubmitRegistration=async(e) =>{
    e.preventDefault();

    let finalRes={...formData,name: `${first_name} ${last_name}`}
    delete finalRes.first_name;
    delete finalRes.last_name;
    if(password === password_confirmation){
      dispatch(registerUser(finalRes));
    }else{
          toast.error("Plz Check Confirmation Password");
      }
    // console.log(finalRes);

    // if(password === password_confirmation){
    //     console.log(finalRes);
    //     let res;
    //     try{
    //         res=await axios.post("https://livinlinen.webtestdemo.com/dashboard/api/register", finalRes);
    //         if(res.data.status_code == 200){
    //             toast.success(res.data.Livin_Linen[0].msg);
    //         }
    //     }catch(err){
    //         if(err.response.status == 400){
    //             toast.error(err.response.data.email[0])  
    //         }
    //         console.log(err.response);
    //     }
    //     // dispatch(registerUser(finalRes));

    // }else{
    //     toast.error("Plz Check Confirmation Password");
    // }

  }

  useEffect(() =>{
    if(window.localStorage.getItem("bed_token")){
     navigate("/");
    }
 },[]);


  return (
    <div className="authentication_registration">
      <div className="nested_authenticationregistration">
        <div className="registration-register-wrapper">
          <div className="tab-content">
            <div id="lg1" className="tab-pane active">
              <div className="registation-form-container">
                <div className="registration-register-form">
                  <form onSubmit={onSubmitRegistration} method="post">
                    <Input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      onChange={onChangeFunc}
                      required
                    />
                    <Input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      onChange={onChangeFunc}
                      required
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={onChangeFunc}
                      required
                    />
                    <Input
                      type="number"
                      name="mobile"
                      placeholder="Phone Number"
                      onChange={onChangeFunc}
                      required
                    />
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={onChangeFunc}
                      required
                    />
                    <Input
                      type="password"
                      name="password_confirmation"
                      placeholder="Confirm Password"
                      onChange={onChangeFunc}
                      required
                    />

                    <div className="button-box">
                      {/* <div class="registration-toggle-btn">
                                                    <label htmlFor='checkBox'>
                                                        <input type="checkbox" id='checkBox'/>
                                                    {" "}    Remember me</label>
                                                        <a href="#">Forgot Password?</a>
                                                    </div> */}
                      <button type="submit">Registration</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
