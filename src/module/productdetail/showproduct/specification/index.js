import React from "react";
import "../scss/index.scss";

// const specfData=[
//     {
//         id:1,
//         specName:"Name",
//         specValue: "Salwar Kameez",
//     },

//     {
//         id:2,
//         specName:"SKU",
//         specValue: "0x48e2c",
//     },
//     {
//         id:3,
//         specName:"Models",
//         specValue: "FX 829 v1",
//     },
//     {
//         id:4,
//         specName:"Categories",
//         specValue: "Digital Print",
//     },
//     {
//         id:5,
//         specName:"Size",
//         specValue: "60’’ x 40’’",
//     },
//     {
//         id:6,
//         specName:"Brand",
//         specValue: "Individual Collections",
//     },
//     {
//         id:6,
//         specName:"Color",
//         specValue: "Black, White",
//     },
// ]

export const Specification = ({ sizes, colors, name, SKU, category, weight }) => {
  return (
    <div className="specification_wrap">
      <table>
        <tbody>
          {/* {
                specfData.map((value) =>{ */}
          {/* return( */}

          <tr>
            <td className="width1">Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>SKU</td>
            <td>{SKU}</td>
          </tr>
          <tr>
            <td>Category</td>
            <td>{category.name}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{weight}</td>
          </tr>
          <tr>
            <td>Color</td>
            <td>
              {colors &&
                colors.map((value, id) => {
                  return (
                    <li key={id} value={value.value}>
                      {value.value}
                    </li>
                  );
                })}
            </td>
          </tr>
          <tr>
            <td>Sizes</td>
            <td>
            {sizes && sizes.map((value, id) =>{
              return(
                <li key={id} value={value.value}>{value.value}</li>
              )
            })}
            </td>
          </tr>
          {/* </tr> */}
          {/* ) */}
          {/* } ) */}
          {/* } */}
        </tbody>
      </table>
    </div>
  );
};
