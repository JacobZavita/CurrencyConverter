import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react'
import Axios from 'axios'
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import NotificationsIcon from '@mui/icons-material/Notifications';

import Paper from '@mui/material/Paper'
import User from '../../utils/userAPI'

const favoriteArray = []
const filteredArray = []

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
           filteredArray.push(props.cryptoData[j][1])
           if (favoriteArray[i].type === 'crypto') {
             console.log(props.cryptoData[j])
             console.log(filteredArray)
            //  Axios.get(`https://api.lunarcrush.com/v2?data=assets&key=nocqsi30btftgtw6lbaol&symbol=${cryptoData[j]}`)
           } else {console.log('fiat')}
          // console.log(favoriteArray)
         }
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
                {filteredArray[i].name}
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  flexWrap: 'wrap',
                  '& > :not(style)': { m: 1 },
                }}>
                  <Typography align='left'>
                    Current Price
                  </Typography>
                  <Typography align='center'>
                    24-hour Change
                  </Typography>
                  <DeleteIcon align='right'/>
                </Box>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  flexWrap: 'wrap',
                  '& > :not(style)': { m: 1 },
                }}>
                  <Typography align='left'>
                    $ {filteredArray[i].price}
                  </Typography>
                  <Typography align='center'>
                    {filteredArray[i].percent_change_24h}
                  </Typography>
                  <NotificationsIcon align='right'/>
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>
      </Box>
    </>
  )
}

export default Favorites
