import React, { useEffect, useState } from "react";
import "./scss/index.scss";
import Slider from "react-slick";
import { Btn } from "../../../components";
import { slideshow_1, slideshow_2, slideshow_3 } from "../../../assest";
import axios from "axios";
import { NavLink } from "react-router-dom";

export const TopSection = () => {
  const [slides, setSlides] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    let response;
    (async () => {
      try {
        response = await axios.get(
          "https://livinlinen.webtestdemo.com/dashboard/api/get-home-slider"
        );
        if (response.status == 200) {
          console.log(response);
          setSlides(response.data.data);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  console.log(slides);

  return (
    <div className="top_section">
      {slides == [] ? (
        <Slider {...settings} className="nested_top_section">
          <div className="item">
            {/* <h3>1</h3> */}
            <img src={slideshow_1} alt="slideshow_1" />
            <div className="item_content">
              <h1>Lorem Ipsum Dolor</h1>
              <p>Lorem Ipsum Dolor</p>
              <Btn value="View Collection" />
            </div>
          </div>
          <div className="item">
            {/* <h3>2</h3> */}
            <img src={slideshow_2} alt="slideshow_2" />
            <div className="item_content">
              <h1>Lorem Ipsum Dolor</h1>
              <p>Lorem Ipsum Dolor</p>
              <Btn value="View Collection" />
            </div>
          </div>
          <div className="item">
            {/* <h3>3</h3> */}
            <img src={slideshow_3} alt="slideshow_3" />
            <div className="item_content">
              <h1>Lorem Ipsum Dolor</h1>
              <p>Lorem Ipsum Dolor</p>
              <Btn value="View Collection" />
            </div>
          </div>
        </Slider>
      ) : (
        <Slider {...settings} className="nested_top_section">
          {slides.map((value) => {
            console.log(value);
            return (
              <div className="item" key={value.id}>
                {/* <h3>1</h3> */}
                <img src={`https://livinlinen.webtestdemo.com/dashboard/assets/images/sliders/${value.image}`} alt={slideshow_1} />
                <div className="item_content">
                  <h1>{value.title}</h1>
                  <p>{value.subtitle}</p>
                  <NavLink to={value.link}>View Collection</NavLink>
                  {/* <Btn value="View Collection" /> */}
                </div>
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
};
