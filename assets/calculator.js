/*
Calculator:
1. Decide if the from is crypto or fiat
2. Grab the search code from the search bar
3. enter the code into lunarcrush or currencylayer
4. depending on the steps do 4 different functions
*/

//fiat to fiat(easy)
const fiatToFiat = () => {
  //get fiat results(includes exchange rates)
  axios.get(`https://api.currencylayer.com/convert?access_key=34eca9d22b34a8f77ebe7de351ba880e&from=${document.getElementById('from').value}&to=${document.getElementById('to').value}&amount=${document.getElementById('amount').value}`)
    .then(res => {
      let result = res.data.result
      // console.log(result)
      printResult(result)
    })
    .catch(err => console.error(err))
  }

const fiatToCrypto = () => {
  //get fiat conversion first
  axios.get(`https://api.currencylayer.com/convert?access_key=34eca9d22b34a8f77ebe7de351ba880e&from=${document.getElementById('from').value}&to=USD&amount=${document.getElementById('amount').value}`)
  .then(res => {
    //get conversion chart
    let amountUSD = res.data.result
    axios.get(`https://api.lunarcrush.com/v2?data=assets&key=nocqsi30btftgtw6lbaol&symbol=${document.getElementById('to').value}`)
    .then(resp => {
       let cryptoData = resp.data.data[0]

       //convert the amountUSD to the desired crypto currency
       let result = amountUSD / cryptoData.price
        //  console.log(result)
        printResult(result)
     })
     .catch(err => console.error(err))
  })
  .catch(err => console.error(err))
}

const cryptoToCrypto = () => {
  //convert to usd first
  axios.get(`https://api.lunarcrush.com/v2?data=assets&key=nocqsi30btftgtw6lbaol&symbol=${document.getElementById('from').value}`)
  .then(res => {
    //get data on from crypto
    let fromData = res.data.data[0]
    //convert that amount to USD
    let amountUSD = parseFloat(fromData.price * document.getElementById('amount').value)

    //get data on second crypto
    axios.get(`https://api.lunarcrush.com/v2?data=assets&key=nocqsi30btftgtw6lbaol&symbol=${document.getElementById('to').value}`)
    .then(resp => {
      //get data on tocrypto
      let toData = resp.data.data[0]

      //convert amountUSD to this crypto
      let result = amountUSD / toData.price
      // console.log(result)
      printResult(result)
    })
    .catch(err => console.error(err))
  })
  .catch(err => console.error(err))
}

const cryptoToFiat = () => {
  //get data on fromcrypto
  axios.get(`https://api.lunarcrush.com/v2?data=assets&key=nocqsi30btftgtw6lbaol&symbol=${document.getElementById('from').value}`)
  .then(res => {
    //get data on from crypto
    let fromData = res.data.data[0]
    //convert that amount to USD
    let amountUSD = parseFloat(fromData.price * document.getElementById('amount').value)
    //call to convert fiat to fiat from currencylayer
    axios.get(`https://api.currencylayer.com/convert?access_key=34eca9d22b34a8f77ebe7de351ba880e&from=USD&to=${document.getElementById('to').value}&amount=${amountUSD}`)
    .then(resp => {
      //convert usd to desired currency 
      let result = resp.data.result
      // console.log(result)
      printResult(result)
    })
    .catch(err => console.error(err))
  })
  .catch(err => console.error(err))
}

const printResult = (answer) => {
  //clear it first
  document.getElementById('calcDiv').innerHTML = ''
  document.getElementById('calcDiv').innerHTML = `
  <h6>${document.getElementById('amount').value} ${document.getElementById('from').value.toUpperCase()}
  = ${answer} ${document.getElementById('to').value.toUpperCase()}</h6>
  `
}

//logic to decide functionality
document.getElementById('convertCalc').addEventListener('click', event => {
  //determine which checkboxes are checked
  //fiat to fiat
  if(document.getElementById('fromFiat').checked && document.getElementById('toFiat').checked) {
    fiatToFiat()
  }
  //fiat to crypto
  if (document.getElementById('fromFiat').checked && document.getElementById('toCrypto').checked) {
    fiatToCrypto()
  }
  //crypto to crypto
  if (document.getElementById('fromCrypto').checked && document.getElementById('toCrypto').checked) {
    cryptoToCrypto()
  }
  //crypto to fiat
  if (document.getElementById('fromCrypto').checked && document.getElementById('toFiat').checked) {
    cryptoToFiat()
  }
})

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});
