import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper'
import User from '../../utils/userAPI'

const favoriteArray = []
const filteredArray = []

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

const Favorites = props => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    User.me()
      .then(({ data }) => {
        favoriteArray.push(...data.favorites)
        matchCryptos()
        setLoading(true)
      })
      .catch(err => console.error(err))
    }, [])
        
   const matchCryptos = () => {
     for (let i = 0; i < favoriteArray.length; i++) {
       for (let j = 0; j < props.cryptoData.length; j++) {
         if (favoriteArray[i].code === props.cryptoData[j][1].name) {
           console.log('match', props.cryptoData[j][1].name)
           filteredArray.push(props.cryptoData[j][1])
         }
       }
       console.log(filteredArray)
    }
  } 

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
          {/* {loading ?  */}
            {/* ( */}
              <TableBody stripedRows>
                {favoriteArray.map((row, i) => (
                  <StyledTableRow key={i}>
                    <StyledTableCell component='th' scope='row'>
                      {favoriteArray[i].code}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
                {/* {props.filteredArray.map((row, i) => (
                  console.log('hi')
                ))} */}
              </TableBody>
            {/* ) */}
          {/* : (<LinearProgress />) */}
        {/* } */}
        </Table>
      </TableContainer>
    </>
  )
}

export default Favorites
