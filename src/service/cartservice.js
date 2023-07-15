import { API } from "../config/api";

const addProduct = (data) =>
  API.post("/dashboard/api/add-shopping-data", data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("bed_token")}` },
  }).then(
    (res) => res,
    (err) => err
  );
const getProductwishList = (data) =>
  API.post("/dashboard/api/get-shopping-data", data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("bed_token")}` },
  }).then(
    (res) => res,
    (err) => err
  );
// Add To Cart service

const  addTOCartProduct=(data) =>
    API.post("/dashboard/api/add-shopping-data",data,{
      headers: { Authorization: `Bearer ${localStorage.getItem("bed_token")}` },
    }).then(
      (res) => res,
      (err) => err
    );
    const getAddToCartList = (data) =>
    API.post("/dashboard/api/get-shopping-data", data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("bed_token")}` },
    }).then(
      (res) => res,
      (err) => err
    );


export const cartService = {
  addProduct,
  getProductwishList,
  addTOCartProduct,
  getAddToCartList,
};
