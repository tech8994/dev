import React from "react";
import PropTypes from "prop-types";

export const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
      required={props.required}
      defaultValue={props.defaultValue}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  icons: PropTypes.any,
  img: PropTypes.any,
  onChange: PropTypes.any,
  name: PropTypes.string,
  required: PropTypes.any,
  defaultValue: PropTypes.any,
};
