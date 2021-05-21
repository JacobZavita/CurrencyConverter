axios.get(`http://api.currencylayer.com/live?access_key=34eca9d22b34a8f77ebe7de351ba880e&format=1`)
  .then(res => {
    console.log(res)
  })
  .catch(err => console.error(err))

axios.get(`https://api.lunarcrush.com/v2?data=assets&key=nocqsi30btftgtw6lbaol&symbol=LTC`)
  .then(resp => {
    console.log(resp)
  })
  .catch(err => console.error(err))