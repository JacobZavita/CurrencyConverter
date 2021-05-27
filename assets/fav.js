
// when they get on the page
// render favorites list from localStorage
// this needs axios requets looping for the length of the local storage array 'favs' if 'favs' is not empty.

// add option to delete items from favs with "X" button

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

// dayAgo and weekAgo f(x) I wrote before
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

//returns the change of fiat over a week or day
const fiatChange = (past, today) => {
  return Number((past / today) - 1).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 3 })
}

//give this guy the data from the axios, res
const renderCrypto = (cryDat) => {
  //render crypto
  let favRow = documet.createElement('tr')
  favRow.classList.add('testRow')
  favRow.innerHTML = `
    <td>${cryDat.symbol}</td>
    <td>$${cryDat.price}</td>
    <td>${cryDat.percent_change_24h}%</td>
    <td>${cryDat.percent_change_7d}%</td>
    <td><a class="rm-btn waves-effect waves-light btn red">X</a></td>
  `
  // append
  document.getElementById('favData').append(favRow)
}

// render fiat data
const renderFiat = (fiDat) => {
  const baseCurrency = 'USD'
  axios.get(`http://api.currencylayer.com/live?access_key=34eca9d22b34a8f77ebe7de351ba880e&source=${baseCurrency}&format=1`)
    .then(res => {
      const fiat = res.data.quotes // same as quotes in app.js
      // one week ago data
      axios.get(`https://api.currencylayer.com/historical?access_key=34eca9d22b34a8f77ebe7de351ba880e&date=${weekAgo()}`)
        .then(resp => {
          const fiatWeekAgo = resp.data.quotes
          // one day ago data
          axios.get(`https://api.currencylayer.com/historical?access_key=34eca9d22b34a8f77ebe7de351ba880e&date=${dayAgo()}`)
            .then(respo => {
              const fiatDayAgo = respo.data.quotes
              // render fiat here
              let favRow = document.createElement('tr')
              favRow.classList.add('testRow')
              const exCode = 'USD' + fiDat
              // calculate day ago rate and week ago rate
              const dayPercent = fiatChange(fiatDayAgo[exCode], fiat[exCode])
              const weekPercent = fiatChange(fiatWeekAgo[exCode], fiat[exCode])
              favRow.innerHTML = `
                <td>${fiDat}</td>
                <td>$${fiat[exCode]}</td>
                <td>${dayPercent}%</td>
                <td>${weekPercent}%</td>
                <td><a class="rm-btn waves-effect waves-light btn red">X</a></td>
              `
              // append
              document.getElementById('favData').append(favRow)
            })
            .catch(err => console.error(err))
        })
        .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
}

// give this guy the uh data from the local storage array,
// and object with attributes code(string) and fiat(string, contains 'true' or 'false')
// maybe nest it all?
// you can index the array at [i] to get "codeData"
const renderItem = (codeData) => {
  if (codeData.fiat === 'true') {
    // fiat request here
    renderFiat(codeData.code)
  } else if (codeData.fiat === 'false') {
    // crypto request here
    axios.get(`https://api.lunarcrush.com/v2?data=assets&key=nt1go9e8ol889xc2mjy0g&symbol=${codeData.code}`)
      .then(respons => {
        //render the crypto data here,
        let cryDat = respons.data.data
        renderCrypto(cryDat)
      })
      .catch(err => console.error(err))
  } else {
    console.error('Error with codeData.fiat in renderItem f(x) in fav.js')
  }

// render all the data upon landing on fav page

}