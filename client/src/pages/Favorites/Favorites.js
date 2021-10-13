import { styled } from '@mui/material/styles';
import { useEffect } from 'react'
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper'
import Favorite from '../../utils/favoriteAPI'

const favoriteArray = []

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

function Favorites() {
  useEffect(() => {
    Favorite.getAll()
      .then(({ data: favorites }) => {
        console.log(favorites)
        favoriteArray.push(...favorites)
        console.log('new array', favoriteArray)
      })
    }, [])

  return (
    <>
      <h1>Favorites page</h1>
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
            {favoriteArray.map((row, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell component='th' scope='row'>
                  {favoriteArray[i].code}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Favorites
