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

export const AllOrdersAdmin = () => {
  return (
    <div className='admin_allorders'>
       <div className="allorders_section">
        <div className="allOrder_banner">
           <h1>All Orders</h1>
        </div>
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
                      <StyledTableCell component="th" scope="row">
                        {row.id}
                      </StyledTableCell>
                      <StyledTableCell>{row.subTotal}</StyledTableCell>
                      <StyledTableCell>{row.discount}</StyledTableCell>
                      <StyledTableCell>{row.fistName}</StyledTableCell>
                      <StyledTableCell>{row.lastName}</StyledTableCell>
                      <StyledTableCell>{row.email}</StyledTableCell>
                      <StyledTableCell>{row.status}</StyledTableCell>
                      <StyledTableCell>{row.orderDate}</StyledTableCell>
                      <StyledTableCell>Details</StyledTableCell>
                      <StyledTableCell>Status</StyledTableCell>


                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
