import React, { useState, useEffect } from "react";
import "./scss/index.scss";
import { Navbar, Footer } from "../../layout";
import Rating from "@mui/material/Rating";
// import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import { ShowProduct } from "./showproduct";
import axios from "axios";
import { toast } from "react-toastify";

const labels = {
  0.5: "0.5",
  1: "1",
  1.5: "1.5",
  2: "2",
  2.5: "2.5",
  3: "3",
  3.5: "3.5",
  4: "4",
  4.5: "4.5",
  5: "5",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export const ProductDetails = ({slug}) => {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [specificData, setSpecificData] = useState(null);

  console.log(slug);
  const getSpecificProduct = async () => {
    let res;
    try {
      setLoading(true);
      res = await axios.get(
        `https://livinlinen.webtestdemo.com/dashboard/api/getProductDetail/${slug}`
      );
      if (res.status == 200) {
        console.log(res);
        setSpecificData(res.data.data);
        // getProductList(res.data.data)
      }
      setLoading(false);
    } catch (err) {
      if (err.message == "Network Error") {
        toast.error("Please Check Your Network");
      }
      console.log(err);
    }
  };
  useEffect(() => {
    getSpecificProduct();
  }, []);
  // const {name,short_description}=specificData;
  // console.log(name);

  console.log(specificData);
  return (
    <div className="product_details">
      <Navbar />
      {loading ? (
        <div className="Loading_heading">
          <h1>Wait Product is Loading...</h1>
        </div>
      ) : (
        <div className="nested_details">
          <div className="product_heading">
            <div className="prod_content">
              <h1>{specificData.name && specificData.name}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: specificData.short_description,
                }}
              />
            </div>
            <div className="rating_section">
              <div className="nested_rating">
                <Rating
                  name="simple-controlled"
                  value={value}
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>
                    {labels[hover !== -1 ? hover : value]}
                  </Box>
                )}
              </div>
              <div className="reviews">
                <span>62</span> Reviews
              </div>
              <div className="orders">
                <span>242</span> Orders
              </div>
            </div>
          </div>

          {/* comps */}
          <ShowProduct specificData={specificData} loading={loading}  />
        </div>
      )}
      <Footer />
    </div>
  );
};
