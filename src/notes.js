// crypto api calls

// used in getCryptoData in App.js and on line 345(grabAndRenderCrypto) and line 455(eventListener for convert button)
// https://api.lunarcrush.com/v2?data=market&key=nocqsi30btftgtw6lbaol&limit=20&sort=mc&desc=true&percent_change_24h,7d
// Calling this LCOne
// gets data on top 20 cryptos

// not used in App.js used on line 351(grabAndRenderCrypto)
// https://api.lunarcrush.com/v2?data=assets&key=nocqsi30btftgtw6lbaol&symbol=${top20[i].s}&change=1w
// Calling this LCTwo

// not used in App.js. Used on line 495(on eventListener for convert button) and line 527(not 100% why or what that is as it's the same lol)
// https://api.lunarcrush.com/v2?data=assets&key=nocqsi30btftgtw6lbaol&symbol=${baseCurrencyCode}
// Calling this LCThree


// fiat api calls
// not on 
// https://api.currencylayer.com/live?access_key=34eca9d22b34a8f77ebe7de351ba880e&source=${baseCurrencyCode}&format=1
// https://api.currencylayer.com/historical?access_key=34eca9d22b34a8f77ebe7de351ba880e&source=${baseCurrencyCode}&date=${weekAgo()}
// https://api.currencylayer.com/historical?access_key=34eca9d22b34a8f77ebe7de351ba880e&source=${baseCurrencyCode}&date=${dayAgo()}
// https://api.currencylayer.com/convert?access_key=34eca9d22b34a8f77ebe7de351ba880e&from=USD&to=${fiatArray[i].code}&amount=${amountUSD}