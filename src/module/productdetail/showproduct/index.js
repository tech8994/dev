import React, { useState, useEffect } from "react";
import "./scss/index.scss";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import { product_img2_medium } from "../../../assest";
import { Btn } from "../../../components";
import { Specification } from "./specification";
import { FabricCare } from "./fab&Care";
import { NavLink } from "react-router-dom";
import { ReviewStandered } from "./reviewstandered";
import axios from "axios";

export const ShowProduct = ({ specificData, loading }) => {
  const [sizing, setSizings] = useState(null);
  let [quantity, setQuantity] = useState(1);
  const [value, setValue] = useState("description");
  const {
    sale_price,
    regular_price,
    description,
    image,
    images,
    SKU,
    category,
    colors,
    sizes,
    name,
    weight,
    id
  } = specificData;
  let res = images.split(",");
  const result = res.filter((e) => e);
  console.log(result);

  let getIncrement = () => {
    setQuantity(++quantity);
  };
  let decQuantity = () => {
    if (quantity <= 1) {
      return;
    } else {
      setQuantity(--quantity);
    }
  };

  const settings = {
    customPaging: (i) => {
      // console.log(i);
      // result.map((value) =>{
      return (
        <a>
          <img
            src={`https://livinlinen.webtestdemo.com/dashboard/assets/images/products/${result[i]}`}
            style={{ width: "80px", height: "80px" }}
          />
        </a>
      );
      // })
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  // const filterAddToCartprod = getAllProduct.filter(
  //   (value) => value.id == idAddToCartProd
  // );
  // console.log("Shopping Cart of Show Product", filterAddToCartprod);
  // useEffect(() => {
  //   setAddToCartProd([...addToCartProd, filterAddToCartprod]);
  // }, [idAddToCartProd]);


  let shoppingCartFunc=async(data)=>{
    console.log(data);
    try {
      // setLoading(true);
      let res = await axios.post(
        "https://livinlinen.webtestdemo.com/dashboard/api/add-shopping-data",
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("bed_token")}`,
          },
        }
      );
      if (res.status == 200) {
        console.log("Respoonse of Add Shopping",res);
        // setShowProduct(res.data.data);
        // console.log("Running");
      }
      // setLoading(false);
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  




  return (
    <>
      <div className="Show_spec_prod">
        <div className="silder_section">
          <Slider {...settings}>
            {result.map((value, id) => {
              return (
                <div style={{ width: "80px", height: "80px" }} key={id}>
                  <img
                    src={`https://livinlinen.webtestdemo.com/dashboard/assets/images/products/${value}`}
                    width="100%"
                  />
                </div>
              );
            })}

            {/* <div style={{ width: "80px", height: "80px" }}>
              <img src={`${product_img2_medium}`} width="100%" />
            </div>
            <div style={{ width: "80px", height: "80px" }}>
              <img src={`${product_img2_medium}`} width="100%" />
            </div>
            <div style={{ width: "80px", height: "80px" }}>
              <img src={`${product_img2_medium}`} width="100%" />
            </div> */}
          </Slider>
        </div>

        <div className="content_modal_type">
          <div className="price_section">
            <h5>US ${sale_price && sale_price}</h5>
            <del>US ${regular_price && sale_price}</del>
          </div>

          <div className="sizing">
            <div className="colors">
              <label htmlFor="cars">Colors:</label>
              <select name="color" id="color">
                <option value="">Select</option>
                {colors &&
                  colors.map((value, id) => {
                    return (
                      <option key={id} value={value.value}>
                        {value.value} - {value.price}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="size">
              <label htmlFor="size">Size:</label>
              <select name="size" id="size">
                <option value="">Select</option>
                {sizes &&
                  sizes.map((value, id) => {
                    return (
                      <option key={id} value={value.value}>
                        {value.value} - {value.price}
                      </option>
                    );
                  })}
              </select>
            </div>
            {/* <p>
              Size: <span>{sizing && sizing}</span>
            </p>
            <ul>
              <li onClick={() => setSizings("XS")}>XS</li>
              <li onClick={() => setSizings("S")}>S</li>
              <li onClick={() => setSizings("M")}>M</li>
              <li onClick={() => setSizings("XL")}>XL</li>
              <li onClick={() => setSizings("XXL")}>XXL</li>
            </ul> */}
          </div>
          <div className="qualities">
            <ul>
              {SKU && (
                <li>
                  <span>SKU:</span> {SKU}
                </li>
              )}
              {category.name && (
                <li>
                  <span>Category:</span> {category.name}
                </li>
              )}
            </ul>
          </div>
          <div className="quantity">
            <p>Quantity:</p>
            <div className="nested_quantity">
              <button onClick={decQuantity}>-</button>
              <p>{quantity}</p>
              <button onClick={getIncrement}>+</button>
            </div>
          </div>
          <div className="btn_buy">
            <NavLink to={"/shopping-cart"}>Add To Cart</NavLink>
          </div>
        </div>
      </div>
      <div className="desc_product">
        <div className="lists">
          <ul>
            <li
              className={value == "description" ? "active_link" : ""}
              onClick={() => setValue("description")}
            >
              Description
            </li>
            <li
              className={value == "specification" ? "active_link" : ""}
              onClick={() => setValue("specification")}
            >
              Specification
            </li>
            <li
              className={value == "fabric&care" ? "active_link" : ""}
              onClick={() => setValue("fabric&care")}
            >
              Fabric & Care
            </li>
            {/* <li
              className={value == "reviewsandratting" ? "active_link" : ""}
              onClick={() => setValue("reviewsandratting")}
            >
              Reviews and Ratting
            </li> */}
          </ul>
        </div>
        <div className="comp_desc">
          {value == "description" ? (
            <div className="complete_desc">
              <div  dangerouslySetInnerHTML={{
                  __html: specificData.description && specificData.description,
                }}/>
                <div>
                  <video width={"100%"} controls>
                  <source src="https://wholesalenativelinum.com/images/how-to-get-pin-pleated-look.mp4" type="video/mp4"/>
                  </video>
                </div>
            </div>
          ) : value == "specification" ? (
            <Specification
              sizes={sizes}
              colors={colors}
              name={name}
              SKU={SKU}
              category={category}
              weight={weight}
            />
          ) : value == "fabric&care" ? (
            <FabricCare />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
