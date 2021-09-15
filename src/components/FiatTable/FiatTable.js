import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable(props) {
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
          {props.fiatData.exchange.map((row, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {props.fiatData.exchange[i][0]}
              </TableCell>
              <TableCell align="right">
                {'$' + props.fiatData.exchange[i][1]}
              </TableCell>
              <TableCell align="right">
                {Number((props.fiatData.dayHist[i][1] / props.fiatData.exchange[i][1]) - 1).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 3 })}
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