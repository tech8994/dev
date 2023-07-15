import React from "react";
import "./scss/index.scss";
import { NavLink } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
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



const rows = [
   {id: 1, subTotal: "$150.00",discount: "$0.00", fistName: "Gama", lastName: "philp",email: "eml@eml.com",status: "Delivered", orderDate: "2023-02-22 07:27:00"}, 
   {id: 2, subTotal: "$150.00",discount: "$0.00", fistName: "Gama", lastName: "philp",email: "eml@eml.com",status: "Delivered", orderDate: "2023-02-22 07:27:00"}, 
   {id: 3, subTotal: "$150.00",discount: "$0.00", fistName: "Gama", lastName: "philp",email: "eml@eml.com",status: "Delivered", orderDate: "2023-02-22 07:27:00"}, 
   {id: 4, subTotal: "$150.00",discount: "$0.00", fistName: "Gama", lastName: "philp",email: "eml@eml.com",status: "Delivered", orderDate: "2023-02-22 07:27:00"}, 
   {id: 5, subTotal: "$150.00",discount: "$0.00", fistName: "Gama", lastName: "philp",email: "eml@eml.com",status: "Delivered", orderDate: "2023-02-22 07:27:00"}, 
   {id: 6, subTotal: "$150.00",discount: "$0.00", fistName: "Gama", lastName: "philp",email: "eml@eml.com",status: "Delivered", orderDate: "2023-02-22 07:27:00"}, 
   {id: 7, subTotal: "$150.00",discount: "$0.00", fistName: "Gama", lastName: "philp",email: "eml@eml.com",status: "Delivered", orderDate: "2023-02-22 07:27:00"}, 
   {id: 8, subTotal: "$150.00",discount: "$0.00", fistName: "Gama", lastName: "philp",email: "eml@eml.com",status: "Delivered", orderDate: "2023-02-22 07:27:00"}, 

];




export const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="banner">
        <h1>Admin Dashboard</h1>
      </div>
      <div className="nested_dashboard">
        <div className="btn_section">
          <ul>
            <li>
              <NavLink to={"/"}>
                All Categories
                </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                All Products
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                Contact Messages
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/all-orders"}>
                All Orders
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                All Users
                </NavLink>
            </li>

          </ul>
        </div>
        <div className="admin_dashboard_details">
        <div className="prod_details">
            <div className="total_cost">
              <span className="amount">
                <p>Total Cost</p>
                <h4>$240.00</h4>
              </span>
              <span className="bottom_section">
                <p>
                  <AiOutlineClockCircle /> update Now
                </p>
              </span>
            </div>
            <div className="total_purchase">
              <span className="amount">
                <p>Total Purchase</p>
                <h4>3</h4>
              </span>
              <span className="bottom_section">
                <p>
                  <AiOutlineClockCircle /> update Now
                </p>
              </span>
            </div>
            <div className="total_delivered">
              <span className="amount">
                <p>Total Delivered</p>
                <h4>$2</h4>
              </span>
              <span className="bottom_section">
                <p>
                  <AiOutlineClockCircle /> update Now
                </p>
              </span>
            </div>
            <div className="total_canceled">
              <span className="amount">
                <p>Total Canceled</p>
                <h4>0</h4>
              </span>
              <span className="bottom_section">
                <p>
                  <AiOutlineClockCircle /> update Now
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="latest_orders">
        <h1>Latest Orders</h1>
        <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>subTotal</TableCell>
            <TableCell>Discount</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Order Date</TableCell>
            <TableCell>Action</TableCell>

          </TableRow>
        </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                      >
                        {row.id}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.subTotal}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.discount}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.fistName}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.lastName}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.email}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.status}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.orderDate}
                      </StyledTableCell>
                      <StyledTableCell>
                        Details
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </div>
      </div>
    </div>
  );
};
