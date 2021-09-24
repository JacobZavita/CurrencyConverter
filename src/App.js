import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Axios from 'axios'
import Main from './pages/Main'
import Favorites from './pages/Favorites'
import Appbar from './components/Appbar'
import logo from './logo.svg';
import './App.css';

function App() {
  // state for handling the query input
  const [input, setInput] = useState({
    base: 'USD',
    amount: ''
  })

  const [currencyFamily, setCurrencyFamily] = useState('fiat')

  // state for handling data from currency layer
  const [fiatData, setFiatData] = useState({
    exchange: [],
    dayHist: []
  })
  // state for handling data from lunar crush
  const [cryptoData, setCryptoData] = useState([])
  // state for handling favorites
  const [favorites, setFavorites] = useState([])
 
  let quoteData
  let exchangeData
  let dayHist
  let arrayifiedCryptoData
  let toUSD
  let conversionMultiple
  let test = []
  // let intermediary = []
  let exchangeArray = []

  const handleInputChange = ({ target }) => {
    setInput({ ...input, [target.name]: target.value })
  }

  // assign this to the onClick of the button in Form.js
  const handleConversion = event => {
    event.preventDefault()
    console.log(fiatData)
    // console.log(fiatArray)
    // console.log(cryptoData)
    // console.log(input)
    // console.log(currencyFamily)
    if (currencyFamily === 'fiat') {
      let baseCode = input.base.substring(0, 3)
      console.log(baseCode)

      for (let i = 0; i < fiatData.exchange.length; i++) {
        // console.log(fiatData.exchange[i][0].substring(3))
        if (fiatData.exchange[i][0].substring(3) === baseCode) {
          toUSD = fiatData.exchange[i][1]
        }
      }
      console.log(toUSD)

      conversionMultiple = 1 / toUSD

      console.log(conversionMultiple)

      // fiat-to-crypto
    } else {
      console.log("crypto!")
    }



    // IF FROM FIAT
    // find match of input in fiatArray - done
    // find match of input in fiatdata - done

    // divide 1 by that value and save to a var (conversionMultiple)
    // multiply toUSD by the other rates to get fiat-to-fiat
    // for fiat-to-crypto, 

  }

  // array for the currency codes and names for fiats
  // there has got to be a better api to get this from included with the data
  const fiatArray = [
    {
      code: 'USD',
      name: 'United States Dollar'
    },
    {
      code: 'CNY',
      name: 'Chinese Yuan'
    },
    {
      code: 'JPY',
      name: 'Japanese Yen'
    },
    {
      code: 'EUR',
      name: 'Euro'
    },
    {
      code: 'GBP',
      name: 'British Pound Sterling'
    },
    {
      code: 'INR',
      name: 'Indian Rupee'
    },
    {
      code: 'AUD',
      name: 'Australian Dollar'
    },
    {
      code: 'CAD',
      name: 'Canadian Dollar'
    },
    {
      code: 'CHF',
      name: 'Swiss Franc'
    },
    {
      code: 'RUB',
      name: 'Russian Ruble'
    },
    {
      code: 'HKD',
      name: 'Hong Kong Dollar'
    },
    {
      code: 'NZD',
      name: 'New Zealand Dollar'
    },
    {
      code: 'BRL',
      name: 'Brazilian Real'
    },
    {
      code: 'NGN',
      name: 'Nigerian Naira'
    },
    {
      code: 'KRW',
      name: 'Korean Won'
    },
    {
      code: 'IDR',
      name: 'Indonesean Rupah'
    },
    {
      code: 'SAR',
      name: 'Saudi Riyal'
    },
    {
      code: 'TRY',
      name: 'Turkish'
    },
    {
      code: 'KWD',
      name: 'Kuwait Dinar'
    },
    {
      code: 'KYD',
      name: 'Cayman Island Dollar'
    }
  ]

  const fiatArray1 = ['USD - United States Dollar', 'CNY - Chinese Yuan', 'JPY - Japanese Yen', 'EUR - Euro', 'GBP - British Pound Sterling', 'INR - Indian Rupee', 'AUD - Australian Dollar', 'CAD - Canadian Dollar', 'CHF - Sqiss Franc', 'RUB - Russian Ruble', 'HKD - Hong Kong Dollar', 'NZD - New Zealand Dollar', 'BRL - Brazillian Real', 'NGN - Nigerian Naira', 'KRW - Korean Won', 'IDR - Indonesean Rupah', 'SAR - Saudi Riyal', 'TRY - Turkish', 'KWD - Kuwait Dinar', 'KYD - Cayman Island Dollar']

  // array for the currency codes and name for cryptos
  const cryptoArray = [
    {
      code: 'BTC',
      name: 'Bitcoin',
      position: '0'
    },
    {
      code: 'ETH',
      name: 'Ethereum',
      position: '1'
    },
    {
      code: 'USDT',
      name: 'Tether',
      position: '2'
    },
    {
      code: 'BNB',
      name: 'Binance Coin',
      position: '3'
    },
    {
      code: 'ADA',
      name: 'Cardano',
      position: '4'
    },
    {
      code: 'XRP',
      name: 'XRP',
      position: '5'
    },
    {
      code: 'DOGE',
      name: 'Dogecoin',
      position: '6'
    },
    {
      code: 'HEX',
      name: 'HEX',
      position: '7'
    },
    {
      code: 'DOT',
      name: 'Polkadot',
      position: '8'
    },
    {
      code: 'USDC',
      name: 'USD Coin',
      position: '9'
    },
    {
      code: 'ICP',
      name: 'Internet Computer',
      position: '10'
    },
    {
      code: 'UNI',
      name: 'Uniswap',
      position: '11'
    },
    {
      code: 'LINK',
      name: 'Chainlink',
      position: '12'
    },
    {
      code: 'BCH',
      name: 'Bitcoin Cash',
      position: '13'
    },
    {
      code: 'MATIC',
      name: 'Polygon',
      position: '14'
    },
    {
      code: 'LTC',
      name: 'Litecoin',
      position: '15'
    },
    {
      code: 'XLM',
      name: 'Stellar',
      position: '16'
    },
    {
      code: 'ETC',
      name: 'Ethereum Classic',
      position: '17'
    },
    {
      code: 'BUSD',
      name: 'Binance USD',
      position: '18'
    },
    {
      code: 'SOL',
      name: 'Solana',
      position: '19'
    }
  ]

  // function for converting a month string (jan, feb) to a number (01, 02)
  const monthToNumber = (month) => {
  let newMonth = ''
  switch (month) {
    case ('Jan'):
      newMonth += '01'
      break
    case ('Feb'):
      newMonth += '02'
      break
    case ('Mar'):
      newMonth += '03'
      break
    case ('Apr'):
      newMonth += '04'
      break
    case ('May'):
      newMonth += '05'
      break
    case ('Jun'):
      newMonth += '06'
      break
    case ('Jul'):
      newMonth += '07'
      break
    case ('Aug'):
      newMonth += '08'
      break
    case ('Sep'):
      newMonth += '09'
      break
    case ('Oct'):
      newMonth += '10'
      break
    case ('Nov'):
      newMonth += '11'
      break
    case ('Dec'):
      newMonth += '12'
      break
    default:
      newMonth += '01'
      console.log('error in the month to number function.')
      break
  }
  return newMonth
}

  // function for getting a formatted date of yesterday
  const dayAgo = _ => {
    let formatedDate = ''
    // Get today's date using the JavaScript Date object.
    let ourDate = new Date()
    // Change it so that it is 1 day in the past.
    let pastDate = ourDate.getDate() - 1
    ourDate.setDate(pastDate)
    ourDate += ''
    // get year
    formatedDate += ourDate.substring(11, 15)
    formatedDate += '-'
    // get month
    formatedDate += monthToNumber(ourDate.substring(4, 7))
    formatedDate += '-'
    // get day
    formatedDate += ourDate.substring(8, 10)

    return formatedDate
  }

  // mapping through cryptoArray for data
  const getCryptoData = () => {
    cryptoArray.map((data, i) => {
      Axios.get(`https://api.lunarcrush.com/v2?data=assets&key=nocqsi30btftgtw6lbaol&symbol=${cryptoArray[i].code}`)
      .then(({ data }) => {
        let response = data.data[0]
        cryptoData.push(response)
        arrayifiedCryptoData = Object.entries(cryptoData)
        // arrayifiedCryptoData = Object.keys(cryptoData).map((key) => [Number(key), cryptoData[key]])
        setCryptoData(arrayifiedCryptoData)
      })
      .catch(err => console.error(err))
    })
  }

  // function for getting data from currency layer and adds to fiatData state
  const getFiatData = () => {
    Axios.get(`https://api.currencylayer.com/live?access_key=34eca9d22b34a8f77ebe7de351ba880e&source=${input.base}`)
      .then(res => {
        quoteData = res.data.quotes
        exchangeData = Object.entries(quoteData)
        // let filteredExchangeData
        for (let i = 0; i < exchangeData.length; i++) {
          for (let j = 0; j < fiatArray1.length; j++) {
            if (exchangeData[i][0].substring(3) === fiatArray1[j].substring(0, 3)) {
              fiatData.exchange.push(exchangeData[i])
            } else {
              console.log('not a match')
            }
          }
        }
        console.log(test)
        // setFiatData({...fiatData, exchange})
        
        Axios.get(`https://api.currencylayer.com/historical?access_key=34eca9d22b34a8f77ebe7de351ba880e&date=${dayAgo()}`)
          .then(resp => {
            let dayData = resp.data.quotes
            dayHist = Object.entries(dayData)
            setFiatData({...fiatData, dayHist})
          })
          .catch(err => console.error(err))
      })
      .catch(err => console.error(err))
  }
  
  const testFunction = () => {
    console.log(fiatArray1[0].substring(0, 2))
    // for (let i = 0; i < fiatArray1.length; i++) {
    //   console.log(fiatArray1[i].substring(3))
    // }
  } 

  // get data from both apis on page load
  useEffect(() => {
    getCryptoData()
    getFiatData()
    // testFunction()
  }, [])

  return (
    <>
      <Router>
        <div>
          <Appbar />
          <Switch>
            <Route exact path='/'>
              <Main
                input={input}
                currencyFamily={currencyFamily}
                setCurrencyFamily={setCurrencyFamily}
                handleInputChange={handleInputChange}
                handleConversion={handleConversion}
                fiatArray={fiatArray}
                cryptoArray={cryptoArray}
                setInput={setInput}
                cryptoData={cryptoData}
                getCryptoData={getCryptoData}
                fiatData={fiatData}
                getFiatData={getFiatData}
              />
            </Route>
            <Route path='/favorites'>
              <Favorites
                favorites={favorites}
                setFavorites={setFavorites}
              />
            </Route>
          </Switch>
        </div>
      </Router>

    </>
  );
}

export default App;
