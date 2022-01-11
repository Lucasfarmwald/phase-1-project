 
  
window.addEventListener('DOMContentLoaded', (event) => {
    //console.log('DOM fully loaded and parsed');

  
    fetch('https://api.wheretheiss.at/v1/satellites/25544')
    .then(function(response){
      return response.json();
    })
    .then(function (data){
      console.log(data)
      const {velocity,altitude,latitude,longitude,visibility} = data

    document.getElementById('velo').textContent = velocity;
    document.getElementById('alt').textContent = altitude;
    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
    document.getElementById('visibility').textContent = visibility
 } )
    


const like = document.getElementById("likeBtn")
const dislike = document.getElementById('dislikeBtn')



 
  function handleDislike(){
      const div = document.getElementById('container')
      const newTag = document.createElement("p")
      newTag.innerText = ("Tell me what you would like to see!")
      newTag.style.color = "wheat"
      div.appendChild(newTag)
  }
 
 
  dislike.addEventListener('click',handleDislike)

 
 function handleLike(){
    const div = document.getElementById('container')
    const newTag = document.createElement("p")
    newTag.innerText = ("Thank you!")
    newTag.style.color = "wheat"
    div.appendChild(newTag)
 }

  like.addEventListener('click', handleLike)



  function handleRemove(){
    document.getElementById('container').innerText = ("")
    
  }



  remove.addEventListener('click',handleRemove)

  function handleTextBox () {
    const newP = document.createElement('p')
    const div = document.getElementById('container')
    const text = document.getElementById('text1').value;
    newP.innerText = text
    newP.style.color = 'wheat'
    div.appendChild(newP)
    
  
  }
 
 const submitbutton = document.getElementById('submitBtn')

  submitbutton.addEventListener('click',handleTextBox)





});



 
 