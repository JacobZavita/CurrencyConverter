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