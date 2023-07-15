import React from "react";
import { Footer, Navbar } from "../../../layout";
import "./scss/index.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { NavLink } from "react-router-dom";

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

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

const rows = [
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
  {
    id: 5,
    subTotal: "$150.00",
    discount: "$0.00",
    fistName: "Gama",
    lastName: "philp",
    email: "eml@eml.com",
    status: "Delivered",
    orderDate: "2023-02-22 07:27:00",
  },
  {
    id: 6,
    subTotal: "$150.00",
    discount: "$0.00",
    fistName: "Gama",
    lastName: "philp",
    email: "eml@eml.com",
    status: "Delivered",
    orderDate: "2023-02-22 07:27:00",
  },
  {
    id: 7,
    subTotal: "$150.00",
    discount: "$0.00",
    fistName: "Gama",
    lastName: "philp",
    email: "eml@eml.com",
    status: "Delivered",
    orderDate: "2023-02-22 07:27:00",
  },
  {
    id: 8,
    subTotal: "$150.00",
    discount: "$0.00",
    fistName: "Gama",
    lastName: "philp",
    email: "eml@eml.com",
    status: "Delivered",
    orderDate: "2023-02-22 07:27:00",
  },
];

export const AllOrders = ({loadingAllOrders,getAllOrders, setGetSpecificDetails}) => {
  console.log(getAllOrders);
  return (
    <>
      <Navbar />
      <div className="allorders_section">
        <div className="allOrder_banner">
           <h1>All Orders</h1>
        </div>
       {getAllOrders == "no user  record found" || getAllOrders == null ?  (
        <div className="no-found">
          <h1>No Data Found</h1>
        </div>
       ) : loadingAllOrders ? (
       <>
        <span>
          Loading...
        </span>
        </>
   ) : (
        <div className="nested_allorder_section">
        <div className="all_orders">
          <h3>All Orders</h3>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                <TableCell>Id</TableCell>
          <TableCell>subTotal</TableCell>
          <TableCell>Discount</TableCell>
          <TableCell>Total</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Number</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Zip Code</TableCell>            
          <TableCell>Order Date</TableCell>
          <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {getAllOrders.map((row) => (
                  <StyledTableRow key={row.id}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                  >
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.subtotal}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.total}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.discount}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.firstname}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.lastname}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.mobile}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.email}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.status}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.zipcode}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.created_at}
                  </StyledTableCell>
                  <StyledTableCell className="styled_details">
                    <NavLink to="/user/orderDetails" onClick={() => setGetSpecificDetails(row.id)}>
                    Details
                    </NavLink>
                  </StyledTableCell>
                </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        </div>
       )
       }
      </div>
      <Footer />
    </>
  );
};
