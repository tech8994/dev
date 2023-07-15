import { createSlice } from "@reduxjs/toolkit";
import { cartService } from "../../service";
import { toast } from 'react-toastify';

const addCart = createSlice({
   name: "addCart",
   initialState: [],
   reducers: {
      addToCart(state, action){
        cartService.addProduct(action.payload).then(
            (res) =>{
                try{
                  console.log(action.payload.content)
                    console.log("Response of wish List",res);
                    if(res?.data.status && res?.data.status == "Token is Expired"){
                        // toast.warn("Please Login!")
                        localStorage.setItem("Wish_List",action.payload.content)
                    }
                    if(res?.data.message && res?.data.message == "Successfully add Shopping Data"){
                       toast.success("Successfully added to WishList")
                    }

                }catch(err){
                    console.log(err);
                }
            },(error) =>{
                console.log(error);
              }

        )
      },
      getWishListProduct(state, action){
        cartService.getProductwishList(action.payload).then(
            (res) =>{
                try{
                  console.log(res);
                  // return state=res.data
                }catch(err){
                    console.log(err);
                }
            },(error) =>{
                console.log(error);
              }

        )
      },
      // Add To Cart
      // addToCartFunc(state, action){
      //   cartService.addTOCartProduct(action.payload).then(
      //     (res) =>{
      //       try{
      //         console.log("Response of Shopping Data",res);
      //         // return state=res.data
      //       }catch(err){
      //           console.log(err);
      //       }
      //   },(error) =>{
      //       console.log(error);
      //     }
      //   )
      // }
   }

})




export const { addToCart, getWishListProduct } = addCart.actions;
export default addCart.reducer;