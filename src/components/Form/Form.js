import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Card, CardContent, Grid, FormControl, RadioGroup, FormControlLabel, Radio, Button, TextField, InputAdornment } from '@material-ui/core'

import Select from '../Select'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '40vh',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundImage: 'linear-gradient(90deg, #042A2B 20%, #66ced6 100%)'
  },
  headerText: {
    color: '#FCF7F8',
    textAlign: 'center',
    margin: '0 0 30px 15px'
  },
  card: {
    maxWidth: 800,
    margin: '0 auto',
    padding: '20px 5px',
    boxShadow: '0 3px 5px 2px'
  },
  radioGroup: {
    marginRight: '10px'
  },
  amount: {
    marginTop: '8px',
    marginRight: '10px'
  },
  button: {
    marginTop: '8px',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    display: 'inline'
  }
}))

const Form = props => {
  const classes = useStyles()

  const [currencyFamily, setCurrencyFamily] = useState('fiat')

  const handleChange = ({ target }) => {
    setCurrencyFamily(target.value)
    // console.log(target.value)
  }

  const clickTest = () => {
    // console.log(props.fiatData)
    console.log(props.cryptoData)
  }

  return (
    <div className={classes.root}>
      <Grid>
        <Grid>
          <Typography>
            Currency Converter
          </Typography>
        </Grid>
        <Grid>
          <Card className={classes.card}>
            <CardContent>
              <Typography>
                Pick your base currency and amount
              </Typography>
              <Grid container spacing={1}>
                <Grid item>
                  <FormControl>
                    <RadioGroup
                      aria-label="currency-family"
                      name="currency-family"
                      value={currencyFamily}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="fiat" control={<Radio />} label="Fiat" />
                      <FormControlLabel value="crypto" control={<Radio />} label="Crypto" />
                    </RadioGroup>
                  </FormControl>
                  <Select
                    currencyFamily={currencyFamily}
                    cryptoData={props.cryptoData}
                    getCryptoData={props.getCryptoData}
                    fiatData={props.fiatData}
                    getFiatData={props.getFiatData}
                    fiatArray={props.fiatArray}
                    cryptoArray={props.cryptoArray}
                  />
                  <TextField
                    id="standard-basic"
                    label="Amount"
                    className={classes.amount}
                  />
                  <Button className={classes.button} onClick={clickTest}>
                    Convert
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Form