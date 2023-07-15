import React from 'react';
import { Btn } from '../../../../components';
import "../scss/index.scss";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';



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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  

export const OrderSummary = ({totalAmountCobine,filertDataforAmount}) => {
  return (
    <div className='order_summary'>
        <div className='nested_order_summary'>
          <div className='btn_group'>
            <Btn value={"Continue Shopping"} type="button"/>
            <Btn value={"Clear Cart"} type="button"/>

          </div>
          <div className='heading_summary'>
                 Order Summary
          </div>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableBody>
          {/* {rows.map((row) => ( */}
            <StyledTableRow key={1}>
              <StyledTableCell component="th" scope="row" style={{borderRight: "1px solid rgb(222, 226, 230)", width: "350px"}}>
                 Sub Total
              </StyledTableCell>
              <StyledTableCell align="right">${totalAmountCobine && totalAmountCobine+filertDataforAmount}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key={2}>
              <StyledTableCell component="th" scope="row" style={{borderRight: "1px solid rgb(222, 226, 230)", width: "350px"}}>
                 Tax
              </StyledTableCell>
              <StyledTableCell align="right">No Tax</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key={3}>
              <StyledTableCell component="th" scope="row" style={{borderRight: "1px solid rgb(222, 226, 230)", width: "350px"}}>
              Shipping
              </StyledTableCell>
              <StyledTableCell align="right">Free Shipping</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key={4}>
              <StyledTableCell component="th" scope="row" style={{borderRight: "1px solid rgb(222, 226, 230)", width: "350px"}}>
              Total
              </StyledTableCell>
              <StyledTableCell align="right">${totalAmountCobine && totalAmountCobine+filertDataforAmount}</StyledTableCell>
            </StyledTableRow>
          {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </div>
  )
}
