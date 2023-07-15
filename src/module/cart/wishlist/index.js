import React, {useState, useEffect, useLayoutEffect} from "react";
import "./scss/index.scss";
import { ImCross } from "react-icons/im";
import { Footer, Navbar } from "../../../layout";
import { NavLink } from "react-router-dom";
import { DammyData } from "../../../data";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getWishListProduct } from "../../../store/slices/addcart";


export const WishList = ({wishList, setwishList, setUpdatedWishList}) => {
  const dispatch=useDispatch();
  // const datas=useSelector((state => state));
  // console.log(datas);
  const [productList, setProductList]=useState(DammyData);
  


  //  const filterData=DammyData.filter((value) => value.id === 1);
  //  console.log(filterData);

  const RemoveItem=(id) =>{
     console.log(id); 
     let updatewishList=wishList.filter((product => product.id !== id))
     console.log(updatewishList);
     setwishList(updatewishList)
     setUpdatedWishList(updatewishList)
    //  setProductList(updatewishList)
  }
  console.log("update Wish list", wishList);
  return (
    <>
      <Navbar />
      <div className="wishlist_section">
        <div className="banner_wishList">
          <h1>WishList</h1>
        </div>
        {wishList.length < 1 ? (
          <div className="heading_noitem">
             <h2>
             No item in your wishlist
             </h2>
             <div>
              <NavLink to={"/shop"}>
                  Start Browsing
              </NavLink>
             </div>
          </div>
        ) : (
          <>
            <div className="heading_wishList">
            <h2>
             Your wishlist
             </h2>
            </div>
          <div className="nested_wishList">
          
           {wishList.map((data, ind) =>{
            console.log(data);
               return(
                <div className="prod_box" key={ind}>
                <div className="product_img">
                  <img
                    src={`https://livinlinen.webtestdemo.com/dashboard/assets/images/products/${data.image}`}
                    alt={data.img}
                  />
                </div>
                <div className="remve_item" onClick={() => RemoveItem(data.id)}>
                  <ImCross />
                </div>
                <div className="prod_content">
                  <h5>
                    <NavLink to="/product-detail">{data.name}</NavLink>
                  </h5>
                  <h3>${data.sale_price}</h3>
                  <div className="prod_button">
                    <button onClick={() => toast.success("Succussfully Added")}>Add To Cart</button>
                  </div>
                </div>
              </div>
              
               )
           })}
          </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};
