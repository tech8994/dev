import React, { useState } from "react";
import { OrderSummary } from "./ordersummary";
import { Product } from "./product";
import { Footer, Navbar } from "../../../layout";
import { NavLink } from "react-router-dom";

import "./scss/index.scss";

// const rows = [
//   createData('Sub Total', "$159"),
//   createData('Tax', "$237"),
//   createData('Shipping', "Free Shipping"),
//   createData('Total', "$305"),
// ];

export const ShoppingCart = ({
  addToCartProd,
  setAddToCartProd,
  setUpdatedAddToCart,
  totalAmountCobine,
  setTotalAmount,
  filertDataforAmount
}) => {
  console.log(addToCartProd);
  let RemoveItemCart = (id) => {
    console.log(id);
    let RemoveItemCart = addToCartProd.filter((product) => product.id !== id);
    console.log("This is Remove TIme", RemoveItemCart);
    setAddToCartProd(RemoveItemCart);
    setUpdatedAddToCart(RemoveItemCart);
  };
  console.log("update Wish list", RemoveItemCart);
  //Add the Total Amount
  //  let totalAmount=addToCartProd.reduce((accumulator, currentValue) => accumulator +  Math.trunc(Number(currentValue.sale_price)),0);
  //  console.log(totalAmount);

  return (
    <div>
      <Navbar />
      <div className="banner_section_cart">
        <h1>Shopping Cart</h1>
        {addToCartProd.length < 1 ? (
          <div className="heading_noitem">
            <h2>No item in your wishlist</h2>
            <div>
              <NavLink to={"/shop"}>Start Browsing</NavLink>
            </div>
          </div>
        ) : (
          <>
            <div className="heading_wishList">
              <Product
                addToCartProd={addToCartProd}
                setTotalAmount={setTotalAmount}
                RemoveItemCart={RemoveItemCart}
              />
              <OrderSummary totalAmountCobine={totalAmountCobine} filertDataforAmount={filertDataforAmount}  />
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};
