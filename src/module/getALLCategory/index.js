import React from "react";
import "./scss/index.scss";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import { FilterData } from "../shop/filterData";

export const GetALLCategory = ({
  getResponseSubCategory,
  getResponseCategory,
  getProductListCategory,
  ProudctListCategory,
  loading,
  filterDataCategory,
  setSlug,
  setIdWishList
}) => {
  return (
    <div className="getAllCategory">
      <div className="nested_section">
        <div className="filter_section">
          <a href="#/" onClick={() =>  getProductListCategory([])}>All Categories</a>
          <h4 onClick={() => getResponseCategory(1)}>Bedding</h4>
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
            <li onClic k={() => getResponseSubCategory(10)}>
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
          <h4 onClick={() => getResponseCategory(2)}>Tabletop & Kitchen</h4>
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
          <h4 onClick={() => getResponseCategory(3)}>Curtins</h4>
          <ul>
            <li onClick={() => getResponseSubCategory(19)}>
              <MdSubdirectoryArrowRight />
              Shower Curtain
            </li>
          </ul>
          <h4 onClick={() => getResponseCategory(4)}>Bath</h4>
          <h4 onClick={() => getResponseCategory(5)}>Fabric</h4>
        </div>
        {/* <FilterData
          loading={loading}
          ProudctListCategory={ProudctListCategory}
          setSlug={setSlug}
          getProductListCategory={getProductListCategory}
          filterDataCategory={filterDataCategory}
          setIdWishList={setIdWishList}
        /> */}
      </div>
    </div>
  );
};
