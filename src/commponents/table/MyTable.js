// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { AppBar, Button, CssBaseline, Stack } from '@mui/material';
// import {
//   list,
//   update,
//   deletes,
//   create,
// } from '../../controllers/CoursController';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// function MyTable(props) {
//   return (
//     <div>
//       <TableContainer component={Paper}>
//         <Table aria-label='customized table'>
//           <TableHead>
//             <TableRow style={{ padding: 0 }}>
//               <StyledTableCell>COURS NAME</StyledTableCell>
//               <StyledTableCell align='left'>PRICE</StyledTableCell>
//               <StyledTableCell align='left'>DESCRITION</StyledTableCell>
//               <StyledTableCell align='left'>STATUS</StyledTableCell>
//               <StyledTableCell align='right'>
//                 <Button
//                   variant='contained'
//                   color='success'
//                   style={{ width: 149 }}
//                 >
//                   ADD COURS
//                 </Button>
//               </StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <StyledTableRow key={row.name}>
//                 <StyledTableCell component='th' scope='row'>
//                   {row.name}
//                 </StyledTableCell>
//                 <StyledTableCell align='left'>{row.price}</StyledTableCell>
//                 <StyledTableCell align='left'>
//                   {row.description}
//                 </StyledTableCell>
//                 <StyledTableCell align='left'>
//                   {row.status === 1 ? 'OPEN' : 'CLOSED'}
//                 </StyledTableCell>
//                 <StyledTableCell align='right'>
//                   <Button
//                     className='btn'
//                     variant='outlined'
//                     color='secondary'
//                     size='small'
//                   >
//                     Update
//                   </Button>
//                   <Button
//                     className='btn'
//                     style={{ marginLeft: 10 }}
//                     variant='outlined'
//                     color='error'
//                     size='small'
//                   >
//                     Delete
//                   </Button>
//                 </StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }
// export default MyTable;
