
// when they get on the page
// render favorites list from localStorage
// this needs axios requets looping for the length of the local storage array 'favs' if 'favs' is not empty.

// add option to delete items from favs with "X" button

// give this guy the uh data from the local storage array,
// and object with attributes code(string) and fiat(string, contains 'true' or 'false')
const renderItem = (codeData) => {

  if (codeData.fiat === 'true') {
    // fiat request here
  } else if (codeData.fiat === 'false') {
    // crypto request here
  }
  else {
    console.error('Error with codeData.fiat in renderItem f(x) in fav.js')
  }

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