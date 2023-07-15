import React, { useState, useEffect } from "react";
import "./scss/index.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { Input } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
// import { toast } from 'react-toastify';
// import axios from "axios";
import { loginUser } from "../../../store/slices/authentication";

export const Login = () => {

    const navigate=useNavigate();
  const dispatch=useDispatch();
  const data=useSelector((state) => state);
  console.log(data);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const onChangeFormValue = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
    
  const onSubmitFunc=(e) =>{
     e.preventDefault();
     console.log(formValues);
     dispatch(loginUser(formValues))
    //  console.log(data);

      //   let res;
      // try{
      //   res=await axios.post("https://livinlinen.webtestdemo.com/dashboard/api/login", formValues);
      //   if(res.data.status_code == 200){
      //       toast.success(res.data.Livin_Linen[0].msg);
      //   }else if(res.data.status_code == 401){
      //     toast.error("This Account Does Not Exist");
      //   }

      // }catch(err){
      //   console.log(err);
      // }
     

  }

  useEffect(() => console.log(data),[data])

  useEffect(() =>{
    if(window.localStorage.getItem("bed_token")){
     navigate("/");
    }
 },[])


  return (
    <div className="authentication_login">
      <div className="nested_authenticationLogin">
        <div className="login-register-wrapper">
          <div className="tab-content">
            <div id="lg1" className="tab-pane active">
              <div className="login-form-container">
                <div className="login-register-form">
                  <form onSubmit={onSubmitFunc} method="post">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={onChangeFormValue}
                      required
                    />
                    <Input
                      type="password"
                      name="password"
                      onChange={onChangeFormValue}
                      placeholder="Password"
                      required
                    />
                    <div className="button-box">
                      <div className="login-toggle-btn">
                        <label htmlFor="checkBox">
                          <input type="checkbox" id="checkBox" /> Remember me
                        </label>
                        <NavLink to="/authentication/forget-password">
                          Forgot Password?
                        </NavLink>
                      </div>
                      <button type="submit">Login</button>
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
