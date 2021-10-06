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
  let historyData
  let arrayifiedCryptoData
  let toUSD
  let conversionMultiple
  let toUSDHist
  let historicMultiple
  let basetoUSD4BTC
  let baseCode
  let baseToBTC
  let c2fResult

  const handleInputChange = ({ target }) => {
    setInput({ ...input, [target.name]: target.value })
  }

  // assign this to the onClick of the button in Form.js
  const handleConversion = event => {
    event.preventDefault()

    if (currencyFamily === 'fiat') {
      baseCode = input.base.substring(0, 3)

      // this grabs the conversion rate from USD to the base currency returning one value
      for (let i = 0; i < fiatData.exchange.length; i++) {
        if (fiatData.exchange[i][0].substring(3) === baseCode) {
          toUSD = fiatData.exchange[i][1]
        }
      }
      conversionMultiple = 1 / toUSD
      
      // get the value of base to usd historic value returning one value
      for (let i = 0; i < fiatData.dayHist.length; i++) {
        if (fiatData.dayHist[i][0].substring(3) === baseCode) {
          toUSDHist = fiatData.dayHist[i][1]
        }
      }      
      historicMultiple = 1 / toUSDHist

      // we need to update the fiatData state with these
      for (let i = 0; i < fiatData.exchange.length; i++) {
        fiatData.exchange[i][1] = (fiatData.exchange[i][1] * conversionMultiple) * input.amount
      }
      // same with dayhist
      for (let i = 0; i <fiatData.dayHist.length; i++) {
        fiatData.dayHist[i][1] = (fiatData.dayHist[i][1] * historicMultiple) * input.amount
      }
      // set fiat data with updated info
      setFiatData({...fiatData})

      basetoUSD4BTC = fiatData.exchange[19][1]

      for (let i = 0; i < cryptoData.length; i++) {
        cryptoData[i][1].price = basetoUSD4BTC / cryptoData[i][1].price
      }
    } else {

      // 1 - base to btc
      for (let i = 0; i < cryptoData.length; i++) {
        if (input.base.includes(cryptoData[i][1].name)) {
          baseToBTC = cryptoData[i][1].price_btc * input.amount
        }
      }
      // 2 - btc to other cryptos
      for (let i = 0; i < cryptoData.length; i++) {
        cryptoData[i][1].price = baseToBTC / cryptoData[i][1].price_btc
        
      }
      setCryptoData([...cryptoData])

      // 3 - BTC to fiats. I used the axios call since the values in cryptoData were changed. Couldn't pull price after changing it. I'm thinking I'll refactor the code to have two levels of state - an unmanipulated true state and a converted state.
      for (let i = 0; i < fiatData.exchange.length; i++) {
        let conversionCode = fiatData.exchange[i][0].substring(3)
        Axios.get(`https://api.currencylayer.com/convert?access_key=34eca9d22b34a8f77ebe7de351ba880e&from=${conversionCode}&to=BTC&amount=1`)
          .then(respo => {
            const cryptoToFiat = respo.data.result
            fiatData.exchange[i][1] = baseToBTC / cryptoToFiat
          })
          .catch(err => console.error(err))
        }
        setFiatData({...fiatData})
    }
  }

  // array for the currency codes and names for fiats
  const fiatArray = ['USD - United States Dollar', 'CNY - Chinese Yuan', 'JPY - Japanese Yen', 'EUR - Euro', 'GBP - British Pound Sterling', 'INR - Indian Rupee', 'AUD - Australian Dollar', 'CAD - Canadian Dollar', 'CHF - Swiss Franc', 'RUB - Russian Ruble', 'HKD - Hong Kong Dollar', 'NZD - New Zealand Dollar', 'BRL - Brazillian Real', 'NGN - Nigerian Naira', 'KRW - Korean Won', 'IDR - Indonesean Rupah', 'SAR - Saudi Riyal', 'TRY - Turkish', 'KWD - Kuwait Dinar', 'KYD - Cayman Island Dollar']

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
          for (let j = 0; j < fiatArray.length; j++) {
            if (exchangeData[i][0].substring(3) === fiatArray[j].substring(0, 3)) {
              fiatData.exchange.push(exchangeData[i])
            }
          }
        }

        Axios.get(`https://api.currencylayer.com/historical?access_key=34eca9d22b34a8f77ebe7de351ba880e&date=${dayAgo()}`)
          .then(resp => {
            let dayData = resp.data.quotes
            historyData = Object.entries(dayData)

            for (let i = 0; i < historyData.length; i++) {
              for (let j = 0; j < fiatArray.length; j++) {
                if (historyData[i][0].substring(3) === fiatArray[j].substring(0, 3)) {
                  fiatData.dayHist.push(historyData[i])
                }
              }
            }
            setFiatData({...fiatData})
            // console.log(fiatData)
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
                currencyFamily={currencyFamily}
                setCurrencyFamily={setCurrencyFamily}
                handleInputChange={handleInputChange}
                handleConversion={handleConversion}
                conversionMultiple={conversionMultiple}
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
