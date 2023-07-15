import React, {useState} from 'react';
import "./scss/index.scss";
import {
    swatch_cacao,
    swatch_charcoal,
    swatch_fog,
    swatch_lavender,
    swatch_lilac,
    swatch_limoncello,
    swatch_oatmeal,
    swatch_olive,
    swatch_petrol,
    swatch_pink_clay,
    swatch_rosewater,
    swatch_rust,
    swatch_sage,
    swatch_terracotta,
    swatch_turmeric,
    swatch_white,
    swatch_wildflower,
  } from "../../../assest/index";
  
  
export const  Pillowshams = ({ setPillowShams, setbedType }) => {
    const [value, setValue] = useState("");
  const [changeColor, setChangeColor] = useState("");
  return (
    <div className="duvet_cover">
      <div className="nested_duvet_Cover">
        <div className="select_box">
          <p>Size: {value && value}</p>
          <div className="type_btn">
            <ul>
              <li>
                <span
                  className={value == "Single" ? "active" : ""}
                  onClick={() => setValue("Single")}
                  // href="/#"
                >
                  Single
                </span>
              </li>
              <li>
                <span
                  // href="/#"
                  onClick={() => setValue("King Single")}
                  className={value == "King Single" ? "active" : ""}
                >
                  King Single
                </span>
              </li>
              <li>
                <span
                  // href="/#"
                  onClick={() => setValue("Double")}
                  className={value == "Double" ? "active" : ""}
                >
                  Double
                </span>
              </li>
              <li>
                <span
                  // href="/#"
                  onClick={() => setValue("Queen")}
                  className={value == "Queen" ? "active" : ""}
                >
                  Queen
                </span>
              </li>
              <li>
                <span
                  // href="/#"
                  onClick={() => setValue("King")}
                  className={value == "King" ? "active" : ""}
                >
                  King
                </span>
              </li>
              <li>
                <span
                  // href="/#"
                  onClick={() => setValue("Super King")}
                  className={value == "Super King" ? "active" : ""}
                >
                  Super King
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* colors Secion */}
        <div className="select_color">
          <p>color: Sage & Olive Stripe</p>

          <div className="selecting_section">
            <ul>
              <li
                className={changeColor == "swatch_cacao" ? "selected" : ""}
                onClick={() => {setChangeColor("swatch_cacao");setPillowShams("#543230")}}
              >
                <img src={swatch_cacao} alt="swatch_cacao" />
              </li>
              <li
                className={changeColor == "swatch_charcoal" ? "selected" : ""}
                onClick={() => {setChangeColor("swatch_charcoal"); setPillowShams("#252129")}}
              >
                <img src={swatch_charcoal} alt="swatch_charcoal" />
              </li>
              <li
                className={changeColor == "swatch_fog" ? "selected" : ""}
                onClick={() => {setChangeColor("swatch_fog"); setPillowShams("#C0BEC1")}}
              >
                <img src={swatch_fog} alt="swatch_fog" />
              </li>
              <li
                className={changeColor == "swatch_lavender" ? "selected" : ""}
                onClick={() => {setChangeColor("swatch_lavender"); setPillowShams("#CAB0B9")}}
              >
                <img src={swatch_lavender} alt="swatch_lavender" />
              </li>
              <li
                className={changeColor == "swatch_lilac" ? "selected" : ""}
                onClick={() => {setChangeColor("swatch_lilac"); setPillowShams("#D4CAD5")}}
              >
                <img src={swatch_lilac} alt="swatch_lilac" />
              </li>
              <li
                className={changeColor == "swatch_limoncello" ? "selected" : ""}
                onClick={() => {setChangeColor("swatch_limoncello"); setPillowShams("#E7D9B6")}}
              >
                <img src={swatch_limoncello} alt="swatch_limoncello" />
              </li>
              <li
                className={changeColor == "swatch_olive" ? "selected" : ""}
                onClick={() => {setChangeColor("swatch_olive"); setPillowShams("#323A23")}}
              >
                <img src={swatch_olive} alt="swatch_olive" />
              </li>
              <li
                className={changeColor == "swatch_petrol" ? "selected" : ""}
                onClick={() => {setChangeColor("swatch_petrol"); setPillowShams("#305663")}}
              >
                <img src={swatch_petrol} alt="swatch_petrol" />
              </li>
              <li
                className={changeColor == "swatch_pink_clay" ? "selected" : ""}
                onClick={() => {setChangeColor("swatch_pink_clay"); setPillowShams("#A05551")}}
              >
                <img src={swatch_pink_clay} alt="swatch_pink_clay" />
              </li>
              <li
                className={changeColor == "swatch_oatmeal" ? "selected" : ""}
                onClick={() => {setChangeColor("swatch_oatmeal"); setPillowShams("#D5CCC3")}}
              >
                <img src={swatch_oatmeal} alt="swatch_oatmeal" />
              </li>
              <li
                className={changeColor == "swatch_rosewater" ? "selected" : ""}
                onClick={() => {setChangeColor("swatch_rosewater"); setPillowShams("#EEE4E5")}}
              >
                <img src={swatch_rosewater} alt="swatch_rosewater" />
              </li>
              <li
                className={changeColor == "swatch_rust" ? "selected" : ""}
                onClick={() => {setChangeColor("swatch_rust"); setPillowShams("#AD542D")}}
                // onClick={() => setPillowShams("#AD542D")}
              >
                <img src={swatch_rust} alt="swatch_rust" />
              </li>
              <li
                className={changeColor == "swatch_sage" ? "selected" : ""}
                onClick={() => {setChangeColor("swatch_sage"); setPillowShams("#C5C6BE")}}
              >
                <img src={swatch_sage} alt="swatch_sage" />
              </li>
              <li
                className={changeColor == "swatch_terracotta" ? "selected" : ""}
                onClick={() => {setChangeColor("swatch_terracotta"); setPillowShams("#DFBFA8")}}
              >
                <img src={swatch_terracotta} alt="swatch_terracotta" />
              </li>
              <li
                className={changeColor == "swatch_turmeric" ? "selected" : ""}
                onClick={() => {setChangeColor("swatch_turmeric"); setPillowShams("#A06300")}}
              >
                <img src={swatch_turmeric} alt="swatch_turmeric" />
              </li>
              <li
                className={changeColor == "swatch_white" ? "selected" : ""}
                onClick={() => {setChangeColor("swatch_white"); setPillowShams("#EFEFF1")}}
              >
                <img src={swatch_white} alt="swatch_white" />
              </li>
              <li
                className={changeColor == "swatch_wildflower" ? "selected" : ""}
                onClick={() => {setChangeColor("swatch_wildflower"); setPillowShams("#80A0E9")}}
              >
                <img src={swatch_wildflower} alt="swatch_wildflower" />
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="select_color">
          <p>Stripe</p>
          <div className="selecting_section">
            <ul>
              <li
                className={changeColor == "img1" ? "selected" : ""}
                onClick={() => setChangeColor("img1")}
              >
                <img src={img1} alt="img1" />
              </li>
              <li
                className={changeColor == "img2" ? "selected" : ""}
                onClick={() => setChangeColor("img2")}
              >
                <img src={img2} alt="img2" />
              </li>
              <li
                className={changeColor == "img3" ? "selected" : ""}
                onClick={() => setChangeColor("img3")}
              >
                <img src={img3} alt="img3" />
              </li>
            </ul>
          </div>
        </div> */}
        <div className="btn_next">
          <button onClick={() => setbedType("Second Pillowcases")}>Next Step</button>
        </div>
      </div>
    </div>
  )
}
