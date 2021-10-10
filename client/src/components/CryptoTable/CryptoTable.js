import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
});

export default function CryptoTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Change (24-hr)</TableCell>
            <TableCell align="right">Favorites</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.cryptoData.map((row, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {props.cryptoData[i][1].name}
              </TableCell>
              <TableCell align="right">
                 {props.cryptoData[i][1].price}
              </TableCell>
              <TableCell align="right">
                {props.cryptoData[i][1].percent_change_24h + '%'}
              </TableCell>
              <TableCell align="right">
                <FavoriteBorderIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

