import React, { useEffect, useState } from "react";
import { Navbar, Footer } from "../../../layout";
import "./scss/index.scss";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from 'react-toastify';
import { updateProfile } from "../../../store/slices/authentication";
import { Input } from "../../../components";
import { useNavigate } from "react-router-dom";


export const ProfileUser = () => {
  const navigate=useNavigate();
  const disatch = useDispatch();
  //  const userProfiles=useSelector(async(state) => await state);

  const [userProfileData, setUserProfileData]=useState(null);
  const [updateObj, setUpdateObj]=useState({
    user_name: "",
    email: "",
    // mobile: "",
  });
  useEffect(() => {
    //  disatch(userProfile({user_id:window.localStorage.getItem("user_id")}));
    (async () => {
      let res;
      try {
        res = await axios.post(
          "https://livinlinen.webtestdemo.com/dashboard/api/profile",
          { user_id: window.localStorage.getItem("user_id") },
          {    headers: { Authorization: `Bearer ${localStorage.getItem("bed_token")}` },
        }
        );
        if(res.data.status_code == 200){
          // res.data.Livin_Linen;
          setUserProfileData(res.data.Livin_Linen);
          console.log(res.data.Livin_Linen);
        }else{
          if(res.data.status == "Token is Expired"){
            toast.error("You Need to login");
            // setTimeout(() => {
            // window.location.assign('/authentication/login')
            // }, 6000);
          }
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

   const onChangeFormValues=(e) =>{
    setUpdateObj({...updateObj, [e.target.name]:e.target.value})  
   }

  // console.log(userProfileData);
 const {user_name, email}=updateObj
  const updateProfileform=(e) =>{
   e.preventDefault();
   let obj={
     name: "",
     email: "",
     user_id: window.localStorage.getItem("user_id"),
   }
   if(user_name == "" && email == ""){
         toast.warn("Please Update Your Profile")  
   }
   if(user_name !== "" && email !== ""){
    obj.name=user_name;
    obj.email=email;
    // console.log(obj);
    disatch(updateProfile(obj))

   }else{
    if(user_name !== ""){
      obj.name=user_name;
      obj.email=userProfileData[0].email;
      // console.log(obj);
      disatch(updateProfile(obj))

     }else if(email !== ""){ 
      obj.name=userProfileData[0].user_name;
      obj.email=email;
      // console.log(obj);
      disatch(updateProfile(obj))

     }
   }
  //  return;
  console.log(obj);

  }


  useEffect(() =>{
    if(!window.localStorage.getItem("bed_token")){
     navigate("/authentication/login");
    }
 },[]);

  return (

    <>
    <Navbar/>
      <div className="profile_section">
        <div className="profile_banner">
          <h1>MY Profile</h1>
        </div>
        {userProfileData == null ? <div className="loading-text"><h1>Loading...</h1></div>: (


<div className="nested_profile_section">
<div className="profile-_head">
  <p>Profile</p>
</div>
<div className="card-body_profile">
  <div className="profile_img">
    {/* <img src="" alt="" /> */}
    <FaUser />
  </div>
  <div className="content_data">
    <form onSubmit={updateProfileform} method="post">
      <div>
        <label className="label">Name</label>
        <Input type="text"  defaultValue={userProfileData[0].user_name} name="user_name"  onChange={onChangeFormValues}   />
      </div>
      <div>
        <label className="label">Email</label>
        <Input type="email" defaultValue={userProfileData[0].email} name="email"  onChange={onChangeFormValues}   />
      </div>
      {/* <div>
        <label className="label">Mobile</label>
        <Input type="number" defaultValue={userProfileData[0].mobile} name="mobile"  onChange={onChangeFormValues}   />
      </div> */}
      <div  className="button-box">
      <button type="submit">Udpate Profile</button>
      </div>
      {/* <div>
        <p>Email: email@gmail.com</p>
      </div> */}
    </form>
  </div>
</div>
</div>
        )}

      </div>
      <Footer />
    </>
  );
};
