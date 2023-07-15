import React from 'react';
import PropTypes from "prop-types";
import "./scss/index.scss";

export const Btn = (props) => {
  return (
    <button onClick={props.onClick} type={props.type} className="btn_comp">
       {props.img && (
        <img src={props.img} alt={props.img} />
       )}
       {props.icons &&(
        <span>
        <props.icons/>
        </span>
       )} 
      {props.value}
    </button>
  )
};


Btn.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.any,
    type: PropTypes.string,
    icons: PropTypes.any,
    img: PropTypes.any,
};
  


