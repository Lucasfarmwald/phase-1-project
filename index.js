  // adding an eventlistener for "dom content loaded"
  
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

// creating a funtion with fetch to grab data from the api, and using object destructuring to create variables for different items.

async function Iss(){
    const response = await fetch(api)
    const data = await response.json();
    const {velocity , altitude , latitude , longitude} = data;

// here I am geting elements by id and using ".textContent" to equal whatever variable I would like to have displayed

    document.getElementById('velo').textContent = velocity;
    document.getElementById('alt').textContent = altitude;
    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude
    console.log(data)
}
// here is the link to the api, I made it easier to grab the link by setting it equal to the variable "api"
 const api = 'https://api.wheretheiss.at/v1/satellites/25544'


// here I call the Iss funtion

Iss()

// below i create variables for each of the buttons that I have on my page.

const header = document.getElementById("title")
const like = document.getElementById("likeBtn")
const dislike = document.getElementById('dislikeBtn')

// then Im adding eventlisteners to each of the buttons and setting individual alerts for each button.

  dislike.addEventListener('click', e => {
      debugger
      alert('You cannot stop the speed of the ISS!!')
  })
  like.addEventListener('click', e => {
      alert('Not fast enough!!')
  })

});