import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import Form from '../../components/Form'
import BasicTable from '../../components/CryptoTable'
import FiatTable from '../../components/FiatTable'

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // alignContent: 'center'
  },
  container: {
    maxWidth: '90vw',
  }
}))

const Main = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Form 
        input={props.input}
        currencyFamily={props.currencyFamily}
        setCurrencyFamily={props.setCurrencyFamily}
        handleInputChange={props.handleInputChange}
        handleConversion={props.handleConversion}
        fiatArray={props.fiatArray}
        fiatData={props.fiatData}
        getFiatData={props.getFiatData}
        cryptoArray={props.cryptoArray}
        cryptoData={props.cryptoData}
        getCryptoData={props.getCryptoData}
        cryptoWeek={props.cryptoWeek}
      />
      <Grid container spacing={2} className={classes.container}>
        <Grid item sm={6}>
          <BasicTable
            cryptoArray={props.cryptoArray}
            cryptoData={props.cryptoData}
            getCryptoData={props.getCryptoData}
            conversionMultiple={props.conversionMultiple}
          />
        </Grid>
        <Grid item sm={6}>
          <FiatTable
            fiatArray={props.fiatArray}
            fiatData={props.fiatData}
            getFiatData={props.getFiatData}
            conversionMultiple={props.conversionMultiple}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Main
