import React from 'react';
import "./scss/index.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";






const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));



  const billingDetails = [
    {
      id: 1,
      subTotal: "$150.00",
      discount: "$0.00",
      fistName: "Gama",
      lastName: "philp",
      email: "eml@eml.com",
      status: "Delivered",
      orderDate: "2023-02-22 07:27:00",
    },
    {
      id: 2,
      subTotal: "$150.00",
      discount: "$0.00",
      fistName: "Gama",
      lastName: "philp",
      email: "eml@eml.com",
      status: "Delivered",
      orderDate: "2023-02-22 07:27:00",
    },
    {
      id: 3,
      subTotal: "$150.00",
      discount: "$0.00",
      fistName: "Gama",
      lastName: "philp",
      email: "eml@eml.com",
      status: "Delivered",
      orderDate: "2023-02-22 07:27:00",
    },
    {
      id: 4,
      subTotal: "$150.00",
      discount: "$0.00",
      fistName: "Gama",
      lastName: "philp",
      email: "eml@eml.com",
      status: "Delivered",
      orderDate: "2023-02-22 07:27:00",
    }
  ];
 const transactionDetails=[
    {
        id: 1,
        subTotal: "$150.00",
        discount: "$0.00",
        fistName: "Gama",
        lastName: "philp",
        email: "eml@eml.com",
        status: "Delivered",
        orderDate: "2023-02-22 07:27:00",
      },
      {
        id: 2,
        subTotal: "$150.00",
        discount: "$0.00",
        fistName: "Gama",
        lastName: "philp",
        email: "eml@eml.com",
        status: "Delivered",
        orderDate: "2023-02-22 07:27:00",
      },
      {
        id: 3,
        subTotal: "$150.00",
        discount: "$0.00",
        fistName: "Gama",
        lastName: "philp",
        email: "eml@eml.com",
        status: "Delivered",
        orderDate: "2023-02-22 07:27:00",
      },
      {
        id: 4,
        subTotal: "$150.00",
        discount: "$0.00",
        fistName: "Gama",
        lastName: "philp",
        email: "eml@eml.com",
        status: "Delivered",
        orderDate: "2023-02-22 07:27:00",
      },
 ]



export const OrderDetail = ({specificDataDetails, loadingSpecificDetails}) => {
  // console.log(specificDataDetails[0]);
  return (
    <div className='order_detial_section'>
        <div className='orderDetail_banner'>
              <h1>Order Details</h1>
        </div>

     {specificDataDetails == "No order found"  || specificDataDetails == null  ? ("No Product's Data Found") :  (
      // {
        loadingSpecificDetails ? "Loading" : (
        <div className='nested_orderDetail'>
        <div className='selected_order'>
          <div className='order_header'>
          <h3>Order Details</h3>
          </div>
          <ul>
              <li>Order Id</li>
              <li>{specificDataDetails[0].id && specificDataDetails[0].id}</li>
              <li>Order Date</li>
              <li>{specificDataDetails[0].order_date && specificDataDetails[0].order_date}</li>
              <li>Order Status</li>
              <li>{specificDataDetails[0].status && specificDataDetails[0].status}</li>
              {/* <li>Delivery Date</li>
              <li>2023-03-03</li> */}
          </ul>
        </div>
        {/* billing Details& Transaction */}
        <div className='main_two_table'>
          <div className='billing_details_trans'>
              <div>
 
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Line 1</TableCell>
                  <TableCell>Line 2</TableCell>
                  <TableCell>Zipcode</TableCell>
 
                </TableRow>
              </TableHead>
              <TableBody>
                {specificDataDetails.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell>{row.firstname && row.firstname}</StyledTableCell>
                    <StyledTableCell>{row.lastname && row.lastname}</StyledTableCell>
                    <StyledTableCell>{row.mobile && row.mobile}</StyledTableCell>
                    <StyledTableCell>{row.email && row.email}</StyledTableCell>
                    <StyledTableCell>{row.line1 && row.line1}</StyledTableCell>
                    <StyledTableCell>{row.line2 && row.line2}</StyledTableCell>
                    <StyledTableCell>{row.zipcode && row.zipcode}</StyledTableCell>
 
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </div>
             <div>
             <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>subTotal</TableCell>
                  <TableCell>Discount</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactionDetails.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell>{row.subTotal}</StyledTableCell>
                    <StyledTableCell>{row.discount}</StyledTableCell>
                    <StyledTableCell>{row.fistName}</StyledTableCell>
                    <StyledTableCell>{row.lastName}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
             </div>
 
          </div>
            <div className='orderd_items'>
              <div className='item_heading'>
                 <h3>Ordered Items</h3>
              </div>
              <div className='product_contant'>
                  <h2>Products Name</h2>
                  <div>
                      <table className='order_details'>
                          <tr>
                              <td style={{width: "100px"}}><div><img width={"100%"} src="https://nativelinum.webtestdemo.com/assets/images/products/1677530924.png" alt="cloting" /></div></td>
                              <td>
                                  <div>
                                      <p>Uma Table Cloth</p>
                                      <p>Color : Blue</p>
                                       <p>Size : XXL</p>
                                  </div>
                              </td>
                              <td>
                              {specificDataDetails[0].subtotal && `$${specificDataDetails[0].subtotal}`}                               
                              </td>
                              <td>1</td>
                              <td>
                              {specificDataDetails[0].subtotal && `$${specificDataDetails[0].subtotal}`}                                
                              </td>
 
                          </tr>
                          
                      </table>
                      <div className='order-summary'>
                          <p>Order Summary</p>
                      <table>
                          <tbody>
                          <tr>
                              <td>Subtotal</td>
                              <td>{specificDataDetails[0].subtotal && `$${specificDataDetails[0].subtotal}`}</td>
                          </tr>
                          <tr>
                              <td>Tax</td>
                              <td>{specificDataDetails[0].tax && `$${specificDataDetails[0].tax}`}</td>
                          </tr>
                          <tr>
                              <td>Shipping</td>
                              <td>Free</td>
                          </tr>
                          <tr>
                              <td>Total</td>
                              <td>{specificDataDetails[0].total && `$${specificDataDetails[0].total}`}</td>
                          </tr>
                          </tbody>
                      </table>
                      </div>
                  </div>
              </div>
              </div> 
        </div>
    </div>
      )
    // }
     )}
    </div>
  )
}
