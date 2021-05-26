let quotes

/*
converts crypto to fiat currency
accepts a base amount of crypto and the exchange rate
Pre-condition: The exchange rate matches the desired outcome
*/
const cryptoToFiat = (baseCrypto, exchangeRate) => {
  //check parameters
  if (NaN(baseCrypto) || NaN(exchangeRate)) {
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
  if (NaN(baseFiat) || NaN(exchangeRate)) {
    return -1
  } else {
    return baseFiat * baseCrypto
  }
}

// converts the month to numerical value
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

// console.log(weekAgo())

// returns formated date of one day ago
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
    code: 'RUR',
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

cryptoArray = [
  {
    code: 'BTC',
    name: 'Bitcoin'
  },
  {
    code: 'ETH',
    name: 'Ethereum'
  },
  {
    code: 'USDT',
    name: 'Tether'
  },
  {
    code: 'BNB',
    name: 'Binance Coin'
  },
  {
    code: 'ADA',
    name: 'Cardano'
  },
  {
    code: 'DOGE',
    name: 'Dogecoin'
  },
  {
    code: 'XRP',
    name: 'XRP'
  },
  {
    code: 'HEX',
    name: 'HEX'
  },
  {
    code: 'DOT',
    name: 'Polkadot'
  },
  {
    code: 'USDC',
    name: 'USD Coin'
  },
  {
    code: 'ICP',
    name: 'Internet Computer'
  },
  {
    code: 'UNI',
    name: 'Uniswap'
  },
  {
    code: 'BCH',
    name: 'Bitcoin Cash'
  },
  {
    code: 'LTC',
    name: 'Litecoin'
  },
  {
    code: 'LINK',
    name: 'Chainlink'
  },
  {
    code: 'MATIC',
    name: 'Polygon'
  },
  {
    code: 'ETC',
    name: 'Ethereum Classic'
  },
  {
    code: 'XLM',
    name: 'Stellar'
  },
  {
    code: 'SHIB',
    name: 'Shiba Inu'
  },
  {
    code: 'BUSD',
    name: 'Binance USD'
  }
]

let baseCurrency = "USD"

// User lands on page and this loads for fiat currencies:
axios.get(`http://api.currencylayer.com/live?access_key=34eca9d22b34a8f77ebe7de351ba880e&source=${baseCurrency}&format=1`)
  .then(res => {
    let source = res.data.source
    // console.log(source)
    quotes = res.data.quotes
    console.log(res.data)
    console.log('hi')
    // quotes = res.data.quotes.map((quote, i) => ({
    //   id: i,
    //   ...quote
    // }))

    // Pull historical data from USD -- Week Ago
    axios.get(`https://api.currencylayer.com/historical?access_key=34eca9d22b34a8f77ebe7de351ba880e&date=${weekAgo()}`)
      .then(resp => {
        let weekAgo = resp.data.quotes
        console.log(weekAgo)

        // Day Ago
        axios.get(`https://api.currencylayer.com/historical?access_key=34eca9d22b34a8f77ebe7de351ba880e&date=${dayAgo()}`)
          .then(respo => {
            let dayAgo = respo.data.quotes

            document.getElementById('fiatChart').innerHTML = ''
            fiatArray.forEach((elem, i) => {
              let fiatElem = document.createElement('tr')

              let shortCode = fiatArray[i].code
              let exchangeCode = 'USD' + shortCode

              let dayChange = (dayAgo[exchangeCode] / quotes[exchangeCode]) - 1
              let dayPercent = Number(dayChange).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 3 })

              let weekChange = (weekAgo[exchangeCode] / quotes[exchangeCode]) - 1
              let weekPercent = Number(weekChange).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 3 })

              fiatElem.innerHTML = `
                <td>${fiatArray[i].name}</td>
                <td>${quotes[exchangeCode]}</td>
                <td>${dayPercent}</td>
                <td>${weekPercent}</td>
                <td id ="btn${i}" data-test="${shortCode}"><button class="fav-btn waves-effect waves-light btn green">♡</button></td>
              `
              document.getElementById('fiatChart').append(fiatElem)
            })
          })
          .catch(err => console.error(err))
      })
      .catch(err => console.error(err))
  })
  .catch(err => console.error(err))

// User lands on page and this loads for crypto currencies:
axios.get(`https://api.lunarcrush.com/v2?data=market&key=nocqsi30btftgtw6lbaol&limit=20&sort=mc&desc=true&percent_change_24h,7d`)
  .then(({ data: { data } }) => {
    top20 = data
    console.log(data)

    document.getElementById('cryptoChart').innerHTML = ''
    cryptoArray.forEach((elem, i) => {

      axios.get(`https://api.lunarcrush.com/v2?data=assets&key=nocqsi30btftgtw6lbaol&symbol=${top20[i].s}&change=1w`)
        .then(resp => {
          let oneWeek = resp.data
          let cryptoElem = document.createElement('tr')
          cryptoElem.innerHTML = `
          <td>${top20[i].n}</td>
              <td>$${top20[i].p}</td>
              <td>${top20[i].pc}%</td>
              <td>${oneWeek.data[0].percent_change_7d}%</td>
              <td><button class="waves-effect waves-light btn green">♡</button></td>
          `
          // let cryptoList = document.createElement('select')
          // cryptoList.innerHTML = `
          // <option value="${top20[i]}">${top20[i].s} - ${top20[i].n}</option>
          // `
          // document.getElementById('cryptoList').append(cryptoList)
          document.getElementById('cryptoChart').append(cryptoElem)
        })
        .catch(err => console.error(err))
    })
  })
  .catch(err => console.error(err))

  // Javascript for materialize "dropdown" on homepage
// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.dropdown-trigger')
//   var instances = M.Dropdown.init(elems, {
//     closeOnClick: true
//   })
// })

// Javascript for materialize "select" option on homepage
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

// Dropdown visible/invisible
document.getElementById('target').addEventListener('change', function () {
  'use strict';
    let vis = document.querySelector('.inv'),
      target = document.getElementById(this.value)
    if (vis !== null) {
      vis.className = 'vis'
    }
    if (target !== null) {
      target.className = 'inv'
    }
})

// eventListener for convert button click on Homepage
document.getElementById('convertButton').addEventListener('click', event =>{
  event.preventDefault()
  
  // Grab currency type (fiat or crypto)
  let a = document.getElementById("a")
  let currencyType = a.options[a.selectedIndex].value

  // Grab selected currency
  let e = document.getElementById("f")
  let selectedCurrency = e.options[e.selectedIndex].text

  // Turn selected currency into 3-digit code
  let baseCurrencyCode = selectedCurrency.substring(0, 3)

  // Grab "Amount"
  let baseAmount = document.getElementById('baseAmount').value

if (currencyType === 'fiatList') {
  console.log(selectedCurrency)
  axios.get(`http://api.currencylayer.com/live?access_key=34eca9d22b34a8f77ebe7de351ba880e&source=${baseCurrencyCode}&format=1`)
  .then(res => {
    let source = res.data.source
    let quotes = res.data.quotes
    console.log(quotes)

    document.getElementById('fiatChart').innerHTML = ''
    for (let i = 0; i < fiatArray.length; i++) {
      console.log('works')
    }


    
  })
  .catch(err => console.error(err))

} else {
  console.log('currency type is crypto')
}

})


// document.getElementById('target').addEventListener('change', function () {
//   if (value.select.option === "fiatList") {
//     'use strict';
//     let vis = document.querySelector('.inv'),
//       target = document.getElementById(this.value)
//     if (vis !== null) {
//       vis.className = 'vis'
//     }
//     if (target !== null) {
//       target.className = 'inv'
//     }
//   } else {
//     'use strict';
//     let vis = document.querySelector('.invi'),
//       target = document.getElementById(this.value)
//     if (vis !== null) {
//       vis.className = 'vis'
//     }
//     if (target !== null) {
//       target.className = 'invi'
//     }
//   }
// })

// Favorites button
document.addEventListener('click', event => {
  event.preventDefault()
  if (event.target.classList.contains('fav-btn')) {
    console.log(event.target.parentElement.dataset.test)
    // get currency code
    const curCode = event.target.parentElement.dataset.test
    const favoriteArray = JSON.parse(localStorage.getItem('favs')) || []
    if (!favoriteArray.includes(
      {
        code: `${curCode}`
      }
    )) {
      favoriteArray.push(
        {
          code: `${curCode}`
        }
      )
    }
    localStorage.setItem('favs', JSON.stringify(favoriteArray))
    // append that data to a local storage with variable 'favs'
  }
})

// The following are just axios calls that do different things for reference.

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
// axios.get(`https://api.lunarcrush.com/v2?data=assets&key=nocqsi30btftgtw6lbaol&symbol=LTC`)
//   .then(res => {
//     let cryptoName = res.data.data[0].name
//     console.log(cryptoName)
//     let cryptoData = res.data.data[0]
//     console.log(cryptoData)
//   })
//   .catch(err => console.error(err))

// Calling exchange data. This brings back an array btc to ten other coins
  // axios.get(`https://api.lunarcrush.com/v2?data=market&key=nocqsi30btftgtw6lbaol&limit=20&sort=mc&desc=true`)
  //   .then(({ data: { data } }) => {
  //     top20 = data
  //     console.log(top20)
  //   })
  //   .catch(err => console.error(err))