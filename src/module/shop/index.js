import React, { useState, useEffect } from "react";
import "./scss/index.scss";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FilterData } from "./filterData";
import { Footer, Navbar } from "../../layout";
import { useSelector } from "react-redux";
import { getProduct } from "../../store/slices/products";
import axios from "axios";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import { ImArrowRight2 } from "react-icons/im";

// const listCollectioin=[
//   {
//     collectData: 'Abby',
//   },
//   {
//     collectData: 'Basic',
//   },
//   {
//     collectData: 'Grayson',
//   },
//   {
//     collectData: 'Hampton',
//   },
//   {
//     collectData: 'Kentra',
//   },
//   {
//     collectData: 'Lilah',
//   },
//   {
//     collectData: 'Lucca',
//   },
//   {
//     collectData: 'Newport',
//   },
//   {
//     collectData: 'Peyton',
//   },
//   {
//     collectData: 'Racer',
//   },
//   {
//     collectData: 'Sea ISI',
//   },
//   {
//     collectData: 'Tara',
//   },
//   {
//     collectData: 'Sea ISI',
//   },
//   {
//     collectData: 'Uma',
//   },
//   {
//     collectData: 'Weaver',
//   },
// ]

export const Shop = ({ setSlug, setGetAllProduct, setIdWishList }) => {
  
  const [ProudctList, getProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState([]);
  const [collection, setCollection] = useState({
    Abby: false,
    Basic: false,
    Boho: false,
    Grayson: false,
    Hampton: false,
    Kentra: false,
    Lilah: false,
    Lucca: false,
    Newport: false,
    Peyton: false,
    Racer: false,
    SeaISI: false,
    Tara: false,
    Uma: false,
    Weaver: false,
  });


  const [colors, setColor] = useState({
    BalletSlipper: false,
    Blacks: false,
    Charcoal: false,
    Cloud: false,
    Flax: false,
    Fog: false,
    Greige: false,
    Iron: false,
    Onyx: false,
    SeaGlass: false,
    SoftWhite: false,
    Whites: false,
  });

  const handleChange = (event) => {
    setCollection({
      ...collection,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChangeColor = (event) => {
    setColor({
      ...colors,
      [event.target.name]: event.target.checked,
    });
  };

  // collecton
  const {
    Abby,
    Basic,
    Boho,
    Grayson,
    Hampton,
    Kentra,
    Lilah,
    Lucca,
    Newport,
    Peyton,
    Racer,
    SeaISI,
    Tara,
    Uma,
    Weaver,
  } = collection;
  const {
    BalletSlipper,
    BlackS,
    Charcoal,
    Cloud,
    Flax,
    Fog,
    Greige,
    Iron,
    Onyx,
    SeaGlass,
    SoftWhite,
    Whites,
  } = colors;
  //  console.log(collection);

  // bed=1
  // tableTalkicthen=2
  // batg=4
  // fabric=5
  // curtins=3
  const getData = async () => {
    let res;
    try {
      setLoading(true);
      res = await axios.get(
        "https://livinlinen.webtestdemo.com/dashboard/api/getProducts"
      );
      if (res.status == 200) {
        console.log(res.data.data);
        setFilterData(res.data.data);
        getProductList(res.data.data);
        setGetAllProduct(res.data.data);
      }
      setLoading(false);
    } catch (err) {
      // if(err.response.status == 400){
      //     toast.error(err.response.data.email[0])
      // }
      console.log(err);
    }
  };

  const getResponse = (response) => {
    let resp = filterData.filter((value) => value.category_id == response);
    console.log(resp);
    if(resp){
      //  console.log("true");
      // setFilterData(resp)
    }
    getProductList(resp);
  };
  const getResponseSubCategory = (response) => {
    console.log(response);
    // let respsubCategory=filterData.filter(value => ())
    if (response == null) return;
    let respsubCategory = filterData.filter(
      (value) => value.subcategory_id == response
    );
    console.log(filterData);
    console.log(respsubCategory);
    getProductList(respsubCategory);
  };
  useEffect(() => {
    getData();
    // dispatch(registerUser(finalRes))

  }, []);
  // useEffect(() =>{
  //      getResponse()
  // },[filterData]);
  

  return (
    <>
      <Navbar />
      <div className="shop_section">
        <div className="nested_shop_Section">
          {/* <div> */}
          <div className="banner_section">
            <h1>Shop</h1>
            {/* {loading ? "Loading" : ProudctList.filter(value => value.length)} */}
          </div>
          <div className="content_shop">
            <div className="filter_section">
              <h1>All Categories</h1>
              <h4 onClick={() => getResponse(1)}>Bedding</h4>
              <ul>
                <li onClick={() => getResponseSubCategory(7)}>
                  <MdSubdirectoryArrowRight /> Duvet Cover & Shams
                </li>
                <li onClick={() => getResponseSubCategory(8)}>
                  <MdSubdirectoryArrowRight /> Pillowcases & Sheets
                </li>
                <li onClick={() => getResponseSubCategory(9)}>
                  <MdSubdirectoryArrowRight /> Throws & Blankets
                </li>
                <li onClick={() => getResponseSubCategory(10)}>
                  <MdSubdirectoryArrowRight /> Decorative Pillows
                </li>
                <li onClick={() => getResponseSubCategory(11)}>
                  <MdSubdirectoryArrowRight /> Bed Skirt
                </li>
                <li onClick={() => getResponseSubCategory(12)}>
                  <MdSubdirectoryArrowRight /> Silk Duvet
                </li>
                <li onClick={() => getResponseSubCategory(13)}>
                  <MdSubdirectoryArrowRight /> Pillow Insert
                </li>
              </ul>
              <h4 onClick={() => getResponse(2)}>Tabletop & Kitchen</h4>
              <ul>
                <li onClick={() => getResponseSubCategory(14)}>
                  <MdSubdirectoryArrowRight />
                  Napkins
                </li>
                <li onClick={() => getResponseSubCategory(15)}>
                  <MdSubdirectoryArrowRight />
                  Placemats
                </li>
                <li onClick={() => getResponseSubCategory(16)}>
                  <MdSubdirectoryArrowRight />
                  Table Cloths
                </li>
                <li onClick={() => getResponseSubCategory(17)}>
                  <MdSubdirectoryArrowRight />
                  Aprons
                </li>
                <li onClick={() => getResponseSubCategory(18)}>
                  <MdSubdirectoryArrowRight />
                  Hand Towels
                </li>
              </ul>
              <h4 onClick={() => getResponse(3)}>Curtins</h4>
              <ul>
                <li onClick={() => getResponseSubCategory(19)}>
                  <MdSubdirectoryArrowRight />
                  Shower Curtain
                </li>
              </ul>
              <h4 onClick={() => getResponse(4)}>Bath</h4>
              <h4 onClick={() => getResponse(5)}>Fabric</h4>
            </div>
            {/* comp */}
            <FilterData
              loading={loading}
              ProudctList={ProudctList}
              setSlug={setSlug}
              getProductList={getProductList}
              filterData={filterData}
              setIdWishList={setIdWishList}
              // wishList={wishList}
            />
          </div>
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};
