/*
converts crypto to fiat currency
accepts a base amount of crypto and the exchange rate
Pre-condition: The exchange rate matches the desired outcome
*/
const cryptoToFiat = (baseCrypto, exchangeRate) => {
  //check parameters
  if(NaN(baseCrypto) || NaN(exchangeRate)) {
    return -1 //invalid return value
  } else {
    return baseCrypto * exchangeRate
  }
}

/*
converts fiat to crypto
accepts base amount of fiat and multiplies by the exchange rate
Pre-condition: The exchange rate matches the desired outcome
*/
const fiatToCrypto = (baseFiat, exchangeRate) => {
  //check parameters
  if(NaN(baseFiat) || NaN(exchangeRate)) {
    return -1
  } else {
    return baseFiat * baseCrypto
  }
}


// CurrencyLayer API
// Call for pulling exchange rates from one currency to another
axios.get(`http://api.currencylayer.com/live?access_key=34eca9d22b34a8f77ebe7de351ba880e&format=1`)
  .then(res => {
    let source = res.data.source
    console.log(source)
    let quotes = res.data.quotes
    console.log(quotes)
  })
  .catch(err => console.error(err))

// Call for converting one currency to another
axios.get(`https://api.currencylayer.com/convert?access_key=34eca9d22b34a8f77ebe7de351ba880e&from=EUR&to=GBP&amount=100`)
  .then(res => {
    let exchange = res.data
    console.log(exchange)
    console.log(exchange.query)
    console.log(exchange.result)
  })
  .catch(err => console.error(err))

// LunarCrush API
// Calling data on one crypto
axios.get(`https://api.lunarcrush.com/v2?data=assets&key=nocqsi30btftgtw6lbaol&symbol=LTC`)
  .then(resp => {
    let cryptoName = resp.data.data[0].name
    console.log(cryptoName)
    let cryptoData = resp.data.data[0]
    console.log(cryptoData)
  })
  .catch(err => console.error(err))

// Calling exchange data. This brings back an array btc to ten other coins
  axios.get(`https://api.lunarcrush.com/v2?data=market&key=nocqsi30btftgtw6lbaol&limit=20&sort=mc&desc=true`)
    .then(({ data: { data } }) => {
      top20 = data
      console.log(top20)
    })
    .catch(err => console.error(err))

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.dropdown-trigger')
  var instances = M.Dropdown.init(elems, {
    closeOnClick: true
  })
})

