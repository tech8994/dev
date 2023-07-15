import React from "react";
import "./scss/index.scss";
import { Navbar, Footer } from "../../../layout";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Btn } from "../../../components";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
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
   {id: 1, subTotal: "$150.00",discount: "$0.00", fistName: "Gama", lastName: "philp",email: "eml@eml.com",status: "Delivered", orderDate: "2023-02-22 07:27:00"}, 
   {id: 2, subTotal: "$150.00",discount: "$0.00", fistName: "Gama", lastName: "philp",email: "eml@eml.com",status: "Delivered", orderDate: "2023-02-22 07:27:00"}, 
   {id: 3, subTotal: "$150.00",discount: "$0.00", fistName: "Gama", lastName: "philp",email: "eml@eml.com",status: "Delivered", orderDate: "2023-02-22 07:27:00"}, 
   {id: 4, subTotal: "$150.00",discount: "$0.00", fistName: "Gama", lastName: "philp",email: "eml@eml.com",status: "Delivered", orderDate: "2023-02-22 07:27:00"}, 
   {id: 5, subTotal: "$150.00",discount: "$0.00", fistName: "Gama", lastName: "philp",email: "eml@eml.com",status: "Delivered", orderDate: "2023-02-22 07:27:00"}, 
   {id: 6, subTotal: "$150.00",discount: "$0.00", fistName: "Gama", lastName: "philp",email: "eml@eml.com",status: "Delivered", orderDate: "2023-02-22 07:27:00"}, 
   {id: 7, subTotal: "$150.00",discount: "$0.00", fistName: "Gama", lastName: "philp",email: "eml@eml.com",status: "Delivered", orderDate: "2023-02-22 07:27:00"}, 
   {id: 8, subTotal: "$150.00",discount: "$0.00", fistName: "Gama", lastName: "philp",email: "eml@eml.com",status: "Delivered", orderDate: "2023-02-22 07:27:00"}, 

];

export const UserDashboard = ({allData, loading, allProducts,setGetSpecificDetails}) => {
  console.log(allProducts);
  let lengthData = 10;
  // const data = allProducts.slice(0, lengthData);
  const [costs,purchase,delivered,canceled]=allData;
  return (
    <>
      <Navbar />
      <div className="user_dashboard">
        <div className="userdashboard_banner">
          <h1>User Dashboard</h1>
        </div>
        <div className="nested_userDashboard">
          <div className="user_dashboard_btn">
            <NavLink to={'/user/all-orders'}>All Orders</NavLink>
           
            <NavLink to={'/user/profile'}>My Profile</NavLink>
          </div>
         {loading ? (<>
              <span>
                Loading...
              </span>
         </>): (
      //  {demot2897@gmail.com
        allProducts == "no user  record found" ? (
          <div className="empty_msg">
            <h1>There is no data  ordered</h1>
          </div>
        ) : (
        (
          <>
          <div className="prod_details">
 <div className="total_cost">
   <span className="amount">
     <p>Total Cost</p>
     <h4>${costs && costs}</h4>
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
     <h4>{purchase && purchase}</h4>
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
     <h4>{delivered && delivered}</h4>
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
     <h4>{canceled && canceled}</h4>
   </span>
   <span className="bottom_section">
     <p>
       <AiOutlineClockCircle /> update Now
     </p>
   </span>
 </div>
</div>
          <div className="all_orders">
          <h1>Latest Orders</h1>
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
              <TableBody className="tableBody_section">
                {allProducts.slice(0, lengthData).map((row) => (
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
        </>
)
       )
      // } 
         )
         }


        </div>
      </div>
      <Footer />
    </>
  );
};
