import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AppBar, Button, CssBaseline, Stack } from '@mui/material';
import LoadingCommponent from '../../commponents/loading/LoadingCommponent';
import { list } from '../../controllers/StudentsController';

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

function StudentScreen() {
  const [loading, setLoading] = React.useState(true);
  const [rows, setRows] = React.useState([]);
  const [nodata, setNodata] = React.useState(false);

  React.useEffect(() => {
    getStudent();
  }, []);

  const getStudent = () => {
    list().then((res) => {
      var lists = res.data;
      setRows(lists.list_student);
      if (rows.length < 1) {
        setNodata(true);
      }
      setLoading(false);
    });
  };

  return (
    <div>
      <LoadingCommponent open={loading} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow style={{ padding: 0 }}>
              <StyledTableCell style={{ width: '20%' }}>NAME</StyledTableCell>
              <StyledTableCell align='left' style={{ width: '20%' }}>
                GENDER
              </StyledTableCell>
              <StyledTableCell align='left' style={{ width: '20%' }}>
                TEL
              </StyledTableCell>
              <StyledTableCell align='left' style={{ width: '20%' }}>
                EMAIL
              </StyledTableCell>
              <StyledTableCell align='left' style={{ width: '20%' }}>
                DESCRIPTION
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {nodata ? (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', padding: 15 }}>
                  No data !
                </td>
              </tr>
            ) : (
              ''
            )}
            {rows.map((row, i) => {
              return (
                <StyledTableRow key={i}>
                  <StyledTableCell component='th' scope='row'>
                    {row.lastname}
                  </StyledTableCell>
                  <StyledTableCell rowSpan={5} align='center'>
                    {row.gender == 1 ? 'Male' : 'Female'}
                  </StyledTableCell>
                  <StyledTableCell align='left'>{row.tel}</StyledTableCell>
                  <StyledTableCell align='left'>{row.email}</StyledTableCell>
                  <StyledTableCell align='left'>
                    {row.description}
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default StudentScreen;
