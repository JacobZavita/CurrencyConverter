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
    amount: 1
  })
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
  let quotes
  let exchange
  let dayHist
  let baseCurrency = 'USD'

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

  // function for getting data from lunar crush and adds to cryptoData state
  const getCryptoData = () => {
    Axios.get(`https://api.lunarcrush.com/v2?data=market&key=nocqsi30btftgtw6lbaol&limit=20&sort=mc&desc=true`)
      .then(({ data: { data } }) => {
        setCryptoData(data)
      })
      .catch(err => console.error(err))
  }

  // function for getting data from currency layer and adds to fiatData state
  const getFiatData = () => {
    Axios.get(`https://api.currencylayer.com/live?access_key=34eca9d22b34a8f77ebe7de351ba880e&source=${input.base}`)
      .then(res => {
        quoteData = res.data.quotes
        exchange = Object.entries(quoteData)
        // setFiatData({...fiatData, exchange})
        
        Axios.get(`https://api.currencylayer.com/historical?access_key=34eca9d22b34a8f77ebe7de351ba880e&date=${dayAgo()}`)
          .then(resp => {
            let dayData = resp.data.quotes
            dayHist = Object.entries(dayData)
            setFiatData({...fiatData, exchange, dayHist})
          })
          .catch(err => console.error(err))
      })
      .catch(err => console.error(err))
  }
  
  // get data from both apis on page load
  useEffect(() => {
    getCryptoData()
    getFiatData()
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
