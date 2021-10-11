import { makeStyles } from '@mui/styles';
// import { Typography, Card, CardContent, Grid, FormControl, RadioGroup, FormControlLabel, Radio, Button, TextField } from '@material-ui/core'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';

import Select from '../Select'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '40vh',
    alignItems: 'center',
    justifyContent: 'center',
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
    boxShadow: '0 1px 1px hsl(0deg 0% 0% / 0.065), 0 2px 2px hsl(0deg 0% 0% / 0.065), 0 4px 4px hsl(0deg 0% 0% / 0.065), 0 8px 8px hsl(0deg 0% 0% / 0.065), 0 16px 16px hsl(0deg 0% 0% / 0.065)'
  },
  amount: {
    marginTop: '20px',
    marginRight: '10px'
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 1px 1px hsl(0deg 0% 0% / 0.065), 0 2px 2px hsl(0deg 0% 0% / 0.065), 0 4px 4px hsl(0deg 0% 0% / 0.065), 0 8px 8px hsl(0deg 0% 0% / 0.065), 0 16px 16px hsl(0deg 0% 0% / 0.065)',
    color: 'white',
    height: 48,
    marginLeft: '20px',
    marginTop: '22px',
    padding: '0 30px',
    display: 'inline'
  }
}))

const Form = props => {
  const classes = useStyles()

  const handleChangeCurrencyFamily = ({ target }) => {
    props.setCurrencyFamily(target.value)
  }

  return (
    <div className={classes.root}>
      <Grid>
        <Card className={classes.card}>
          <CardContent>
            <Typography>
              Pick your base currency and amount
            </Typography>
              <form>
                <FormControl>
                  <RadioGroup
                    aria-label="currency-family"
                    name="currency-family"
                    value={props.currencyFamily}
                    onChange={handleChangeCurrencyFamily}
                  >
                    <FormControlLabel value="fiat" control={<Radio />} label="Fiat" />
                    <FormControlLabel value="crypto" control={<Radio />} label="Crypto" />
                  </RadioGroup>
                </FormControl>
                <Box sx={{margin: '20px', display: 'inline-block'}}>
                  <Select
                    currencyFamily={props.currencyFamily}
                    setCurrencyFamily={props.setCurrencyFamily}
                    cryptoData={props.cryptoData}
                    getCryptoData={props.getCryptoData}
                    fiatData={props.fiatData}
                    getFiatData={props.getFiatData}
                    fiatArray={props.fiatArray}
                    cryptoArray={props.cryptoArray}
                    input={props.input}
                    handleInputChange={props.handleInputChange}
                  />
                </Box>
                <TextField
                  id="standard-basic"
                  label="Amount"
                  name='amount'
                  className={classes.amount}
                  value={props.input.amount}
                  onChange={props.handleInputChange}
                />
                <Button
                  className={classes.button}
                  onClick={props.handleConversion}
                >
                  Convert
                </Button>
              </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}

export default Form