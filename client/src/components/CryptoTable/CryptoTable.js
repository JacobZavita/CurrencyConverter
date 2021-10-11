import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

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

export default function CryptoTable(props) {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Change (24-hr)</TableCell>
            <TableCell align="right">Favorites</TableCell>
          </TableRow>
        </TableHead>
        <TableBody stripedRows>
          {props.cryptoData.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {props.cryptoData[i][1].name}
              </StyledTableCell>
              <StyledTableCell align="right">
                 {props.cryptoData[i][1].price}
              </StyledTableCell>
              <StyledTableCell align="right">
                {props.cryptoData[i][1].percent_change_24h + '%'}
              </StyledTableCell>
              <StyledTableCell align="right">
                <FavoriteBorderIcon />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

