import React from "react";
import "./scss/index.scss";
import { Navbar, Footer } from "../../layout";
import { BiHeart } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineShare } from "react-icons/hi";
import { FiEye } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { GetALLCategory } from "../index";
import { FilterData } from "../shop/filterData";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
// import { BsArrowLeftCircle } from "react-icons/bs";
// import { BsArrowRightCircle } from "react-icons/bs";

export const Fabric = ({
  getAllProduct,
  setSlug,
  setIdWishList,
  getResponseCategory,
  getResponseSubCategory,
  setFilterDataCategory,
  getProductListCategory,
  ProudctListCategory,
  loading,
  filterDataCategory,
  categoryNumber,

}) => {
  console.log("Fabric", getAllProduct);

  let filterFabricFunc = getAllProduct.filter(
    (value) => value.category_id == 5
  );
  console.log(filterFabricFunc);
  window.addEventListener("load",() =>{
    getProductListCategory([]);
 });
  return (
    <>
      <Navbar />
      <div className="fabric_section">
        <div className="fabric_banner_section">
          <h1>Fabric</h1>
          {/* {loading ? "Loading" : ProudctList.filter(value => value.length)} */}
        </div>
        <div className="twoSection">
          <div>
            <GetALLCategory
              getResponseCategory={getResponseCategory}
              getResponseSubCategory={getResponseSubCategory}
              setFilterDataCategory={setFilterDataCategory}
              filterDataCategory={filterDataCategory}
              loading={loading}
              ProudctListCategory={ProudctListCategory}
              setSlug={setSlug}
              getProductListCategory={getProductListCategory}
              setIdWishList={setIdWishList}
            />
          </div>
          <div className="fabric_showcase">
            
            <div className="cards_product">
              {ProudctListCategory.length == 0 ? (
                <>
                {filterFabricFunc.map((value) => {
                  console.log("idididi",value.id);
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
                            {/* <NavLink onClick={() => setIdWishList(value.id)}> */}
                            {/* <BiHeart /> */}
                            {/* </NavLink> */}
                            {/* ) */}
                            {/* } */}
                            <NavLink onClick={() => setIdWishList(value.id)}>
                              <BiHeart />
                            </NavLink>
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
                </>
              ) : (
                <FilterData
                loading={loading}
                ProudctListCategory={ProudctListCategory}
                setSlug={setSlug}
                getProductListCategory={getProductListCategory}
                filterDataCategory={filterDataCategory}
                setIdWishList={setIdWishList}
              />
      
              )}
              



            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
