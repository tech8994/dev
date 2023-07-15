import { createSlice } from "@reduxjs/toolkit";
import { productsService } from "../../service";
import { toast } from 'react-toastify';


const productSlice = createSlice({
    name: "products",
    initialState: [],
    reducers:{
        getProduct(state) {
          productsService.getProducts().then(
            (res) =>{
              console.log(res);  
            }, (error) =>{
                console.log(error);
            }
          ).catch((err) =>{
            console.log(err);
          })
        },
        getSlidesData(){
            productsService.getSlides().then(
              (res) => {
                console.log(res);
              },(error) =>{
                console.log(error);
              }
            ).catch((err) =>{
              console.log(err);
            })
        }
    }
});

export const { getProduct, getSlidesData } = productSlice.actions;
export default productSlice.reducer;
