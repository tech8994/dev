import React, { useState, useEffect, useLayoutEffect } from "react";
import "./app.scss";
import { Navbar, Footer } from "./layout";
import {
  Home,
  ContactUs,
  Shop,
  BuildingBed,
  ProductDetails,
  ShoppingCart,
  Authentication,
  OurStory,
  Login,
  Registration,
  WishList,
  UserDashboard,
  AllOrders,
  ProfileUser,
  OrderDetail,
  Checkout,
  ForgetPassword,
  // Admin
  Admin,
  AdminDashboard,
  AllOrdersAdmin,
  ALLUsers,
  Fabric,
  Curtains,
  Bedding,
  Bath,
  TableTopKitchen,
  NewArrival,
} from "./module";
import { Routes, Route } from "react-router-dom";
import { addToCart } from "./store/slices/addcart";
import { useDispatch } from "react-redux";
import axios from "axios";

function App() {
  // temp
  let dispatch = useDispatch();
  let [slug, setSlug] = useState("");
  let [getAllProduct, setGetAllProduct] = useState([]);
  let [idwishList, setIdWishList] = useState(null);
  let [wishList, setwishList] = useState([]);
  let [updatedWishList, setUpdatedWishList] = useState([]);
  // Add To Cart
  let [addToCartProd, setAddToCartProd] = useState([]);
  let [idAddToCartProd, setIdAddToCartProd] = useState(null);
  let [updatedAddToCart, setUpdatedAddToCart] = useState([]);
  // All Categories
  const [filterDataCategory, setFilterDataCategory] = useState([]);
  const [ProudctListCategory, getProductListCategory] = useState([]);
  const [categoryNumber, setCategoryNumber] = useState(0);

  const [loading, setLoading] = useState(true);
  // Total Amount
  let [totalamount, setTotalAmount] = useState(0);
  let [combineTotalAmount, setCombineTotoalAmount] = useState(0);
  // console.log(getAllProduct);
  //  console.log(wishList);

  // User DashBaord Section
  let [allData, setALLData] = useState([]);
  let [allProducts, setAllProducts] = useState(null);
  let [getSpecificDetails, setGetSpecificDetails] = useState("0");
  let [loadingSpecificDetails, setloadingSpecificDetails] = useState(true);
  let [specificDataDetails, setspecificDataDetails] = useState(null);
  let [getAllOrders, setGetAllOrders] = useState(null);
  let [loadingAllOrders, setLoadingAllOrders] = useState(true);

  console.log("This is update Wish List", wishList);

 
  // All Produtc APi


  const getDataForAllPage = async () => {
    let res;
    try {
      setLoading(true);
      res = await axios.get(
        "https://livinlinen.webtestdemo.com/dashboard/api/getProducts"
      );
      if (res.status == 200) {
        // console.log(res.data.data);
        // setShowProduct(res.data.data);
        setGetAllProduct(res.data.data);
        setFilterDataCategory(res.data.data);
        // getProductListCategory(res.data.data);
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
    getDataForAllPage();
  }, []);


  // Functionality of Wish List Start From Here


  const filterAddWishListAllCategory = getAllProduct.filter((value) => value.id == idwishList);
  useEffect(() => {
    console.log("Wish List For Filter", wishList);
    setwishList([...wishList, filterAddWishListAllCategory]);
  }, [idwishList]);
  console.log("All DATA Wish List", filterAddWishListAllCategory);


  useEffect(() => {
      console.log("Wish List first effect",wishList);
    if (filterAddWishListAllCategory.length > 0 || updatedWishList.length > 0) {
      let wishListData = wishList.flat();
      let fianlRes = wishListData.filter((values, ind) => {
        console.log(ind);
        return wishListData.findIndex((obj) => obj.id === values.id) === ind;
      });
      console.log("Final Lis Wish List", fianlRes);

      console.log("Wish List", wishListData);
      let obj = {
        identifier: window.localStorage.getItem("user_email"),
        instance: "wishlist",
        content: JSON.stringify(fianlRes),
      };
      console.log("obj",obj);
      dispatch(addToCart(obj));
    }
  }, [filterAddWishListAllCategory, updatedWishList]);

  // WishList Api Start
  let getAllWishListFunc = async (data) => {
    try {
      setLoading(true);
      let res = await axios.post(
        "https://livinlinen.webtestdemo.com/dashboard/api/get-shopping-data",
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("bed_token")}`,
          },
        }
      );
      if (res.status == 200) {
        console.log(JSON.parse(res.data[0].content));
        // setShowProduct(res.data.data);
        // console.log("Running");
        setwishList(JSON.parse(res.data[0].content));
      }
      setLoading(false);
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let obj = {
      identifier: window.localStorage.getItem("user_email"),
      instance: "wishlist",
    };
    console.log("update Data", obj);
    // setTimeout(() =>{
    getAllWishListFunc(obj);
    // },5000)
    // dispatch(getWishListProduct(obj))
  }, [updatedWishList]);

  useEffect(() => {
    let obj = {
      identifier: window.localStorage.getItem("user_email"),
      instance: "wishlist",
    };
    console.log("Runing", obj);

    getAllWishListFunc(obj);
  }, []);
  //WishList Api END

  // Functionality End Here Wish List






  // Add To Cart Section Shopping Cart Functionality

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



  const filterAddToCartprod = getAllProduct.filter(
    (value) => value.id == idAddToCartProd
  );
  console.log("Shopping Cart", filterAddToCartprod);
  useEffect(() => {
    setAddToCartProd([...addToCartProd, filterAddToCartprod]);
  }, [idAddToCartProd]);

  useEffect(() => {
    console.log("ADD TO Cart First Effect", addToCartProd);
    if (filterAddToCartprod.length > 0 || updatedAddToCart.length > 0) {
      let addToCartData = addToCartProd.flat();
      let fianlResAddToCart = addToCartData.filter((values, ind) => {
        // console.log(ind);
        return addToCartData.findIndex((obj) => obj.id === values.id) === ind;
      });
      console.log("Update SHpopping cart",addToCartProd);
      console.log("Final Lis", fianlResAddToCart);
      let objToCart = {
        identifier: window.localStorage.getItem("user_email"),
        instance: "cart",
        content: JSON.stringify(fianlResAddToCart),
      };
      console.log("update cart obj sending", objToCart);
      // dispatch(addToCartFunc(objToCart));
      shoppingCartFunc(objToCart)
    }
  }, [updatedAddToCart, filterAddToCartprod]);

  let getAllAddToCartFunc = async (data) => {
    console.log("Data of Shopping Data", data);
    try {
      setLoading(true);

      let res = await axios.post(
        "https://livinlinen.webtestdemo.com/dashboard/api/get-shopping-data",
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("bed_token")}`,
          },
        }
      );
      console.log(res);
      if (res.status == 200) {
        console.log(JSON.parse(res.data[0].content));
        // setShowProduct(res.data.data);
        // console.log("Running");
        setAddToCartProd(JSON.parse(res.data[0].content));
      }
      setLoading(false);
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let obj = {
      identifier: window.localStorage.getItem("user_email"),
      instance: "cart",
    };
    console.log("update Data Cart", obj);
    // setTimeout(() =>{
    getAllAddToCartFunc(obj);
    // },5000)
    // dispatch(getWishListProduct(obj))
  }, [updatedAddToCart]);
  useEffect(() => {
    let obj = {
      identifier: window.localStorage.getItem("user_email"),
      instance: "cart",
    };
    console.log("Runing Cart", obj);
    getAllAddToCartFunc(obj);
  }, []);

// End To Cart Section Shopping Functionality



  // all categories Data Start
  const getResponseCategory = (response) => {
    setCategoryNumber(response);
    let resp = filterDataCategory.filter(
      (value) => value.category_id == response
    );
    console.log(resp);
    if (resp) {
      //  console.log("true");
      // setFilterData(resp)
    }
    getProductListCategory(resp);
  };
  const getResponseSubCategory = (response) => {
    console.log(response);
    setCategoryNumber(response);
    // let respsubCategory=filterData.filter(value => ())
    if (response == null) return;
    let respsubCategory = filterDataCategory.filter(
      (value) => value.subcategory_id == response
    );
    console.log(filterDataCategory);
    console.log(respsubCategory);
    getProductListCategory(respsubCategory);
  };

  //  Add The Specific User Section API
  let getAllDataUserDashboard = async (data) => {
    let res;
    try {
      setLoading(true);

      res = await axios.post(
        "https://livinlinen.webtestdemo.com/dashboard/api/userDashboard",
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("bed_token")}`,
          },
        }
      );
      console.log("Res", res);
      if (res.status == 200) {
        // console.log(JSON.parse(res));
        console.log("User Dashbaord", res);

        let arrayData = [];
        arrayData.push(
          res.data.totalCast,
          res.data.totalPurchase,
          res.data.totalDelivered,
          res.data.totalCanceled
        );
        setALLData(arrayData);
        setAllProducts(res.data.data);
      } else {
        if (res.status == 404) {
          console.log("User Dashbaord 404", res);
          setAllProducts(res.data.message);
        }
      }
      setLoading(false);
    } catch (err) {
      setAllProducts(err.response.data.message);
      console.log("Error User Eror", err.response.data.message);
    }
  };

  useEffect(() => {
    let objAllDashboard = {
      user_id: window.localStorage.getItem("user_id"),
    };
    console.log("Get User Dashboard", objAllDashboard);
    getAllDataUserDashboard(objAllDashboard);
  }, []);

  // Get the specific user details section Api
  let getSpecificUserData = async (data) => {
    try {
      setloadingSpecificDetails(true);
      let res = await axios.post(
        "https://livinlinen.webtestdemo.com/dashboard/api/UserOrderDetails",
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("bed_token")}`,
          },
        }
      );
      console.log("Res Specific", res);
      if (res.data.status_code == 200) {
        // console.log(JSON.parse(res));
        // let userDatas='Livin_Linen User Order Details';
        console.log(res.data);
        setspecificDataDetails(res.data.Livin_Linen_User_Order_Details);
      } else {
        if (res.data.status == 404) {
          setspecificDataDetails(res.data.message);
        }
      }
      setloadingSpecificDetails(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("Order id", window.localStorage.getItem("user_id"));
    let objSpcificDetails = {
      user_id: window.localStorage.getItem("user_id"),
      order_id: getSpecificDetails.toString(),
    };
    console.log("Get User Specific Data", objSpcificDetails);
    getSpecificUserData(objSpcificDetails);
  }, [getSpecificDetails]);
  // console.log(specificDataDetails);

  // Get ALL Products API Section
  let getUserAllorders = async (data) => {
    try {
      setLoadingAllOrders(true);
      let res = await axios.post(
        "https://livinlinen.webtestdemo.com/dashboard/api/UserOrders",
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("bed_token")}`,
          },
        }
      );
      console.log("Res All Orders", res);
      if (res.data.status_code == 200) {
        // console.log(JSON.parse(res));
        console.log(res.data);
        setGetAllOrders(res.data.Livin_Linen_All_Order);
      } else {
        if (res.data.status_code == 404) {
          console.log(res.data.message);
          setGetAllOrders(res.data.message);
        }
      }
      setLoadingAllOrders(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let allorderObj = {
      user_id: window.localStorage.getItem("user_id"),
    };
    console.log(allorderObj);
    getUserAllorders(allorderObj);
  }, []);

  //Add the Total Amount
  let totalAmountCobine = addToCartProd.reduce(
    (accumulator, currentValue) =>
      accumulator + Math.trunc(Number(currentValue.sale_price)),
    0
  );
  let finalValuies;
  let filertDataforAmount = addToCartProd
    .filter((value) => value.id == totalamount)
    .map((value) => value.sale_price)
    .reduce((acc, value) => Number(acc) + Number(value), 0);
  console.log(filertDataforAmount);
  finalValuies = totalAmountCobine + filertDataforAmount;
  console.log(finalValuies);

  useEffect(() => {
    console.log(finalValuies);
  }, [totalamount]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setSlug={setSlug}
              setIdWishList={setIdWishList}
              setwishList={setwishList}
              idwishList={idwishList}
              wishList={wishList}
              setGetAllProduct={setGetAllProduct}
              // setAddToCartProd={setAddToCartProd}
              setIdAddToCartProd={setIdAddToCartProd}
            />
          }
        />
        <Route path="/our-story" element={<OurStory />} />
        {/* <Route path='/shop' element={<Shop/>} /> */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/building-bed" element={<BuildingBed />} />
        <Route
          path="/shop"
          element={
            <Shop
              setSlug={setSlug}
              setGetAllProduct={setGetAllProduct}
              setIdWishList={setIdWishList}
              wishList={wishList}
            />
          }
        />
        <Route
          path="/fabric"
          element={
            <Fabric
              setSlug={setSlug}
              getAllProduct={getAllProduct}
              setIdWishList={setIdWishList}
              getResponseCategory={getResponseCategory}
              getResponseSubCategory={getResponseSubCategory}
              ProudctListCategory={ProudctListCategory}
              getProductListCategory={getProductListCategory}
              filterDataCategory={filterDataCategory}
              setFilterDataCategory={setFilterDataCategory}
              loading={loading}
              // categoryNumber={categoryNumber}
            />
          }
        />
        <Route
          path="/curtain"
          element={
            <Curtains
              setSlug={setSlug}
              getAllProduct={getAllProduct}
              setIdWishList={setIdWishList}
              getResponseCategory={getResponseCategory}
              getResponseSubCategory={getResponseSubCategory}
              ProudctListCategory={ProudctListCategory}
              getProductListCategory={getProductListCategory}
              filterDataCategory={filterDataCategory}
              setFilterDataCategory={setFilterDataCategory}
              loading={loading}
              // categoryNumber={categoryNumber}
            />
          }
        />
        <Route
          path="/bedding"
          element={
            <Bedding
              setSlug={setSlug}
              getAllProduct={getAllProduct}
              setIdWishList={setIdWishList}
              getResponseCategory={getResponseCategory}
              getResponseSubCategory={getResponseSubCategory}
              ProudctListCategory={ProudctListCategory}
              getProductListCategory={getProductListCategory}
              filterDataCategory={filterDataCategory}
              setFilterDataCategory={setFilterDataCategory}
              loading={loading}
            />
          }
        />
        <Route
          path="/bath"
          element={
            <Bath
              setSlug={setSlug}
              getAllProduct={getAllProduct}
              setIdWishList={setIdWishList}
              getResponseCategory={getResponseCategory}
              getResponseSubCategory={getResponseSubCategory}
              ProudctListCategory={ProudctListCategory}
              getProductListCategory={getProductListCategory}
              filterDataCategory={filterDataCategory}
              setFilterDataCategory={setFilterDataCategory}
              loading={loading}
            />
          }
        />
        <Route
          path="/table_kitchen"
          element={
            <TableTopKitchen
              setSlug={setSlug}
              getAllProduct={getAllProduct}
              setIdWishList={setIdWishList}
              getResponseCategory={getResponseCategory}
              getResponseSubCategory={getResponseSubCategory}
              ProudctListCategory={ProudctListCategory}
              getProductListCategory={getProductListCategory}
              filterDataCategory={filterDataCategory}
              setFilterDataCategory={setFilterDataCategory}
              loading={loading}
            />
          }
        />

        <Route
          path="/product-detail"
          element={<ProductDetails slug={slug} />}
        />
        <Route
          path="/shopping-cart"
          element={
            <ShoppingCart
              addToCartProd={addToCartProd}
              setUpdatedAddToCart={setUpdatedAddToCart}
              setAddToCartProd={setAddToCartProd}
              totalAmountCobine={totalAmountCobine}
              setTotalAmount={setTotalAmount}
              filertDataforAmount={filertDataforAmount}
            />
          }
        />
        <Route
          path="/new-arrival"
          element={
            <NewArrival
              setSlug={setSlug}
              getAllProduct={getAllProduct}
              setIdWishList={setIdWishList}
              getResponseCategory={getResponseCategory}
              getResponseSubCategory={getResponseSubCategory}
              ProudctListCategory={ProudctListCategory}
              getProductListCategory={getProductListCategory}
              filterDataCategory={filterDataCategory}
              setFilterDataCategory={setFilterDataCategory}
              loading={loading}
            />
          }
        />
        <Route path="authentication" element={<Authentication />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="forget-password" element={<ForgetPassword />} />
        </Route>
        <Route
          path="/wishlist"
          element={
            <WishList
              wishList={wishList}
              setUpdatedWishList={setUpdatedWishList}
              setwishList={setwishList}
            />
          }
        />
        <Route
          path="/user/dashboard"
          element={
            <UserDashboard
              loading={loading}
              allData={allData}
              allProducts={allProducts}
              setGetSpecificDetails={setGetSpecificDetails}
            />
          }
        />
        <Route
          path="/user/all-orders"
          element={
            <AllOrders
              getAllOrders={getAllOrders}
              loadingAllOrders={loadingAllOrders}
              setGetSpecificDetails={setGetSpecificDetails}
            />
          }
        />
        <Route path="/user/profile" element={<ProfileUser />} />
        <Route
          path="/user/orderDetails"
          element={
            <OrderDetail
              loadingSpecificDetails={loadingSpecificDetails}
              specificDataDetails={specificDataDetails}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              totalAmountCobine={totalAmountCobine}
              filertDataforAmount={filertDataforAmount}
            />
          }
        />

        {/* <Route path="/admin-dashboard" element={<AdminDashboard/>} /> */}
        <Route path="admin" element={<Admin />}>
          <Route index path="dashboard" element={<AdminDashboard />} />
          <Route path="all-orders" element={<AllOrdersAdmin />} />
          <Route path="all-users" element={<ALLUsers />} />
        </Route>
      </Routes>
      {/* <Navbar/> */}
      {/* <ContactUs/> */}
      {/* <Home/> */}
      {/* <Shop/> */}
      {/* <BuildingBed/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
