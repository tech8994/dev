import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slices/authentication";
import productSlice from "./slices/products";
import addCart from "./slices/addcart";

const createStore=configureStore({
     reducer:{
        user: authSlice,
        products: productSlice,
        addCart: addCart,
     }
});
export default createStore;