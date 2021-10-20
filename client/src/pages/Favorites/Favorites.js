import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import NotificationsIcon from '@mui/icons-material/Notifications';

import Paper from '@mui/material/Paper'
import User from '../../utils/userAPI'

const favoriteArray = []
const filteredArray = []

const Favorites = props => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // so this is pushing the users data into the rendering array every time the page loads
    User.me()
      .then(({ data }) => {
        favoriteArray.push(...data.favorites)
        matchCryptos()
        matchFiats()
        setLoading(true)
        console.log(filteredArray)
      })
      .catch(err => console.error(err))
  }, [])
        
    const matchCryptos = () => {
     for (let i = 0; i < favoriteArray.length; i++) {
       for (let j = 0; j < props.cryptoData.length; j++) {
         if (favoriteArray[i].code === props.cryptoData[j][1].name) {
           filteredArray.push(props.cryptoData[j][1])
         }
       }
      }
    }

    const matchFiats = () => {
      for(let i = 0; i < favoriteArray.length; i++) {
        if (favoriteArray[i].code === props.fiatData.exchange[1][0].substring(3)) {
          console.log('match')
          filteredArray.push(props.fiatData.exchange[1][0].substring(3))
        }
      }
    }

  return (
    <>
      <h1>Favorites page</h1>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          '& > :not(style)': { m: 1, minWidth: 500 },
        }}
      >
        <Paper elevation={3}>
          {filteredArray.map((row, i) => (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                {row.name}
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Current Price</TableCell>
                        <TableCell align="right">24-hour Change</TableCell>
                        <TableCell align="right">7-day Change</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align="left">${row.price}</TableCell>
                        <TableCell align="right">{row.percent_change_24h}%</TableCell>
                        <TableCell align="right">{row.percent_change_7d}%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <DeleteIcon align="right" sx={{ marginTop: '10px', marginLeft: '10px' }}/>
                <NotificationsIcon align="right" sx={{ marginTop: '10px', marginLeft: '15px' }}/>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>
      </Box>
    </>
  )
}

export default Favorites
