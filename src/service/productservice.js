import { API } from "../config/api";
const getProducts=() =>
       API.get("/dashboard/api/getProducts").then(
          (res) => res,
          (err) => err
       )

const getSlides = () =>
       API.get("/dashboard/api/get-home-slider").then(
         (res) => res,
         (err) => err
       );


export const productsService={
    getProducts,
    getSlides,
}