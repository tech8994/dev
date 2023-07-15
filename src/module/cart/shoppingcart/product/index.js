import React, { useState, useEffect } from "react";
import { Btn } from "../../../../components";
import "../scss/index.scss";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";

const specfData = [
  {
    id: 1,
    specName: "Name",
    specValue: "Salwar Kameez",
  },

  {
    id: 2,
    specName: "SKU",
    specValue: "0x48e2c",
  },
  {
    id: 3,
    specName: "Models",
    specValue: "FX 829 v1",
  },
  {
    id: 4,
    specName: "Categories",
    specValue: "Digital Print",
  },
  {
    id: 5,
    specName: "Size",
    specValue: "60’’ x 40’’",
  },
  {
    id: 6,
    specName: "Brand",
    specValue: "Individual Collections",
  },
  {
    id: 6,
    specName: "Color",
    specValue: "Black, White",
  },
];

export const Product = ({ addToCartProd, RemoveItemCart,setTotalAmount }) => {
  // let [productList, setProductList] = useState(1);
   
  let [listData, setListData]=useState(addToCartProd);
  

  useEffect(() => {
    console.log(addToCartProd);
    setListData(addToCartProd)
  }, [addToCartProd]);
  let getIncrement = (id) => {
    console.log(id)
    // setProductList(++productList);
    setTotalAmount(id)
    setListData(listData =>
      listData.map((item) =>
        id === item.id ? {...item,status: item.status + 1} : item
      )
      );
      
  };
  let decQuantity = (id) => {
    // if (productList <= 1) {
      // return;
    // } else {
      // setProductList(--productList);
      setListData(listData =>
        listData.map((item) =>
          id === item.id ? {...item,status: item.status - (item.status > 1 ? 1 : 0)} : item
        )
        );
    // }
  };

  return (
    <div className="product_list_section">
      <div className="nested_product_list_section">
        {/* button */}
        <div className="button_checkout">
          <NavLink to="/checkout">Proced To Checkout</NavLink>
        </div>
        <div className="specific_product">
          <table>
            <thead className="th_heading">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="product_list_table">
              {listData.map((value) => {
                console.log(listData);
                return (
                  <tr key={value.id}>
                    <td className="cart-product">
                      <div className="product-img-info-wrap">
                        <div className="product-img">
                          <a href="#/">
                            <img
                              src={`https://livinlinen.webtestdemo.com/dashboard/assets/images/products/${value.image}`}
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="product-info">
                          <h4>
                            <a href="#/">{value.name}</a>
                          </h4>
                        </div>
                      </div>
                    </td>
                    <td className="product-price">${value.sale_price}</td>
                    <td className="cart-quality">
                      <button onClick={() => decQuantity(value.id)}>-</button>
                      <p>{value.status}</p>
                      <button onClick={() =>  getIncrement(value.id)}>+</button>
                    </td>
                    <td className="product-total">${value.sale_price*value.status}</td>
                    <td
                      className="product-remove"
                      onClick={() => RemoveItemCart(value.id)}
                    >
                      <Btn icons={ImCross} type="button" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
