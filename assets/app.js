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

// converts the month to numerical value
const monthToNumber = (month) =>{
  let newMonth = ''
  switch (month){
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
// returns formated date of one week ago
const weekAgo = _ => {
  let formatedDate = ''
  // Get today's date using the JavaScript Date object.
  let ourDate = new Date()
  // Change it so that it is 7 days in the past.
  let pastDate = ourDate.getDate() - 7
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

console.log(weekAgo())

// returns formated date of one day ago
const dayAgo = _ =>{
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

// CurrencyLayer API
// Call for pulling exchange rates from one currency to another
fiatArray = [
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
    code: 'CNH',
    name: 'Chinese Renminbi'
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

// Pull historical data from USD
// Week Ago
axios.get(`https://api.currencylayer.com/historical?access_key=34eca9d22b34a8f77ebe7de351ba880e&date=${weekAgo()}`)
  .then(res => {
    let weekAgo= res.data
  })
  .catch(err => console.error(err))

// Day Ago
axios.get(`https://api.currencylayer.com/historical?access_key=34eca9d22b34a8f77ebe7de351ba880e&date=${dayAgo()}`)
  .then(res => {
    let dayAgo= res.data
  })
  .catch(err => console.error(err))


// axios.get(`http://api.currencylayer.com/live?access_key=34eca9d22b34a8f77ebe7de351ba880e&format=1`)
//   .then(res => {
//     let source = res.data.source
//     console.log(source)
//     let quotes = res.data.quotes
//     console.log(quotes)
//   })
//   .catch(err => console.error(err))

// Call for converting one currency to another
// axios.get(`https://api.currencylayer.com/convert?access_key=34eca9d22b34a8f77ebe7de351ba880e&from=EUR&to=GBP&amount=100`)
//   .then(res => {
//     let exchange = res.data
//     console.log(exchange)
//     console.log(exchange.query)
//     console.log(exchange.result)
//   })
//   .catch(err => console.error(err))

// LunarCrush API
// Calling data on one crypto
axios.get(`https://api.lunarcrush.com/v2?data=assets&key=nocqsi30btftgtw6lbaol&symbol=LTC`)
  .then(res => {
    let cryptoName = res.data.data[0].name
    console.log(cryptoName)
    let cryptoData = res.data.data[0]
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

