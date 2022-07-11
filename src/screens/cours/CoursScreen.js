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
import {
  list,
  update,
  deletes,
  create,
} from '../../controllers/CoursController';
import AddCourseDialog from '../../commponents/dialog/AddCourseDialog';

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function CoursScreen() {
  const [loading, setLoading] = React.useState(true);
  const [isAddNew, setIsAddNew] = React.useState(false);
  const [body, setBody] = React.useState([]);
  const [rows, setRows] = React.useState([]);
  const [cName, setCName] = React.useState('');
  const [cPrice, setCPrice] = React.useState('');
  const [cDescription, setCDescription] = React.useState('');
  const [cStatus, setCStatus] = React.useState('');

  React.useEffect(() => {
    getCours();
  }, []);
  const handleClose = () => {
    setLoading(false);
    setIsAddNew(false);
  };
  const handleToggle = () => {
    setLoading(!loading);
  };

  const getCours = () => {
    list()
      .then((res) => {
        var lists = res.data.data;
        if (lists.length > 0) {
          setRows(lists);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        setLoading(false);
      });
  };
  const createCours = (data) => {
    setLoading(true);
    create(data)
      .then((res) => {
        alert('Add Course Success');
        setIsAddNew(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        getCours();
        setLoading(false);
      });
  };
  return (
    <div className='mgb20'>
      <AddCourseDialog
        open={isAddNew}
        onAdd={() => {
          var data = {
            name: cName,
            price: cPrice,
            description: cDescription,
            status: cStatus,
          };
          createCours(data);
        }}
        onChange={(e) => {
          if (e.target.name === 'COURSENAME') {
            setCName(e.target.value);
          } else if (e.target.name === 'PRICE') {
            setCPrice(e.target.value);
          } else if (e.target.name === 'DESCRITION') {
            setCDescription(e.target.value);
          } else {
            setCStatus(e.target.value);
          }
        }}
        onClose={handleClose}
      />
      <TableContainer className='mgt10' component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow style={{ padding: 0 }}>
              <StyledTableCell style={{ width: '20%' }}>
                COURS NAME
              </StyledTableCell>
              <StyledTableCell align='left' style={{ width: '20%' }}>
                PRICE
              </StyledTableCell>
              <StyledTableCell align='left' style={{ width: '20%' }}>
                DESCRITION
              </StyledTableCell>
              <StyledTableCell align='left' style={{ width: '5%' }}>
                STATUS
              </StyledTableCell>
              <StyledTableCell align='right' style={{ width: '10%' }}>
                <Button
                  onClick={() => {
                    setIsAddNew(true);
                  }}
                  variant='contained'
                  color='success'
                  style={{ width: 149 }}
                >
                  ADD COURS
                </Button>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell component='th' scope='row'>
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align='left'>{row.price}</StyledTableCell>
                <StyledTableCell align='left'>
                  {row.description}
                </StyledTableCell>
                <StyledTableCell align='left'>
                  {row.status === 1 ? 'OPEN' : 'CLOSED'}
                </StyledTableCell>
                <StyledTableCell align='right'>
                  <Button
                    className='btn'
                    variant='outlined'
                    color='secondary'
                    size='small'
                  >
                    Update
                  </Button>
                  <Button
                    className='btn'
                    style={{ marginLeft: 10 }}
                    variant='outlined'
                    color='error'
                    size='small'
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default CoursScreen;
