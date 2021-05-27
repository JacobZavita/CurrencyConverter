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

cryptoArray = [
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

let baseCurrency = "USD"

// User lands on page and this loads for fiat currencies:
axios.get(`http://api.currencylayer.com/live?access_key=34eca9d22b34a8f77ebe7de351ba880e&source=${baseCurrency}&format=1`)
  .then(res => {
    let source = res.data.source
    // console.log(source)
    quotes = res.data.quotes
    // console.log(res.data)
    // console.log('hi')
    // quotes = res.data.quotes.map((quote, i) => ({
    //   id: i,
    //   ...quote
    // }))

    // Pull historical data from USD -- Week Ago
    axios.get(`https://api.currencylayer.com/historical?access_key=34eca9d22b34a8f77ebe7de351ba880e&date=${weekAgo()}`)
      .then(resp => {
        let weekAgo = resp.data.quotes
        // console.log(weekAgo)

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
                <td id ="btn${i}" data-test="${shortCode}" data-fiat="true"><button class="fav-btn waves-effect waves-light btn green">♡</button></td>
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
              <td id ="cryptobtn${i}" data-test="${top20[i].s}" data-fiat="false"><button class="fav-btn waves-effect waves-light btn green">♡</button></td>
          `

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
    let options = ['fiatList', 'cryptoList']
    options.forEach(option => {
      if (option === document.getElementById('a').value) {
        document.getElementById(option).parentNode.className = ''
      } else {
        document.getElementById(option).parentNode.className = 'inv'
      }
    })
})

// eventListener for convert button click on Homepage
document.getElementById('convertButton').addEventListener('click', event =>{
  event.preventDefault()
  
  // Grab currency type (fiat or crypto)
  let a = document.getElementById("a")
  let currencyType = a.options[a.selectedIndex].value
  console.log(currencyType)

  let baseAmount = document.getElementById('baseAmount').value

if (currencyType === 'fiatList') {
  
  let e = document.getElementById("f")
  let selectedCurrency = e.options[e.selectedIndex].text
  let baseCurrencyCode = selectedCurrency.substring(0, 3)
  let baseAmount = document.getElementById('baseAmount').value
  console.log(selectedCurrency)

  axios.get(`http://api.currencylayer.com/live?access_key=34eca9d22b34a8f77ebe7de351ba880e&source=${baseCurrencyCode}&format=1`)
  .then(res => {
    let source = res.data.source
    let quotes = res.data.quotes
    console.log(quotes)
    
    let baseToBTCCode = baseCurrencyCode + 'BTC'
    let baseToBTC = quotes[baseToBTCCode]
    console.log(baseToBTC)

    axios.get(`https://api.currencylayer.com/historical?access_key=34eca9d22b34a8f77ebe7de351ba880e&source=${baseCurrencyCode}&date=${weekAgo()}`)
    // It's still pulling the data with USD as the base
      .then(resp => {
        let weekAgo = resp.data.quotes
        console.log(weekAgo)

        axios.get(`https://api.currencylayer.com/historical?access_key=34eca9d22b34a8f77ebe7de351ba880e&date=${dayAgo()}`)
          .then(respo => {
            let dayAgo = respo.data.quotes
            
            document.getElementById('fiatChart').innerHTML = ''
            for (let i = 0; i < fiatArray.length; i++) {
              let fiatElem = document.createElement('tr')

              let shortCode = fiatArray[i].code
              let exchangeCode = baseCurrencyCode + shortCode

              let conversionRate = quotes[exchangeCode] * baseAmount

              let dayChange = (dayAgo[exchangeCode] / quotes[exchangeCode]) - 1
              let dayPercent = Number(dayChange).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 3 })

              let weekChange = (weekAgo[exchangeCode] / quotes[exchangeCode]) - 1
              let weekPercent = Number(weekChange).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 3 })

              fiatElem.innerHTML = `
                <td>${fiatArray[i].name}</td>
                <td>${conversionRate}</td>
                <td>${dayPercent}</td>
                <td>${weekPercent}</td>
                <td id ="btn" data-test="" data-fiat="true"><button class="fav-btn waves-effect waves-light btn green">♡</button></td>
              `
            document.getElementById('fiatChart').append(fiatElem)

            axios.get(`https://api.lunarcrush.com/v2?data=market&key=nocqsi30btftgtw6lbaol&limit=20&sort=mc&desc=true&percent_change_24h,7d`)
              .then(({ data: { data } }) => {
                let top20 = data
          
                document.getElementById('cryptoChart').innerHTML = ''
                for (let i = 0; i < cryptoArray.length; i++) {
                let cryptoElem = document.createElement('tr')
                
                let cryptoResult = ((top20[i].p_btc / baseToBTC) / baseAmount)


                cryptoElem.innerHTML = `
                <td>${top20[i].n}</td>
                <td>${cryptoResult}</td>
                <td>${top20[i].pc}%</td>
                <td>%</td>
                <td><button id ="crypto-btn${i}" data-test="${top20[i].s}" data-fiat="false" class="fav-btn waves-effect waves-light btn green">♡</button></td>
                `
                
          // so baseToBTC shows th price in bitcoin.
          // Then I need to see the data in
                document.getElementById('cryptoChart').append(cryptoElem)
                }
              })
              .catch (err => console.error(err))
          }
        })
      .catch(err => console.error(err))
    })
  .catch(err => console.error(err))
  })
  .catch(err => console.error(err))

} else {
  let g = document.getElementById("h")
  let selectedCurrency = g.options[g.selectedIndex].text
  let baseCurrencyCode = selectedCurrency.substring(0, 3)
  let baseAmount = document.getElementById('baseAmount').value

  axios.get(`https://api.lunarcrush.com/v2?data=market&key=nocqsi30btftgtw6lbaol&limit=20&sort=mc&desc=true&percent_change_24h,7d`)
    .then(res => {
      let top20 = res.data
      console.log(top20)

      document.getElementById('cryptoChart').innerHTML = ''
      document.getElementById('fiatChart').innerHTML = ''
      for (let i = 0; i < 20; i++) {
        let cryptoElem = document.createElement('tr')

        let crypto2Crypto = (top20.data[i].p/top20.data[1].p) * baseAmount

        cryptoElem.innerHTML = `
                <td>${top20.data[i].n}</td>
                <td>${crypto2Crypto}</td>
                <td></td>
                <td>%</td>
                <td><button id ="crypto-btn${i}" data-test="FIX THIS" data-fiat="false" class="fav-btn waves-effect waves-light btn green">♡</button></td>
                `
        // so baseToBTC shows th price in bitcoin.
        // Then I need to see the data in
        document.getElementById('cryptoChart').append(cryptoElem)

        console.log(selectedCurrency)
        
        axios.get(`http://api.currencylayer.com/live?access_key=34eca9d22b34a8f77ebe7de351ba880e&source=USD&format=1`)
        .then(resp => {
          let source = resp.data.source
          let quotes = resp.data.quotes
          let USDtoBTC = quotes.USDBTC

          // console.log(quotes)

          if (baseCurrencyCode === top20.data[i].s){
            let baseCurrencyToBTC = top20.data[i].p_btc
            let baseAmountToUSD = (baseCurrencyToBTC / quotes.USDBTC) * baseAmount
            console.log(baseAmountToUSD)

            let shortCode = fiatArray[i].code
            let exchangeCode = 'USD' + shortCode

            let conversionRate = quotes[exchangeCode] / baseAmountToUSD

            console.log(conversionRate)

            // for (i = 0; i < fiatArray.length; i++) {
            //   baseAmountToUSD * quotes.
            // }

            let fiatElem = document.createElement('tr')

            fiatElem.innerHTML = `
                <td>${fiatArray[i].name}</td>
                <td>Amount</td>
                <td>%</td>
                <td>%</td>
                <td id ="btn" data-test="" data-fiat="true"><button class="fav-btn waves-effect waves-light btn green">♡</button></td>
                `
            document.getElementById('fiatChart').append(fiatElem)

          } else{}
          
        })
        .catch(err => console.error(err))
      }
    })
    .catch(err => console.error(err))
}

})

// Trying to figure out how to get the select/dropdown to render different lists based on what they pick first
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
    console.log(event.target.parentElement.dataset.fiat)
    console.log(event.target.parentElement.id)
    // get currency code
    const curCode = event.target.parentElement.dataset.test
    let isFiat = event.target.parentElement.dataset.fiat
    let favoriteArray = JSON.parse(localStorage.getItem('favs')) || []
    if (!favoriteArray.includes(
      {
        code: `${curCode}`,
        fiat: `${isFiat}`
      }
    )) {
      favoriteArray.push(
        {
          code: `${curCode}`,
          fiat: `${isFiat}`
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