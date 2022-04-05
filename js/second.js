var up=document.getElementById("press");
var done=document.getElementById("done");
up.onclick=function(){
    done.classList.toggle("active")
}



let images =["room1.jpg","room3.jpg","room2.jpg","main.jpg"]
let imag =document.getElementById("mainn");


   let interval= setInterval(function() {
        let random=Math.floor(Math.random()*images.length);
        console.log(images[random]);
        imag.style.backgroundImage='url("images/'+images[random]+'")';
        
    },1000)
