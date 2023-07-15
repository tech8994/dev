import React, { useEffect, useState } from "react";
import { TopSection } from "./topsection";
import { Products } from "./products";
import { BedCollection } from "./bedcollection";
import { Feature } from "./feature";
import { SpecialProduct } from "./specialproducts";
import { Navbar, Footer } from "../../layout";
import axios from "axios";
import { addToCart } from "../../store/slices/addcart";

export const Home = ({
  setSlug,
  setIdWishList,
  setwishList,
  idwishList,
  wishList,
  setGetAllProduct,
  // setAddToCartProd,
  setIdAddToCartProd
}) => {
  const [showProduct, setShowProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    let res;
    try {
      setLoading(true);
      res = await axios.get(
        "https://livinlinen.webtestdemo.com/dashboard/api/getProducts"
      );
      if (res.status == 200) {
        // console.log(res.data.data);
        setShowProduct(res.data.data);
        setGetAllProduct(res.data.data);
        // setAddToCartProd(res.data.data);
      }
      setLoading(false);
    } catch (err) {
      // if(err.response.status == 400){
      //     toast.error(err.response.data.email[0])
      // }
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let lengthData = 5;
  const data = loading ? "Loading" : showProduct.slice(0, lengthData);
  // const filterAddWishListProduct=showProduct.filter(value => value.id == idwishList);
  // useEffect(() =>{
  //   setwishList([...wishList,filterAddWishListProduct])
  // },[idwishList]);
  // console.log("Filter Data Home",filterAddWishListProduct);

  return (
    <div>
      <Navbar />
      <TopSection />
      <Products />
      <BedCollection
        data={data}
        setSlug={setSlug}
        setIdWishList={setIdWishList}
        setIdAddToCartProd={setIdAddToCartProd}
      />
      <Feature />
      <SpecialProduct
        data={data}
        setSlug={setSlug}
        setIdWishList={setIdWishList}
        setIdAddToCartProd={setIdAddToCartProd}
      />
      <Footer />
    </div>
  );
};
