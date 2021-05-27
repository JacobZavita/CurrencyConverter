
// when they get on the page
// render favorites list from localStorage
// this needs axios requets looping for the length of the local storage array 'favs' if 'favs' is not empty.

// add option to delete items from favs with "X" button

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
//give this guy the data from the axios, res
const renderCrypto = (cryDat) =>{

}
// give this guy the uh data from the local storage array,
// and object with attributes code(string) and fiat(string, contains 'true' or 'false')
// maybe nest it all?



const renderItem = (codeData) => {
  if (codeData.fiat === 'true') {
    // fiat request here
  } else if (codeData.fiat === 'false') {
    // crypto request here
    axios.get(`https://api.lunarcrush.com/v2?data=assets&key=nt1go9e8ol889xc2mjy0g&symbol=${codeData.code}`)
      .then(respons => {
        //render the crypto data here,
        let cryDat = respons.data.data
        renderCrypto(cryDat)
      })
      .catch(err => console.error(err))
  }
  else {
    console.error('Error with codeData.fiat in renderItem f(x) in fav.js')
  }



  // create elem stuff
  const fav = document.createElement('tr')
  fav.classList.add('testRow')
  fav.innerHTML = `
    <td>Euro</td>
    <td>$1.22</td>
    <td>-0.014%</td>
    <td>0.14%</td>
    <td><a class="waves-effect waves-light btn red">X</a></td>
  `
  document.getElementById('favData').append(fav)
}