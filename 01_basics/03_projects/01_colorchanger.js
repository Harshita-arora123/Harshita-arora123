const buttons = document.querySelectorAll('.button');
//console.log(buttons)
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
  console.log(e.target) //  returns the element where the event occured. The target property is read-only.
  if(e.target.id === 'grey')  {    // id grey h that's why
    body.style.backgroundColor = e.target.id; // grey click then bgcolor also grey
  }  
  if(e.target.id === 'white')  {    // id white h that's why
    body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === 'blue')  {    // id blue h that's why
      body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === 'yellow')  {   // id yellow h that's why
        body.style.backgroundColor = e.target.id; 
  }  
  if(e.target.id === 'purple')  {   // id purple h no need to type in css
    body.style.backgroundColor = e.target.id; 
}  
});
}); 
