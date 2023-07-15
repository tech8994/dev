import { createSlice } from "@reduxjs/toolkit";
import { authService } from "../../service";
import { toast } from 'react-toastify';
// import { Navigate } from "react-router-dom";


// const navigate=useNavigate();

const authSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    loginUser(state, action) {
      // console.log(state);
     authService.login(action.payload).then(
      (res) =>{
        console.log(res);
        if(res.data.status_code == 200){
          toast.success(res.data.Livin_Linen[0].msg);
          console.log(state);
          window.localStorage.setItem("bed_token", res.data.Livin_Linen[0].token);
          window.localStorage.setItem("user_id", res.data.Livin_Linen[0].user_id);
          window.localStorage.setItem("user_email", res.data.Livin_Linen[0].email);


                setTimeout(() =>{
                  window.location.assign('/')
                },4000)


            }else if(res.data.status_code == 401){
              toast.error(res.data.error);
              console.log(res.data.error);
          }
    
      },
      (error) =>{
        console.log(error);
      }
     )
    },
    registerUser(state, action) {
      console.log(action);
       authService.registration(action.payload).then(
        (res) =>{
          //  console.log(res);
           try{
            if(res.data.status_code == 200){
              toast.success(res.data.Livin_Linen[0].msg);
              
              setTimeout(() =>{
                window.location.assign('/authentication/login')
              },4000)

          }
           }catch(err){
            // console.log(err);
                 if(res.response.status == 400){
              toast.error(res.response.data.email[0])  
          }
           }
                    

        },
        (error) =>{
          console.log("Err",error);
        }
       )
    },
    
    userProfile(state, action){
      console.log(action);
      authService.userProfile(action.payload).then(
        (res) =>{
          console.log(res);
          if(res.data.status_code == 200){
            state=res.data.Livin_Linen;
            console.log(state);
          }else{
            if(res.data.status == "Token is Expired"){
              toast.error(" You Need to login again!");
              // setTimeout(() => {
              // window.location.assign('/authentication/login')
              // }, 6000);
            }
          }
      }, (error) =>{
        console.log("Err", error);
      }
      )
    },
    updateProfile(state, action){
      authService.updatedProfile(action.payload).then(
        (res) =>{
             console.log(res);
             if(res.data.status_code == 200){
              toast.success(res.data.Livin_Linen[0].msg)
             }else{
               if(res.response.status == 400){
                 toast.error("Please Write Down Correctly")
               }
             }
        },(error) =>{
          console.log("Error",error);
        }
      )
    },
    forgetPassword(state, action) {},
  },
});
// console.log(authSlice.actions.loginUser());
export const { registerUser, loginUser, userProfile, updateProfile } = authSlice.actions;
export default authSlice.reducer;

