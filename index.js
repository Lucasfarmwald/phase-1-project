 
  
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');


async function Iss(){
    const response = await fetch(api)
    const data = await response.json();
    const {velocity , altitude , latitude , longitude,visibility} = data;


    document.getElementById('velo').textContent = velocity;
    document.getElementById('alt').textContent = altitude;
    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
    document.getElementById('visibility').textContent = visibility
    console.log(data)
}
 const api = 'https://api.wheretheiss.at/v1/satellites/25544'




Iss()


const header = document.getElementById("title")
const like = document.getElementById("likeBtn")
const dislike = document.getElementById('dislikeBtn')
const textBox = document.getElementById('textbox')




 
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

  function handleSubmit () {
    const newP = document.createElement('p')
    const div = document.getElementById('container')
    const text = document.getElementById('text1').value;
    newP.innerText = text
    newP.style.color = 'wheat'
    div.appendChild(newP)
    
  
  }
 
 const submitbutton = document.getElementById('submitBtn')

  submitbutton.addEventListener('click',handleSubmit)





});

 // i want to take the text that is written into the text box and dosplay that information in
 // the div "container"


 
 