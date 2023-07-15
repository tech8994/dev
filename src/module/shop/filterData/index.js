import React, { useState, useEffect } from "react";
import "./scss/index.scss";
import { product_img1 } from "../../../assest/index";
import { BiHeart } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineShare } from "react-icons/hi";
import { FiEye } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import {AiFillHeart} from "react-icons/ai";

export const FilterData = ({
  getProductListCategory,
  ProudctListCategory,
  loading,
  filterDataCategory,
  setSlug,
  setIdWishList
  // wishList,
}) => {
  let [length, setLength] = useState(1);
  console.log("filtered ", filterDataCategory);
  let lengthData = 12;
  let current = 1;
  // let val;

  useEffect(() => {
    let dataa = filterDataCategory.slice(0, lengthData);
    console.log(dataa);
    getProductListCategory([...dataa]);
  }, [filterDataCategory]);
  console.log("data ", filterDataCategory);

  function prev() {
    console.log(current);
    if (length >= 1) {
      // length--;
      setLength(--length);
      let newArr = getNewArr(length);
      console.log(newArr);
      
      getProductListCategory([...newArr]);
      // setgetLength(newArr)
      // setgetLength(newArr);
    }
    // return;
  }
  function next() {
    if (length >= 1 && length < filterDataCategory.length / lengthData) {
      setLength(++length);
      console.log(length);
      let newArr = getNewArr(length);
      console.log("new ", newArr);
      getProductListCategory([...newArr]);
      //  getProductList([...newArr])
      // setgetLength(newArr)
    }
    // return;
  }

  function getNewArr(n) {
    // console.log(lengthData*current - lengthData, lengthData*current);
    console.log("length => ", lengthData);
    console.log("n => ", n);
    console.log("lengthData*n => ", lengthData * n);
    return filterDataCategory.slice(lengthData * n - lengthData, lengthData * n);
  }
  
  //  let data=wishList.ma
// console.log("ProudctList", ProudctList == []);
  return (
    <div className="shop_filerSection">
      {loading == true ? (
        <h1>Wait Product Listing...</h1>
      ) : (
        <>
          <div className="cards_product">
            {ProudctListCategory.slice(0, lengthData)?.map((value) => {
              console.log(value.id);
              return (
                <div className="nested_card" key={value.id}>
                  <div className="img">
                    <img
                      src={`https://livinlinen.webtestdemo.com/dashboard/assets/images/products/${value.image}`}
                      alt="product_img1"
                    />
                    <div className="img_icons">
                      <div className="icon">
                        {/* {wishList.filter(values => values.id == value.id)  ?  */}
                        {/* ( */}
                          {/* <AiFillHeart /> */}
                        {/* ):( */}
                            <NavLink onClick={() => setIdWishList(value.id)}>
                            <BiHeart />
                            </NavLink>
                          {/* ) */}
                        {/* } */}
                      {/* <NavLink onClick={() => setIdWishList(value.id)}>
                        <BiHeart />
                        </NavLink> */}
                        <AiOutlineShoppingCart />
                      </div>

                      <div className="icon">
                        <HiOutlineShare />
                        <NavLink
                      to={"/product-detail"}
                      onClick={() => setSlug(value.slug)}
                    >
                        <FiEye />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="product_content">
                    <NavLink
                      to={"/product-detail"}
                      onClick={() => setSlug(value.slug)}
                    >
                      {value.name}
                    </NavLink>
                    <p>
                      ${value.sale_price} <del>{value.regular_price}</del>{" "}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* {ProudctList == [] ? (
             <>
             <h1>There is no Product</h1>
             </>
          ) : ( */}
              <div className="prev_next_btn">
              <button onClick={() => prev()}>
                <BsArrowLeftCircle />
              </button>
              <button onClick={() => next()}>
                <BsArrowRightCircle />
              </button>
            </div>
          {/* )}  */}
        
        </>
      )}

      {/* <div className="nested_card">
        <div className="img">
          <img src={product_img1} alt="product_img1" />
          <div className="img_icons">
            <div className="icon">
              <BiHeart />
              <AiOutlineShoppingCart />
            </div>

            <div className="icon">
              <HiOutlineShare />
              <FiEye />
            </div>
          </div>
        </div>
        <div className="product_content">
          <p>
            Basic Sheet Set. - Greige, Full XL (20"x27"; 92"x106"; 54"x80"x16")
          </p>
          <p>$270</p>
        </div>
      </div>
      <div className="nested_card">
        <div className="img">
          <img src={product_img1} alt="product_img1" />
          <div className="img_icons">
            <div className="icon">
              <BiHeart />
              <AiOutlineShoppingCart />
            </div>

            <div className="icon">
              <HiOutlineShare />
              <FiEye />
            </div>
          </div>
        </div>
        <div className="product_content">
          <p>
            Basic Sheet Set. - Greige, Full XL (20"x27"; 92"x106"; 54"x80"x16")
          </p>
          <p>$270</p>
        </div>
      </div>
      <div className="nested_card">
        <div className="img">
          <img src={product_img1} alt="product_img1" />
          <div className="img_icons">
            <div className="icon">
              <BiHeart />
              <AiOutlineShoppingCart />
            </div>

            <div className="icon">
              <HiOutlineShare />
              <FiEye />
            </div>
          </div>
        </div>
        <div className="product_content">
          <p>
            Basic Sheet Set. - Greige, Full XL (20"x27"; 92"x106"; 54"x80"x16")
          </p>
          <p>$270</p>
        </div>
      </div>
      <div className="nested_card">
        <div className="img">
          <img src={product_img1} alt="product_img1" />
          <div className="img_icons">
            <div className="icon">
              <BiHeart />
              <AiOutlineShoppingCart />
            </div>

            <div className="icon">
              <HiOutlineShare />
              <FiEye />
            </div>
          </div>
        </div>
        <div className="product_content">
          <p>
            Basic Sheet Set. - Greige, Full XL (20"x27"; 92"x106"; 54"x80"x16")
          </p>
          <p>$270</p>
        </div>
      </div>
      <div className="nested_card">
        <div className="img">
          <img src={product_img1} alt="product_img1" />
          <div className="img_icons">
            <div className="icon">
              <BiHeart />
              <AiOutlineShoppingCart />
            </div>

            <div className="icon">
              <HiOutlineShare />
              <FiEye />
            </div>
          </div>
        </div>
        <div className="product_content">
          <p>
            Basic Sheet Set. - Greige, Full XL (20"x27"; 92"x106"; 54"x80"x16")
          </p>
          <p>$270</p>
        </div>
      </div>
      <div className="nested_card">
        <div className="img">
          <img src={product_img1} alt="product_img1" />
          <div className="img_icons">
            <div className="icon">
              <BiHeart />
              <AiOutlineShoppingCart />
            </div>

            <div className="icon">
              <HiOutlineShare />
              <FiEye />
            </div>
          </div>
        </div>
        <div className="product_content">
          <p>
            Basic Sheet Set. - Greige, Full XL (20"x27"; 92"x106"; 54"x80"x16")
          </p>
          <p>$270</p>
        </div>
      </div>
      <div className="nested_card">
        <div className="img">
          <img src={product_img1} alt="product_img1" />
          <div className="img_icons">
            <div className="icon">
              <BiHeart />
              <AiOutlineShoppingCart />
            </div>

            <div className="icon">
              <HiOutlineShare />
              <FiEye />
            </div>
          </div>
        </div>
        <div className="product_content">
          <p>
            Basic Sheet Set. - Greige, Full XL (20"x27"; 92"x106"; 54"x80"x16")
          </p>
          <p>$270</p>
        </div>
      </div>
      <div className="nested_card">
        <div className="img">
          <img src={product_img1} alt="product_img1" />
          <div className="img_icons">
            <div className="icon">
              <BiHeart />
              <AiOutlineShoppingCart />
            </div>

            <div className="icon">
              <HiOutlineShare />
              <FiEye />
            </div>
          </div>
        </div>
        <div className="product_content">
          <p>
            Basic Sheet Set. - Greige, Full XL (20"x27"; 92"x106"; 54"x80"x16")
          </p>
          <p>$270</p>
        </div>
      </div> */}
    </div>
  );
};
