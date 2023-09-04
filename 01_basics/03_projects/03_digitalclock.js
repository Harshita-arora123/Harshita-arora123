const clock = document.getElementById('clock')
//const clock = document.querySelector('#clock') // choose any one

 setInterval(function(){
     let date = new Date();
    //console.log(date.toLocaleTimeString);   // result show in console
    clock.innerHTML = date.toLocaleTimeString();// show digitally on document
 },1000);