  // adding an eventlistener for "dom content loaded"
  
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

// creating a funtion with fetch to grab data from the api, and using object destructuring to create variables for different items.

async function Iss(){
    const response = await fetch(api)
    const data = await response.json();
    const {velocity , altitude , latitude , longitude} = data;


    document.getElementById('velo').textContent = velocity;
    document.getElementById('alt').textContent = altitude;
    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude
    console.log(data)
}
 const api = 'https://api.wheretheiss.at/v1/satellites/25544'




Iss()


const header = document.getElementById("title")
const like = document.getElementById("likeBtn")
const dislike = document.getElementById('dislikeBtn')

 
  function handleChange(){
      const div = document.getElementById('container')
      const newTag = document.createElement("p")
      newTag.innerText = ("you cannot change the speed")
      newTag.style.color = "wheat"
      div.appendChild(newTag)
  }
 
 
  dislike.addEventListener('click',handleChange)

 
 function handleLike(){
    const div = document.getElementById('container')
    const newTag = document.createElement("p")
    newTag.innerText = ("Its a great speed")
    newTag.style.color = "wheat"
    div.appendChild(newTag)
 }

  like.addEventListener('click', handleLike)



  function handleRemove(){
    document.getElementById('container').innerText = ("")
    
  }



  remove.addEventListener('click',handleRemove)
});