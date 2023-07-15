import React from 'react';
import "../scss/index.scss";



const specfData=[
    {
        id:1,
        specName:"Name",
        specValue: "Salwar Kameez",
    },

    {
        id:2,
        specName:"SKU",
        specValue: "0x48e2c",
    },
    {
        id:3,
        specName:"Models",
        specValue: "FX 829 v1",
    }
]


export const  FabricCare =() => {
  return (
    <div className='fabric_care'>
    {/* <table>
        <tbody>
            {
                specfData.map((value) =>{
                    return(
                        <tr key={value.id}>
                        <td  className='width1'>{value.specName}</td>
                        <td>{value.specValue}</td>
                    </tr>
                    )
                } )
            }
        </tbody>
        </table> */}
        <h1>There is Nothing</h1>
        </div>
  )
}

